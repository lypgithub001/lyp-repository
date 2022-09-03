<template>
  <HeaderTabs :headerTitle="'数据字典'"> </HeaderTabs>
  <el-form>
    <div class="flex">
      <div class="treeBox">
        <div class="treeSearch">
          <el-input v-model="searchContent" prefix-icon="el-icon-search" placeholder="搜索" clearable></el-input>
        </div>
        <el-tree
          ref="tree"
          :data="list"
          node-key="id"
          highlight-current
          default-expand-all
          :expand-on-click-node="false"
          :props="{ label: 'name', children: 'child' }"
          v-loading="loadingLeft"
          :current-node-key="classifyId"
          :filter-node-method="filterNode"
          @node-click="handleNodeClick"
        >
        </el-tree>
      </div>
      <div class="tableBox">
        <div class="tableSearch">
          <div class="title">
            <span>{{ classifyName }}:&nbsp;&nbsp;</span>{{ reason }}
          </div>
        </div>
        <Table
          ref="tableRef"
          header-align="center"
          :tableHeight="'calc(100vh - 436px)'"
          :tableData="tableData"
          v-loading="loadingRight"
          :showSelect="false"
          @selectedList="handleSelectionChange"
        >
          <template #column>
            <el-table-column label="编码" type="index" show-overflow-tooltip> </el-table-column>
            <el-table-column label="字段枚举" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.fieldName || '' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="排序序号" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.sortNo || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="是否启用" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ !scope.row.isDel ? '启用' : '停用' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="字段说明" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.fieldExplain || '-' }}
                </div>
              </template>
            </el-table-column>
          </template>
          <template #operate>
            <el-table-column label="操作">
              <template #default="scope">
                <div class="scope_div">
                  <el-button size="mini" type="text" @click="handleBtn(2, scope.row)">浏览</el-button>
                  <el-button size="mini" type="text" @click="handleBtn(3, scope.row)">编辑</el-button>
                  <el-button size="mini" type="text" class="red-button" @click="handleBtns(scope.row)">{{
                    scope.row.isDel === true ? '启用' : '停用'
                  }}</el-button>
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
        <table-bottom class="newlyAdded">
          <template v-slot:bottomLeft>
            <!-- v-hasRole="['ZZJG_CY_TJ']" 记得加上按钮权限-->
            <el-button size="mini" type="primary" @click="handleBtn(1)">
              <i class="el-icon-plus"></i>
              新增
            </el-button>
          </template>
          <template v-slot:bottomRight>
            <Pagenation @getList="pageHandle" :page="page" :pageTotal="pageTotal"></Pagenation>
          </template>
        </table-bottom>
      </div>
    </div>
    <commonComponent ref="manRef" @getList="getRightLists" />
    <el-dialog v-model="dialogVisible" width="30%">
      <span>是否确定{{ deactivate === true ? '启用' : '停用' }}该字段枚举？</span>
      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="save">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </el-form>
</template>

<script setup>
import { ref, computed, nextTick, watch, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { getLabel } from '@/utils/common.js'
import { queryPage, deLete } from '@/api/company/basisSetting/dataDictionary'
import commonComponent from './components/commonComponent.vue'
const store = useStore()

const list = computed(() => store.getters.filteredSystemDictList('DataDictionaryEnum'))
const dicData = reactive({
  unitList: store.getters.filteredSystemDictList('DataDescribeEnum') || []
})
//定义分页查询信息
let pageTotal = ref(0)
const page = ref({
    current: 1,
    size: 10
  }),
  reason = ref('')
//是否显示保存取消按钮
const showButton = ref(false)
//停用显隐
const dialogVisible = ref(false)
//停用变量
const deactivate = ref(false)
// 分页查询
const pageHandle = (data) => {
    page.value = data
    getRightLists()
  },
  //搜索过滤
  filterNode = (value, data, node) => {
    if (!value) {
      return true
    }
    // var level = node.level
    var _array = [] // 这里使用数组存储 只是为了存储值。
    getReturnNode(node, _array, value)
    var result = false
    _array.forEach((item) => {
      result = result || item
    })
    return result
  },
  //筛选
  getReturnNode = (node, _array, value) => {
    var isPass = node.data && node.data.name && node.data.name.indexOf(value) !== -1
    isPass ? _array.push(isPass) : ''
    // this.index++
    if (!isPass && node.level != 1 && node.parent) {
      getReturnNode(node.parent, _array, value)
    }
  },
  //树
  tree = ref(),
  //左侧树搜素
  searchContent = ref('')
watch(
  () => searchContent.value,
  (searchContentNew) => {
    if (searchContentNew) {
      if (!isNaN(searchContentNew) && searchContentNew.length >= 2) {
        tree.value.filter(searchContentNew)
      } else if (isNaN(searchContentNew)) {
        tree.value.filter(searchContentNew)
      } else if (searchContentNew == '') {
        tree.value.filter(searchContentNew)
      }
    } else {
      tree.value.filter(searchContentNew)
    }
  }
)
//定义右侧列表数据
let tableData = ref([])
//复选框、选择框事件
let selectData = ref([]),
  handleSelectionChange = (val) => {
    selectData.value = val
  },
  //弹框ref
  manRef = ref(),
  //定义table ref
  tableRef = ref(),
  //操作点击事件
  handleBtn = (type, row) => {
    switch (type) {
      case 1:
        manRef.value.init('add', classifyId.value, treeData.value)
        break
      case 2:
        manRef.value.init('view', { masterDeptId: classifyId.value, id: row.id }, treeData.value)
        break
      case 3:
        manRef.value.init('edit', { masterDeptId: classifyId.value, id: row.id }, treeData.value)
        break
    }
  },
  //停用ref
  valueid = ref(),
  //停用按钮
  handleBtns = (row) => {
    dialogVisible.value = true
    valueid.value = row.id
    deactivate.value = row.isDel
  },
  //是否停用提交
  save = async () => {
    try {
      const res = await deLete(valueid.value)
      if (res.code === 200) {
        dialogVisible.value = false
        getRightLists()
      }
    } catch (error) {}
  }
//初始化loading
let loadingLeft = ref(false)
let loadingRight = ref(false),
  //弹框ref
  treeData = ref()

//获取右侧列表
const getRightLists = async () => {
    tableData.value = []
    nextTick(() => {
      tableRef.value.clearSelection() //清空选中
    })
    const res = await queryPage({
      enumVal: classifyId.value,
      ...page.value
    })
    if (res.code === 200) {
      tableData.value = res.data.records
      pageTotal.value = res.data.total
    } else {
      ElMessage.error(res.message)
    }
  },
  //点击树id赋值

  classifyId = ref(0),
  classifyName = ref(),
  handleNodeClick = (data) => {
    classifyId.value = data.id //当前高亮
    classifyName.value = data.name
    nextTick(() => {
      tree.value.setCurrentKey(classifyId.value)
      reason.value = getLabel(data.id, dicData.unitList)
    })
    showButton.value = false
    getRightLists()
  }

handleNodeClick(list.value[0])
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.tableBox {
  width: calc(100% - 380px);
  background: #ffffff;
  border-radius: 2px;
  box-sizing: border-box;
  position: relative;

  .tableSearch {
    // width: 385px;
    padding-left: 24px;
    padding-top: 30px;
    border-radius: 4px;

    .title {
      font-size: 15px;
      font-weight: 600;
      color: #27272e;
    }
  }
  .newlyAdded {
    position: absolute;
    width: 100%;
    z-index: 100;
  }
}

:deep(.el-table th > .cell) {
  text-align: left;
}
:deep(.el-table::before) {
  height: 0;
}
.table {
  padding: 24px;
  box-shadow: none;

  :deep(.el-table th > .cell) {
    text-align: center;
  }
  .scope_div {
    text-align: center;
  }
}
.topRight {
  border-left: 1px solid #edf2f7;
  display: flex;
  margin-top: -18px;
  padding-top: 18px;
  margin-bottom: -18px;
  width: calc(100% - 350px);
  :deep(.el-input__inner) {
    width: 200px;
  }
}

:deep(.el-tree-node__content) {
  height: 32px;
  /* margin-right: 20px; */
  position: relative;
}
:deep(.el-tree-node.is-expanded > .el-tree-node__children) {
  display: inline;
}
.headerBox {
  text-align: right;
  padding-bottom: 16px;
}
.treeSearch {
  width: 100%;
  height: 38px;
  background: #f7fafc;
  border-radius: 4px;
  margin-bottom: 20px;
  :deep(.el-input--small .el-input__inner) {
    height: 36px;
    line-height: 36px;
  }
  :deep(.el-input--small .el-input__icon) {
    line-height: 36px;
  }
}
.treeBox {
  height: calc(100vh - 252px);
  width: 380px;
  background: #ffffff;
  border-radius: 2px;
  border-right: 1px solid rgba(229, 230, 235, 1);
  padding: 20px;
  overflow: auto;
  @include scrollBar;
  :deep(.el-tree-node__label) {
    font-size: $font-size-base;
  }
}
.treename {
  font-size: $font-size-base;
}
.borderBottom {
  border-bottom: 1px solid #edf2f7;
}
</style>
