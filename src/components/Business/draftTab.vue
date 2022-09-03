<template>
  <div>
    <div class="new-container" style="padding: 0" v-loading="loading">
      <div style="margin: 20px 0" class="input">
        <el-input v-model.trim="searchForm.title" @change="init" clearable placeholder="搜索标题">
          <template #prefix> <svg-icon name="input_search" /> </template>
        </el-input>
      </div>
      <Table :tableData="tableData" :showSelect="false" ref="tableRef" :showIndex="false" :propsLabelList="column">
        <template #operate>
          <el-table-column label="操作" width="180px">
            <template #default="scope">
              <TableBtn :btnList="getBtnList(scope)" />
            </template>
          </el-table-column>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getLabel } from '@/utils/common.js'
import { ElMessageBox, ElMessage } from 'element-plus'
import { draftInfoQueryPage, draftInfoDelete } from '@/api/draft/index.js'

export default {
  name: 'draftTab',
  components: {},
  props: {
    type: Array,
    default: []
  },
  setup(props, { emit }) {
    const router = useRouter()
    const state = reactive({
      loading: false,
      column: [
        // 表头data
        { prop: 'title', label: '采购标题', isImportant: true }
      ],
      tableData: [],
      searchForm: {
        types: props.type
      },
      page: {},
      init() {
        state.page = {
          size: 10,
          current: 1
        }
        state.getList()
      },
      async getList(pageVal) {
        if (pageVal) {
          state.page = {
            size: pageVal.size,
            current: pageVal.current
          }
        }
        try {
          state.loading = true
          state.tableData = []
          const res = await draftInfoQueryPage({ ...state.page, ...state.searchForm })
          state.loading = false
          if (res.code === 200) {
            state.tableData = res.data.records
            state.page.pageTotal = res.data.total
            emit('getPage', state.page)
          } else {
            ElMessage.warning(res.message)
          }
        } catch (e) {
          state.loading = false
        }
      },
      getBtnList(scope) {
        return [
          {
            label: '编辑',
            click: () => {
              state.logicHandle('edit', scope.row)
            }
          },
          {
            label: '删除',
            click: () => {
              state.logicHandle('del', scope.row)
            }
          }
        ]
      },
      logicHandle(val, row) {
        switch (val) {
          case 'edit': //修改
            let path =
                row.type == 0
                  ? '/purchase/addPurchaseApply'
                  : row.type == 2
                  ? '/purchase/addPurchasePlan'
                  : row.type == 3
                  ? '/purchase/addPurchaseOrder'
                  : row.type == 4
                  ? '/purchase/AddPurchaseConsult'
                  : row.type == 5
                  ? '/purchase/generateOrder'
                  : '',
              type = 'add'
            if (row.type == 5) {
              type = 'create'
            }
            router.push({ path: path, query: { type: type, draftId: row.id } })
            break
          case 'del': //删除
            ElMessageBox.confirm('确定删除吗？', '提示', {
              type: 'warning'
            })
              .then(async () => {
                // 获取数据
                try {
                  const res = await draftInfoDelete(row.id)
                  if (res.code === 200) {
                    ElMessageBox.close(false)
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
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 340px;
  margin-right: 30px;
  position: relative;
  border: none;
  padding-left: 0;
  :deep(.el-input__inner) {
    border: none;
    border-radius: 2px;
    padding: 0 0 0 10px;
    color: #4e5969;
    background-color: #f7f8fa;
    line-height: 33px;
    padding-left: 30px;
  }
  input {
    background-color: #f7f8fa;

    &::-webkit-input-placeholder {
      color: #c9cdd4;
      font-size: 14px;
      font-weight: normal;
    }
  }
  .el-input__prefix {
    left: 8px;
  }
  .svg-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
