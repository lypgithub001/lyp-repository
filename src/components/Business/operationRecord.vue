<template>
  <el-dialog-module title="操作日志查看" width="980px" :isShow="visible" :isFooter="false" :dialogButton="['', '']" @onClose="closeHandle">
    <template #content>
      <div class="container">
        <Table v-loading="loading" :propsLabelList="column" :tableData="tableData" :showSelect="false"> </Table>
      </div>
    </template>
    <template v-slot:footer>
      <table-bottom style="margin: 0">
        <template v-slot:bottomLeft>
          <el-button size="mini" @click="closeHandle">取消</el-button>
        </template>
        <template v-slot:bottomRight>
          <Pagenation @getList="pageHandle" :pageTotal="pageTotal"></Pagenation>
        </template>
      </table-bottom>
    </template>
  </el-dialog-module>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { operationLogQueryPage } from '@/api/operationLog/index.js'
import { getLabel } from '@/utils/common.js'
import { useStore } from 'vuex'
const store = useStore()
const dicData = reactive({
  logTypeList: store.getters.filteredSystemDictList('LogTypeEnum')
})
const column = [
  //   { prop: 'logType', label: '操作类型', formatter: (row) => getLabel(row.logType, dicData.logTypeList) },
  { prop: 'logContent', label: '操作内容', formatter: (row) => row.logContent || '-' },
  { prop: 'logUserName', label: '操作人', formatter: (row) => row.logUserName || '-' },
  { prop: 'logTime', label: '操作时间', formatter: (row) => row.logTime || '-' }
]

const visible = ref(false) // 表格loading
const objInfo = ref({}) //列表对象
const businessType = ref(null) //业务类型
function init(e, type) {
  objInfo.value = e
  businessType.value = type
  getData(e.id, type)
  visible.value = true
}

// 表格业务
const tableData = ref([]),
  loading = ref(false), // 表格loading
  pageTotal = ref(0)
async function getData(businessId, logType) {
  loading.value = true
  //   获取表格数据
  try {
    const res = await operationLogQueryPage({
      businessId,
      logType,
      ...page.value
    })
    if (res.code === 200) {
      tableData.value = res.data.records
      pageTotal.value = res.data.total
    } else {
      ElMessage.error(res.message)
    }
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error)
  }
}

// 分页业务
const page = ref({
  current: 1,
  size: 10
})
function pageHandle(data) {
  // 分页查询
  page.value = data
  getData(objInfo.value.id, businessType.value)
}

function closeHandle() {
  page.value = {
    current: 1,
    size: 10
  }
  visible.value = false
}

defineExpose({
  init
})
</script>
<style scoped lang="scss"></style>
