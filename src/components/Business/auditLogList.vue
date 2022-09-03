<template>
  <div class="auditLogList">
    <!-- 操作日志列表 -->
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" width="940px">
      <template #content>
        <!-- 审批流程 -->
        <ApprovalProcess :id="relationId" :auditLog="true" v-if="isShow" style="" />
      </template>
    </el-dialog-module>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { operationLogQueryPage } from '@/api/operationLog/index.js'
import ApprovalProcess from '@/components/ProcessPreview/approvalProcess.vue'

export default {
  name: 'auditLogList',
  components: { ApprovalProcess },
  setup() {
    const data = reactive({
      title: '审批流程',
      isShow: false,
      dialogButton: ['关闭', ''],
      form: {},
      relationId: 0
    })
    const list = reactive({ pageTotal: 0, tableData: [] })
    //初始化
    function init(row) {
      console.log('row', row)
      data.form = row
      data.relationId = data.form.id
      data.isShow = true
      // getList({ size: 1, current: 10 })
    }
    function getList(page) {
      operationLogQueryPage({ ...page, ...data.form }).then((res) => {
        if (res.code == 200) {
          list.tableData = res.data.records
          list.pageTotal = res.data.total
        } else {
          ElMessage.warning(res.message)
        }
      })
    }
    function onClose() {
      data.isShow = false
    }
    return {
      ...toRefs(data),
      ...toRefs(list),
      init,
      onClose,
      getList
    }
  }
}
</script>

<style lang="scss" scoped>
.auditLogList {
  :deep(.t16L24) {
    margin-top: 0 !important;
    padding-bottom: 20px !important;
  }
}
</style>
