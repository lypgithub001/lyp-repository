<!-- 加入公司审核 -->
<template>
  <div class="joinCompanyCheck" v-loading="loading">
    <div class="new-container">
      <!-- <HeaderTabs :headerTitle="'加入公司审核'">
        <template #headerTitleBottomContainer>
          <table-search @handleSearch="handleSearch">
            <template #search>
              <div class="search_single_size_big">
                <p>申请人姓名手机号码</p>
                <el-input v-model.trim="searchForm.keyword1" placeholder="搜索申请人姓名手机号"></el-input>
              </div>
              <div class="search_single_size_big">
                <p>操作人姓名手机号</p>
                <el-input v-model.trim="searchForm.keyword2" placeholder="搜索操作人姓名手机号"></el-input>
              </div>
              <div class="search_single_size_small">
                <p>状态</p>
                <el-select v-model="joinResult" placeholder="全部状态">
                  <el-option value="all" label="全部"></el-option>
                  <el-option value="0" label="待审核"></el-option>
                  <el-option value="1" label="已同意"></el-option>
                  <el-option value="2" label="已拒绝"></el-option>
                </el-select>
              </div>
              <div class="search_single_size_bigMost">
                <p>申请时间</p>
                <el-date-picker
                  v-model="createTime"
                  type="datetimerange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"
                ></el-date-picker>
              </div>
            </template>
          </table-search>
        </template>
      </HeaderTabs> -->

      <NewTableSearch headerTitle="加入公司审核" @handleSearch="handleSearch" :isShowMore="true" :conditionsNum="conditionsNum">
        <template #out>
          <FakeSelect
            title="状态"
            v-model:activeTab="joinResult"
            :optionList="[
              { name: '全部', id: 'all' },
              { name: '待审核', id: '0' },
              { name: '已同意', id: '1' },
              { name: '已拒绝', id: '2' }
            ]"
            @cbFn="handleSearch"
          />
          <!-- <div>
            <p>操作人姓名手机号</p>
            <el-input v-model.trim="searchForm.keyword2" placeholder="搜索操作人姓名手机号" @change="handleSearch" clearable></el-input>
          </div> -->
          <!-- <div class="search_single_size_small">
              <p>状态</p>
              <el-select v-model="joinResult" placeholder="全部状态">
                <el-option value="all" label="全部"></el-option>
                <el-option value="0" label="待审核"></el-option>
                <el-option value="1" label="已同意"></el-option>
                <el-option value="2" label="已拒绝"></el-option>
              </el-select>
            </div> -->
          <!-- <div>
            <p>申请时间</p>
            <el-date-picker
              v-model="createTime"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
              @change="handleSearch"
            ></el-date-picker>
          </div> -->
        </template>
        <template #more>
          <div>
            <p>操作人姓名手机号</p>
            <el-input v-model.trim="searchFormMore.keyword2" placeholder="搜索操作人姓名手机号" clearable></el-input>
          </div>
          <div>
            <p>申请时间</p>
            <el-date-picker
              v-model="searchFormMore.createTime"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
            ></el-date-picker>
          </div>
        </template>

        <template #input>
          <el-input v-model.trim="searchForm.keyword1" @change="handleSearch" clearable placeholder="搜索申请人姓名手机号">
            <template #prefix> <svg-icon name="input_search" /> </template>
          </el-input>
        </template>
        <template #selected>
          <div class="search_selected" v-for="item in moreSearchSelected" :key="item.label">
            <div class="left_text">
              <span class="label">{{ item.label }}</span>
              <span class="content"> {{ item.content }}</span>
            </div>
            <svg-icon class="pointer" name="search_close" @click="searchClose(item.dic)" />
          </div>
        </template>
      </NewTableSearch>
    </div>
    <companyCard :cardList="cardList" :statusList="statusList" />
    <BottomDetail style="margin: 19px 24px">
      <!-- <template #bottomLeft>213</template> -->
      <template #bottomRight>
        <Pagenation @getList="pageHandle" :pageTotal="pageTotal" v-show="cardList.length > 0"></Pagenation>
      </template>
    </BottomDetail>
    <el-empty v-show="!cardList.length > 0"></el-empty>
    <!-- 通过申请需要完善人员信息 -->
    <manManagement :treeData="treeData" ref="manRef" @getList="fetchData" />
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, computed, ref } from 'vue'
import companyCard from '../components/companyCard.vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { applyCompanyCheckList, agreeApplyJoinCompany, rejectJoinCompany } from '@/api/company/teamManager'
import { useStore } from 'vuex'
import { queryTree } from '@/api/systemManagement/organizationalStructure'
import manManagement from './components/manManagement.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'joinCompanyCheck',
  components: {
    companyCard,
    manManagement
  },
  setup() {
    let store = useStore()
    const route = useRoute()
    let state = reactive({
      searchFormMore: {},
      conditionsNum: 0,
      moreSearchSelected: [],
      createTime: [],
      joinResult: 'all',
      searchForm: {}, // 搜索
      page: { current: 1, size: 10 },
      pageTotal: 0,
      cardList: [],
      statusList: [
        {
          label: '待确认',
          value: 0,
          class: 'pending'
        },
        {
          value: 1,
          class: 'agreed',
          label: '已同意'
        },
        {
          value: 2,
          class: 'refused',
          label: '已拒绝'
        },
        {
          value: 3,
          class: 'expired',
          label: '已过期'
        }
      ],
      loading: false
    })

    // 搜索
    function handleSearch(e) {
      if (!e) {
        //   state.searchForm = {}
        //   state.createTime = []
        //   state.joinResult = 'all'
        //   state.page = { current: 1, size: 10 }
        state.searchFormMore = {}
      }
      if (state.searchFormMore.createTime?.length) {
        state.searchForm.createTimeBegin = state.searchFormMore.createTime[0]
        state.searchForm.createTimeEnd = state.searchFormMore.createTime[1]
      } else {
        state.searchForm.createTimeBegin = null
        state.searchForm.createTimeEnd = null
      }
      state.searchForm.keyword2 = state.searchFormMore.keyword2
      fetchData()
      moreSearchSelectedFn()
    }

    // 搜索条件已选 close
    function searchClose(key) {
      state.searchFormMore[key] = null
      handleSearch(1)
      moreSearchSelectedFn()
    }

    // 处理选中更多展示到外面
    function moreSearchSelectedFn() {
      let temp = [],
        count = 0

      const dic = {
        createTime: '申请时间',
        keyword2: '操作人姓名手机号'
      }
      for (let key in state.searchFormMore) {
        if (state.searchFormMore[key] || state.searchFormMore[key] === 0) {
          if (key === 'createTime') {
            temp.push({
              dic: key,
              label: dic[key],
              content: `${state.searchFormMore[key][0]} ~ ${state.searchFormMore[key][1]}`
            })
          }
          if (key === 'keyword2') {
            temp.push({
              dic: key,
              label: dic[key],
              content: `${state.searchFormMore[key]}`
            })
          }
          count++
        }
      }
      state.conditionsNum = count
      console.log(1111111111, temp)
      state.moreSearchSelected = temp
    }

    // 分页
    const pageHandle = (data) => {
      // 分页查询
      state.page = data
      fetchData()
    }
    //同意取消操作
    const open = (tipText, record, type) => {
      if (type == 'agree') {
        manRef.value.init('add', record, treeData.value)
      } else {
        ElMessageBox.confirm(tipText, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            rejectJoinCompany({
              id: record.id
            }).then((res) => {
              if (res.code == 200) {
                ElMessage({
                  type: 'success',
                  message: '操作成功'
                })
                fetchData()
              } else {
                ElMessage.warning(res.message)
              }
            })
          })
          .catch(() => {})
      }
    }

    // 获取 list 数据
    const fetchData = async () => {
      console.log('fetchData')
      state.loading = true
      // console.log(store.getters.teamInfoObj()?.id)

      state.searchForm.joinResult = state.joinResult
      if (state.searchForm.joinResult == 'all') {
        state.searchForm.joinResult = null
      }

      await applyCompanyCheckList({
        ...state.page,
        //   assignTeamId: store.getters.teamInfoObj()?.id,
        ...state.searchForm
      })
        .then((res) => {
          console.log(res)
          let temp = []
          res.data.records.forEach((item, i) => {
            //   processed: true, statue: 1, 已处理
            if (item.joinResult === 0) {
              item.btnList = [
                {
                  label: '拒绝',
                  class: '',
                  click: () => open('是否确定拒绝加入?', item, 'reject')
                },
                {
                  label: '同意',
                  type: 'primary',
                  class: '',
                  click: () => open('是否同意加入该公司/团队?', item, 'agree')
                }
              ]
            }
            temp.push({
              status: item.joinResult,
              user: item.name,
              title: `${item.name} (${item.phone})申请加入【<span style="color: #1664FF;">${item.applyDepartment}</span>】,职位【<span style="color: #1664FF;">${item.employeeJob}</span>】`,
              description: `<span style="margin-right:20px">申请时间：${item.createTime}</span>      申请说明：${item.applyDescribe}`,
              statement: `<span style="color: #B5B5BD;">${item.approveName} <span style="color:#1664FF">${
                item.updateTime || item.createTime
              }</span> 操作</span>`,
              btnList: item.btnList || []
            })
          })
          state.cardList = temp
          state.pageTotal = res?.data?.total
        })
        .finally(() => {
          state.loading = false
        })
    }
    const manRef = ref()
    const treeData = ref([])
    //  获取组织架构树
    const getTree = async () => {
      try {
        let res = await queryTree()
        if (res.code === 200) {
          treeData.value = res.data
        } else {
          ElMessage.error(res.message)
        }
      } catch (error) {}
    }

    onMounted(() => {
      state.joinResult = route.query.activeName ?? 'all'
      getTree()
      fetchData()
    })

    return {
      ...toRefs(state),
      pageHandle,
      manRef,
      treeData,
      handleSearch,
      fetchData,
      searchClose
    }
  }
}
</script>

<style scoped lang="scss">
.joinCompanyCheck {
  :deep(.el-loading-mask) {
    min-height: calc(100vh - 120px);
  }
  :deep(.sreach_container) {
    margin-bottom: 0;
  }
}
</style>
