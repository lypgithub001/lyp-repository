<template>
  <div class="authorizationManagement">
    <div>
      <HeaderTabs :headerTitle="headerTitle">
        <template v-slot:rightContainer> </template>
      </HeaderTabs>
      <div class="new-container" v-loading="loading">
        <table-search @handleSearch="handleSearch">
          <template #search>
            <div>
              <p>姓名</p>
              <el-input v-model.trim="searchForm.userName" @change="init" placeholder="搜索姓名"></el-input>
            </div>
          </template>
        </table-search>
        <Table :tableData="tableData" :showSelect="false" ref="tableRef">
          <template #column>
            <el-table-column label="授权对象" prop="userName" show-overflow-tooltip> </el-table-column>
            <el-table-column label="有效期" show-overflow-tooltip width="300">
              <template #default="scope">
                <div class="scope_div">{{ scope.row.beginTime }} - {{ scope.row.endTime }}</div>
              </template>
            </el-table-column>
            <el-table-column label="备注" prop="remarks" show-overflow-tooltip> </el-table-column>
            <el-table-column label="状态" prop="updateByName" show-overflow-tooltip>
              <template #default="scope">
                {{ getLabel(scope.row.status, statusList) }}
              </template>
            </el-table-column>
            <el-table-column label="编辑人" prop="updateName" show-overflow-tooltip> </el-table-column>
            <el-table-column label="编辑时间" prop="updateTime" show-overflow-tooltip> </el-table-column>
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
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getLabel } from '@/utils/common.js'
import { ElMessageBox, ElMessage } from 'element-plus'
import AddAuthor from '@/views/company/basisSetting/sealManagement/components/addAuthor.vue'
import { sealAuthRecordQueryPage, sealAuthRecordDelete } from '@/api/company/basisSetting/sealManagement.js'

export default {
  name: 'company-basisSetting-authorizationManagement',
  props: {},
  components: { AddAuthor },
  setup() {
    const router = useRouter()
    const store = useStore()
    const AddAuthorRef = ref()
    const route = useRoute()
    onMounted(() => {
      state.init()
    })
    const dicData = reactive({
      statusList: store.getters.filteredSystemDictList('SealAuthStatusEnum')
    })
    const state = reactive({
      loading: false,
      tableData: [],
      headerTitle: '授权管理',
      searchForm: {},
      getLabel,
      handleSearch(v) {
        if (!v) {
          //清空
          state.searchForm = {}
        }
        for (const key in state.searchForm) {
          if (state.searchForm[key] === '') {
            delete state.searchForm[key]
          }
        }
        state.init()
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
          const res = await sealAuthRecordQueryPage({ ...state.page, ...state.searchForm, sealId: route.query.sealId })
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
      logicHandle(val, row = {}) {
        state.selectData = [row]
        switch (val) {
          case 'add': //新增
            row.sealId = route.query.sealId
            row.name = route.query.name
            AddAuthorRef.value.init(val, row)
            break
          case 'edit': //修改
            AddAuthorRef.value.init(val, row)
            break
          case 'del': //删除
            ElMessageBox.confirm('确定删除吗？', '提示', {
              type: 'warning'
            })
              .then(async () => {
                // 获取数据
                try {
                  const res = await sealAuthRecordDelete(state.selectData[0].id)
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
        }
      },
      getBtnList(row) {
        return [
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
          }
        ]
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      AddAuthorRef
    }
  }
}
</script>
 

<style scoped lang="scss">
.sealManagement {
}
</style>
