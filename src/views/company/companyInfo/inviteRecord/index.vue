<!-- inviteRecord -->
<template>
  <div class="inviteRecord" v-loading="loading">
    <!-- <HeaderTabs :headerTitle="'成员邀请记录'">
      <template #headerTitleBottomContainer>
        <table-search @handleSearch="handleSearch">
          <template #search>
            <div>
              <p>被邀请人姓名</p>
              <el-input v-model.trim="searchForm.name" placeholder="搜索被邀请人姓名"></el-input>
            </div>
            <div class="search_single_size_big">
              <p>被邀请人手机号码</p>
              <el-input v-model.trim="searchForm.phone" placeholder="搜索邀请人手机号码"></el-input>
            </div>
            <div class="search_single_size_big">
              <p>邀请时间</p> 
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
            <div class="search_single_size_small">
              <p>状态</p>
              <el-select v-model="searchForm.joinResult" placeholder="全部状态" @change="handleJoinResultSelected"> 
                <el-option value="0" label="待确定"></el-option>
                <el-option value="1" label="已同意"></el-option>
                <el-option value="2" label="已拒绝"></el-option>
                <el-option value="3" label="已过期"></el-option>
              </el-select>
            </div>
          </template>
        </table-search>
      </template>
    </HeaderTabs> -->
    <div class="new-container">
      <NewTableSearch headerTitle="成员邀请记录" @handleSearch="handleSearch" :isShowMore="true" :conditionsNum="conditionsNum">
        <template #out>
          <FakeSelect
            title="状态"
            v-model:activeTab="searchForm.joinResult"
            :optionList="[
              { name: '全部状态', id: 'all' },
              { name: '待确定', id: '0' },
              { name: '已同意', id: '1' },
              { name: '已拒绝', id: '2' },
              { name: '已过期', id: '3' }
            ]"
            @cbFn="handleJoinResultSelected"
          />
          <!-- <div>
            <p>被邀请人手机号码</p>
            <el-input v-model.trim="searchForm.phone" placeholder="搜索邀请人手机号码" @change="handleSearch" clearable></el-input>
          </div>
          <div>
            <p>邀请时间</p>
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
            <p>被邀请人手机号码</p>
            <el-input v-model.trim="searchFormMore.phone" placeholder="搜索邀请人手机号码" clearable></el-input>
          </div>
          <div>
            <p>邀请时间</p>
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
          <el-input v-model.trim="searchForm.name" @change="handleSearch" clearable placeholder="搜索被邀请人姓名">
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

    <companyCard :cardList="cardList" :statusList="statusList" style="cursor: pointer" />
    <el-empty v-show="!cardList.length > 0" description="暂无数据"></el-empty>
    <BottomDetail v-show="cardList.length > 0" style="margin: 19px 24px">
      <!-- <template #bottomLeft>213</template> -->
      <template #bottomRight>
        <Pagenation @getList="pageHandle" :pageTotal="pageTotal"></Pagenation>
      </template>
    </BottomDetail>
    <detail-dialog title="邀请详情" :isShow="isShow" ref="detailRef" width="600px"></detail-dialog>
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted } from 'vue'
import companyCard from '../components/companyCard.vue'
import DetailDialog from './components/detailDialog.vue'
import { teamInviteList } from '@/api/company/teamManager.js'
import { ElMessage } from 'element-plus'

export default {
  name: 'inviteRecord',
  components: {
    companyCard,
    DetailDialog
  },
  setup() {
    let state = reactive({
      searchFormMore: {},
      conditionsNum: 0,
      moreSearchSelected: [],
      createTime: [],
      searchForm: {
        joinResult: 'all'
      }, // 搜索
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
      loading: false,
      isShow: false,
      detailRef: ref(null)
    })
    // 搜索
    function handleSearch(v) {
      console.log(v)
      if (!v) {
        //   state.searchForm = {}
        //   state.createTime = []
        //   state.page = { current: 1, size: 10 }
        state.searchFormMore = {}
      }
      if (state.searchFormMore.createTime?.length) {
        state.searchForm.startTime = state.searchFormMore.createTime[0]
        state.searchForm.endTime = state.searchFormMore.createTime[1]
      } else {
        state.searchForm.startTime = null
        state.searchForm.endTime = null
      }
      state.searchForm.phone = state.searchFormMore.phone
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
        createTime: '邀请时间',
        phone: '被邀请人手机号码'
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
          if (key === 'phone') {
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

    //  判断是否过期
    const isExpired = (val) => {
      // 当前时间
      let currentTime = new Date().valueOf()
      // 过期时间
      let expiredTime = new Date(val.expirationTime.replace(/-/g, '/')).valueOf()
      // console.log(expiredTime - currentTime)
      if (expiredTime >= currentTime) {
        // 没过期
        return false
      } else {
        // 过期了
        return true
      }
    }

    // 获取 list 数据
    const fetchData = () => {
      console.log(1111)
      state.loading = true
      let params = JSON.parse(JSON.stringify(state.searchForm))
      if (params.timeout) {
        params.joinResult = 0
      }
      if (params.joinResult == 'all') {
        params.joinResult = null
      }
      teamInviteList({ ...state.page, ...params })
        .then((res) => {
          console.log(269, res)
          state.pageTotal = res.data?.total
          if (res.code == 200) {
            let temp = []
            res.data.records.forEach((item, i) => {
              if (item.joinResult == 0) {
                if (isExpired(item)) {
                  //  过期了
                  item.joinResult = 3
                }
              }
              console.log(1212, item)
              temp.push({
                status: item.joinResult,
                // user: item.name,
                title: `${item.inviterName} (<span style="margin-right:16px;">${item.inviterOrgNames}</span> ${item.inviterEmployeeJob}) `,
                // description: `于${item.createTime}邀请【${item.name}】(${item.phone})加入【${item.orgNames}】`,
                description: `邀请【${item.name}】(${item.phone})加入 <span style="margin-right:16px;color:#1664FF">【${item.orgNames}】</span>`,
                statement: `邀请时间: ${item.createTime}`,
                // statement: `<span style="color: #B5B5BD;">${item.inviterName} <span style="color:#1664FF">${item.createTime}</span> 操作</span>`,
                btnList: item.btnList || [],
                click: () => showDetailDialog(item)
              })
            })
            state.cardList = temp
          } else {
            ElMessage.warning(res.message)
          }
        })
        .finally(() => {
          state.loading = false
        })
    }
    const showDetailDialog = (item) => {
      state.isShow = true
      state.detailRef.showConfirm(state.isShow, item)
    }

    const handleJoinResultSelected = (val) => {
      console.log(val)
      if (val.id == 0) {
        state.searchForm.timeout = false
      } else if (val.id == 3) {
        state.searchForm.timeout = true
      } else {
        delete state.searchForm.timeout
      }
      handleSearch()
    }

    onMounted(() => {
      fetchData()
    })
    return {
      ...toRefs(state),
      handleJoinResultSelected,
      handleSearch,
      pageHandle,
      searchClose
    }
  }
}
</script>

<style scoped lang="scss">
.inviteRecord {
  :deep(.el-loading-mask) {
    min-height: calc(100vh - 120px);
  }
  //   :deep(.searchTeam .infinite-list .companyCard) {
  //     margin-left: 0 !important;
  //     margin-right: 0 !important;
  //   }
}
</style>
