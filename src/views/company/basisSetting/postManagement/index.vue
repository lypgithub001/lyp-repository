<template>
  <HeaderTabs :headerTitle="'岗位管理'">
    <template v-slot:rightContainer> </template>
  </HeaderTabs>
  <div class="postManagement">
    <div class="team_content" v-loading="showLoading">
      <div class="left_tree">
        <div class="flex-between searchBox">
          <el-input v-model="searchFrameWork" placeholder="请输入内容" prefix-icon="el-icon-search" clearable size="small" />
          <el-button size="mini" type="text" v-hasRole="['GS_JC_GW_PZ']" @click="handleCreateDepartment({}, 0)" style="margin-left: 20px"
            >新增岗位分组</el-button
          >
          <el-button size="mini" type="text" v-hasRole="['GS_JC_GW_PZ']" @click="handleCreateDepartment({}, 1)">新增岗位</el-button>
        </div>
        <div class="tree_title">
          <div style="overflow: hidden" class="el-tree">
            <div :style="{ height: 'calc(100vh - 294px)' }" style="overflow-y: auto; padding-top: 8px">
              <el-tree
                ref="tree"
                :data="teamTree"
                :props="{ label: 'name', children: 'jobList' }"
                :filter-node-method="filterNode"
                :expand-on-click-node="false"
                node-key="id"
                default-expand-all
                @node-click="handleNodeClick"
              >
                <template #default="{ node, data }">
                  <div class="custom-tree-node clear" style="width: 100%">
                    <span class="treeName">{{ data.name }} </span>
                    <span v-show="data.userCount" style="margin-left: 7px; font-size: 14px; color: #bfc2cc; float: left">({{ data.userCount }})</span>
                    <span @click="handleCreateDepartment(data, 2)" v-hasRole="['GS_JC_GW_PZ']" class="edit">编辑</span>
                  </div>
                </template>
              </el-tree>
            </div>
          </div>
        </div>
      </div>
      <div class="right_table clear">
        <NewTableSearch @handleSearch="handleSearch" :isShowMore="false">
          <template #input>
            <el-input v-model.trim="searchForm.name" @change="searchInit" clearable placeholder="请输入人员名称">
              <template #prefix><svg-icon name="input_search" /> </template>
            </el-input>
            <el-input v-model.trim="searchForm.phone" @change="searchInit" clearable placeholder="请输入手机号" style="margin: 0 30px">
              <template #prefix><svg-icon name="input_search" /> </template>
            </el-input>
            <el-input v-model.trim="searchForm.orgName" @change="searchInit" clearable placeholder="请输入部门">
              <template #prefix><svg-icon name="input_search" /> </template>
            </el-input>
          </template>
        </NewTableSearch>
        <Table v-loading="showLoading" :tableHeight="'calc(100vh - 436px)'" :tableData="tableData" ref="tableRef" empty-text="该岗位下面暂时没有成员">
          <template #column>
            <el-table-column prop="userName" label="姓名" show-overflow-tooltip>
              <template v-slot="scope">
                <div class="scope_div">
                  <div>{{ scope.row.name ? scope.row.name : '-' }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="电话" show-overflow-tooltip>
              <template v-slot="scope">
                <div class="scope_div">
                  <div>{{ scope.row.userInfoVO?.phone ? scope.row.userInfoVO?.phone : '-' }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="employeeJob" label="职位" show-overflow-tooltip>
              <template v-slot="scope">
                <div class="scope_div">
                  <div>
                    {{ scope.row.employeeJob ? scope.row.employeeJob : '-' }}
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="所属部门" show-overflow-tooltip>
              <template v-slot="scope">
                <div class="scope_div">
                  <div>{{ scope.row.orgNames ? scope.row.orgNames : '-' }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <div class="table_scope">
                  <el-button size="small" type="text" v-hasRole="['GS_JC_GW_PZ']" @click="handleCreateDepartment(scope.row, 4)">
                    <span class="zc-theme-color">移除</span>
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
        <table-bottom style="position: absolute; width: 100%">
          <template v-slot:bottomLeft>
            <el-button v-hasRole="['GS_JC_GW_PZ']" size="mini" type="primary" v-if="jobForm.id" @click="handleCreateDepartment({}, 3)">
              <i class="el-icon-plus"></i>
              添加成员
            </el-button>
          </template>
          <template v-slot:bottomRight>
            <Pagenation @getList="pageHandle" :page="pageValue" :pageTotal="total"></Pagenation>
          </template>
        </table-bottom>
      </div>
    </div>
    <!-- 选择人员 -->
    <chooseOrganizationalStructure
      ref="OrgStructureSelectionRef"
      :nodeKey="'id'"
      :selectDataList="selectDataList"
      :select="false"
      :transferTitle="titleList"
      @subumit="submitOrgSelect"
    >
    </chooseOrganizationalStructure>
    <!-- 添加修改岗位分组 -->
    <addEditGroup
      :groupForm="groupForm"
      :jobType="jobType"
      :title="title"
      :dialogButton="dialogButton"
      @submit="handleSubmitDept"
      @close="handleCloseDept"
      :groupVisible="groupVisible"
    ></addEditGroup>
    <!-- 添加修改岗位 -->
    <add-job
      :jobVisible="jobVisible"
      :dialogButton="dialogButton"
      :title="title"
      :jobForm="jobForm"
      :teamTree="teamTree"
      @submit="handleSubmitJob"
      @close="handleCloseJob"
    ></add-job>
  </div>
</template>

<script>
import chooseOrganizationalStructure from '@/components/organizationalStructure/index.vue'
import { jobQueryJobList, jobRemoveLinkUser, jobLinkUser, jobQueryJobUser } from '@/api/company/basisSetting/postManagement.js'
import addEditGroup from './components/addGroup.vue'
import addJob from './components/addJob.vue'
import { reactive, ref, toRefs, watch, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  name: 'company-basisSetting-postManagement',
  components: {
    chooseOrganizationalStructure,
    addEditGroup,
    addJob
  },
  setup() {
    //搜索数据
    const searchForm = ref({
        name: '',
        orgName: '',
        userInfoVO: {
          phone: ''
        }
      }),
      handleSearch = (e) => {
        if (!e) {
          searchForm.value = {
            name: '',
            orgName: '',
            phone: ''
          }
          pageValue.value = { current: 1, size: 10 }
        }
        state.getUserList()
      },
      searchInit = () => {
        pageValue.value = { size: 10, current: 1 }
        state.getUserList()
      }
    //初始化分页
    const pageValue = ref({
      current: 1,
      size: 10
    })
    const OrgStructureSelectionRef = ref()
    const state = reactive({
      jobType: 0, //调用方法类型
      teamTree: [],
      contentStyleObj: {
        height: ''
      },
      selectDataList: [], //已选择人员
      tableData: [], //人员列表
      groupVisible: false, //岗位dialog
      groupForm: {
        name: '',
        id: ''
      },
      jobForm: {
        name: '',
        id: ''
      },
      jobVisible: false,
      deptType: '',
      showLoading: false,
      titleList: ['选择岗位', '已选择岗位'],
      dialogButton: [], //弹窗按钮显示
      title: '添加岗位组',
      total: 0, //总数
      searchFrameWork: '', //搜索岗位
      pageHandle(val) {
        pageValue.value = val
        state.getUserList()
      },
      //搜索过滤
      filterNode(value, data, node) {
        if (!value) {
          return true
        }
        // var level = node.level
        var _array = [] // 这里使用数组存储 只是为了存储值。
        state.getReturnNode(node, _array, value)
        var result = false
        _array.forEach((item) => {
          result = result || item
        })
        return result
      },
      //筛选
      getReturnNode(node, _array, value) {
        var isPass = node.data && node.data.name && node.data.name.indexOf(value) !== -1
        isPass ? _array.push(isPass) : ''
        var isPhone = node.data && node.data.userPhone && node.data.userPhone.indexOf(value) !== -1
        isPhone ? _array.push(isPhone) : ''
        state.index++
        if (!isPass && node.level != 1 && node.parent) {
          state.getReturnNode(node.parent, _array, value)
        }
      },
      // 新建/ 编辑岗位组
      handleSubmitDept(val, type) {
        state.groupForm.name = ''
        state.groupVisible = false
        state.querySingleTeamDeptTree()
        if (type === 1) {
          state.jobForm.id = ''
          state.total = 0
          state.tableData = []
        }
      },
      //关闭岗位组弹窗
      handleCloseDept(type) {
        if (!type) {
          state.groupForm.name = ''
        }
        state.groupVisible = type
      },
      //新建岗位完成
      handleSubmitJob(val, type) {
        state.jobForm.name = ''
        state.jobVisible = false
        state.querySingleTeamDeptTree()
        if (type === 1) {
          state.jobForm.id = ''
          state.total = 0
          state.tableData = []
        }
      },
      //关闭岗位弹窗
      handleCloseJob(type) {
        if (!type) {
          state.jobForm.name = ''
        }

        state.jobVisible = type
      },
      //查询列表
      handleNodeClick(data) {
        if (data.jobList !== null && !data.jobList) {
          state.jobForm.id = data.id
          state.getUserList()
        } else {
          state.groupForm.id = data.id
        }
      },
      //获取关联用户列表
      getUserList() {
        const params = {
          size: pageValue.value.size,
          current: pageValue.value.current,
          employeeStatus: 1,
          jobId: state.jobForm.id,
          orgId: 0,
          recursion: true,
          ...searchForm.value
        }
        state.showLoading = true
        jobQueryJobUser(params)
          .then((res) => {
            state.showLoading = false
            if (res.code === 200) {
              state.total = res.data.total
              state.tableData = res.data.records
            }
          })
          .catch(() => {
            state.showLoading = false
          })
      },
      getHeight() {
        // 获取浏览器高度，减去顶部导航栏的值，70该值也可以动态获取
        state.contentStyleObj.height = window.innerHeight - 242
      },
      //组织架构选择岗位
      submitOrgSelect(value) {
        console.log(value)
        if (value && value.length > 0) {
          let ids = []
          ids = value.map((ele) => {
            return ele.id
          })
          const params = {
            jobId: state.jobForm.id || 0,
            userIds: ids
          }
          jobLinkUser(params).then((res) => {
            if (res.code === 200) {
              ElMessage.success('关联成功!')
              state.getUserList()
              state.querySingleTeamDeptTree()
            } else {
              ElMessage.warning(res.message)
            }
          })
        }
      },
      //新建下级岗位
      handleCreateDepartment(item, type, index) {
        switch (type) {
          case 0:
            state.jobType = 0
            state.groupVisible = true
            state.title = '新增岗位组'
            state.dialogButton = ['取消', '确定']
            state.groupForm.id = ''
            break
          case 1:
            state.jobType = 1
            state.jobVisible = true
            state.title = '新增岗位'
            state.dialogButton = ['取消', '确定']
            state.jobForm.id = ''
            break
          case 2:
            state.jobType = 2
            state.dialogButton = ['取消', '确定', '删除']
            if (item.jobList === null || item.jobList) {
              state.groupVisible = true
              state.title = '编辑岗位组'
              state.groupForm = JSON.parse(JSON.stringify(item))
            } else {
              state.jobVisible = true
              state.title = '编辑岗位'
              state.jobForm = JSON.parse(JSON.stringify(item))
            }
            break
          case 3:
            state.titleList = ['选择人员', '已选择人员']
            nextTick(() => {
              OrgStructureSelectionRef.value.init()
            })
            break
          case 4:
            state.handleDelMen(item)
            break
        }
      },
      //删除关联人员
      handleDelMen(item) {
        ElMessageBox.confirm('确定要移除该成员吗？', '提示', {
          type: 'warning'
        }).then(async () => {
          jobRemoveLinkUser(state.jobForm.id, item.userId).then((res) => {
            if (res.code === 200) {
              ElMessage.success('移除成功!')
              state.getUserList()
              state.querySingleTeamDeptTree()
            } else {
              ElMessage.warning(res.message)
            }
          })
        })
      },
      //获取岗位组树
      querySingleTeamDeptTree() {
        state.showLoading = true
        jobQueryJobList()
          .then((res) => {
            state.showLoading = false
            if (res.code === 200) {
              state.teamTree = res.data
              if (state.teamTree.length > 0) {
                if (state.teamTree[0].jobList.length > 0) {
                  state.jobForm.id = state.teamTree[0].jobList[0].id
                  state.getUserList()
                }
              }
            }
          })
          .catch(() => {
            state.showLoading = false
          })
      }
    })
    const tree = ref()
    watch(
      () => state.searchFrameWork,
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
    state.getHeight()
    state.querySingleTeamDeptTree()
    return {
      ...toRefs(state),
      tree,
      OrgStructureSelectionRef,
      pageValue,
      searchForm,
      handleSearch,
      searchInit
    }
  }
}
</script>

<style scoped lang="scss">
.searchBox {
  padding: 30px 16px 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
}
:deep(.el-table::before) {
  height: 0;
}
.search_condition_box_scope_limit {
  :deep(.el-input__inner) {
    width: 220px;
  }
}

.postManagement {
  .card {
    margin: 0;
    box-shadow: none;
  }
  .treeName {
    position: relative;
    display: block;
    font-size: 14px;
    max-width: 180px;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .custom-tree-node:hover .edit {
    display: block;
  }
  .edit {
    float: left;
    font-size: 14px;
    margin-left: 20px;
    color: #e01b2f;
    display: none;
  }
  .addMen {
    padding: 24px;
    text-align: right;
  }
  .team_content {
    display: flex;
    height: 100%;
    justify-content: space-between;
    .left_tree {
      height: calc(100vh - 230px);
      width: 400px;
      border: 1px solid #edeff2;
      .el-tree :deep(.el-tree-node__content) {
        height: 32px;
        margin: 0 20px;
      }
    }
    .right_table {
      position: relative;
      width: calc(100% - 400px);
      height: calc(100vh - 232px);
      padding: 30px 16px 0;
      background: #fff;
    }
  }
  .jobReminder {
    margin-top: 24px;
    color: #bfc2cc;
    font-size: 12px;
    text-align: center;
  }
}
</style>
