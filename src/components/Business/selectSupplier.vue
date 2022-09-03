<template>
  <div class="supplier-item">
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :isFooter="false"
      @onSubmit="saveInfo"
      :closeOnClickModal="false"
      :dialogButton="['取消', '选择']"
      width="940px"
    >
      <template #content>
        <table-search @handleSearch="handleSearch">
          <template #search>
            <el-input placeholder="供应商名称" v-model="searchForm.keyWord"></el-input>
          </template>
        </table-search>
        <Table
          :tableData="tableData"
          :singleSelect="singleSelect"
          @selectedList="handleSelectionChange"
          ref="tableRef"
          :propsLabelList="propsLabelList"
          v-loading="loading"
          :saveBeforeData="true"
          rowidKey="oppositeCompanyName"
        >
        </Table>
      </template>
      <template v-slot:footer>
        <table-bottom style="margin: 0">
          <template v-slot:bottomLeft>
            <Pagenation @getList="getList" :page="page" :pageTotal="pageTotal"></Pagenation>
          </template>
          <template v-slot:bottomRight>
            <el-button @click="onClose">取消</el-button>
            <el-button @click="saveInfo" type="primary">选择</el-button>
          </template>
        </table-bottom>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
import { getLabel } from '@/utils/common.js'
import { useStore } from 'vuex'
export default {
  props: {
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const tableRef = ref()
    const store = useStore()
    const dicData = reactive({
      statusList: store.getters.filteredSystemDictList('CustomerStatusEnum')
    })
    const state = reactive({
      isShow: false,
      title: '选择供应商',
      loading: false,
      searchForm: {},
      pageTotal: 0,
      page: {},
      tableData: [],
      propsLabelList: [
        //   { prop: 'customerCode', label: '供应商编码' },
        { prop: 'oppositeCompanyName', label: '供应商名称', formatter: (row) => row.oppositeCompanyName || row.supplierName || '-' },
        { prop: 'cumulativeOrders', label: '累计订单数', formatter: (row) => row.cumulativeOrders || row.orderNum || 0 },
        { prop: 'status', label: '状态', formatter: (row) => getLabel(row.status, dicData.statusList) }
      ],
      selectData: [],
      ruleForm: {},
      echoCheckedData: [],
      //选择框回调
      handleSelectionChange: (val) => {
        state.selectData = val
      },
      filterList: [], //需要过滤的数据
      //初始化
      init(title, form, echoCheckedData, filterList) {
        console.log('filterList', filterList)
        state.tableData = []
        state.pageTotal = 0
        state.title = title
        state.ruleForm = form
        state.filterList = filterList ? filterList : []
        state.echoCheckedData = echoCheckedData //回显id集合
        state.initGet()
        state.isShow = true
        nextTick(() => {
          tableRef.value.clearSelection()
        })
      },
      handleSearch: (val) => {
        if (!val) {
          state.searchForm = {}
        }
        state.initGet()
      },
      initGet() {
        state.getList({ current: 1, size: 10 })
      },
      async getList(pageVal) {
        if (pageVal) {
          state.page = pageVal
        }
        try {
          state.loading = true
          const res = await state.ruleForm.interface({
            ...state.page,
            ...state.searchForm,
            ...state.ruleForm,
            tabPage: 0,
            oppositeType: 0,
            filerSuppliers: state.filterList.map((x) => x.companyId)
          })
          state.loading = false
          if (res.code === 200) {
            console.log(11111, res.data)
            state.pageTotal = res.data.total
            state.tableData = res.data.records
            state.echo()
            state.filterData()
          } else {
            ElMessage.warning(res.message)
          }
        } catch (e) {
          state.loading = false
        }
      },
      echo() {
        if (tableRef.value) {
          state.tableData.forEach((item) => {
            item.oppositeCompanyName = item.oppositeCompanyName || item.supplierName
            item.oppositeCompanyId = item.oppositeCompanyId || item.supplierId
            state.echoCheckedData.forEach((ele) => {
              //   if (item.customerId == ele) {
              //     tableRef.value.multipleTable.toggleRowSelection(item, true)
              //   }
              if (item.oppositeCompanyName == ele) {
                console.log(145, 'item-->', item)
                tableRef.value.multipleTable.toggleRowSelection(item, true)
              }
            })
          })
        }
      },
      onClose: () => {
        state.isShow = false
      },
      saveInfo: () => {
        emit('selectSupplierData', state.selectData)
        state.isShow = false
      },
      filterData() {
        let newArr = []
        state.filterList.forEach((item) => {
          newArr.push(item.companyId)
        })
        for (let companyId of newArr) {
          state.tableData = state.tableData.filter((item) => {
            // return companyId !== item.customerId
            return companyId !== item.oppositeCompanyId
          })
        }
      }
    })
    return {
      ...toRefs(state),
      tableRef
    }
  }
}
</script>
<style lang="scss">
.supplier-item {
  .pagenation-container {
    display: flex;
    justify-content: flex-end;
  }
  .dialog-visible .dialog-footer {
    border-top: 0;
  }
}
</style>
