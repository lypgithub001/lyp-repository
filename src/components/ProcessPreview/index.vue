<template>
  <!-- 审批提交 -->
  <div class="process_preview" v-if="show">
    <el-dialog-module
      :width="width"
      :isShow="show"
      :title="pageTitle ? pageTitle : title"
      @onClose="cancelBtn"
      :closeOnClickModal="false"
      :isFooter="false"
      :appendToBody="true"
    >
      <template #content>
        <slot name="confirmInfo"></slot>
        <div class="approve_process_diaog" v-if="status == 1">
          <el-timeline>
            <el-timeline-item v-for="(item, index) in activityData" :key="index" placement="top">
              <div class="approve_process_div">
                <template v-if="customWorkflow">
                  <span style="color: #0e51d8; display: block; padding-bottom: 21px" @click="addFirstNodeClick()" v-if="index == 0">添加节点</span>
                </template>
                <!-- 审批人 -->
                <div v-if="item.nodeType === 'approver'">
                  <span class="approve_process_div_title">{{ item.activityName }}</span>
                  <span class="approve_process_div_num" v-if="item.activityActioners.length"
                    >{{ item.activityActioners.length }} 人{{ item.actType == 'and' ? '会签' : item.actType == 'or' ? '或签' : '' }}</span
                  >
                  <div class="approve_process_div_p" v-else>
                    <span class="approve_process_div_p_name">{{ getTypeName(item.type) }}</span>
                    <span class="approve_process_div_p_last" v-if="item.noneActionerAction === 'admin'">，将自动转交给管理员</span>
                    <span class="approve_process_div_p_last" v-if="item.noneActionerAction === 'auto'">，直接通过</span>
                  </div>
                </div>
                <!-- 抄送人 -->
                <div v-if="item.nodeType === 'notifier'">
                  <span class="approve_process_div_title">{{ item.activityName }}</span>
                  <span class="approve_process_div_num" v-if="item.activityActioners.length">抄送 {{ item.activityActioners.length }} 人</span>
                  <div class="approve_process_div_p" v-else>请选择抄送人</div>
                </div>
                <div class="approve_process_div_member">
                  <div class="process_preview-info process_div_img" v-for="(ele, idx) in item.activityActioners" :key="ele.id">
                    <div class="avater" :class="{ txAvater: ele.flag, avaterBor: !ele.avatar }">
                      <!-- <el-avatar shape="square" :size="34" :src="ele.avatar" v-if="ele.avatar"></el-avatar> -->
                      <img :src="ele.avatar" v-if="ele.avatar" />
                      <span class="avater_none" v-else>{{ ele.name ? ele.name.slice(0, 1) : '' }}</span>
                      <i class="el-icon-delete process_del_icon" v-if="ele.flag" @click="delCCPeople(index, idx)"></i>
                    </div>

                    <p class="approve_process_div_name" :title="ele.name">{{ ele.name }}</p>
                  </div>
                  <div v-if="item.type === 'target_select'" class="process_preview-info" @click="addCCPeople(item, index)">
                    <div class="avater avaterBor">
                      <i class="el-icon-plus" :size="34"></i>
                    </div>
                    <!-- <p class="approve_process_div_name">添加</p> -->
                  </div>
                </div>
                <template v-if="customWorkflow">
                  <span style="color: #0e51d8" @click="addNodeClick(item, index + 1)">添加节点</span>
                  <span style="color: #f04134; padding-left: 10px" @click="delNode(index)" v-if="item.flag">删除节点</span>
                </template>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div style="padding-bottom: 20px; font-size: 16px; color: #27272e" v-if="status == 0">确定要提交至审批？</div>
      </template>
      <template #footer>
        <div class="el-dialog__footer">
          <el-button size="small" @click="cancelBtn" v-if="cancel">{{ cancel }}</el-button>
          <el-button size="small" type="primary" @click="successBtn" v-preventReClick :loading="subLoading">{{ confirm }}</el-button>
        </div>
      </template>
    </el-dialog-module>

    <OrgStructureSelection
      ref="orgStructureSelectionRef"
      :selectDataList="selectDataList"
      :select="select"
      @subumit="submitOrgSelect"
      :appendToBody="true"
      :selectType="selectType"
      :transferTitle="transferTitle"
    />

    <AddNode ref="addNodeRef" @getNodeData="getNodeData" />
  </div>
</template>
<script>
import { generateActivity } from '@/api/company/approvalConfig.js'
import { reactive, toRefs, getCurrentInstance, ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import OrgStructureSelection from '@/components/organizationalStructure/index.vue'
import AddNode from './addNode.vue'
import store from '../../store'

// 页面调用例子
export default {
  name: 'ProcessPreview',
  props: {
    queryData: {
      type: Object,
      default: () => {}
    },
    queryRef: {
      default: ref()
    },
    pageTitle: {
      type: String,
      default: ''
    }
  },
  components: { OrgStructureSelection, AddNode },
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance()
    const orgStructureSelectionRef = ref()
    const addNodeRef = ref()
    const state = reactive({
      width: '600px',
      activityData: [],
      // require('@/components/module/images/UpLoad/add.png')
      selectType: '0', // 0人员  1部门
      transferTitle: computed(() => {
        return state.selectType == 0 ? ['选择成员', '已选成员'] : state.selectType == 1 ? ['选择部门', '已选部门'] : ['源列表', '目标列表']
      }),
      status: -1,
      addImg: '',
      show: false,
      title: '流程',
      confirm: '提交',
      cancel: '取消', //返回文字
      data: {}, //查询所需参数{ businessType: 0, purchaseOrigin: 0, amount: 0, createBy: 0 }
      user: {}, // 用户信息
      subLoading: false,
      interface: '', //提交审核接口
      id: '', //业务主键id
      //组织架构
      dialogVisible: false,
      selectDataList: [],
      select: true,
      cIndex: -1,
      customWorkflow: false,
      // 查询所需参数 businessType， purchaseOrigin ，amount， createBy
      init(value) {
        Object.assign(state, value)
        state.getProcess()
      },
      getProcess() {
        state.activityData = []
        state.subLoading = true
        generateActivity(state.data)
          .then((res) => {
            if (res.code == 200) {
              state.activityData = res.data.workflowList
              state.status = res.data.status
              state.customWorkflow = res.data.customWorkflow == 1 ? true : false
              state.subLoading = false
              state.activityData.forEach((ele) => {
                if (ele.activityActioners == null) ele.activityActioners = []
                ele.activityActioners.forEach((item) => {
                  item.flag = false //不允许修改的数据
                })
                ele.flag = false
              })
              state.show = true
              console.log('state.activityData', state.activityData)
            } else {
              ElMessage.warning(res.message)
            }
          })
          .catch((e) => {
            state.cancelBtn()
          })
      },
      getTypeName(type) {
        switch (type) {
          case 'target_label':
            return '岗位为空'
          case 'target_management':
            return '找不到部门主管'
          case 'target_approval':
            return '指定成员'
          case 'target_select':
            return '发起人自选'
        }
      },
      cancelBtn() {
        state.show = false
        state.subLoading = false
        //   proxy.$bus.emit('submitProcess', false)
        emit('submitProcess', false)
      },
      // 提交所需参数  processList  id
      btnStatus: true,
      successBtn() {
        store.commit('set_prompt', true)
        state.subLoading = true
        let flag = false,
          message = '',
          form = {},
          query = state.interface
        let queryData = props.queryData
        let queryRef = props.queryRef
        //   console.log(queryData)
        //   console.log(111111, props.queryRef)
        // 去掉重复人员
        state.activityData.forEach((e) => {
          var obj = {}
          e.activityActioners = e.activityActioners.reduce(function (item, next) {
            obj[next.id] ? '' : (obj[next.id] = true && item.push(next))
            return item
          }, [])

          if (e.nodeType === 'approver') {
            if (e.type === 'target_select') {
              if (e.activityActioners.length === 0) {
                flag = true
                message = e.activityName + '下发起人自选不能为空'
                state.subLoading = false
              }
            }
          }
        })
        console.log('message', message)

        form = {
          processList: state.activityData,
          approveFlowStatus: state.status,
          id: state.id
        }
        form.processList.forEach((item) => {
          item['userIdList'] = item.activityActioners.map((e) => {
            return e.id
          })
        })
        if (queryData) {
          //   审批需要传额外参数
          form = {
            processList: state.activityData,
            approveFlowStatus: state.status,
            id: state.id,
            ...queryData
          }

          queryRef.validate((valid) => {
            //  校验
            if (valid) {
              state.submitFn(flag, query, form, message)
            } else {
              console.log('error submit!')
              state.subLoading = false
              return false
            }
          })
          return
        }
        //   没有额外参数
        state.submitFn(flag, query, form, message)
      },
      submitFn: (flag, query, form, message) => {
        //提交
        if (!flag) {
          if (state.id) {
            if (query) {
              query(form)
                .then((res) => {
                  state.subLoading = false
                  if (res.code == 200) {
                    state.show = false
                    ElMessage.success('提交成功')
                    emit('submitProcess', true)
                  } else {
                    ElMessage.warning(res.message)
                  }
                })
                .catch((err) => {
                  state.subLoading = false
                })
            } else {
              state.show = false
              emit('submitProcess', form)
            }
          } else {
            emit('submitProcess', form)
            state.subLoading = false
            state.show = false
          }
        } else {
          ElMessage.warning(message) //自选审批人必须选人
        }
      },
      delCCPeople(index, idx) {
        if (state.activityData[index].activityActioners[idx].flag) {
          state.activityData[index].activityActioners.splice(idx, 1)
        }
      },
      //  组织架构
      addCCPeople(row, index) {
        state.cIndex = index
        if (row.type !== 'target_select') return
        orgStructureSelectionRef.value.init()
        state.select = false
        state.selectDataList = []
        row.activityActioners.forEach((item) => {
          if (item.flag) {
            state.selectDataList.push(item)
          }
        })
      },
      submitOrgSelect(value) {
        if (value && value.length > 0) {
          value.forEach((item) => {
            item.flag = true
          })
          let list = value.map((item) => {
            return {
              flag: true,
              avatar: item.avatar,
              id: item.id,
              name: item.name
            }
          })
          let arr = []
          state.activityData[state.cIndex].activityActioners.forEach((e, index) => {
            if (!e.flag) {
              arr.push(e)
            }
          })

          state.activityData[state.cIndex].activityActioners = [...arr, ...list]
        }
        state.closeOrgSelect()
      },
      closeOrgSelect() {
        state.dialogVisible = false
      },
      aIndex: 0,
      addNodeClick(row, index) {
        state.aIndex = index
        addNodeRef.value.init()
      },
      addFirstNodeClick() {
        state.aIndex = 0
        addNodeRef.value.init()
      },
      getNodeData(data) {
        state.activityData.splice(state.aIndex, 0, data)
      },
      delNode(index) {
        state.activityData.splice(index, 1)
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(props),
      orgStructureSelectionRef,
      addNodeRef
    }
  }
}
</script>
<style lang="scss" scoped>
.approve_process_diaog {
  margin: 10px 0 0 0;
  cursor: pointer;
}
:deep(.el-timeline-item__content) {
  padding-bottom: 14px;
}
.approve_process_div {
  position: relative;
  top: -20px;
  .approve_process_div_title {
    font-size: 16px;
    font-weight: 400;
    text-align: right;
    color: #202224;
    line-height: 20px;
    font-family: 'siyuan, siyuan-Medium';
  }
  .approve_process_div_num {
    padding-left: 16px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #bfc2cc;
    line-height: 20px;
  }
  .approve_process_div_p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    line-height: 20px;
    .approve_process_div_p_name {
      color: $color-error;
    }
    .approve_process_div_p_last {
      color: #bfc2cc;
    }
  }
  .approve_process_div_member {
    margin: 16px 0 0 0;
    display: flex;
    flex-flow: wrap;

    .process_preview-info {
      width: 52px;
      height: 53px;
      text-align: center;
      margin: 0 16px 16px 0;
      position: relative;
      .approve_process_div_name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        font-size: 12px;
        margin-top: 3px;
      }
      :deep(.el-avatar) {
        background: transparent;
      }
      .process_del_icon {
        display: none;
        width: 16px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        left: 35%;
        top: 20%;
        color: $color-error;
      }
    }
    .txAvater:hover {
      opacity: 0.75;
      border-color: $color-error;
      .process_del_icon {
        display: block;
      }
      .avater_none {
        display: none;
      }
    }
    .el-avatar--square {
      border-radius: 50%;
    }
    .avaterBor {
      border: 1px solid $--color-primary;
      // background: #fff0f2;
    }
    .avater {
      border-radius: 50%;
      width: 34px;
      height: 34px;

      color: $--color-primary;
      text-align: center;
      line-height: 34px;
      margin: 0 auto;
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid $--color-primary;
      }
      :deep(img) {
        width: 34px;
        height: 34px;
      }
    }
  }
}
:deep(.el-timeline-item) {
  padding-bottom: 0;
}
</style>
