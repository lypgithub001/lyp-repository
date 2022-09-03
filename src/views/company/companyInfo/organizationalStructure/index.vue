<template>
  <div>
    <HeaderTabs :headerTitle="'组织架构'"> </HeaderTabs>
    <el-form class="organizationalStructure">
      <div class="flex">
        <div class="treeBox">
          <div class="treeSearch">
            <el-input v-model="searchContent" prefix-icon="el-icon-search" placeholder="搜索" clearable @input="searchInput" @clear="searchInput"></el-input>
          </div>
          <el-tree
            icon-class="el-icon-arrow-right"
            v-loading="loadingLeft"
            :data="treeData"
            draggable
            ref="tree"
            :props="{ label: 'name', children: 'child' }"
            :expand-on-click-node="false"
            node-key="id"
            :filter-node-method="filterNode"
            default-expand-all
            @node-click="handleNodeClick"
            @node-drag-end="handleDragEnd"
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            v-if="isShowTree"
          >
            <template #default="{ node, data }" class="custom-tree-node flex" style="width: 100%">
              <span class="treename"
                ><svg-icon :name="'organizationicon'" v-show="data.orgType !== 1" :width="'15px'" :height="'15px'" style="margin: -3px 5px 0 0" />{{
                  data.name
                }}</span
              >
              <div class="iconBox">
                <svg-icon :name="'zuzhijiagoushezhi'" @click="showChooseCard" class="settingIcon" />
                <div class="selectBox">
                  <ul>
                    <li v-for="(item, index) in data.selectList" @click.stop="handleCreateDepartment(data, item.type, node)" :key="index">
                      <svg-icon :name="item.icon" :width="'15px'" :height="'15px'" class="iconClass" />
                      <span>{{ item.name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </el-tree>
          <div v-if="!isShowTree" v-loading="loading_search">
            <div v-if="searchData.userList?.length">
              <div class="title">成员</div>
              <div class="memberBox" v-for="item in searchData.userList" :key="item.id" @click="handleBtn(2, { id: item.id })">
                <img :src="item.avatar || placeholderPic" alt="" />
                <div class="memberBox-info">
                  <div class="top">
                    <span class="name">{{ item.name }}</span>
                    <span class="tel">{{ item.phone }}</span>
                  </div>
                  <div class="bottom">{{ item.employeeJob }}</div>
                </div>
              </div>
            </div>
            <div style="margin-top: 30px" v-if="searchData.deptList?.length">
              <div class="title">部门</div>
              <div class="departmentTitle" v-for="item in searchData.deptList" :key="item.id" @click="handleCreateDepartment(item, 3)">
                {{ item.name }}
              </div>
            </div>
            <div style="margin-top: 40px" v-if="searchData.companyList?.length">
              <div class="title">公司</div>
              <div class="companyBox" v-for="item in searchData.companyList" :key="item.id" @click="handleCreateDepartment(item, 3)">
                <img :src="item.logo || placeholderPic" alt="" />
                <div class="companyBox-info">{{ item.name }}</div>
              </div>
            </div>
            <div v-if="!searchData.userList?.length && !searchData.deptList?.length && !searchData.companyList?.length">
              <el-empty description="暂无结果" />
            </div>
          </div>
        </div>
        <div class="tableBox">
          <div class="flex searchBox">
            <div class="flex">
              <el-form-item style="width: 178px">
                <el-select v-model="recursion" placeholder="请选择查询类型" @change="changeRecursion">
                  <el-option label="查看直属及子部门" :value="true"> </el-option>
                  <el-option label="查看直属成员" :value="false"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="width: 178px; margin-left: 24px" v-if="!classifyParentId">
                <el-select v-model="chooseManStatus" placeholder="请选择在职状态" @change="changeSys">
                  <el-option v-for="(item, index) in manStatus" :label="item.name" :value="item.id" :key="index"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="width: 178px; margin-left: 24px">
                <el-input v-model="phoneOrName" prefix-icon="el-icon-search" @change="changePhoneOrName" placeholder="搜索手机号或姓名" clearable></el-input>
              </el-form-item>
            </div>
            <div class="buttonBox">
              <el-button
                size="small"
                v-show="!showButton"
                v-hasRole="['ZZJG_CY_PX']"
                type="primary"
                @click="changeSort(1)"
                :disabled="recursion || !chooseManStatus"
              >
                排序
              </el-button>
              <el-button size="small" v-show="showButton" @click="changeSort(2)" :disabled="recursion"> 取消排序 </el-button>
              <el-button size="small" v-show="showButton" type="primary" @click="changeSort(3)" :disabled="recursion"> 保存排序 </el-button>
            </div>
          </div>
          <Table
            v-loading="loadingRight"
            :showSelect="false"
            :tableHeight="'calc(100vh - 430px)'"
            :tableData="tableData"
            @selectedList="handleSelectionChange"
            ref="tableRef"
          >
            <template #column>
              <el-table-column label="人员姓名" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    {{ scope.row.name || '-' }}
                  </div>
                  <div v-if="scope.row.userId === masterAdminUserId">
                    <el-tooltip class="item" effect="dark" content="完成企业认证者为公司主管理员" placement="top-start">
                      <div class="manIdentification">主管理员</div>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="部门" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    {{ scope.row.orgNames || '' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="职位" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    {{ scope.row.employeeJob || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="联系方式" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    {{ scope.row.phone || '-' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column v-if="showButton" label="序号" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    <el-input-number v-model="scope.row.sort" :min="0"></el-input-number>
                  </div>
                </template>
              </el-table-column>
            </template>
            <template #operate>
              <el-table-column label="操作" width="190px">
                <template #default="scope">
                  <el-button size="mini" v-hasRole="['ZZJG']" type="text" @click="handleBtn(2, scope.row)">浏览</el-button>
                  <el-button size="mini" v-hasRole="['ZZJG_CY_BJ']" type="text" v-if="chooseManStatus === 1" @click="handleBtn(3, scope.row)">编辑</el-button>
                  <el-button size="mini" v-hasRole="['ZZJG_CY_LZ']" type="text" class="red-button" v-if="chooseManStatus === 1" @click="handleBtn(4, scope.row)"
                    >标记离职</el-button
                  >
                  <el-button size="mini" v-hasRole="['ZZJG_CY_LZ']" class="red-button" v-else type="text" @click="handleBtn(5, scope.row)"
                    >取消标记离职</el-button
                  >
                </template>
              </el-table-column>
            </template>
          </Table>
          <table-bottom style="position: absolute; width: 100%">
            <template v-slot:bottomLeft>
              <el-button v-if="!masterAdminUserId" size="mini" type="primary" @click="quitTeam()"> 退出团队 </el-button>
              <el-button size="mini" v-hasRole="['ZZJG_CY_TJ']" type="primary" v-if="chooseManStatus === 1" @click="handleBtn(1)">
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
      <department :treeDataList="treeData" ref="detailsRef" @getList="getLeft" />
      <manManagement :treeData="treeData" ref="manRef" @getList="getLeft" />
    </el-form>
    <!-- 选择人员 -->
    <chooseOrganizationalStructure ref="chooseMansRef" :nodeKey="'id'" :select="true" :transferTitle="['选择人员', '已选择人员']" @subumit="getMen">
    </chooseOrganizationalStructure>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, inject, computed } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { queryTree, userQueryPage, deleteTree, orgSort, personnelSort, markQuit, updateMasterAdminUserId } from '@/api/systemManagement/organizationalStructure'
import department from './components/department.vue'
import manManagement from './components/manManagement.vue'
import useData from './components/data'
import Sortable from 'sortablejs' // 拖拽
import placeholderPic from '@/assets/img/campany/enterpriseHeadPortrait.png'
import chooseOrganizationalStructure from '@/components/organizationalStructure/index.vue'

const store = useStore()
const refreshTree = inject('refreshTree')

//人员状态
let manStatus = ref(),
  chooseManStatus = ref(1),
  //查询部门类型
  recursion = ref(true)
//   store.getters.filteredSystemDictList('JobStatusEnum')
manStatus.value = [
  {
    id: 0,
    name: '离职'
  },
  {
    id: 1,
    name: '在职'
  }
]
//当前团队主管理员id
const masterAdminUserId = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.masterAdminUserId)
//当前用户id
const nowUserId = computed(() => localStorage.getItem('userId'))
//退出团队
const quitTeam = () => {
  ElMessageBox.confirm('您确定要退出团队吗？', '提示', {
    type: 'warning'
  })
    .then(async () => {
      markQuit()
        .then((res) => {
          if (res.code === 200) {
            ElMessage.success('退出成功!')
            location.reload()
          } else ElMessage.warning(res.message)
        })
        .catch(() => {})
    })
    .catch(() => {})
}
//定义分页查询信息
let pageTotal = ref(0)
const page = ref({
  current: 1,
  size: 10
})
// 是否展示 tree
const isShowTree = ref(true)
// 搜索后 loading
const loading_search = ref(false)
//是否显示保存取消按钮
const showButton = ref(false)
const pageHandle = (data) => {
    // 分页查询
    page.value = data
    getRightLists()
  },
  //修改在职离职状态
  changeSys = (val) => {
    chooseManStatus.value = val
    if (!chooseManStatus.value) {
      showButton.value = false
    }
    getRightLists()
  },
  //修改部门人员类型查询
  changeRecursion = (val) => {
    console.log(val)
    recursion.value = val
    if (recursion.value) {
      showButton.value = false
    }
    //  rowDrop()
    getRightLists()
  },
  //修改要搜索的手机号和姓名
  phoneOrName = ref(''),
  changePhoneOrName = (val) => {
    phoneOrName.value = val
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
  tree = ref(),
  searchContent = ref(''),
  searchData = ref({}),
  handleSearchDisplay = async (searchContentNew) => {
    console.log('searchContentNew是', searchContentNew)
    const res = await useData().getSearchOrg(searchContentNew)
    searchData.value = res.value
    loading_search.value = false
    console.log(123123123, searchData.value)
  }

let timer = null

// 搜索
const searchInput = (val) => {
  console.log(1111111111, val)
  if (val) {
    isShowTree.value = false
    loading_search.value = true
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      handleSearchDisplay(val)
    }, 200)
  } else {
    isShowTree.value = true
    loading_search.value = false
  }
}

watch(
  () => searchContent.value,
  (searchContentNew) => {
    if (searchContentNew) {
      if (!isNaN(searchContentNew) && searchContentNew.length >= 2) {
        tree.value?.filter(searchContentNew)
      } else if (isNaN(searchContentNew)) {
        tree.value?.filter(searchContentNew)
      } else if (searchContentNew == '') {
        tree.value?.filter(searchContentNew)
      }
    } else {
      tree.value?.filter(searchContentNew)
    }
  }
)
//选人员相关
let chooseMansRef = ref() //选人列表
//选人带回数据进行角色绑定
const getMen = (val) => {
  updateMasterAdminUserId(val[0].id)
    .then((res) => {
      if (res.code === 200) {
        ElMessage({
          type: 'success',
          message: '移交管理员成功!'
        })
        location.reload()
      } else {
        ElMessage.error(res.message)
      }
    })
    .catch((error) => {
      if (error) {
        console.log(error)
      }
    })
}
//定义右侧列表数据
let tableData = ref([]),
  //定义下拉列表
  selectList = ref([
    { icon: 'zuzhijiagouxinzeng', name: '新建同级部门' },
    { icon: 'zuzhijiagouxinzeng', name: '新建下级部门' },
    { icon: 'zuzhijiagoubianji', name: '编辑部门' },
    { icon: 'zuzhijiagouchakan', name: '查看部门' },
    { icon: 'zuzhijiagoushanchu', name: '删除部门' }
  ]) //下拉列表

//选择框事件
let selectData = ref([]),
  handleSelectionChange = (val) => {
    selectData.value = val
  },
  //人员排序
  changeSort = async (val) => {
    switch (val) {
      case 1:
        showButton.value = true
        break
      case 2:
        showButton.value = false
        break
      case 3:
        try {
          //保存排序
          let list = tableData.value.map((ele) => {
            return {
              relId: ele.relId,
              sort: ele.sort
            }
          })
          let res = await personnelSort(list)
          if (res.code === 200) {
            getRightLists()
            showButton.value = false
          } else {
            ElMessage.warning(res.message)
          }
        } catch (error) {}
        break
      default:
        break
    }
    try {
      let res = await personnelSort(params)
      console.log(res)
    } catch (error) {}
  },
  //定义弹框ref
  detailsRef = ref(),
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
      case 4:
        manRef.value.init('leave', { masterDeptId: classifyId.value, id: row.id }, treeData.value)
        break
      case 5:
        manRef.value.init('recover', { masterDeptId: classifyId.value, id: row.id }, treeData.value)
        break
    }
  },
  //操作部门
  handleCreateDepartment = (item, type, node) => {
    const params = {
      id: item.id,
      pid: node?.parent?.data?.id,
      pidName: node?.parent?.data?.name,
      name: item.name,
      orgType: item.orgType,
      adminUserId: item.adminUserId
    }
    switch (type) {
      case 0:
        detailsRef.value.init(
          'add',
          { pid: node.parent.data.id, pidName: node.parent.data.name, child: node.parent.data.child, orgType: item.orgType, type: 1 },
          treeData.value
        )
        break
      case 1:
        detailsRef.value.init('add', { pid: 0, pidName: item.name, child: item.child, orgType: 1, type: 2 }, treeData.value)
        break
      case 2:
        detailsRef.value.init('edit', params, treeData.value)
        break
      case 3:
        // 查看部门
        detailsRef.value.init('view', item, treeData.value)
        break
      case 4:
        console.log(123123123, treeData.value)
        ElMessageBox.confirm('确定删除该部门吗？', '提示', {
          type: 'warning'
        })
          .then(async () => {
            deleteTree(item.id)
              .then((res) => {
                if (res.code === 200) {
                  ElMessage.success('删除成功')
                  getLeft(0, 'delete')
                } else ElMessage.warning(res.message)
              })
              .catch(() => {})
          })
          .catch(() => {})
        break
      case 6:
        detailsRef.value.init('add', { pid: item.id, pidName: item.name, child: item.child, orgType: item.orgType, type: 3 }, treeData.value)
        break
      case 7:
        chooseMansRef.value.init()
        break
    }
  },
  //定义拖拽信息
  //拖拽信息
  dragInfo = ref({}),
  //   要放入位置的信息
  putInfo = ref({}),
  // 放入的位置
  putLocation = ref(),
  //展示选择卡片
  showChooseCard = () => {},
  //通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性
  handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
    dragInfo.value = draggingNode.data
    putInfo.value = dropNode.data
    putLocation.value = dropType
    console.log(dragInfo.value, putInfo.value, putLocation.value)
    if (putLocation.value !== 'none') {
      dragTreSort()
    }
  },
  //  拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
  allowDrop = (draggingNode, dropNode, type) => {
    if (dropNode.data.pid !== draggingNode.data.pid || type == 'inner') {
      return false
      // return type !== 'inner'
    } else {
      return true
    }
  },
  //  判断节点能否被拖拽 如果返回 false ，节点不能被拖动
  allowDrag = (draggingNode) => {
    console.log(draggingNode)
    return draggingNode.data.name.indexOf('集团') === -1
  }
//初始化loading
let loadingLeft = ref(false)
let loadingRight = ref(false),
  treeData = ref()
onMounted(() => {
  getLeft()
})
let sortAble = ref()
//table拖拽
const rowDrop = () => {
  // 此时找到的元素是要拖拽元素的父容器

  const tbody = document.querySelector('.el-table__body-wrapper tbody')
  if (!recursion.value && classifyId.value) {
    sortAble.value = Sortable.create(tbody, {
      //  指定父元素下可被拖拽的子元素

      draggable: '.el-table__row',
      // 开始拖拽的时候
      onStart: function (/**Event*/ evt) {
        console.log(evt)
        evt.oldIndex // element index within parent
      },
      // 元素被选中
      onChoose: function (/**Event*/ evt) {
        evt.oldIndex // element index within parent
      },
      // 列表的任何更改都会触发
      onSort: function (/**Event*/ evt) {
        console.log(evt)
        // same properties as onEnd
      },
      // 拖拽移动的时候
      onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
        console.log(evt.dragged.__vnode.key)
        console.log(evt.related.__vnode.key)
        console.log(evt)
      },
      //结束拖拽
      onEnd({ newIndex, oldIndex }) {
        console.log(newIndex)
        console.log(oldIndex)

        dragInfo.value = tableData.value[oldIndex]
        dragInfo.value.pid = tableData.value[oldIndex].masterDeptId
        putInfo.value = tableData.value[newIndex]
        if (newIndex > oldIndex) {
          putLocation.value = 'after'
          dragTreSort()
        } else if (newIndex < oldIndex) {
          putLocation.value = 'before'
          dragTreSort()
        }
      }
      // const currRow = tableData.value.splice(oldIndex, 1)[0]

      // tableData.value.splice(newIndex, 0, currRow)
    })
  } else {
    sortAble.value?.option('disabled', true)
  }
}
//拖拽树排序
const dragTreSort = async () => {
  try {
    let res = await orgSort({
      id: dragInfo.value.id,
      pid: dragInfo.value.pid,
      targetId: putInfo.value.id,
      targetPosition: putLocation.value === 'before' ? 0 : 1
    })
    if (res.code === 200) {
      getLeft()
    } else {
      ElMessage.error(res.message)
    }
  } catch (error) {}
}
//获取左边树
const getLeft = (val = 0, isDelete) => {
    //获取用户当前团队信息
    getTree(isDelete)
    if (val === 1) {
      refreshTree()
    }
  },
  getTree = async (isDelete) => {
    try {
      loadingLeft.value = true
      let res = await queryTree()
      loadingLeft.value = false
      if (res.code === 200) {
        treeData.value = chooseDataDecursionFunc(JSON.parse(JSON.stringify(res.data)))
        console.log(treeData.value)
        if (!classifyId.value) {
          classifyId.value = treeData.value[0]?.id
          classifyParentId.value = treeData.value[0]?.pid
          //  rowDrop()
        }
        if (isDelete == 'delete') {
          console.log('delete', treeData.value)
          classifyId.value = treeData.value[0]?.child[0]?.id
          classifyParentId.value = treeData.value[0]?.child[0]?.pid
        }
        getRightLists()
      } else {
        ElMessage.error(res.message)
      }
    } catch (error) {
      loadingLeft.value = false
    }
  },
  //递归处理可选择数据
  chooseDataDecursionFunc = (data) => {
    let list = []
    for (let j = 0; j < data.length; j++) {
      if (data[j].pid) {
        if (data[j].manageable) {
          data[j].selectList = [
            //   { icon: 'zuzhijiagouxinzeng', name: '新建上级组织', type: 1 },
            { icon: 'zuzhijiagouxinzeng', name: '新建同级组织', type: 0 },
            { icon: 'zuzhijiagouxinzeng', name: '新建下级组织', type: 6 },
            { icon: 'zuzhijiagoubianji', name: '编辑组织', type: 2 },
            { icon: 'zuzhijiagouchakan', name: '查看组织', type: 3 },
            { icon: 'zuzhijiagoushanchu', name: '删除组织', type: 4 }
          ]
        } else {
          data[j].selectList = [{ icon: 'zuzhijiagouchakan', name: '查看组织', type: 3 }]
        }
      } else {
        if (data[j].manageable) {
          if (nowUserId.value == masterAdminUserId.value) {
            data[j].selectList = [
              { icon: 'zuzhijiagoubianji', name: '移交管理员', type: 7 },
              { icon: 'zuzhijiagouxinzeng', name: '新建上级组织', type: 1 },
              { icon: 'zuzhijiagouxinzeng', name: '新建下级组织', type: 6 },
              { icon: 'zuzhijiagoubianji', name: '编辑组织', type: 2 },
              { icon: 'zuzhijiagouchakan', name: '查看组织', type: 3 }
              //  { icon: 'zuzhijiagoushanchu', name: '删除组织', type: 4 }
            ]
          } else {
            data[j].selectList = [
              { icon: 'zuzhijiagouxinzeng', name: '新建上级组织', type: 1 },
              { icon: 'zuzhijiagouxinzeng', name: '新建下级组织', type: 6 },
              { icon: 'zuzhijiagoubianji', name: '编辑组织', type: 2 },
              { icon: 'zuzhijiagouchakan', name: '查看组织', type: 3 }
              //  { icon: 'zuzhijiagoushanchu', name: '删除组织', type: 4 }
            ]
          }
        } else {
          data[j].selectList = [{ icon: 'zuzhijiagouchakan', name: '查看组织', type: 3 }]
        }
      }
      if (data[j].child && data[j].child.length > 0) {
        data[j].child = chooseDataDecursionFunc(data[j].child)
      }
      list.push(data[j])
    }
    return list
  }
//获取右侧列表
const getRightLists = async () => {
  tableData.value = []
  nextTick(() => {
    tableRef.value.clearSelection() //清空选中
  })
  const res = await userQueryPage({
    employeeStatus: chooseManStatus.value,
    orgId: classifyId.value || '',
    ...page.value,
    recursion: recursion.value,
    phoneOrName: phoneOrName.value
  })
  if (res.code === 200) {
    tableData.value = res.data.records
    pageTotal.value = res.data.total
  } else {
    ElMessage.error(res.message)
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
  classifyParentId = ref(0), //父级id
  handleNodeClick = (data) => {
    classifyId.value = data.id
    classifyParentId.value = data.pid
    if (classifyParentId.value) {
      chooseManStatus.value = 1
    }
    classifyName.value = data.name
    showButton.value = false
    getRightLists()

    //  rowDrop()
  }
</script>

<style lang="scss" scope>
@import '@/assets/css/mixin.scss';
.manIdentification {
  width: 55px;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  text-align: center;
  background: #e8f3ff;
  border-radius: 2px;
  color: #1664ff;
}
:deep(.el-table th > .cell) {
  text-align: left;
}
:deep(.el-table::before) {
  height: 0;
}
.el-table th.is-center,
.el-table td.is-center {
  text-align: left;
}
.organizationalStructure {
  .searchBox {
    height: 88px;
    border-bottom: 1px solid #edf2f7;
    padding: 26px 24px 0;
    box-sizing: border-box;
    justify-content: space-between;
    .buttonBox {
      button {
        height: 32px;
        margin-left: 24px;
      }
    }
  }

  .table {
    padding: 24px;
    box-shadow: none;
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
  .iconBox {
    display: none;
    position: absolute;
    right: 5px;
    margin-left: 15px;
    width: 25px;
    text-align: center;
    height: 16px;
    .settingIcon {
      width: 15px;
      height: 15px;
      margin-top: -2px;
    }
  }
  :deep(.el-tree-node__content) {
    height: 32px;
    /* margin-right: 20px; */
    position: relative;
  }
  .iconClass {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    position: relative;
  }
  .iconBox:hover .selectBox {
    display: block;
  }
  .el-tree-node__content:hover .iconBox {
    display: block;
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
    height: calc(100vh - 240px);
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
    .title {
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #1d2129;
      margin-bottom: 20px;
    }
  }
  .memberBox {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    img {
      width: 43px;
      height: 43px;
      margin-right: 10px;
    }
    .memberBox-info {
      .top {
        font-family: 'PingFang SC';
        font-style: normal;
        font-size: 14px;
        color: #000000;
        margin-bottom: 4px;
        .name {
          font-weight: 600;
          margin-right: 4px;
        }
        .tel {
          font-weight: 400;
        }
      }
      .bottom {
        font-weight: 400;
        font-size: 12px;
        color: #86909c;
      }
    }
  }
  .departmentTitle {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .companyBox {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    img {
      width: 43px;
      height: 43px;
      margin-right: 10px;
    }
    .companyBox-info {
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #000000;
    }
  }
  .tableBox {
    height: calc(100vh - 200px);
    width: calc(100% - 380px);
    background: #ffffff;
    border-radius: 2px;
    box-sizing: border-box;
    position: relative;
  }
  .treename {
    font-size: $font-size-base;
    width: calc(100% - 50px);
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .borderBottom {
    border-bottom: 1px solid #edf2f7;
  }
  .selectBox {
    padding: 8px 15px;
    //   width: 100%;
    //   height: 160px;
    opacity: 1;
    position: absolute;
    text-align: left;
    display: none;
    right: 0;
    top: 16px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 8px 16px 0px rgba(46, 55, 78, 0.2);
    font-size: $font-size-sm;
    z-index: 1;
    //  display: none;
    li {
      line-height: 32px;
      padding: 0 15px;
    }
    li:hover {
      background: #f4f5f6;
    }
  }
}
</style>
