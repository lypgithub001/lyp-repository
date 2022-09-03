<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :span="5" class="treeBox">
        <el-tree
          v-loading="loadingLeft"
          icon-class="el-icon-arrow-right"
          :data="treeDicData"
          :props="{ label: 'name', children: 'child' }"
          :expand-on-click-node="false"
          node-key="id"
          :default-expanded-keys="[0]"
          @node-click="handleNodeClick"
          ref="tree"
        >
        </el-tree>
      </el-col>
      <el-col :span="19" style="padding-top: 4px">
        <table-search @handleSearch="handleSearch" :amount="2">
          <template #search>
            <el-form label-width="100px">
              <el-row>
                <el-col :lg="12" :sm="12" :xs="24">
                  <el-form-item label="产品编码:">
                    <el-input v-model="searchForm.catalogueCode" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :lg="12" :sm="12" :xs="24">
                  <el-form-item label="产品名称:">
                    <el-input v-model="searchForm.catalogueName" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </table-search>
        <Table v-loading="loadingRight" :tableData="tableData" height="calc(100vh - 250px)" @selectedList="handleSelectionChange" ref="tableRef">
          <template #column>
            <el-table-column label="产品编码" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.catalogueCode }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="产品名称" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.catalogueName || '-' }}
                </div>
              </template>
            </el-table-column>
            <!-- <el-table-column label="产品层次关系" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.majorHierarchy || '-' }}
                </div>
              </template>
            </el-table-column> -->
            <!-- <el-table-column label="是否是子产品" show-overflow-tooltip align="center">
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.isLeaf === 0 ? '否' : '是' }}
                </div>
              </template>
            </el-table-column> -->
          </template>
        </Table>
        <table-bottom style="margin: 0">
          <template v-slot:bottomLeft>
            <el-button size="mini" :disabled="selectData.length !== 1" @click="handleBtn(2)">浏览</el-button>
            <el-button size="mini" @click="handleBtn(1)" :disabled="isDisabled">新增</el-button>
            <el-button size="mini" :disabled="selectData.length !== 1" @click="handleBtn(3)">修改</el-button>
            <el-button size="mini" class="red-button" :disabled="selectData.length !== 1" @click="handleBtn(4)">删除</el-button>
          </template>
          <template v-slot:bottomRight>
            <Pagenation @getList="getDictRightLists" :page="page" :pageTotal="pageTotal"></Pagenation>
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
import { queryTree, queryPage, deleteInfo, addOrUpdate } from '@/api/moduleManagement/productCatalog.js'
import detailsModule from './components/detailsModule.vue'
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
        detailsRef.value.init('add', { parentId: classifyId.value, parentName: classifyName.value })
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
    }
  }
//分页数据
const page = ref({
  size: 10,
  current: 1
})
const pageTotal = ref(0)
//搜索数据
const searchForm = ref({})
//搜索重置按钮
function handleSearch(v) {
  if (!v) {
    //清空
    searchForm.value = {}
    page.value = {
      size: 10,
      current: 1
    }
  }
  getDictRightLists()
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
      let res = await queryTree()
      loadingLeft.value = false
      if (res.code === 200) {
        treeDicData.value = [{ name: '产品目录', id: 0, child: res.data }]
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
    parentId: classifyId.value || 0
  }
  try {
    loadingRight.value = true
    const res = await queryPage({ ...params, ...page.value, ...searchForm.value })
    loadingRight.value = false
    if (res.code === 200) {
      tableData.value = res.data.records
      pageTotal.value = res.data.total
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
  classifyName = ref('专家产品'),
  tree = ref(),
  isDisabled = ref(false),
  handleNodeClick = (data, node, el) => {
    classifyId.value = data.id
    classifyName.value = data.name
    getDictRightLists()
    nodeClick(node)
  }
let parentMenuList = ref([])
const nodeClick = (node) => {
  if (node.label) {
    parentMenuList.value.push(node.label)
  } else {
    //最多3层，不包含第一层
    if (parentMenuList.value.length == 4) {
      isDisabled.value = true
    } else {
      isDisabled.value = false
    }
    parentMenuList.value = []
  }
  //迭代
  if (node.parent) {
    nodeClick(node.parent)
  }
}
//级联删除模块
const deleteModuleFunc = () => {
  ElMessageBox.confirm('确定删除选中数据吗？', '提示', {
    type: 'warning'
  })
    .then(async () => {
      deleteInfo(selectData.value[0].id)
        .then((res) => {
          if (res.code === 200) {
            ElMessage.success('删除成功')
            getLeft()
          } else ElMessage.warning(res.message)
        })
        .catch(() => { })
    })
    .catch(() => { })
}
</script>

<style lang="scss" scoped>
:deep(.table-card) {
  padding: 0;
  box-shadow: none;
}
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
  height: calc(100vh - 90px);
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
