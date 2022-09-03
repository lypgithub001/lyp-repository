<template>
  <div>
    <div class="container">
      <Table :tableData="solutionList" ref="tableRef" @selectedList="handleSelectionChange" v-loading="loading" :showSelect="true">
        <template #column>
          <el-table-column label="解决方案名称" show-overflow-tooltip>
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.name || '-' }}
              </div>
            </template>
          </el-table-column>
          <!-- <el-table-column label="应用系统" show-overflow-tooltip>
            <template #default="scope">
              <div class="scope_div">
                {{ getLabel(scope.row.subSystem, subSystem) || '-' }}
              </div>
            </template>
          </el-table-column> -->
          <el-table-column label="用户类型" show-overflow-tooltip>
            <template #default="scope">
              <div class="scope_div">
                {{ getLabel(scope.row.solutionType, solutionType) || '-' }}
              </div>
            </template>
          </el-table-column>
        </template>
      </Table>
      <table-bottom>
        <template #bottomLeft>
          <el-button size="mini" class="blue-button" @click="handleBtn(1)" :disabled="selectData.length !== 1">浏 览</el-button>
          <el-button size="mini" @click="handleBtn(2)" :disabled="selectData.length > 1">新增</el-button>
          <el-button size="mini" @click="handleBtn(3)" :disabled="selectData.length !== 1">编辑</el-button>
          <el-button size="mini" class="red-button" @click="handleBtn(4)" :disabled="selectData.length !== 1">删 除</el-button>
        </template>
        <template #bottomRight> </template>
      </table-bottom>
    </div>
    <solutionOperation :title="title" ref="auditSolution" @getList="getModuleSolutionList" />
  </div>
</template>

<script setup>
import { moduleSolutionList, moduleSolutionDel } from '@/api/moduleManagement/solutionManagement'
import { ref, onMounted, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import solutionOperation from './components/solutionOperation.vue'
import { useStore } from 'vuex'
import { getLabel } from '@/utils/common'
//选择框事件
let selectData = ref([]),
  store = useStore(),
  //选择列表
  handleSelectionChange = (val) => {
    selectData.value = val
  },
  //定义弹框ref
  auditSolution = ref(),
  //标题
  title = ref(''),
  //操作点击事件
  handleBtn = (type) => {
    switch (type) {
      case 1:
        title.value = '浏览'
        auditSolution.value.init('view', selectData.value[0].id)
        break
      case 2:
        title.value = '新增'
        auditSolution.value.init('add')
        break
      case 3:
        title.value = '编辑'
        auditSolution.value.init('edit', selectData.value[0].id)
        break
      case 4:
        deleteModuleFunc()

        break
    }
  }
//定义字典类型
// const subSystem = ref()
const solutionType = ref()
onMounted(() => {
  getModuleSolutionList()
  //   subSystem.value = store.getters.filteredSystemDictList('SubSystemEnum')
  solutionType.value = store.getters.filteredSystemDictList('SolutionTypeEnum')
})
//初始化loading
let loading = ref(false)
//定义解决方案列表
let solutionList = ref([]),
  //定义table ref
  tableRef = ref()
//获取解决方案列表
const getModuleSolutionList = () => {
  nextTick(() => {
    tableRef.value.clearSelection() //清空选中
  })
  loading.value = true
  moduleSolutionList()
    .then((res) => {
      loading.value = false
      if (res.code === 200) {
        solutionList.value = res.data.sort(compare('sort'))
        // }
      } else ElMessage.warning(res.message)
    })
    .catch((err) => {
      loading.value = false
      console.log(err)
    })
}
//排序方法
const compare = (property) => {
  return function (a, b) {
    let x = parseInt(a[property])
    let y = parseInt(b[property])
    return x < y ? -1 : x > y ? 1 : 0
  }
}
//删除模块
const deleteModuleFunc = () => {
  ElMessageBox.confirm('确定删除选中数据吗？', '提示', {
    type: 'warning'
  })
    .then(async () => {
      moduleSolutionDel(selectData.value[0].id)
        .then((res) => {
          if (res.code === 200) {
            ElMessage.success('删除成功')
            getModuleSolutionList()
          } else ElMessage.warning(res.message)
        })
        .catch(() => {})
    })
    .catch(() => {})
}
</script>

<style scoped lang="scss">
:deep(.el-table .cell.el-tooltip) {
  display: flex;
}
</style>
