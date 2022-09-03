<template>
  <div>
    <div class="container">
      <Table
        :tableData="functionModule.tableData"
        :treeProps="{ children: 'child' }"
        @selectedList="handleSelectionChange"
        v-loading="loading"
        :showSelect="true"
      >
        <template #column>
          <el-table-column label="菜单名称" show-overflow-tooltip>
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.menuName || '-' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="排序" show-overflow-tooltip align="center">
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.sort || '-' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="菜单类型" show-overflow-tooltip align="center">
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.menuType === 0 ? '功能菜单' : scope.row.menuType === 1 ? '功能页面' : '按钮' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="更新时间" show-overflow-tooltip align="center">
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.updateTime || '-' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="启用状态" show-overflow-tooltip align="center">
            <template #default="scope">
              <div class="scope_div">
                {{ scope.row.isEnable ? '启用' : '未启用' }}
              </div>
            </template>
          </el-table-column>
        </template>
      </Table>
    </div>
    <table-bottom>
      <template #bottomLeft>
        <el-button size="mini" class="blue-button" @click="handleBtn(1)" :disabled="selectData.length !== 1">浏 览</el-button>
        <el-button
          size="mini"
          @click="handleBtn(2)"
          :disabled="
            selectData.length > 1 ||
            (selectData[0]?.menuType != 0 && selectData.length !== 0) ||
            (selectData[0]?.menuType === 0 && selectData[0]?.pid !== 0 && selectData.length !== 0)
          "
          >{{ selectData.length > 0 ? '新增子级' : '新增' }}</el-button
        >
        <el-button size="mini" @click="handleBtn(3)" :disabled="selectData.length !== 1">编辑</el-button>
        <el-button size="mini" class="red-button" @click="handleBtn(4)" :disabled="selectData.length !== 1">删 除</el-button>
      </template>
      <template #bottomRight> </template>
    </table-bottom>
  </div>
</template>

<script setup>
import { GetModuleTree, DeleteModuleFunction } from '@/api/moduleManagement/fuctionModule'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter(),
  //定义权限相关数据
  functionModule = reactive({
    tableData: []
  })
//选择框事件
let selectData = ref([]),
  handleSelectionChange = (val) => {
    selectData.value = val
  },
  //操作点击事件
  handleBtn = (type) => {
    let list
    if (selectData.value.length > 0) {
      list = JSON.parse(JSON.stringify(selectData.value[0]))
      list.child = null
      list.children = null
    }

    switch (type) {
      case 1:
        console.log(list)
        router.push({
          path: '/fuctionModuleDetails',
          query: { type: 'view', obj: encodeURIComponent(JSON.stringify(list)) }
        })
        break
      case 2:
        if (selectData.value.length === 0) {
          router.push({
            path: '/fuctionModuleDetails',
            query: { type: 'add' }
          })
        } else {
          router.push({
            path: '/fuctionModuleDetails',
            query: { type: 'add', id: selectData.value[0].id || null }
          })
        }
        break
      case 3:
        router.push({
          path: '/fuctionModuleDetails',
          query: { type: 'edit', obj: encodeURIComponent(JSON.stringify(list)) }
        })
        break
      case 4:
        deleteModuleFunc()

        break
    }
  }
//初始化loading
let loading = ref(false)
onMounted(() => {
  getModuleTreeFunc()
})
//获取功能模块树
const getModuleTreeFunc = () => {
  loading.value = true
  GetModuleTree()
    .then((res) => {
      loading.value = false
      if (res.code === 200) {
        functionModule.tableData = recursionFunc(res.data, 'sort') //递归处理数据并排序
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
//递归处理数据
const recursionFunc = (list, flag) => {
  let data = []
  if (list) {
    list.sort(compare(flag))
    for (let i = 0; i < list.length; i++) {
      if (list[i].child) {
        list[i].children = recursionFunc(list[i].child, 'sort')
      }
      data.push(list[i])
    }
  }
  return data || list
}
//级联删除模块
const deleteModuleFunc = () => {
  ElMessageBox.confirm('确定删除选中数据吗？', '提示', {
    type: 'warning'
  })
    .then(async () => {
      DeleteModuleFunction(selectData.value[0].id)
        .then((res) => {
          if (res.code === 200) {
            ElMessage.success('删除成功')
            getModuleTreeFunc()
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
.container {
  margin: 0 16px 16px;
}
</style>
