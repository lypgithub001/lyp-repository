<template>
  <div style="width: 100%">
    <div class="create-page-header--2RZZB">
      <div class="name--2wmcY">
        <div class="back--3yu2v" @click="closeNowTag">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="ding-app-icon">
          <img src="https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png" class="avatar" alt="" />
          <div class="opacity-mask"></div>
          <img src="https://gw.alicdn.com/tfs/TB1cHKfhUz1gK0jSZLeXXb9kVXa-200-200.png" class="mask" alt="" />
        </div>
        <span>{{ titleData.businessTypeLabel }}</span>
      </div>
      <div class="tab--2DFmc">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs--NMWa1">
          <el-tab-pane label="基础设置" name="first"></el-tab-pane>
          <el-tab-pane label="流程设计" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="action--3nfkw">
        <el-button type="primary" class="btn-style" size="small" @click="saveData" round :loading="loading">发 布</el-button>
      </div>
    </div>
    <div class="approval-flow fd-nav-content" v-show="activeName === 'first'">
      <div class="dingflow-design">
        <div class="box-scale">
          <div class="base-setting--2FV9w">
            <BasicSettingsForm :titleData="titleData" @submit="submit" ref="basicSettingsForm" />
          </div>
        </div>
      </div>
    </div>
    <div class="approval-flow fd-nav-content" v-show="activeName === 'second'">
      <div class="zoom btn-style">
        <div :class="'zoom-out' + (nowVal == 50 ? ' disabled' : '')" @click="zoomSize(1)"></div>
        <span>{{ nowVal }}%</span>
        <div :class="'zoom-in' + (nowVal == 100 ? ' disabled' : '')" @click="zoomSize(2)"></div>
      </div>
      <div class="dingflow-design">
        <div class="box-scale" id="box-scale">
          <div :style="'transform: scale(' + nowVal / 100 + '); transform-origin: 50% 0px 0px;'">
            <nodeWrap v-bind="$attrs" v-model:nodeConfig.sync="nodeConfig" :isTried="isTried"></nodeWrap>
            <div class="end-node">
              <div class="end-node-circle"></div>
              <div class="end-node-text">结束流程</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, onUnmounted, nextTick, ref, inject } from 'vue'
import nodeWrap from './components/nodeWrap.vue'
import { approveBusinessDetail, approveBusinessSaveOrUpdate } from '@/api/company/approvalConfig.js'
import BasicSettingsForm from './components/basicSettingsForm.vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

export default {
  name: 'processManagement-formWork',
  props: {
    array: {
      type: Array,
      default: () => []
    }
  },
  components: { nodeWrap, BasicSettingsForm },
  setup() {
    const route = useRoute()
    const store = useStore()
    const basicSettingsForm = ref()
    const closeNowTag = inject('closeNowTag')
    onMounted(() => {
      data.getInfo()
      nextTick(() => {
        document.querySelector('.scorllBoxLine').scrollTop = 0
        document.querySelector('.scorllBoxLine').style.overflowY = 'hidden'
      })
    })
    onUnmounted(() => {
      nextTick(() => {
        document.querySelector('.scorllBoxLine').style.overflow = 'auto'
      })
    })
    const data = reactive({
      //流程设置
      isTried: false,
      tipList: [],
      nodeConfig: {},
      nowVal: 100,
      titleData: {},
      // 条件选择按钮展示
      activeName: 'first',
      loading: false,
      init() {
        data.nodeConfig = {
          error: true,
          childNode: {
            type: 'start',
            name: '发起人',
            properties: {},
            nodeId: 1111111,
            teamName: 'ccreate',
            error: false
          }
        }
      },
      getInfo() {
        data.init()
        data.activeName = 'first'
        let businessGroup = route.query.businessGroup,
          businessType = route.query.businessType
        if (typeof Number(businessGroup) === 'number' && typeof Number(businessType) === 'number') {
          approveBusinessDetail(businessGroup, businessType).then((res) => {
            if (res.code == 200) {
              data.titleData = res.data
              data.nodeConfig = {
                error: true,
                childNode: JSON.parse(res.data.processConf)
              }
              if (!res.data.processConf) {
                data.init()
              }
              // 条件权限
              store.commit('SET_CONDITION_LIST', res.data?.conditionList || [])
            }
          })
        }
      },
      // 保存
      saveData() {
        data.isTried = true //开启校验
        data.tipList = []
        console.log('data.nodeConfig', data.nodeConfig)
        data.reErr(data.nodeConfig)
        if (data.tipList.length != 0) {
          return ElMessage.warning('请完善流程模板')
        }
        basicSettingsForm.value.ruleFormRef.validate((valid) => {
          if (valid) {
            data.workflowSave()
          } else {
            return false
          }
        })
      },
      reErr(dataV) {
        if (dataV.childNode) {
          switch (dataV.childNode.type) {
            case 'approver':
              if (dataV.childNode.error) {
                data.tipList.push(dataV.childNode)
              }
              data.reErr(dataV.childNode ? dataV.childNode : [])
              break
            case 'notifier':
              if (dataV.childNode.error) {
                data.tipList.push(dataV.childNode)
              }
              data.reErr(dataV.childNode ? dataV.childNode : [])
              break
            case 'start':
              if (dataV.childNode.error) {
                data.tipList.push(dataV.childNode)
              }
              data.reErr(dataV.childNode ? dataV.childNode : [])
              break
            case 'condition':
              if (dataV.childNode.error) {
                data.tipList.push(dataV.childNode)
              }
              data.reErr(dataV.childNode ? dataV.childNode : [])
              break
            case 'route':
              data.reErr(dataV.childNode)
              for (var i = 0; i < dataV.childNode.conditionNodes.length; i++) {
                if (dataV.childNode.conditionNodes[i].error) {
                  data.tipList.push(dataV.childNode.conditionNodes[i])
                }
                data.reErr(dataV.childNode.conditionNodes[i] ? dataV.childNode.conditionNodes[i] : [])
              }
              break
            default:
              break
          }
        }
      },
      workflowSave() {
        let form = {
          businessType: data.titleData.businessType,
          businessGroup: data.titleData.businessGroup,
          description: data.titleData.description,
          id: data.titleData.id,
          processConf: JSON.stringify(data.nodeConfig.childNode),
          status: data.titleData.status
        }
        console.log('form', form)
        data.loading = true
        approveBusinessSaveOrUpdate(form)
          .then((res) => {
            data.loading = false
            if (res.code == 200) {
              ElMessage.success('发布成功')
              data.getInfo()
            } else {
              ElMessage.warning(res.message)
            }
          })
          .catch((err) => {
            data.loading = false
          })
      },
      zoomSize(type) {
        if (type == 1) {
          if (data.nowVal == 50) {
            return
          }
          data.nowVal -= 10
        } else {
          if (data.nowVal == 100) {
            return
          }
          data.nowVal += 10
        }
      },
      handleClick() {},
      submit() {}
    })
    return {
      ...toRefs(data),
      basicSettingsForm,
      closeNowTag
    }
  }
}
</script>
 
<style lang="scss">
@import './components/wrap.scss';
</style>
