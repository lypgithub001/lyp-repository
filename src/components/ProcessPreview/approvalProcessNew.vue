<template>
  <div class="approvalProcess">
    <card-container :typeArea="true" :isTitle="false" v-if="approveList.length">
      <template #title></template>
      <template #content>
        <div v-loading="loading">
          <div class="approval_process">
            <div class="first" v-if="approveList && approveList.length > 0">
              <div style="font-size: 14px; margin-bottom: 20px; font-weight: 600; text-align: left; color: #27272e">审批流程</div>
              <div class="first_content">
                <div v-for="(first, i) in approveList" :key="i">
                  <template v-if="i === 0">
                    <div v-for="(second, index) in first.approveProgressVOList" :key="index">
                      <div class="time_line">
                        <div class="time_line__tail" v-if="first.approveProgressVOList.length != index + 1"></div>
                        <!-- <div class="time_line__node time_line__node--normal">
                          {{ index + 1 }}
                        </div> -->
                        <div v-for="(item, z) in second.approveNodeList" :key="z">
                          <div class="time_line__wrapper" v-if="z == 0">
                            <div class="time_line__content">
                              <div class="clear" style="margin-bottom: 14px">
                                <div class="approval_list fl">
                                  <div class="avater">
                                    <span class="avater_none" v-if="item.approveUserImage">
                                      <!-- 默认头像== 发起人/只有一个审批人的当前流程/只抄送一个人 -->
                                      <img v-if="second.nodeType == 'start' || second.approveNodeList.length == 1" :src="item.approveUserImage" alt="" />
                                      <span v-if="second.nodeType == 'notifier' && second.approveNodeList.length > 1" class="fullCircle"
                                        ><i class="el-icon-s-promotion"></i
                                      ></span>
                                      <!-- 当前审批流程中头像 -->
                                      <span
                                        v-if="
                                          second.nodeType == 'approver' &&
                                          currentApprovalIndex == second.approveProcessSort &&
                                          second.approveNodeList.length > 1
                                        "
                                        class="fullCircle"
                                        ><i class="el-icon-s-check"></i
                                      ></span>
                                      <img
                                        v-if="
                                          second.nodeType == 'approver' &&
                                          currentApprovalIndex != second.approveProcessSort &&
                                          second.approveNodeList.length > 1
                                        "
                                        :src="item.approveUserImage"
                                        alt=""
                                      />
                                      <!-- 显示审批状态 ：抄送人不显示。当前审批流之后的审批不显示-->
                                      <span
                                        v-if="second.nodeType != 'notifier' && second.enableStatus != 0"
                                        class="statusCircle"
                                        :style="{ background: getBg(second.status) }"
                                      >
                                        <i :class="[getClass(second.status)]"></i>
                                      </span>
                                    </span>
                                    <span class="avater_none" v-else>{{ item.approveUserName ? item.approveUserName.slice(0, 1) : '' }}</span>
                                  </div>
                                  <div :class="['appro_user', { flexCenter: second.nodeType == 'notifier' }]">
                                    <div class="userName">
                                      <span>{{ item.approveUserName }}</span>
                                      <span v-if="second.approveNodeList.length > 1 && second.nodeType == 'approver'">
                                        ...等{{ second.approveNodeList.length }}人
                                      </span>
                                      <span v-if="second.approveNodeList.length > 1 && second.nodeType == 'notifier'"
                                        >...等,已抄送{{ second.approveNodeList.length }}人
                                      </span>
                                      <span class="cursorD mainColor checkAll" @click="checkAll(second)" v-if="second.approveNodeList.length > 1">查看</span>
                                    </div>
                                    <div class="timeline_time">
                                      <tag-style
                                        :hasBg="false"
                                        v-if="second.nodeType != 'notifier' && second.enableStatus != 0"
                                        :content="
                                          second.nodeType == 'start'
                                            ? '发起审批'
                                            : second.status === 0
                                            ? '审批中'
                                            : second.status === 1
                                            ? '已通过'
                                            : second.status === 2
                                            ? '审批失败'
                                            : second.status === 3
                                            ? '审批取消'
                                            : '-'
                                        "
                                      />
                                      {{
                                        second.nodeType != 'notifier' && item.updateTime && second.approveNodeList.length == 1 && item.status > 0
                                          ? item.updateTime
                                          : ''
                                      }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="timeline_desc">
                                <!-- <p v-if="second.approveNodeList.length == 1 && item.approveOpinion">{{ item.approveOpinion }}</p> -->
                                <div v-if="second.approveNodeList.length > 0 && second.nodeType != 'start'">
                                  <div v-for="(it, num) in second.approveNodeList" :key="num">
                                    <div v-if="it.approveOpinion || it.pictureUrl">
                                      <p class="">
                                        <span class="opinionUser">{{ it.approveUserName }} 发表了审批意见</span>
                                        <span class="opinioTime">{{ it.updateTime }}</span>
                                      </p>
                                      <div class="opinioContentBox">
                                        <span class="opinioContent commentCont" v-if="it.approveOpinion">{{ it.approveOpinion }}</span>
                                        <div class="imgBox" v-if="it.pictureUrl">
                                          <p v-for="(imgItem, ind) in it.pictureUrl?.split(',')" :key="ind">
                                            <el-image
                                              class="img"
                                              :src="imgItem"
                                              :preview-src-list="it.pictureUrl?.split(',')"
                                              :appendToBody="true"
                                              :z-index="3000"
                                              fit="cover"
                                            />
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="second.commentList?.length > 0">
                                  <div v-for="(it, num) in second.commentList" :key="num">
                                    <div>
                                      <p class="">
                                        <span class="opinionUser commentUser">{{ it.createBy == currentUserId ? '我' : it.createByName }} 发表了评论</span>
                                        <span class="opinioTime">{{ it.createTime || '-' }}</span>
                                        <span class="delComment" v-if="it.createBy == currentUserId" @click="delComment(it)">删除</span>
                                      </p>
                                      <div class="opinioContentBox">
                                        <span class="commentCont commentCont" v-if="it.content">{{ it.content }}</span>
                                        <div class="imgBox" v-if="it.pictureUrl">
                                          <p v-for="(imgItem, ind) in it.pictureUrl?.split(',')" :key="ind">
                                            <el-image
                                              class="img"
                                              :src="imgItem"
                                              :preview-src-list="it.pictureUrl?.split(',')"
                                              :appendToBody="true"
                                              :z-index="3000"
                                              fit="cover"
                                            />
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>

                  <div v-if="first.commentList?.length > 0">
                    <div v-for="(it, num) in first.commentList" :key="num">
                      <div class="timeline_desc">
                        <p class="">
                          <span class="opinionUser commentUser">{{ it.createBy == currentUserId ? '我' : it.createByName }} 发表了评论</span>
                          <span class="opinioTime">{{ it.createTime || '-' }}</span>
                          <span class="delComment" v-if="it.createBy == currentUserId" @click="delComment(it)">删除</span>
                        </p>
                        <div class="opinioContentBox">
                          <span class="commentCont commentCont" v-if="it.content">{{ it.content }}</span>
                          <div class="imgBox" v-if="it.pictureUrl">
                            <p v-for="(imgItem, ind) in it.pictureUrl?.split(',')" :key="ind">
                              <el-image
                                class="img"
                                :src="imgItem"
                                :preview-src-list="it.pictureUrl?.split(',')"
                                :appendToBody="true"
                                :z-index="3000"
                                fit="cover"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <comments style="margin: 30px 0 0 20px" ref="commentRef" @commentSub="commentSub" />
            </div>
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
    <el-dialog-module
      width="600px"
      :isShow="showApprovalInfo"
      :isFooter="true"
      :title="showApprovalTitle"
      @onClose="appravalHandleC"
      @onSubmit="appravalHandle"
      :loading="btnLoading"
    >
      <template #content>
        <el-form :model="approvalForm" label-width="100px" v-if="keyStr == 'refuse'" :rules="approvalRules" ref="approvalFormRef">
          <el-form-item label="审批意见" prop="approveOpinion" style="width: 100%; max-width: none">
            <el-input
              type="textarea"
              v-model="approvalForm.approveOpinion"
              :autosize="{ minRows: 4, maxRows: 6 }"
              maxLength="341"
              placeholder="请输入审批意见"
            ></el-input>
          </el-form-item>
          <el-form-item label="附件" prop="" style="width: 100%; max-width: none">
            <comments ref="commentRef" :isComment="false" :isDialog="true" />
          </el-form-item>
        </el-form>
        <el-form :model="approvalForm" label-width="100px" v-if="keyStr == 'agree'" ref="approvalFormRef">
          <el-form-item label="审批意见" prop="approveOpinion" style="width: 100%; max-width: none">
            <el-input
              type="textarea"
              v-model="approvalForm.approveOpinion"
              :autosize="{ minRows: 4, maxRows: 6 }"
              maxLength="341"
              placeholder="请输入审批意见"
            ></el-input>
          </el-form-item>
          <el-form-item label="附件" prop="" style="width: 100%; max-width: none">
            <comments ref="commentRef" :isComment="false" :isDialog="true" />
          </el-form-item>
        </el-form>
      </template>
    </el-dialog-module>
    <el-dialog-module
      width="600px"
      :isShow="showAllApprover"
      :isFooter="true"
      :title="
        allAproverInfo.nodeType === 'approver' && allAproverInfo.approveNodeList.length > 1
          ? allAproverInfo.signType == 'and'
            ? '查看（会签）'
            : '查看（或签）'
          : '查看'
      "
      :dialogButton="['', '确定']"
      @onClose="showAllApprover = false"
      @onSubmit="showAllApprover = false"
    >
      <template #content>
        <div class="approverBox">
          <div class="itemBox" v-for="(item, index) in allAproverInfo.approveNodeList" :key="index">
            <p class="avater_none">
              <img :src="item.approveUserImage" alt="" />
              <span
                v-if="allAproverInfo.nodeType != 'notifier' && allAproverInfo.enableStatus != 0"
                class="statusCircle"
                :style="{ background: getBg(item.status) }"
              >
                <i :class="[getClass(item.status)]"></i>
              </span>
            </p>
            <p class="approverName">{{ item.approveUserName }}</p>
            <tag-style
              :hasBg="false"
              :isCenter="true"
              v-if="allAproverInfo.nodeType != 'notifier' && allAproverInfo.enableStatus != 0"
              :content="
                allAproverInfo.nodeType === 'start'
                  ? '发起审批'
                  : item.status === 0
                  ? '审批中'
                  : item.status === 1
                  ? '已通过'
                  : item.status === 2
                  ? '审批失败'
                  : item.status === 3
                  ? '审批取消'
                  : ''
              "
            />
            <p class="upTimeP" v-if="allAproverInfo.nodeType != 'notifier' && item.status == 1">{{ item.updateTime.split(' ')[0] }}</p>
            <p class="upTimePS" v-if="allAproverInfo.nodeType != 'notifier' && item.status == 1">{{ item.updateTime.split(' ')[1] }}</p>
          </div>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs, watch, inject, ref, getCurrentInstance } from 'vue'
import { getApproveDetail, checkApproval, approveCommentAdd, approveCommentDel } from '@/api/company/approvalConfig.js'
import { formatDate } from '@/utils/common.js'
import { useRoute } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import Comments from './comment.vue'
import { useStore } from 'vuex'

export default {
  name: 'approval_process',
  components: { Comments },
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
      default: false
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

    const store = useStore()
    const internalInstance = getCurrentInstance() //当前组件实例
    const $bus = internalInstance.appContext.config.globalProperties.$bus
    const closeNowTag = inject('closeNowTag')
    const route = useRoute()
    const approvalFormRef = ref()
    const commentRef = ref()
    const state = reactive({
      currentUserId: computed(() => store.state.user.userInfo.id),
      showApprovalInfo: false, //弹框显示
      showApprovalTitle: '', //弹框title
      showAllApprover: false, //查看审批人弹框
      currentApprovalIndex: 0, //当前审批进度
      allAproverInfo: {},
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
      keyStr: '',
      loading: false,
      setTitle(val) {
        state.showApprovalInfo = true
        let msg = val == 'agree' ? '同意' : '拒绝'
        state.showApprovalTitle = '审批' + msg + '意见'
        state.keyStr = val
      },
      getApproveDetail() {
        state.approveList = []
        state.loading = true
        getApproveDetail({ relationId: state.id })
          .then((res) => {
            // console.log(11111, res.data)
            state.loading = false
            if (res.code === 200) {
              state.approveList = res.data
              console.log('state.approveList', state.approveList)
              //是否需要处理拒绝后其他流程的状态或展示状态
              //如果或签状态列表中，有一人完成审批，其他人状态是否需要修改，以便展示
              state.approveList.forEach((item, index) => {
                item.approveProgressVOList.forEach((ele, idx) => {
                  state.currentApprovalIndex = ele.status == 0 && ele.enableStatus == 1 ? ele.approveProcessSort : state.currentApprovalIndex
                  console.log('currentApprovalIndex ==', state.currentApprovalIndex)
                  if (ele.approveNodeList.length === 0) {
                    state.approveList[index].approveProgressVOList.splice(idx, 1)
                  }
                })
              })

              // console.log('state.approveList==', state.approveList)
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
      checkAll(obj) {
        state.allAproverInfo = obj
        state.showAllApprover = true
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
        let urls = commentRef.value.imgList.map((i) => {
          return i.url
        })
        return new Promise((resolve, reject) => {
          state.btnLoading = true
          checkApproval({
            approveStatus: 1,
            approveOpinion: state.approvalForm.approveOpinion,
            relationId: state.ids.length ? state.ids : state.id,
            pictureUrl: urls.join(',')
          })
            .then((res) => {
              state.btnLoading = false
              if (res.code === 200) {
                commentRef.value.imgList = []
                commentRef.value.commentCont = ''
                state.showApprovalInfo = false
                ElMessage.success('审批成功')
                state.getApproveDetail()
                $bus.emit('refreshMessage')
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
        let urls = commentRef.value.imgList.map((i) => {
          return i.url
        })
        return new Promise((resolve, reject) => {
          approvalFormRef.value.validate((valid) => {
            if (valid) {
              state.btnLoading = true
              checkApproval({
                approveStatus: 2,
                approveOpinion: state.approvalForm.approveOpinion,
                relationId: state.ids.length ? state.ids : state.id,
                pictureUrl: urls.join(',')
              })
                .then((res) => {
                  state.btnLoading = false
                  if (res.code === 200) {
                    commentRef.value.imgList = []
                    commentRef.value.commentCont = ''
                    state.showApprovalInfo = false
                    ElMessage.success('审批成功')
                    state.getApproveDetail()
                    $bus.emit('refreshMessage')
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
      },
      appravalHandleC() {
        commentRef.value.imgList = []
        commentRef.value.commentCont = ''
        state.showApprovalInfo = false
      },
      appravalHandle(v) {
        //   state.keyStr == 'agree' ? state.submitFunc() : state.closeFunc()
        emit('handleBtn', state.keyStr)
      },
      getBg(status) {
        let bgColor = ''
        if (status == 0) {
          bgColor = '#FF9900'
        }
        if (status == 1 || (!status && status !== 0)) {
          bgColor = '#52C41A'
        }
        if (status == 2) {
          bgColor = '#FF4D4F'
        }
        if (status == 3) {
          bgColor = 'rgb(237 242 247 / 48%)'
        }
        return bgColor
      },
      getClass(status) {
        console.log(status)
        let className = ''
        if (status === 0) {
          className = 'el-icon-more'
        }
        if (status == 1 || (!status && status !== 0)) {
          className = 'el-icon-check'
        }
        if (status == 2) {
          className = 'el-icon-close'
        }
        if (status == 3) {
          className = 'el-icon-close'
        }
        return className
      },
      commentSub(param) {
        commentRef.value.commentLoading = true
        param = { ...param, approveApplyId: state.approveList[0].id }
        console.log('请求接口==', param)
        approveCommentAdd(param)
          .then((res) => {
            commentRef.value.commentLoading = false
            if (res.code === 200) {
              ElMessage.success('评论成功')
              commentRef.value.imgList = []
              commentRef.value.commentCont = ''
              state.getApproveDetail()
              $bus.emit('refreshMessage')
            } else {
              ElMessage.error(res.message)
            }
          })
          .catch((err) => {
            commentRef.value.commentLoading = false
          })
      },
      delComment(it) {
        ElMessageBox.confirm('确定要删除该数据吗？', '提示', {
          type: 'warning'
        })
          .then(() => {
            approveCommentDel(it.id)
              .then((res) => {
                if (res.code === 200) {
                  ElMessage.success('已删除评论')
                  state.getApproveDetail()
                  $bus.emit('refreshMessage')
                } else {
                  ElMessage.error(res.message)
                }
              })
              .catch((err) => {})
          })
          .catch(() => {})
      }
    })
    return {
      ...toRefs(state),
      formatDate,
      approvalFormRef,
      commentRef,
      isApproval: computed(() => route.query.isApproval === 'isApproval')
    }
  }
}
</script>
<style lang="scss" scoped>
.mainColor {
  color: #165dff;
}
.cursorD {
  cursor: pointer;
}
.approval_process {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .tagClass {
    text-align: left;
    background: none !important;
    width: auto;
    padding: 0;
    min-width: auto !important;
    margin-right: 10px;
    font-weight: bold;
  }
  .first {
    //  width: 49.5%;
    flex: 1;
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
    // background-color: #fff;
    border-radius: 4px;
    padding: 30px 20px 0px 20px;
  }
  .time_line {
    position: relative;
    padding-bottom: 10px;
  }

  .time_line__wrapper {
    position: relative;
    padding-left: 0px;
    top: -12px;
  }

  .time_line__tail {
    position: absolute;
    left: 20px;
    height: 100%;
    border-left: 1px solid #165dff;
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
    position: relative;
  }
  .approval_list {
    display: flex;
  }
  .appro_user {
    margin-left: 10px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .userName {
      color: #1d2129;
      font-size: 14px;
      font-weight: 600;
      margin-top: 2px;
    }
    .checkAll {
      font-weight: 400;
    }
  }
  .flexCenter {
    align-items: center;
    justify-content: center;
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
    // padding: 10px 10px 12px 10px;
    color: #1d2129; //#606266 #86909c
    // background: #f7f8fa;
    // border-radius: 0px 8px 8px 8px;
    .opinionUser {
      display: inline-block;
      line-height: 20px;
      color: #1d2129;
      margin-right: 8px;
      font-weight: 600;
    }
    .opinioTime {
      color: #86909c;
    }
    .commentUser {
      font-size: 13px;
      color: #1d2129;
      line-height: 22px;
      margin-top: 20px;
      font-weight: 600;
    }
    .delComment {
      color: #165dff;
      font-size: 12px;
      line-height: 22px;
      margin-left: 16px;
      cursor: pointer;
    }
    .opinioContentBox {
      line-height: 20px;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 2px;
        margin-right: 4px;
      }
      .imgBox {
        display: flex;
        flex-wrap: wrap;
        width: 820px;
        p {
          margin: 10px 10px 0 0;
        }
      }
      .commentCont {
        color: #1d2129;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        width: 820px;
        display: inline-block;
        word-break: break-all;
      }
    }
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
    .avater_none {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
      .fullCircle {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: #165dff;
        text-align: center;
        i {
          color: #fff;
          line-height: 40px;
          font-size: 26px;
        }
      }
    }
  }
  :deep(.main-bottom) {
    min-height: 0;
    margin: 0;
  }
  .avater_none {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    .statusCircle {
      display: block;
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      i {
        position: absolute;
        font-size: 12px;
        color: #fff;
        left: 1px;
        line-height: 14px;
      }
    }
  }
}
.el-dialog {
  .approverBox {
    display: flex;
    flex-wrap: wrap;
    .itemBox {
      display: flex;
      flex-direction: column;
      margin: 0 20px 10px 0;
      align-items: center;
      width: 86px;
      padding: 4px 0;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 auto;
      }
      .approverName {
        line-height: 22px;
        margin: 0px auto;
        font-size: 14px;
        font-weight: 600;
      }
      .tagClass {
        background: none !important;
        width: auto;
        padding: 0;
        min-width: auto !important;
        line-height: 24px;
        height: 18px;
      }
      .upTimeP {
        text-align: center;
        font-size: 12px;
        margin-top: 6px;
        color: #86909c;
      }
      .upTimePS {
        text-align: center;
        font-size: 12px;
        margin-top: 0px;
        color: #86909c;
      }
    }
    .avater_none {
      position: relative;
      img {
        margin: auto;
      }
      .statusCircle {
        display: block;
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        i {
          position: absolute;
          font-size: 12px;
          color: #fff;
          left: 1px;
          line-height: 14px;
        }
      }
    }
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
