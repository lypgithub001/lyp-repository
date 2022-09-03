<template>
  <div class="container">
    <div class="headerBox borderBottom">
      <el-button type="primary" size="mini" @click="handleBtn(1)">新增</el-button><el-button size="mini" @click="handleBtn(5)">重置</el-button>
    </div>
    <el-row :gutter="40">
      <el-col :span="5" class="treeBox">
        <el-tree
          v-loading="loadingLeft"
          icon-class="el-icon-arrow-right"
          :data="treeDicData"
          :props="{ label: 'content', children: 'child' }"
          :expand-on-click-node="false"
          node-key="id"
          @node-click="handleNodeClick"
        >
        </el-tree>
      </el-col>
      <el-col :span="19" style="padding-top: 24px">
        <Table
          v-loading="loadingRight"
          :tableData="tableData"
          height="calc(100vh - 220px)"
          :singleSelect="true"
          @selectedList="handleSelectionChange"
          ref="tableRef"
        >
          <template #column>
            <el-table-column label="编码" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.code }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="档案名称" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.content || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="上级分类" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ classifyName ? classifyName : '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="是否启用" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.state === 0 ? '启用' : '未启用' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="标识参数" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.type2 || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="业务大类" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.type1 || '-' }}
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
        <table-bottom style="margin: 0">
          <template v-slot:bottomLeft>
            <el-button size="mini" :disabled="selectData.length !== 1" @click="handleBtn(2)">浏览</el-button>
            <el-button size="mini" :disabled="selectData.length !== 1" @click="handleBtn(3)">修改</el-button>
            <el-button size="mini" class="red-button" :disabled="selectData.length === 0" @click="handleBtn(4)">删除</el-button>
          </template>
        </table-bottom>
      </el-col>
    </el-row>
    <details-module ref="detailsRef" @getList="getLeft" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { dictTree, getDictRightList, dictTreeRemoveByIds } from '@/api/moduleManagement/dictionaries'
import detailsModule from './components/detailsModule.vue'
const store = useStore()
//定义右侧列表数据
let tableData = ref([])
//选择框事件
let selectData = ref([]),
  handleSelectionChange = (val) => {
    selectData.value = val
  },
  //定义弹框ref
  detailsRef = ref(),
  //定义table ref
  tableRef = ref(),
  //操作点击事件
  handleBtn = (type) => {
    switch (type) {
      case 1:
        detailsRef.value.init('add', classifyId.value)
        break
      case 2:
        detailsRef.value.init('view', JSON.parse(JSON.stringify(selectData.value[0])))
        break
      case 3:
        detailsRef.value.init('edit', JSON.parse(JSON.stringify(selectData.value[0])))
        break
      case 4:
        deleteModuleFunc()
        break
      case 5:
        classifyId.value = 0
        classifyName.value = ''
        getLeft()
        break
    }
  }
//初始化loading
let loadingLeft = ref(false)
let loadingRight = ref(false),
  treeDicData = ref()
onMounted(() => {
  getLeft()
})
//获取左边树
const getLeft = () => {
    getdictTree()
    getDictRightLists()
  },
  getdictTree = async () => {
    try {
      loadingLeft.value = true
      let res = await dictTree()
      loadingLeft.value = false
      if (res.code === 200) {
        treeDicData.value = res.data
        store.dispatch('getDictTree')
      } else {
        ElMessage.error(res.message)
      }
    } catch (error) {
      loadingLeft.value = false
    }
  }
//获取右侧列表
const getDictRightLists = async () => {
  nextTick(() => {
    tableRef.value.clearSelection() //清空选中
  })
  const params = {
    pid: classifyId.value || 0
  }
  try {
    loadingRight.value = true
    const res = await getDictRightList(params)
    loadingRight.value = false
    if (res.code === 200) {
      res.data.sort(function (a, b) {
        if (parseInt(a.code) < parseInt(b.code)) {
          return -1
        } else if (parseInt(a.code) > parseInt(b.code)) {
          return 1
        } else {
          return 0
        }
      })
      tableData.value = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error) {
    loadingRight.value = false
  }
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
  },
  //点击树id赋值
  classifyId = ref(0),
  classifyName = ref(),
  handleNodeClick = (data) => {
    classifyId.value = data.id
    classifyName.value = data.content
    getDictRightLists()
  }
//级联删除模块
const deleteModuleFunc = () => {
  ElMessageBox.confirm('确定删除选中数据吗？', '提示', {
    type: 'warning'
  })
    .then(async () => {
      dictTreeRemoveByIds([selectData.value[0].id])
        .then((res) => {
          if (res.code === 200) {
            ElMessage.success('删除成功')
            getLeft()
          } else ElMessage.warning(res.message)
        })
        .catch(() => {})
    })
    .catch(() => {})
}
</script>

<style lang="scss" scoped>
:deep(.el-table--small) {
  overflow: auto;
}
:deep(.el-tree-node.is-expanded > .el-tree-node__children) {
  display: inline;
}
:deep(.el-table::before) {
  height: 0;
}
.headerBox {
  text-align: right;
  padding-bottom: 16px;
}
.treeBox {
  height: calc(100vh - 133px);
  padding-top: 24px;
  border-right: 1px solid #edf2f7;
  overflow: auto;
  :deep(.el-tree-node__label) {
    font-size: $font-size-base;
  }
}
.borderBottom {
  border-bottom: 1px solid #edf2f7;
}
</style>
