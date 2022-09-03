<template>
  <HeaderTabs :headerTitle="'角色管理'"> </HeaderTabs>
  <div class="roleManage">
    <div class="team_content">
      <div class="left_tree">
        <el-aside width="316px" class="left-container">
          <el-input
            v-model="searchContent"
            prefix-icon="el-icon-search"
            placeholder="搜索"
            @input="changeSearch"
            @clear="clearInfo"
            clearable
            style="width: 260px; margin: 20px; display: block"
          ></el-input>
          <el-container style="height: calc(100% - 120px); overflow: hidden">
            <el-main id="list" style="overflow-y: auto; width: 315px">
              <div style="width: 315px" class="left-body">
                <div v-for="(item, index) in items" :key="index">
                  <!-- @dragstart="dragstart(item)" @dragenter="dragenter(item)" @dragend="dragend" -->
                  <div class="iconClass" :class="{ active: isActive === index }" @click="handleNodeClick(item, index)">
                    <span style="padding-left: 18px">{{ item.roleName }}</span>
                    <el-dropdown style="float: right">
                      <span class="el-dropdown-link">
                        <i class="iconRightClass el-icon-more"></i>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item v-hasRole="['GS_JC_JS_PZ']" @click="showEditRoleModal('edit', item)">编辑 </el-dropdown-item>
                          <el-dropdown-item v-hasRole="['GS_JC_JS_PZ']" @click="deleteRoles(item)">删除</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </div>
              </div>
            </el-main>
            <el-footer class="left-footer" v-hasRole="['GS_JC_JS_PZ']" @click="showEditRoleModal('add')"> + 添加角色</el-footer>
          </el-container>
        </el-aside>
      </div>
      <div class="right_table">
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
        <Table :tableData="tableData" :tableHeight="'calc(100vh - 440px)'" :showSelect="false" @selectedList="handleSelectionChange" ref="tableRef">
          <template #column>
            <el-table-column label="姓名" align="center" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.name || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="电话" align="center" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.userInfoVO?.phone || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="职务" align="center" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.employeeJob || '-' }}
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
            <el-table-column label="操作日期" align="center" show-overflow-tooltip>
              <template #default="scope">
                <div class="scope_div">
                  {{ scope.row.updateTime || scope.row.createTime || '-' }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <div class="table_scope">
                  <el-button size="mini" type="text" v-hasRole="['GS_JC_JS_PZ']" @click="handleBtn(1, scope.row)">浏览</el-button>
                  <el-button size="mini" class="red-button" v-hasRole="['GS_JC_JS_PZ']" type="text" @click="handleBtn(2, scope.row)">移除</el-button>
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
        <table-bottom style="position: absolute; width: 100%">
          <template v-slot:bottomLeft>
            <el-button v-hasRole="['GS_JC_JS_PZ']" size="mini" v-if="roleId" type="primary" @click="addEmployee()">
              <i class="el-icon-plus"></i>
              关联成员
            </el-button>
          </template>
          <template v-slot:bottomRight>
            <Pagenation @getList="pageHandle" :page="page" :pageTotal="pageTotal"></Pagenation>
          </template>
        </table-bottom>
      </div>
    </div>
    <detailsModule ref="detailsRef" @getList="initRoleList"></detailsModule>
    <!-- 选择人员 -->
    <chooseOrganizationalStructure ref="chooseMansRef" :nodeKey="'id'" :select="false" :transferTitle="['选择人员', '已选择人员']" @subumit="getMen">
    </chooseOrganizationalStructure>
    <LookDetails ref="lookDetailsRef" @getList="handleNodeClick"></LookDetails>
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import detailsModule from './components/detailsModule.vue'
import { queryPage, deleteRole, linkUser, unlinkUser, roleQueryRoleUserList } from '@/api/company/basisSetting/roleManagement.js'
import { userQueryPage } from '@/api/systemManagement/organizationalStructure'
import chooseOrganizationalStructure from '@/components/organizationalStructure/index.vue'
import LookDetails from './components/lookDetails.vue'
import { useStore } from 'vuex'

export default {
  name: 'systemManagement-roleManagement',
  components: {
    detailsModule,
    LookDetails,
    chooseOrganizationalStructure
  },
  setup() {
    const store = useStore()
    //加载动画
    const loading = ref(false)
    const data = reactive({
      isActive: null, // 选择的角色状态
      // 列表数据
      tableData: [],
      roleId: null, //当前角色ID
      items: [], //左侧角色列表数据  // 角色树
      selectData: [],
      searchContent: ''
    })
    const page = ref({
      current: 1,
      size: 10
    })
    onMounted(() => {
      initRoleList()
    })
    //选人员相关
    let chooseMansRef = ref() //选人列表
    let lookDetailsRef = ref()
    //初始化定时器
    let timer = null
    //修改搜索内容
    const changeSearch = (val) => {
      data.searchContent = val
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        initRoleList()
      }, 200)
    }
    //清空事件
    const clearInfo = () => {
      initRoleList()
    }
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
            orgName: ''
          }
          page.value = { current: 1, size: 10 }
        }
        console.log(searchForm.value)
        handleNodeClick()
      }
    //获取右侧列表
    const handleNodeClick = async (val = '', index = '') => {
        if (val) {
          data.roleId = val.roleId
          data.isActive = index
        }
        nextTick(() => {
          tableRef.value.clearSelection() //清空选中
        })
        const res = await roleQueryRoleUserList({
          employeeStatus: 1,
          recursion: true,
          ...page.value,
          roleId: data.roleId || '',
          ...searchForm.value,
          orgId: JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.id || ''
        })
        if (res.code === 200) {
          console.log(res)
          data.tableData = res.data.records
          pageTotal.value = res.data.total
        } else {
          ElMessage.error(res.message)
        }
      },
      initRoleList = () => {
        loading.value = true
        // 左侧角色列表
        queryPage({ roleName: data.searchContent })
          .then((res) => {
            if (res.code === 200) {
              data.items = res.data
                ? res.data.sort((a) => {
                    return a.roleSeq
                  })
                : []
              if (data.items.length > 0) {
                handleNodeClick(data.items[0], 0)
              } else {
                data.roleId = null
                data.tableData = []
              }
            } else {
              ElMessage.warning(res.message)
            }
            loading.value = false
          })
          .catch((error) => {
            loading.value = false
            if (error) {
              console.log(error)
            }
          })
      },
      //弹窗ref
      detailsRef = ref(),
      // 显示添加框
      showEditRoleModal = async (type, row) => {
        if (type === 'add') {
          // 添加角色
          detailsRef.value.init('add', {}, data.items.length)
        } else if (type === 'edit') {
          detailsRef.value.init('edit', row)
        }
      },
      deleteRoles = (row) => {
        // 删除角色
        ElMessageBox.confirm('确定删除该角色吗？', '提示', {
          type: 'warning'
        }).then(() => {
          deleteRole(row.roleId)
            .then((res) => {
              if (res.code === 200) {
                initRoleList() //展示列表
                ElMessage({
                  type: 'success',
                  message: '删除成功!'
                })
              } else {
                ElMessage.error(res.message)
              }
            })
            .catch((error) => {
              if (error) {
                console.log(error)
              }
            })
        })
      },
      //点击操作事件
      handleBtn = (val, row) => {
        if (val === 1) {
          lookDetailsRef.value.init(row)
        } else {
          // 解除关联
          ElMessageBox.confirm('确定移除关联成员吗？', '提示', {
            type: 'warning'
          }).then(() => {
            unlinkUser(data.roleId, row.userId)
              .then((res) => {
                if (res.code === 200) {
                  handleNodeClick()
                  ElMessage({
                    type: 'success',
                    message: '移除成功!'
                  })
                } else {
                  ElMessage.error(res.message)
                }
              })
              .catch((error) => {
                if (error) {
                  console.log(error)
                }
              })
          })
        }
      },
      addEmployee = () => {
        // 选择员工
        chooseMansRef.value.init(store.getters.userInfoObj()?.orgId || '')
      },
      //选人带回数据进行角色绑定
      getMen = (val) => {
        let userIds = []
        userIds = val.map((ele) => {
          return ele.id
        })
        linkUser({ roleId: data.roleId, userIds: userIds })
          .then((res) => {
            if (res.code === 200) {
              handleNodeClick()
              ElMessage({
                type: 'success',
                message: '关联成功!'
              })
            } else {
              ElMessage.error(res.message)
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error)
            }
          })
      },
      searchInit = () => {
        page.value = { size: 10, current: 1 }
        handleNodeClick()
      }
    //选择框事件
    const selectData = ref([]),
      tableRef = ref(),
      handleSelectionChange = (val) => {
        selectData.value = val
      },
      pageTotal = ref(0),
      pageHandle = (data) => {
        // 分页查询
        page.value = data
        handleNodeClick()
      }
    return {
      ...toRefs(data),
      handleSelectionChange,
      pageHandle,
      pageTotal,
      detailsRef,
      showEditRoleModal,
      initRoleList,
      deleteRoles,
      handleNodeClick,
      tableRef,
      handleSearch,
      searchForm,
      chooseMansRef,
      lookDetailsRef,
      addEmployee,
      getMen,
      handleBtn,
      selectData,
      changeSearch,
      timer,
      clearInfo,
      store,
      page,
      searchInit
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.card {
  box-shadow: none;
  margin: 0;
  padding: 24px 0;
}
:deep(.el-table th > .cell) {
  text-align: left;
}
:deep(.el-table::before) {
  height: 0;
}
:deep(.table-card) {
  margin-top: 24px;
}
.search_condition_box_scope_limit {
  :deep(.el-input__inner) {
    width: 220px;
  }
}
.roleManage {
  height: calc(100vh - 200px);
  .left_tree {
    height: calc(100vh - 202px);
    position: relative;
  }
  .team_content {
    display: flex;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    /*border-top: 1px solid #eee;*/
  }
  .dialog {
    :deep(.el-dialog__body) {
      padding: 20px 0px;
    }
  }
  :deep(.el-drawer__header) {
    font-size: 20px;
    font-weight: 400;
    color: #303133;
  }

  .iconClass:hover {
    background-size: 15px 15px;
    background-color: #f4f5f6;
  }

  .iconRightClass {
    width: 20px;
    height: 20px;
    margin: 20px 20px 0 0;
    float: right;
    cursor: pointer;
  }

  .left-container {
    background-color: #fff;
    height: calc(100vh - 202px);
    position: relative;
    border-right: 1px solid #eee;
    @include scrollBar;

    :deep(.el-main) {
      padding: 0px 0 20px 0px;
    }

    .left-header {
      color: #1664ff;
      font-size: 16px;
      font-weight: 400;
      height: 40px !important;
      line-height: 40px;
      padding-left: 18px !important;
      border-bottom: 1px solid #eee;
    }

    .left-body {
      font-size: 14px;
      border: 0px;
      color: #303133;
      border-top: 1px solid #eee;

      > div {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        -webkit-user-drag: element;
        user-select: none;
      }

      .iconClass.active {
        border-left: 2px solid #1664ff;
      }
    }

    .left-footer {
      text-align: center;
      color: #1664ff;
      font-size: 16px;
      font-weight: 400;
      border-top: 1px solid #eee;
      width: 100%;
      height: 47px !important;
      line-height: 46px;
      position: absolute;
      bottom: 0;
      cursor: pointer;
    }
  }
  .right_table {
    position: relative;
    width: calc(100% - 316px);
    height: calc(100vh - 202px);
    padding: 30px 16px 0;
    background: #fff;
    box-sizing: border-box;
    :deep(.el-main) {
      padding: 0px 0 20px 0px;
    }

    .right-header {
      padding: 0;
      width: 100%;
      font-size: 14px;
      height: 51px !important;
      // border-bottom: 1px solid #eee;

      .title {
        height: 48px;
        line-height: 48px;
        display: flex;
        margin: 0 auto;

        .title-left {
          /*width: 376px;*/
          width: 100%;
          /*padding-left: 18px;*/
        }

        .title-right {
          width: 110px;
          /*margin-right: 10px;*/
        }
      }
    }
  }
}
</style>
