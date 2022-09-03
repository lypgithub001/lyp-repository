<template>
  <div class="approvalProcess">
    <card-container :typeArea="true" :isTitle="false" v-if="approveList.length">
      <template #title></template>
      <template #content>
        <div v-loading="loading">
          <div class="approval_process" v-if="approveList && approveList.length > 0">
            <div class="first">
              <div style="font-size: 14px; margin-bottom: 20px; font-weight: 600; text-align: left; color: #27272e">审批流程</div>
              <div class="first_content">
                <div v-for="(first, i) in approveList" :key="i">
                  <template v-if="i === 0">
                    <div v-for="(second, index) in first.approveProgressVOList" :key="index">
                      <div class="time_line">
                        <div class="time_line__tail" v-if="first.approveProgressVOList.length != index + 1"></div>
                        <div class="time_line__node time_line__node--normal">
                          {{ index + 1 }}
                        </div>
                        <div v-for="(item, z) in second.approveNodeList" :key="z">
                          <div class="time_line__wrapper">
                            <div class="time_line__content">
                              <div class="clear" style="margin-bottom: 14px">
                                <div class="approval_list fl">
                                  <div class="avater">
                                    <span class="avater_none" v-if="item.approveUserImage">
                                      <img :src="item.approveUserImage" alt="" />
                                    </span>
                                    <span class="avater_none" v-else>{{ item.approveUserName ? item.approveUserName.slice(0, 1) : '' }}</span>
                                  </div>
                                  <div class="appro_user">
                                    <div class="userName">{{ item.approveUserName }}</div>
                                    <div class="timeline_time">
                                      <tag-style
                                        v-if="second.nodeType === 'approver'"
                                        :content="
                                          item.status === 0
                                            ? '审批中'
                                            : item.status === 1
                                            ? '审批通过'
                                            : item.status === 2
                                            ? '审批失败'
                                            : item.status === 3
                                            ? '审批略过'
                                            : '-'
                                        "
                                      />
                                      {{ item.updateTime ? item.updateTime : '-' }}
                                    </div>
                                  </div>
                                </div>
                                <div class="fr" v-if="second.nodeType === 'notifier'">
                                  <div class="status_bg" :class="item.status === 0 ? 'dengdai' : item.status === 1 ? 'tongguo' : ''"></div>
                                  <div class="apl_status" :class="item.status === 0 ? 'dengdai1' : item.status === 1 ? 'tongguo1' : ''">
                                    {{ item.status === 0 ? '待抄送' : item.status === 1 ? '已抄送' : '' }}
                                  </div>
                                </div>
                              </div>
                              <div class="timeline_desc" v-if="item.approveOpinion">
                                {{ item.approveOpinion }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="second" v-if="approvalHistory">
              <div style="font-size: 14px; margin-bottom: 20px; font-weight: 600; text-align: left; color: #27272e">历史审批记录</div>
              <div class="first_content" v-if="approveList.length > 1">
                <div v-for="(first, i) in approveList" :key="i">
                  <template v-if="i > 0">
                    <div v-for="(second, index) in first.approveProgressVOList" :key="index">
                      <div class="time_line">
                        <div class="time_line__tail" v-if="first.approveProgressVOList.length != index + 1"></div>
                        <div class="time_line__node time_line__node--normal">
                          {{ index + 1 }}
                        </div>
                        <div v-for="(item, z) in second.approveNodeList" :key="z">
                          <div class="time_line__wrapper">
                            <div class="time_line__content">
                              <div class="clear" style="margin-bottom: 14px">
                                <div class="approval_list fl">
                                  <div class="avater">
                                    <span class="avater_none" v-if="item.approveUserImage">
                                      <img :src="item.approveUserImage" alt="" />
                                    </span>
                                    <span class="avater_none" v-else>{{ item.approveUserName ? item.approveUserName.slice(0, 1) : '' }}</span>
                                  </div>
                                  <div class="appro_user">
                                    <div class="userName">{{ item.approveUserName }}</div>
                                    <div class="timeline_time" style="">
                                      <tag-style
                                        v-if="second.nodeType === 'approver'"
                                        :content="
                                          item.status === 0
                                            ? '待审批'
                                            : item.status === 1
                                            ? '审批通过'
                                            : item.status === 2
                                            ? '审批失败'
                                            : item.status === 3
                                            ? '审批取消'
                                            : '-'
                                        "
                                      />
                                      {{ item.updateTime ? item.updateTime : '-' }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="timeline_desc" v-if="item.approveOpinion">
                                {{ item.approveOpinion }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="noPassReason" v-if="isApproval && needCheck">
            <el-form :model="approvalForm" :rules="approvalRules" ref="approvalFormRef" label-width="">
              <el-form-item label="拒绝原因" prop="approveOpinion" style="width: 100%; max-width: none">
                <el-input
                  type="textarea"
                  v-model="approvalForm.approveOpinion"
                  :autosize="{ minRows: 4, maxRows: 6 }"
                  maxLength="341"
                  placeholder="不通过情况下必填"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- <BottomDetail>
            <template v-slot:bottomLeft>
              <el-button size="mini" :loading="btnLoading" @click="closeForm">关闭</el-button>
              <el-button size="mini" type="danger" :loading="btnLoading" @click="closeFunc" v-if="needCheck && isApproval">打回</el-button>
              <el-button size="mini" type="primary" :loading="btnLoading" @click="submitFunc" v-if="needCheck && isApproval">批准</el-button>
            </template>
          </BottomDetail> -->
        </div>
      </template>
    </card-container>
    <card-container :typeArea="true" v-else>
      <template #title>审批流程</template>
      <template #content>
        <div class="el-empty" style="line-height: 60px; color: #909399; padding: 0">暂无数据</div>
      </template>
    </card-container>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs, watch, inject, ref } from 'vue'
import { getApproveDetail, checkApproval } from '@/api/company/approvalConfig.js'
import { formatDate } from '@/utils/common.js'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

export default {
  name: 'approval_process',
  props: {
    id: {
      required: true
    },
    ids: {
      type: Array,
      default: () => []
    },
    auditLog: {
      //审核日志列表需要隐藏按钮
      type: Boolean,
      default: false
    },
    approvalHistory: {
      //是否展示审核历史
      type: Boolean,
      default: true
    }
  },
  setup(prop, { emit }) {
    onMounted(() => {
      if (state.id) state.getApproveDetail()
    })
    watch(
      () => prop.id,
      (id) => {
        if (id) {
          state.getApproveDetail()
        }
      }
    )

    const closeNowTag = inject('closeNowTag')
    const route = useRoute()
    const approvalFormRef = ref()
    const state = reactive({
      approveList: [],
      id: computed(() => {
        return prop.id
      }),
      ids: computed(() => {
        return prop.ids
      }),
      type: computed(() => {
        return prop.type
      }),
      loading: false,
      getApproveDetail() {
        state.approveList = []
        state.loading = true
        getApproveDetail({ relationId: state.id })
          .then((res) => {
            // console.log(11111, res)
            state.loading = false
            if (res.code === 200) {
              state.approveList = res.data
              console.log(' state.approveList', state.approveList)
              state.approveList.forEach((item, index) => {
                item.approveProgressVOList.forEach((ele, idx) => {
                  if (ele.approveNodeList.length === 0) {
                    state.approveList[index].approveProgressVOList.splice(idx, 1)
                  }
                })
              })

              if (state.approveList.length) {
                state.needCheck = state.approveList[0].needCheck
                let status = state.approveList[0].status
                if (state.needCheck && status == 0) {
                  //   needCheck: true, status: 0, 则显示按钮
                  emit('getLimit', true)
                } else {
                  emit('getLimit', false)
                }
              }
            }
          })
          .catch(() => {
            state.loading = false
          })
      },

      approvalForm: {
        approveOpinion: ''
      },
      approvalRules: {
        approveOpinion: [{ required: true, message: '请输入审批意见', trigger: 'blur' }]
      },
      btnLoading: false,
      needCheck: false,
      submitFunc() {
        return new Promise((resolve, reject) => {
          state.btnLoading = true
          checkApproval({
            approveStatus: 1,
            approveOpinion: state.approvalForm.approveOpinion,
            relationId: state.ids.length ? state.ids : state.id
          })
            .then((res) => {
              state.btnLoading = false
              if (res.code === 200) {
                ElMessage.success('审批成功')
                state.getApproveDetail()
                resolve(false)
              }
            })
            .catch((err) => {
              state.btnLoading = false
              reject(false)
            })
        })
      },
      closeFunc() {
        return new Promise((resolve, reject) => {
          state.btnLoading = true
          approvalFormRef.value.validate((valid) => {
            if (valid) {
              checkApproval({
                approveStatus: 2,
                approveOpinion: state.approvalForm.approveOpinion,
                relationId: state.ids.length ? state.ids : state.id
              })
                .then((res) => {
                  state.btnLoading = false
                  if (res.code === 200) {
                    ElMessage.success('审批成功')
                    state.getApproveDetail()
                    resolve(false)
                  }
                })
                .catch((err) => {
                  state.btnLoading = false
                  reject(false)
                })
            } else {
              ElMessage.warning('请输入审批意见')
              reject(false)
            }
          })
        })
      },
      closeForm() {
        closeNowTag()
      }
    })
    return {
      ...toRefs(state),
      formatDate,
      approvalFormRef,
      isApproval: computed(() => route.query.isApproval === 'isApproval')
    }
  }
}
</script>
<style lang="scss" scoped>
.approval_process {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .tagClass {
    text-align: center;
    width: auto;
    padding: 0;
    min-width: none;
    margin-right: 10px;
  }
  .first {
    width: 49.5%;
    padding: 16px 20px;
    background-color: #f7f8fa;
  }
  .second {
    padding: 16px 20px;
    width: 49.5%;
    /*flex: auto;*/
    /*margin-left: 24px;*/
    background-color: #f7f8fa;
  }
  .first_content {
    background-color: #fff;
    border-radius: 4px;
    padding: 30px 20px 0px 20px;
  }
  .time_line {
    position: relative;
    padding-bottom: 10px;
  }

  .time_line__wrapper {
    position: relative;
    padding-left: 28px;
    top: -12px;
  }

  .time_line__tail {
    position: absolute;
    left: 6px;
    height: 100%;
    border-left: 1px dashed #cbced9;
  }

  .time_line__node {
    position: absolute;
    background-color: #cbced9;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .time_line__node--normal {
    left: -1px;
    width: 16px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    color: #fff;
  }
  .time_line__content {
    color: #303133;
  }
  .approval_list {
    display: flex;
  }
  .appro_user {
    margin-left: 10px;
    .userName {
      color: #1d2129;
      font-size: 14px;
      font-weight: 600;
      margin-top: 2px;
    }
  }
  .status_bg {
    display: inline-block;
    margin-right: 6px;
    height: 8px;
    width: 8px;
    background-color: green;
    border-radius: 50%;
  }
  .apl_status {
    margin-top: 10px;
    display: inline-block;
    font-size: 16px;
  }
  .dengdai {
    background-color: #5077c7;
  }
  .tongguo {
    background-color: #00be6c;
  }
  .jujue {
    background-color: #e01b2f;
  }
  .dengdai1 {
    color: #5077c7;
  }
  .tongguo1 {
    color: #00be6c;
  }
  .jujue1 {
    color: #e01b2f;
  }
  .timeline_time {
    font-size: 12px;
    color: #86909c;
  }
  .timeline_desc {
    margin-left: 50px;
    margin-bottom: 5px;
    padding: 10px 10px 12px 10px;
    color: #606266;
    background: #f7f8fa;
    border-radius: 0px 8px 8px 8px;
  }
  .avater {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    /* background: #fff0f2; */
    color: #1664ff;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    .avater_none img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  :deep(.main-bottom) {
    min-height: 0;
    margin: 0;
  }
}
.noPassReason {
  /* width: 901px; */
  height: 140px;
  padding: 25px 54px;
  box-sizing: border-box;
  background: #f7f8fa;
  :deep(.el-textarea__inner) {
    width: 500px;
  }
}
</style>
