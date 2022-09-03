<template>
  <div class="sealManagement" v-loading="loading">
    <div class="new-container" v-if="isOrgAuth || hasAuth" style="margin-bottom: 10px">
      <NewTableSearch :headerTitle="headerTitle" :isShowMore="false"></NewTableSearch>
      <div style="padding-bottom: 20px">
        <el-select v-model="chooseCompanyId" placeholder="请选择要认证公司" @change="changeCompany" style="width: 295px">
          <el-option v-for="(item, index) in companyList" :label="item.name" :value="item.id" :key="index"> </el-option>
        </el-select>
      </div>
    </div>
    <div class="sealManagement-authentication" v-if="isOrgAuth || hasAuth">
      <div class="flex-between s_content" v-if="isOrgAuth && finish">
        <div class="s_left">
          <div class="s_left_h">还没有完成公司认证</div>
          <div class="s_left_p">
            <p>管理公司印章以及用印负责人。进行用印管理前请先完成相关</p>
            <p>人员个人认证以及公司认证。</p>
          </div>
          <table-bottom>
            <template v-slot:bottomLeft>
              <el-button size="mini" type="primary" @click="logicHandle('go')" v-if="isOrgAuth">前往认证</el-button>
            </template>
          </table-bottom>
        </div>
        <div class="s_right">
          <svg-icon name="authentication" width="400px" height="286px" />
        </div>
      </div>
      <div class="flex-between s_content" v-if="hasAuth">
        <div class="s_left">
          <div class="s_left_h">还没有完成印章授权</div>
          <div class="s_left_p">
            <p>管理公司印章以及用印负责人。进行用印管理前请先完成相关</p>
            <p>印章授权。</p>
          </div>
          <table-bottom>
            <template v-slot:bottomLeft>
              <el-button size="mini" type="primary" @click="logicHandle('authorization')" v-if="hasAuth">前往授权</el-button>
            </template>
          </table-bottom>
        </div>
        <div class="s_right">
          <svg-icon name="authentication" width="400px" height="286px" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="new-container" v-loading="loading">
        <NewTableSearch :headerTitle="headerTitle" :conditionsNum="conditionsNum" @handleSearch="handleSearch">
          <template #header_bottom>
            <el-select v-model="chooseCompanyId" placeholder="请选择要认证公司" @change="changeCompany" style="width: 295px">
              <el-option v-for="(item, index) in companyList" :label="item.name" :value="item.id" :key="index"> </el-option>
            </el-select>
          </template>
          <template #out>
            <FakeSelect title="全部类型" v-model:activeTab="searchForm.type" :optionList="sealTypeList" @cbFn="init" />
            <FakeSelect title="全部状态" v-model:activeTab="searchForm.status" :optionList="statusList" @cbFn="init" />
          </template>
          <template #more>
            <div>
              <p>公司名称</p>
              <el-input v-model.trim="searchFormMore.companyName" clearable @change="init" placeholder="搜索公司名称"> </el-input>
            </div>
          </template>
          <template #input>
            <el-input v-model.trim="searchForm.name" clearable @change="init" placeholder="搜索印章名称">
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

        <Table :tableData="tableData" :showSelect="false" ref="tableRef">
          <template #column>
            <el-table-column label="印章预览" prop="type" show-overflow-tooltip>
              <template #default="scope">
                <el-image
                  :src="scope.row.imageUrl"
                  style="width: 60px; height: 60px"
                  :preview-src-list="[scope.row.imageUrl]"
                  :appendToBody="true"
                  :z-index="3000"
                  fit="cover"
                />
              </template>
            </el-table-column>
            <el-table-column label="印章名称" prop="name" show-overflow-tooltip> </el-table-column>
            <el-table-column label="印章公司" prop="companyName" show-overflow-tooltip> </el-table-column>
            <el-table-column label="印章类型" prop="name" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ getLabel(scope.row.type, sealTypeList) }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="是否默认" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.isDefault ? '是' : '否' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="状态" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ getLabel(scope.row.status, statusList) }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="授权人数" prop="authNumber" show-overflow-tooltip> </el-table-column>
            <el-table-column label="操作" width="140px">
              <template #default="scope">
                <TableBtn :btnList="getBtnList(scope.row)" />
              </template>
            </el-table-column>
          </template>
        </Table>
      </div>
      <table-bottom>
        <template v-slot:bottomLeft>
          <el-button size="mini" type="primary" @click="logicHandle('add')">
            <i class="el-icon-plus"></i>
            新增
          </el-button>
        </template>
        <template v-slot:bottomRight>
          <Pagenation @getList="getList" :page="page" :pageTotal="pageTotal"></Pagenation>
        </template>
      </table-bottom>
    </div>
    <AddAuthor ref="AddAuthorRef" />
    <Authorization ref="authorizationRef" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getLabel } from '@/utils/common.js'
import { ElMessageBox, ElMessage } from 'element-plus'
import AddAuthor from '@/views/company/basisSetting/sealManagement/components/addAuthor.vue'
import { orgCertificationInfoQueryDetails } from '@/api/company/companyCertification.js'
import { sealInfoQueryPage, sealInfoDelete, eCompanyAuthQueryDetails } from '@/api/company/basisSetting/sealManagement.js'
import Authorization from '@/views/company/basisSetting/sealManagement/components/authorization.vue'
import { queryCompanyList } from '@/api/company/companyCertification.js'

export default {
  name: 'company-basisSetting-sealManagement',
  props: {},
  components: { AddAuthor, Authorization },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const AddAuthorRef = ref()
    const authorizationRef = ref()

    onMounted(() => {
      state.getTeamList()
    })
    const dicData = reactive({
      //状态
      statusList: [{ name: '全部状态', id: undefined }].concat(store.getters.filteredSystemDictList('SealStatusEnum')),
      //印章类型
      sealTypeList: [{ name: '全部类型', id: undefined }].concat(store.getters.filteredSystemDictList('SealTypeEnum')),
      companyList: []
    })
    const state = reactive({
      chooseCompanyId: '',
      chooseCompanyName: '',
      conditionsNum: 0,
      moreSearchSelected: [],
      searchFormMore: {},
      //以上是newTableSearch参数
      loading: false,
      tableData: [],
      headerTitle: '印章管理',
      searchForm: {},
      getLabel,

      moreSearchSelectedFn() {
        let temp = [],
          count = 0

        const dic = {
          companyName: '公司名称'
        }
        for (let key in state.searchFormMore) {
          if (state.searchFormMore[key] || state.searchFormMore[key] === 0) {
            temp.push({
              dic: key,
              label: dic[key],
              content: state.searchFormMore[key]
            })
            count++
          } else {
          }
        }
        state.conditionsNum = count
        state.moreSearchSelected = temp
      },
      // 搜索条件已选 close
      searchClose(key) {
        state.searchFormMore[key] = null
        state.handleSearch(1)
        state.moreSearchSelectedFn()
      },
      handleSearch(v) {
        if (!v) {
          //清空
          // state.searchForm = {}
          state.searchFormMore = {}
        }
        if (state.searchFormMore.companyName) {
          state.searchForm.companyName = state.searchFormMore.companyName
        } else {
          state.searchForm.companyName = ''
        }
        for (const key in state.searchForm) {
          if (state.searchForm[key] === '') {
            delete state.searchForm[key]
          }
        }
        state.init()
        state.moreSearchSelectedFn()
      },
      page: {},
      pageTotal: 0,
      init() {
        state.page = {
          size: 10,
          current: 1
        }
        state.getList()
      },
      async getList(pageVal) {
        if (pageVal) {
          state.page = pageVal
        }
        try {
          state.loading = true
          state.tableData = []
          const res = await sealInfoQueryPage({ ...state.page, ...state.searchForm, companyId: state.chooseCompanyId })
          state.loading = false
          if (res.code === 200) {
            state.tableData = res.data.records
            state.pageTotal = res.data.total
          } else {
            ElMessage.warning(res.message)
          }
        } catch (e) {
          state.loading = false
        }
      },
      selectData: [],
      logicHandle(val, row) {
        state.selectData = [row]
        let path = ''
        if (route.path == '/market/company/basisSetting/sealManagement') {
          path = '/market'
        }
        switch (val) {
          case 'view': //浏览
            router.push({
              path: path + '/company/basisSetting/addSeal',
              query: { type: 'view', id: state.selectData[0].id, companyId: state.chooseCompanyId }
            })
            break
          case 'add': //新增
            router.push({ path: path + '/company/basisSetting/addSeal', query: { type: 'add', companyId: state.chooseCompanyId } })
            break
          case 'edit': //修改
            router.push({ path: path + '/company/basisSetting/addSeal', query: { type: 'edit', id: state.selectData[0].id, companyId: state.chooseCompanyId } })
            break
          case 'del': //删除
            ElMessageBox.confirm('确定删除吗？', '提示', {
              type: 'warning'
            })
              .then(async () => {
                // 获取数据
                try {
                  const res = await sealInfoDelete(state.selectData[0].id)
                  if (res.code === 200) {
                    ElMessage.success('删除成功')
                    state.getList()
                  } else {
                    ElMessage.warning(res.message)
                  }
                } catch (e) {}
              })
              .catch(() => {})
            break
          case 'Rforce': //重新生效
            ElMessageBox.confirm('是否确定重置为启用状态？', '提示', {
              type: 'warning'
            })
              .then(async () => {
                // 获取数据
                try {
                  const res = await applyInfoRevoke(state.selectData[0].id)
                  if (res.code === 200) {
                    ElMessage.success('删除成功')
                    state.getList()
                  } else {
                    ElMessage.warning(res.message)
                  }
                } catch (e) {}
              })
              .catch(() => {})
            break
          case 'addAuthor': //新增授权
            AddAuthorRef.value.init('add', { sealId: row.id, name: row.name, companyId: row.companyId })
            break
          case 'viewAuthor': //查看授权
            router.push({ path: path + '/company/basisSetting/authorizationManagement', query: { sealId: row.id, name: row.name } })
            break
          case 'go':
            router.push({ path: path + '/company/companyCertification', query: { companyId: state.chooseCompanyId } })
            break
          case 'authorization':
            authorizationRef.value.init(state.chooseCompanyId)
            break
        }
      },
      getBtnList(row) {
        return [
          {
            label: '浏览',
            hasRole: [],
            click: () => {
              state.logicHandle('view', row)
            },
            hasRole: []
          },
          //  {
          //    label: '编辑',
          //    hasRole: [],
          //    click: () => {
          //      state.logicHandle('edit', row)
          //    },
          //    hasRole: []
          //  },
          {
            label: '删除',
            hasRole: [],
            click: () => {
              state.logicHandle('del', row)
            },
            hasRole: []
          },
          //  {
          //    label: '重新生效',
          //    hasRole: [],
          //    click: () => {
          //      state.logicHandle('Rforce', row)
          //    },
          //    hasRole: []
          //  },
          {
            label: '新增授权',
            hasRole: [],
            click: () => {
              state.logicHandle('addAuthor', row)
            },
            hasRole: []
          },
          {
            label: '查看授权',
            hasRole: [],
            click: () => {
              state.logicHandle('viewAuthor', row)
            },
            hasRole: []
          }
        ]
      },
      isOrgAuth: true,
      hasAuth: false,
      finish: false,
      async getOrgStatus(rootOrgId) {
        try {
          state.isOrgAuth = true
          state.loading = true
          let res = await orgCertificationInfoQueryDetails(rootOrgId)
          state.loading = false
          if (res.code === 200) {
            if (res.data.status === 'SUCCESS') {
              state.isOrgAuth = false
              state.hasAuth = false
              state.init()
            } else {
              state.isOrgAuth = true
            }
          } else {
            ElMessage.warning(res.message)
          }
          state.finish = true
        } catch (error) {
          state.loading = false
          state.finish = true
        }
      },
      //查询团队公司列表
      async getTeamList() {
        try {
          let res = await queryCompanyList()
          if (res.code === 200) {
            dicData.companyList = res.data
            if (dicData.companyList?.length) {
              //获取主公司认证状态
              state.chooseCompanyId = dicData.companyList[0].id
              state.getOrgStatus(state.chooseCompanyId)
            }
          }
        } catch (error) {}
      },
      changeCompany() {
        state.getOrgStatus(state.chooseCompanyId)
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      AddAuthorRef,
      authorizationRef
    }
  }
}
</script>
 

<style scoped lang="scss">
.sealManagement {
  .sealManagement-authentication {
    background: #ffffff;
    border-radius: 2px;
    height: calc(100vh - 260px);
    position: relative;
    .s_content {
      width: 863px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .s_left_h {
      margin-bottom: 20px;
      color: #1d2129;
      font-family: 'siyuan, siyuan-Regular';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 40px;
    }
    .s_left_p {
      p {
        width: 383px;
        font-family: 'siyuan, siyuan-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #1d2129;
      }
    }
    :deep(.main-bottom) {
      padding: 0;
      margin-top: 70px;
    }
  }
}
</style>
