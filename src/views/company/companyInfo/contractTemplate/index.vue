<template>
  <div class="contract-template" v-loading="loadingStatus">
    <HeaderTabs :tabList="tabList" :activeName="activeName" :headerTitle="'合同模板管理'" @tabClick="tabClick">
      <template v-slot:rightContainer> </template>
    </HeaderTabs>
    <div class="new-container">
      <table-search @handleSearch="handleSearch">
        <template #search>
          <div>
            <p>合同模板名称</p>
            <el-input v-model.trim="searchForm.name" placeholder="合同模板名称"></el-input>
          </div>
          <div>
            <p>最后编辑人</p>
            <el-input v-model.trim="searchForm.updateByName" placeholder="最后编辑人"></el-input>
          </div>
          <div class="search_single_size_big">
            <p>编辑时间</p>
            <el-date-picker
              v-model="searchForm.updateTimeRange"
              type="datetimerange"
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
              range-separator="-"
              start-placeholder="编辑开始日期"
              end-placeholder="编辑结束日期"
            ></el-date-picker>
          </div>
          <div class="search_single_size_big">
            <p>引用次数</p>
            <el-input-range min-placeholder="引用次数开始" max-placeholder="引用次数结束" v-model="searchForm.refCountRange" />
          </div>
        </template>
      </table-search>
      <div class="template-content">
        <div class="content-left">
          <div class="content-left-header">
            <div>合同分类</div>
            <div>
              <el-button size="mini" type="text" @click="addNewClassification" v-hasRole="['GS_GL_HTMBGL_XZFL']"><i class="el-icon-plus"></i>新增</el-button>
            </div>
          </div>
          <div class="treeBox">
            <div class="filter-input">
              <el-input placeholder="搜索分类" v-model="searchValue" @input="filterType"></el-input>
            </div>
            <div class="treeBox-header" @click="handleSearch('')">合同分类（{{ typeTotal }}）</div>
            <ul>
              <li
                v-for="(item, index) in classList"
                :key="index"
                class="class-item"
                @mouseenter="item.isShow = true"
                @mouseleave="item.isShow = false"
                @click="typeClick(item)"
              >
                <div>{{ item.name }}（{{ item.contractTemplateNum || '0' }}）</div>
                <div v-show="item.isShow">
                  <i
                    class="el-icon-edit icon-style"
                    style="font-size: 17px; padding: 0 5px"
                    @click.stop="classEdit(item, 1)"
                    v-hasRole="['GS_GL_HTMBGL_XGFL']"
                  ></i>
                  <i class="el-icon-delete icon-style" style="font-size: 17px" @click.stop="classEdit(item, 2)" v-hasRole="['GS_GL_HTMBGL_SCFL']"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-right">
          <el-scrollbar :style="{ maxHeight: 'calc(100vh - 365px)' }">
            <Table :tableData="tableData" :showSelect="true" ref="tableRef" @selectedList="checkCb" :showIndex="false" :propsLabelList="column">
              <template #operate>
                <el-table-column label="操作" width="150px">
                  <template #default="scope">
                    <el-button size="mini" type="text" @click="logicHandle(1, scope.row)">浏览</el-button>
                    <el-button size="mini" type="text" @click="logicHandle(3, scope.row)" v-hasRole="['GS_GL_HTMBGL_BJMB']">编辑</el-button>
                    <el-button size="mini" type="text" class="del-button" @click="logicHandle(4, scope.row)" v-hasRole="['GS_GL_HTMBGL_SCMB']">删除</el-button>
                  </template>
                </el-table-column>
              </template>
            </Table>
            <table-bottom>
              <template v-slot:bottomLeft>
                <el-button size="mini" type="primary" @click="logicHandle(2)" v-hasRole="['GS_GL_HTMBGL_XZMB']"><i class="el-icon-plus"></i>新增</el-button>
              </template>
              <template v-slot:bottomRight>
                <Pagenation @getList="getList" :page="page" :pageTotal="pageTotal"></Pagenation>
              </template>
            </table-bottom>
          </el-scrollbar>
        </div>
      </div>
    </div>

    <AddNewClassification ref="addNewClassificationRef" @saveSuccess="typeSaveSuccess"></AddNewClassification>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import { getLabel } from '@/utils/common.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import AddNewClassification from './components/AddNewClassification.vue'
import { useStore } from 'vuex'
import { contractTypeList, contractTypeDelete, contractTemplateQueryPage, contractTemplateQueryDelete } from '@/api/company/basisSetting/contractTemplate.js'
import elInputRange from '@/components/elInputRange/index.vue'
export default {
  name: '',
  components: {
    AddNewClassification,
    elInputRange
  },
  setup() {
    const store = useStore()
    const dicData = reactive({
      statusList: store.getters.filteredSystemDictList('ContractTemplateStatusEnum') || [],
      auditStatusList: store.getters.filteredSystemDictList('ContractTemplateStatusEnum') || []
    })
    const router = useRouter()
    const addNewClassificationRef = ref()
    onMounted(() => {
      console.log(dicData.statusList)
      state.getTypeList()
      state.init()
    })
    const state = reactive({
      loadingStatus: false,
      searchForm: {
        status: 'FORMAL'
      },
      loadingLeft: false,
      tabList: [
        {
          label: '合同模板',
          name: 'FORMAL'
        },
        {
          label: '草稿',
          name: 'DRAFT'
        }
      ],
      classList: [],
      searchValue: '',
      initClassList: [],
      selectData: [],
      pageTotal: 0,
      typeTotal: 0,
      page: { current: 1, size: 10 },
      column: [
        // 表头data
        { prop: 'name', label: '合同模板名称' },
        { prop: 'typeName', label: '合同分类' },
        { prop: 'refCount', label: '引用次数' },
        { prop: 'description', label: '合同说明' },
        { prop: 'updateName', label: '最后编辑人' },
        { prop: 'updateTime', label: '最后编辑时间' }
      ],
      tableData: [],
      activeName: 'FORMAL',
      //初始化列表
      init: () => {
        state.getList({ size: 10, current: 1 })
      },
      getList: (page) => {
        state.page = page
        state.loadingStatus = true
        let searchForm = JSON.parse(JSON.stringify(state.searchForm))
        if (searchForm.updateTimeRange) {
          searchForm.smallUpdateTime = searchForm.updateTimeRange[0]
          searchForm.bigUpdateTime = searchForm.updateTimeRange[1]
        }
        if (searchForm.refCountRange) {
          searchForm.smallRefCount = searchForm.refCountRange[0]
          searchForm.bigRefCount = searchForm.refCountRange[1]
        }
        contractTemplateQueryPage({ ...page, ...searchForm })
          .then((res) => {
            state.loadingStatus = false
            if (res.code === 200) {
              const data = res.data
              state.pageTotal = data.total
              state.tableData = data.records.map((item) => {
                item.refCount = item.refCount.toString()
                return item
              })
            }
          })
          .catch((res) => {
            state.loadingStatus = false
          })
      },
      typeClick(item) {
        state.searchForm.type = item.id
        state.init()
      },
      //分类过滤
      filterType() {
        if (!state.searchValue) {
          state.classList = state.initClassList
        } else {
          state.classList = state.initClassList.filter((item) => {
            return item.name.indexOf(state.searchValue) != -1
          })
        }
      },
      getTypeList() {
        state.loadingStatus = true
        contractTypeList()
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.classList = res.data
              state.initClassList = res.data
              //分类求和
              state.typeTotal = res.data.reduce((pre, item) => {
                return pre + item.contractTemplateNum
              }, 0)
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      },
      typeSaveSuccess(type) {
        ElMessage.success(`${type == 'add' ? '新增' : '编辑'}成功！`)
        state.getTypeList()
        state.init()
      },
      //新增分类
      addNewClassification() {
        addNewClassificationRef.value.init('add')
      },
      classEdit(item, type) {
        if (type == 1) {
          addNewClassificationRef.value.init('edit', JSON.parse(JSON.stringify(item)))
        } else {
          if (item.contractTemplateNum > 0) {
            ElMessage.warning('该分类下关联了合同，请移除所有合同后再删除分类！')
            return
          }
          ElMessageBox.confirm('确定删除分类吗？', '提示', {
            type: 'warning'
          })
            .then(async () => {
              state.loadingStatus = true
              contractTypeDelete(item.id)
                .then((res) => {
                  state.loadingStatus = false
                  if (res.code === 200) {
                    ElMessage.success('删除成功！')
                    state.getTypeList()
                  }
                })
                .catch((res) => {
                  state.loadingStatus = false
                })
            })
            .catch(() => {})
        }
      },
      tabClick: (tab) => {
        state.activeName = tab.props.name
        state.searchForm.status = tab.props.name
        state.init()
      },
      handleSearch: (val) => {
        console.log(val)
        if (val) {
          state.init()
        } else {
          state.searchForm = {
            status: 'FORMAL'
          }
          state.page = {
            current: 1,
            size: 10
          }
          state.init()
        }
      },
      logicHandle(val, row) {
        switch (val) {
          case 1: //浏览
            router.push({ path: '/company/editContractTemplate', query: { type: 'view', id: row.id } })
            break
          case 2: //新增
            router.push({ path: '/company/editContractTemplate', query: { type: 'add' } })
            break
          case 3: //修改
            router.push({ path: '/company/editContractTemplate', query: { type: 'edit', id: row.id } })
            break
          case 4: //删除
            ElMessageBox.confirm(`确定删除选中数据吗？`, '提示', {
              type: 'warning'
            })
              .then(async () => {
                state.loadingStatus = true
                contractTemplateQueryDelete(row.id)
                  .then((res) => {
                    state.loadingStatus = false
                    if (res.code === 200) {
                      ElMessage.success('删除成功！')
                      state.init()
                      state.getTypeList()
                    }
                  })
                  .catch((res) => {
                    state.loadingStatus = false
                  })
              })
              .catch(() => {})
            break
        }
      },
      checkCb(data) {
        console.log(data)
        state.selectData = data
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      addNewClassificationRef
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.contract-template {
  .icon-style {
    color: #4e5969;
    cursor: pointer;
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
  .iconBox:hover .selectBox {
    display: block;
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
  .treeBox {
    @include scrollBar;
    overflow: auto;
    padding: 24px 24px;
    :deep(.el-tree-node__label) {
      font-size: $font-size-base;
    }
    height: calc(100vh - 480px);
    .filter-input {
      .el-input__inner {
        background: #f7fafc;
        border: 1px solid transparent;
      }
      margin-bottom: 16px;
    }
    .treeBox-header {
      font-size: 14px;
      font-family: 'siyuan, siyuan-Regular';
      text-align: left;
      color: #4a5568;
      height: 48px;
      line-height: 48px;
      cursor: pointer;
    }
    .class-item {
      color: #718096;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      display: flex;
      justify-content: space-between;
    }
  }
  .template-content {
    display: flex;
    width: 100%;
    .content-left {
      width: 240px;
      height: calc(100vh - 360px);
      background: #ffffff;
      box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
      flex-shrink: 0;
      .content-left-header {
        font-size: 14px;
        padding: 24px;
        border-bottom: 1px solid #edf2f7;
        display: flex;
        justify-content: space-between;
      }
    }
    .content-right {
      flex: 1;
      width: calc(100% - 240px);
      padding-left: 16px;
      border-left: 2px solid #e5e6eb;
    }
  }
}
</style>
