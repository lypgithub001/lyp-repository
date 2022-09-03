<template>
  <div class="nodeflow-components">
    <!-- 3发起人 -->
    <div class="node-wrap" v-if="nodeConfig.type == 'start'">
      <div class="node-wrap-box node-wrap-box1">
        <div>
          <div class="title">
            <span class="editable-title" style="padding-left: 0">{{ nodeConfig.name }}</span>
          </div>
          <div class="content">
            <div class="text">
              <span>{{ nodeConfig.name ? nodeConfig.name : nodeConfig.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <addNode v-model:childNodeP.sync="nodeConfig.childNode"></addNode>
    </div>

    <!-- 1审批人/2抄送人 -->
    <div class="node-wrap" v-if="nodeConfig.type == 'approver' || nodeConfig.type == 'notifier'">
      <div class="node-wrap-box" v-if="nodeConfig.type" :class="isTried && nodeConfig.error ? 'active error' : ''">
        <div>
          <div class="title" :style="'background: rgb(' + ['87, 106, 149', '230, 162, 60', '72, 128, 255'][getNodeType(nodeConfig.type)] + ');'">
            <span
              :style="{
                display: 'inline',
                width: '16px',
                height: '16px',
                position: 'absolute',
                backgroundImage: 'url(' + getImg(nodeConfig.type) + ')'
              }"
              @click="titleInput"
            ></span>
            <span class="editable-title" style="padding-left: 18px">
              <span v-if="!nodeConfig.inputFlag" class="editable-title-name" @click="titleInput">{{ nodeConfig.name }}</span>
              <input
                type="text"
                class="editable-title-input"
                v-model="nodeConfig.name"
                v-show="nodeConfig.inputFlag"
                ref="titleInputBlurRef"
                @blur="titleInputBlur"
              />
            </span>
            <i class="el-icon-close close" @click.stop="delNode()"></i>
          </div>
          <div class="content" @click="setPerson">
            <div class="text">
              <span class="placeholder" v-if="setApproverStr(nodeConfig) === ''"> 请选择{{ placeholderList[getNodeType(nodeConfig.type)] }} </span>
              {{ setApproverStr(nodeConfig) }}
            </div>
            <i class="el-icon-arrow-right arrow"></i>
          </div>
          <div class="error_tip" v-if="isTried && nodeConfig.error">
            <i class="el-icon-warning" style="color: rgb(242, 86, 67)"></i>
          </div>
        </div>
      </div>
      <addNode v-model:childNodeP.sync="nodeConfig.childNode"></addNode>
    </div>

    <!-- 分支 -->
    <div class="branch-wrap" v-if="nodeConfig.type == 'route'">
      <div class="branch-box-wrap">
        <div class="branch-box">
          <button class="add-branch" @click="addTerm">添加条件</button>
          <div class="col-box" v-for="(item, index) in nodeConfig.conditionNodes" :key="index">
            <div class="condition-node">
              <div class="condition-node-box">
                <div class="auto-judge" :class="isTried && item.error ? 'error active' : ''">
                  <div class="sort-left" v-if="index != 0" @click.stop="arrTransfer(index, -1)">&lt;</div>
                  <div class="title-wrapper">
                    <span class="editable-title">{{ item.name }}</span>
                    <span class="priority-title">优先级{{ item.priorityLevel }}</span>
                    <i class="el-icon-close close" @click.stop="delTerm(index)"></i>
                  </div>
                  <div class="sort-right" v-if="index != nodeConfig.conditionNodes.length - 1" @click.stop="arrTransfer(index)">&gt;</div>
                  <div class="content" @click="setPerson(item.priorityLevel, item)">
                    {{ conditionStr(item, index) }}
                  </div>
                  <div class="error_tip" v-if="isTried && item.error">
                    <i class="el-icon-warning" style="color: rgb(242, 86, 67)"></i>
                  </div>
                </div>
                <addNode v-model:childNodeP.sync="item.childNode" :tip="'条件'"></addNode>
              </div>
            </div>
            <nodeWrap v-if="item.childNode && item.childNode" v-model:nodeConfig.sync="item.childNode" :isTried.sync="isTried"></nodeWrap>
            <div class="top-left-cover-line" v-if="index == 0"></div>
            <div class="bottom-left-cover-line" v-if="index == 0"></div>
            <div class="top-right-cover-line" v-if="index == nodeConfig.conditionNodes.length - 1"></div>
            <div class="bottom-right-cover-line" v-if="index == nodeConfig.conditionNodes.length - 1"></div>
          </div>
        </div>
        <addNode v-model:childNodeP.sync="nodeConfig.childNode"></addNode>
      </div>
    </div>

    <nodeWrap v-if="nodeConfig.childNode && nodeConfig.childNode" v-model:nodeConfig.sync="nodeConfig.childNode" :isTried.sync="isTried"></nodeWrap>

    <el-dialog-module
      :isShow="approverDrawer"
      :title="approverConfig.name"
      :close-on-click-modal="false"
      width="700px"
      :appendToBody="true"
      @onClose="approverDrawer = false"
      :dialogButton="['取消', '确定']"
      @onSubmit="saveApprover"
      class="approverDialog"
    >
      <template #content>
        <!-- 审批人 -->
        <div class="drawer-content" v-if="approverConfig.type == 'approver'">
          <div>
            <el-radio-group v-model="approverConfig.properties.actionerRules[0].type" @change="setTypeRadio" class="radio_title">
              <el-radio label="target_approval">指定成员</el-radio>
              <el-radio label="target_select">发起人自选</el-radio>
              <el-radio label="target_management">部门主管</el-radio>
              <el-radio label="target_label">岗位</el-radio>
              <!-- <el-radio label="target_expert">专家</el-radio>
              <el-radio label="target_supervisor">监督人</el-radio> -->
            </el-radio-group>
            <!-- 指定成员 -->
            <div v-if="approverConfig.properties.actionerRules[0].type && approverConfig.properties.actionerRules[0].type === 'target_approval'">
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>成员</span>
                  </div>
                </template>
                <div>
                  <el-button
                    type="primary"
                    :icon="!approverConfig.properties.actionerRules[0].approvals.length ? 'el-icon-plus' : 'el-icon-edit'"
                    size="small"
                    @click="handleSelectDept()"
                    v-if="approverConfig.properties.actionerRules[0].approvals"
                    >{{ !approverConfig.properties.actionerRules[0].approvals.length ? '添加成员' : '修改成员' }}</el-button
                  >
                  <el-button type="primary" @click="handleSelectDept()" v-else icon="el-icon-plus" size="small">添加成员</el-button>
                  <div>
                    <el-tag
                      :key="tag.id"
                      v-for="tag in approverConfig.properties.actionerRules[0].approvals"
                      closable
                      :disable-transitions="false"
                      @close="handleClose(tag.id)"
                      style="margin: 10px 10px 0 0"
                    >
                      {{ tag.name }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>多人审批时采用的审批方式</span>
                  </div>
                </template>
                <div>
                  <el-radio-group v-model="approverConfig.properties.actionerRules[0].actType">
                    <el-radio v-for="item in examineModeList" :key="item.id" :label="item.id">
                      {{ item.name }}
                      <span class="mark">({{ item.mark }})</span>
                    </el-radio>
                  </el-radio-group>
                </div>
              </el-card>
            </div>
            <!-- 发起人自选 -->
            <div v-if="approverConfig.properties.actionerRules[0].type && approverConfig.properties.actionerRules[0].type === 'target_select'">
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>多人审批时采用的审批方式</span>
                  </div>
                </template>

                <div>
                  <el-radio-group v-model="approverConfig.properties.actionerRules[0].actType">
                    <el-radio v-for="item in examineModeList" :key="item.id" :label="item.id">
                      {{ item.name }}
                      <span class="mark">({{ item.mark }})</span>
                    </el-radio>
                  </el-radio-group>
                </div>
              </el-card>
            </div>
            <!-- 部门主管 -->
            <div v-if="approverConfig.properties.actionerRules[0].type && approverConfig.properties.actionerRules[0].type === 'target_management'">
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>部门主管</span>
                  </div>
                </template>

                <div>
                  <el-select v-model="approverConfig.properties.actionerRules[0].level" placeholder="请选择" style="width: 250px" size="small">
                    <el-option v-for="item in directorLevelList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                  </el-select>
                  <!-- <el-checkbox v-model="approverConfig.properties.actionerRules[0].autoUp" style="margin-top: 10px;"
                    >找不到主管时，由上级主管代审批</el-checkbox> -->
                </div>
              </el-card>
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>多人审批时采用的审批方式</span>
                  </div>
                </template>
                <div>
                  <el-radio-group v-model="approverConfig.properties.actionerRules[0].actType">
                    <el-radio v-for="item in examineModeList" :key="item.id" :label="item.id">
                      {{ item.name }}
                      <span class="mark">({{ item.mark }})</span>
                    </el-radio>
                  </el-radio-group>
                </div>
              </el-card>
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>审批人为空时</span>
                  </div>
                </template>
                <div>
                  <el-radio-group v-model="approverConfig.properties.noneActionerAction">
                    <el-radio label="auto">自动通过</el-radio>
                    <el-radio label="admin">自动转交管理员</el-radio>
                  </el-radio-group>
                </div>
              </el-card>
            </div>
            <!-- 岗位 -->
            <div v-if="approverConfig.properties.actionerRules[0].type && approverConfig.properties.actionerRules[0].type === 'target_label'">
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <span>岗位</span>
                  </div>
                </template>
                <div>
                  <el-button
                    type="primary"
                    @click="handleSelectDept()"
                    icon="el-icon-edit"
                    size="small"
                    v-if="approverConfig.properties.actionerRules[0].labels"
                    >修改岗位</el-button
                  >
                  <el-button type="primary" @click="handleSelectDept()" icon="el-icon-plus" size="small" v-else>添加岗位</el-button>
                  <div v-if="approverConfig.properties.actionerRules[0].labels">
                    <el-tag :disable-transitions="false" style="margin: 10px 10px 0 0">
                      {{ approverConfig.properties.actionerRules[0].labelNames }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
              <div v-if="approverConfig.properties.actionerRules[0].labels">
                <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                  <template #header>
                    <div class="clearfix">
                      <span>多人审批时采用的审批方式</span>
                    </div>
                  </template>

                  <div>
                    <el-radio-group v-model="approverConfig.properties.actionerRules[0].actType">
                      <el-radio v-for="item in examineModeList" :key="item.id" :label="item.id">
                        {{ item.name }}
                        <span class="mark">({{ item.mark }})</span>
                      </el-radio>
                    </el-radio-group>
                  </div>
                </el-card>
              </div>
              <div v-if="approverConfig.properties.actionerRules[0].labels">
                <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                  <template #header>
                    <div class="clearfix">
                      <span>审批人为空时</span>
                    </div>
                  </template>

                  <div>
                    <el-radio-group v-model="approverConfig.properties.noneActionerAction">
                      <el-radio label="auto">自动通过</el-radio>
                      <el-radio label="admin">自动转交管理员</el-radio>
                    </el-radio-group>
                  </div>
                </el-card>
              </div>
            </div>
          </div>
        </div>

        <!-- 抄送人 -->
        <div class="drawer-content" v-if="approverConfig.type == 'notifier'">
          <div>
            <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
              <template #header>
                <div class="clearfix">
                  <span>抄送人</span>
                </div>
              </template>

              <div>
                <el-button
                  type="primary"
                  size="small"
                  @click="handleSelectDept()"
                  v-if="approverConfig.properties.actionerRules"
                  :icon="!approverConfig.properties.actionerRules.length ? 'el-icon-plus' : 'el-icon-edit'"
                  >{{ !approverConfig.properties.actionerRules.length ? '添加成员' : '修改成员' }}</el-button
                >
                <el-button type="primary" @click="handleSelectDept()" v-else icon="el-icon-plus" size="small">添加成员</el-button>
                <div>
                  <template v-for="(tag, idx) in approverConfig.properties.actionerRules">
                    <el-tag
                      :key="tag.id"
                      closable
                      v-if="tag.type != 'target_select'"
                      :disable-transitions="false"
                      @close="handleClose(tag.id, tag, idx)"
                      style="margin: 10px 10px 0 0"
                    >
                      <span v-if="tag.type === 'target_approval'">员工:{{ tag.approvals[0].name }}</span>
                      <span v-if="tag.type === 'target_label'">岗位:{{ tag.labelNames }}</span>
                      <span v-if="tag.type === 'target_management'">主管:{{ filtersMethods(tag.level, directorLevelList) }}</span>
                    </el-tag>
                  </template>
                </div>
                <el-checkbox v-model="approverConfig.properties.addTargetApproval" style="margin-top: 10px">允许发起人添加抄送人</el-checkbox>
              </div>
            </el-card>
          </div>
        </div>

        <!-- 条件 -->
        <div class="drawer-content drawer-content-condition" v-if="approverConfig.type == 'condition'">
          <!-- 默认条件 -->
          <div>
            <div v-for="(item, index) in approverConfig.properties.conditions" :key="index">
              <el-card class="box-card" style="margin-bottom: 20px" shadow="never">
                <template #header>
                  <div class="clearfix">
                    <div style="display: flex; align-items: center; justify-content: space-between">
                      <span>条件组{{ index + 1 }}</span>
                      <span><el-button icon="el-icon-delete" style="padding: 9px; margin-left: 5px" circle @click="groupDel(index)"></el-button></span>
                    </div>
                  </div>
                </template>
                <div>
                  <el-checkbox-group v-model="approverConfig.properties.properties[index]" @change="(v) => chooseConditionsChange(v, index)">
                    <el-checkbox :label="ele.id" v-for="(ele, index) in chooseConditionData" :key="index" v-show="ele.flag">{{ ele.name }}</el-checkbox>
                  </el-checkbox-group>
                  <div v-for="(ele, idx) in item" :key="idx">
                    <div style="margin-top: 20px" v-if="ele.type === 'organizer'">
                      {{ ele.paramLabel }}：
                      <el-button
                        type="primary"
                        size="small"
                        @click="handleSelectDept(index)"
                        v-if="ele.conds"
                        :icon="!ele.conds.length ? 'el-icon-plus' : 'el-icon-edit'"
                        >{{ !ele.conds.length ? '添加成员' : '修改成员' }}</el-button
                      >
                      <el-button type="primary" @click="handleSelectDept(index)" v-else icon="el-icon-plus" size="small">添加成员</el-button>
                      <el-button icon="el-icon-delete" style="padding: 9px; margin-left: 5px" circle @click="rowDel(index, idx)"></el-button>
                      <div>
                        <el-tag
                          :key="tag.id"
                          v-for="tag in ele.conds"
                          closable
                          :disable-transitions="false"
                          @close="handleClose(tag.value, tag, index)"
                          style="margin: 10px 10px 0 0"
                        >
                          {{ tag.attrs.name }}
                        </el-tag>
                      </div>
                    </div>

                    <div style="margin-top: 20px" v-if="ele.type === 'amount'">
                      <div>
                        {{ ele.paramLabel }}：
                        <el-select
                          v-model="ele.key"
                          placeholder="请选择"
                          style="width: 160px"
                          size="small"
                          @change="(val) => chooseOperator(val, ele, getMoneyLabel(ele.key))"
                        >
                          <el-option v-for="mg in operatorList" :key="mg.id" :label="mg.name" :value="mg.id"> </el-option>
                        </el-select>
                        <el-input-number
                          v-model="ele[getMoneyLabel(ele.key)]"
                          controls-position="right"
                          :min="0"
                          v-if="ele.key != 'between'"
                          size="small"
                          style="width: 150px; margin-left: 10px"
                          :precision="2"
                        ></el-input-number>
                        <!-- 介于 -->
                        <div v-else style="margin-top: 20px; margin-left: 45px; display: inline-block">
                          <el-input-number
                            v-model="ele.betweenness[0][getMoneyLabel(ele.betweenness[0].key)]"
                            controls-position="right"
                            :min="0"
                            size="small"
                            style="width: 150px;margin-right: 5px;"
                            :precision="2"
                          ></el-input-number>
                          <el-select
                            v-model="ele.betweenness[0].key"
                            placeholder="请选择"
                            size="small"
                            style="width: 70px"
                            @change="(val) => operatorChange(val, ele.betweenness[0])"
                          >
                            <el-option v-for="mg in operatorEng" :key="mg.id" :label="mg.name" :value="mg.id"> </el-option>
                          </el-select>
                          <div style="padding: 0.5px 0px; text-align: right">{{ ele.paramLabel }}</div>
                          <el-input-number
                            v-model="ele.betweenness[1][getMoneyLabel(ele.betweenness[1].key)]"
                            controls-position="right"
                            :min="0"
                            size="small"
                            style="width: 150px;margin-right: 5px;"
                            :precision="2"
                          ></el-input-number>
                          <el-select
                            v-model="ele.betweenness[1].key"
                            placeholder="请选择"
                            size="small"
                            style="width: 70px"
                            @change="(val) => operatorChange(val, ele.betweenness[1])"
                          >
                            <el-option v-for="mg in operatorEng1" :key="mg.id" :label="mg.name" :value="mg.id"> </el-option>
                          </el-select>
                        </div>
                        <el-button icon="el-icon-delete" style="padding: 9px; margin-left: 5px" circle @click="rowDel(index, idx)"></el-button>
                      </div>
                    </div>
                    <div style="margin-top: 20px; display: flex; align-items: center" v-if="ele.type === 'purchase_origin'">
                      {{ ele.paramLabel }}：
                      <el-checkbox-group v-model="ele.purchaseOrigins">
                        <el-checkbox :label="mg.id" v-for="(mg, index) in purchaseOriginsList" :key="index">{{ mg.name }}</el-checkbox>
                      </el-checkbox-group>
                      <el-button icon="el-icon-delete" style="padding: 9px; margin-left: 5px" circle @click="rowDel(index, idx)"></el-button>
                    </div>
                  </div>
                </div>
                <div>
                  <!-- <el-button @click="addCondition(index)" icon="el-icon-plus" size="small" round>添加条件 </el-button> -->
                </div>
              </el-card>
            </div>

            <div class="conditionbtn">
              <el-button @click="addConditionGroup()" icon="el-icon-plus" round type="primary" size="small">添加条件组 </el-button>
            </div>
          </div>
        </div>
      </template>
    </el-dialog-module>
    <!-- 部门 -->
    <OrgStructureSelection
      ref="orgStructureSelectionRef"
      :selectDataList="selectDataList"
      :select="select"
      @subumit="submitOrgSelect"
      :appendToBody="true"
      :selectType="selectType"
      :transferTitle="transferTitle"
      :defaultProps="defaultProps"
    ></OrgStructureSelection>
  </div>
</template>
<script>
import { ref, reactive, toRefs, nextTick, getCurrentInstance, computed, watch, onMounted } from 'vue'
import addNode from './addNode.vue'
import { ElMessage } from 'element-plus'
import ChooseMan from '@/components/Business/chooseMan.vue'
import OrgStructureSelection from '@/components/organizationalStructure/index.vue'
import { useStore } from 'vuex'

const regUndefined = RegExp(/undefined/)

export default {
  name: 'nodeWrap',
  props: ['nodeConfig', 'isTried'],
  components: { addNode, ChooseMan, OrgStructureSelection },
  setup(prop, { emit }) {
    const titleInputBlurRef = ref()
    const orgStructureSelectionRef = ref()
    const store = useStore()
    onMounted(() => {
      if (data.nodeConfig.type == 'approver') {
        data.nodeConfig.error = data.setApproverStr(data.nodeConfig) == ''
      } else if (data.nodeConfig.type == 'notifier') {
        data.nodeConfig.error = data.setApproverStr(data.nodeConfig) === ''
      } else if (data.nodeConfig.type == 'route') {
        for (var i = 0; i < data.nodeConfig.conditionNodes.length; i++) {
          data.nodeConfig.conditionNodes[i].error = data.conditionStr(data.nodeConfig.conditionNodes[i], i) == '请设置条件'
        }
      }
    })
    const { ctx } = getCurrentInstance()

    const data = reactive({
      nodeConfig: computed(() => {
        return prop.nodeConfig
      }),
      isTried: computed(() => {
        return prop.isTried
      }),
      conditionList: computed(() => {
        return store.state.page.conditionList
      }),
      placeholderList: ['发起人', '审批人', '抄送人'],
      selectType: '0', // 0人员  1部门
      transferTitle: computed(() => {
        return data.selectType == 0 ? ['选择成员', '已选成员'] : data.selectType == 2 ? ['选择岗位', '已选岗位'] : ['源列表', '目标列表']
      }),
      defaultProps: { label: 'name', children: 'jobList', disabled: 'disabled' },
      directorLevelList: [
        {
          id: 1,
          name: '直接主管'
        },
        {
          id: 2,
          name: '第二级主管'
        },
        {
          id: 3,
          name: '第三级主管'
        },
        {
          id: 4,
          name: '第四级主管'
        },
        {
          id: 5,
          name: '第五级主管'
        },
        {
          id: 6,
          name: '第六级主管'
        },
        {
          id: 7,
          name: '第七级主管'
        },
        {
          id: 8,
          name: '第八级主管'
        },
        {
          id: 9,
          name: '第九级主管'
        },
        {
          id: 10,
          name: '第十级主管'
        }
      ],
      examineModeList: [
        {
          id: 'and',
          name: '会签',
          mark: '须所有审批人同意'
        },
        {
          id: 'or',
          name: '或签',
          mark: '一名审批人同意或拒绝即可'
        }
      ],
      //审批弹框字段Obj
      approverConfig: { name: '111' },
      searchUser: '',
      approverDrawer: false, //审批弹框
      //条件弹框字段
      conditionsConfig: {},
      hasFlag: false,
      conditionTip: '',
      bPriorityLevel: '',
      conditions: [],
      //选人
      dialogVisible: true,
      personnelRoleSupervisor: [0], //0部门 1岗位 2主管
      selectDataList: [],
      tIndex: 0,

      //选择条件
      chooseCondition: false,
      chooseConditionData: [
        { id: 'organizer', name: '发起人', flag: false },
        { id: 'amount', name: '金额', flag: false }
        //   { id: 'purchase_origin', name: '采购来源', flag: false }
      ],
      purchaseOriginsList: [
        { id: 0, name: '计划内' },
        { id: 1, name: '计划外' },
        { id: 2, name: '咨询单' }
      ],
      operatorList: [
        { id: 'l', name: '小于', operator: '<' },
        { id: 'g', name: '大于', operator: '>' },
        { id: 'le', name: '小于等于', operator: '≤' },
        { id: 'e', name: '等于', operator: '=' },
        { id: 'ge', name: '大于等于', operator: '≥' },
        { id: 'between', name: '介于（两个数之间）' }
      ],
      // 介于 大于
      operatorEng: [
        { id: 'g', name: '<' },
        { id: 'ge', name: '≤' }
      ],
      // 介于 小于
      operatorEng1: [
        { id: 'l', name: '<' },
        { id: 'le', name: '≤' }
      ],
      select: false, //组织架构单选多选
      //节点类型
      setTypeRadio(val) {
        if (data.approverConfig.properties.actionerRules[0].type === 'target_management') {
          if (!data.approverConfig.properties.actionerRules[0].level) {
            data.approverConfig.properties.actionerRules[0].level = 1
          }
        }
        if (data.approverConfig.properties.actionerRules[0].type === 'target_select') {
          if (!data.approverConfig.properties.actionerRules[0].multi) {
            data.approverConfig.properties.actionerRules[0].multi = 1
          }
        }
        if (data.approverConfig.properties.actionerRules[0].type === 'target_approval') {
          data.approverConfig.properties.actionerRules[0].approvals = data.approverConfig.properties.actionerRules[0].approvals
            ? data.approverConfig.properties.actionerRules[0].approvals
            : []
        }
      },
      //条件显示
      conditionStr(item, index) {
        let conditionStringName = ''
        let also = ' 并且 ',
          perhaps = ' 或者 '
        let { conditions } = item.properties
        if (conditions && conditions.length) {
          conditions.forEach((msg) => {
            let stringName = ''
            msg.forEach((ele) => {
              let name = ''
              if (ele.type === data.chooseConditionData[0].id) {
                ele.conds = ele.conds ? ele.conds : []
              }
              if (ele.type === 'organizer') {
                let condsMemberList = ele.conds.map((mg) => {
                  return {
                    id: mg.value,
                    name: mg.attrs.name
                  }
                })
                if (data.getName(condsMemberList, 'name')) {
                  name += ele.paramLabel + '属于：' + data.getName(condsMemberList, 'name')
                }
                if (name) {
                  name = also + name
                }
              }
              if (ele.type === 'amount') {
                if (ele[data.getMoneyLabel(ele.key)]) {
                  name += ele.paramLabel + data.getMoneyOperator(ele.key, data.operatorList, 'operator') + ele[data.getMoneyLabel(ele.key)] + ele.unit
                  if (name) {
                    name = also + name
                  }
                }
                //   介于判断
                if (data.getMoneyLabel(ele.key) === 'between') {
                  let leftMoney = ele.betweenness[0][data.getMoneyLabel(ele.betweenness[0].key)],
                    rightMoney = ele.betweenness[1][data.getMoneyLabel(ele.betweenness[1].key)],
                    leftOper = data.getMoneyOperator(ele.betweenness[0].key, data.operatorEng, 'name'),
                    rightOper = data.getMoneyOperator(ele.betweenness[1].key, data.operatorEng1, 'name')
                  if (typeof leftMoney != 'undefined' && typeof rightMoney != 'undefined' && rightMoney >= leftMoney) {
                    name += leftMoney + leftOper + ele.paramLabel + rightOper + rightMoney
                    if (name) {
                      name = also + name
                    }
                  }
                }
              }
              if (ele.type === 'purchase_origin') {
                if (data.getPurchase(ele.purchaseOrigins, data.purchaseOriginsList)) {
                  name += ele.paramLabel + '属于：' + data.getPurchase(ele.purchaseOrigins, data.purchaseOriginsList)
                  if (name) {
                    name = also + name
                  }
                }
              }
              if (name) {
                stringName += name
              }
            })
            if (stringName) {
              conditionStringName += perhaps + stringName.replace(new RegExp(also), '')
            }
          })
          if (conditionStringName) {
            conditionStringName = conditionStringName.replace(new RegExp(perhaps), '')
          } else {
            conditionStringName = '请设置条件'
          }
        } else {
          conditionStringName = '请设置条件'
        }
        return conditionStringName
      },
      //审批人抄送人显示和校验
      setApproverStr(nodeConfig) {
        let type = ''
        let role = ''
        //审批人
        if (nodeConfig.type === 'approver') {
          if (nodeConfig.properties.actionerRules[0].type === 'target_select') return '发起人自选'
          if (nodeConfig.properties.actionerRules[0].type === 'target_approval') {
            role = data.getName(nodeConfig.properties.actionerRules[0].approvals, 'name')
            if (nodeConfig.properties.actionerRules[0].actType === 'and') type = '会签'
            if (nodeConfig.properties.actionerRules[0].actType === 'or') type = '或签'
          }
          if (nodeConfig.properties.actionerRules[0].type === 'target_management') {
            if (nodeConfig.properties.actionerRules[0].actType === 'and') type = '会签'
            if (nodeConfig.properties.actionerRules[0].actType === 'or') type = '或签'
            if (nodeConfig.properties.actionerRules[0].level) {
              role = data.directorLevelList[data.directorLevelList.findIndex((e) => e.id == nodeConfig.properties.actionerRules[0].level)].name
            }
          }
          if (nodeConfig.properties.actionerRules[0].type === 'target_label') {
            role = nodeConfig.properties.actionerRules[0].labelNames
            if (nodeConfig.properties.actionerRules[0].actType === 'and') type = '会签'
            if (nodeConfig.properties.actionerRules[0].actType === 'or') type = '或签'
          }
          if (nodeConfig.properties.actionerRules[0].type === 'target_expert') {
            role = '专家'
          }
          if (nodeConfig.properties.actionerRules[0].type === 'target_supervisor') {
            role = '监督人'
          }

          if (role) {
            return `由${role}${type}`
          } else {
            return ''
          }
        }

        //抄送人
        if (nodeConfig.type === 'notifier') {
          if (nodeConfig.properties.actionerRules && nodeConfig.properties.actionerRules.length) {
            nodeConfig.properties.actionerRules.forEach((item) => {
              if (item.type === 'target_approval') {
                //   console.log('item', item.targetType)
                if (item.type !== 'target_select') {
                  role += data.getName(item.approvals, 'name') + ','
                }
              }
              if (item.type == 'target_select') {
                nodeConfig.properties.addTargetApproval = true
              }
              if (item.type === 'target_label') {
                role += item.labelNames + ','
              }
              if (item.type === 'target_management') {
                role += data.filtersMethods(item.level, data.directorLevelList) + ','
              }
            })
            role = role ? role.slice(0, role.length - 1) : ''
          }
          if (nodeConfig.properties.addTargetApproval) {
            //发起人自选
            role = (role ? role + ',' : role) + '发起人自选'
          }
          if (role) {
            return `${role}`
          } else {
            return ''
          }
        }
      },
      //保存弹框设置
      saveApprover() {
        if (data.approverConfig.type === 'condition') {
          data.saveCondition()
          return
        }
        let needKeys = [] //所需参数集合
        if (data.approverConfig.type === 'approver') {
          if (data.approverConfig.properties.actionerRules[0].type == 'target_approval') {
            needKeys = ['actType', 'approvals', 'type']
          }

          if (data.approverConfig.properties.actionerRules[0].type == 'target_select') {
            needKeys = ['actType', 'multi', 'type']
          }
          if (data.approverConfig.properties.actionerRules[0].type == 'target_management') {
            needKeys = ['actType', 'autoUp', 'level', 'type', 'noneActionerAction']
          }
          if (data.approverConfig.properties.actionerRules[0].type == 'target_label') {
            needKeys = ['actType', 'labels', 'labelNames', 'type', 'noneActionerAction']
          }
          for (let i = 0; i < data.approverConfig.properties.actionerRules.length; i++) {
            let ele = data.approverConfig.properties.actionerRules[i]
            let obj = {}
            for (let j = 0; j < needKeys.length; j++) {
              if (ele.hasOwnProperty(needKeys[j])) {
                obj[needKeys[j]] = ele[needKeys[j]]
              }
            }
            data.approverConfig.properties.actionerRules[i] = obj
          }
          if (!needKeys.includes('noneActionerAction')) {
            delete data.approverConfig.properties.noneActionerAction
          }
        }

        if (data.approverConfig.type === 'notifier') {
          if (data.approverConfig.properties.addTargetApproval) {
            //增加允许抄送人
            if (
              !data.approverConfig.properties.actionerRules.some((item) => {
                return item.type === 'target_select'
              })
            ) {
              data.approverConfig.properties.actionerRules.push({ type: 'target_select', multi: 1 })
            }
          } else {
            let target_selecttIndex = data.approverConfig.properties.actionerRules.findIndex((item) => {
              //删除允许抄送人
              //
              return item.type === 'target_select'
            })
            if (target_selecttIndex != -1) {
              data.approverConfig.properties.actionerRules.splice(target_selecttIndex, 1)
            }
          }
        }

        data.approverConfig.error = data.setApproverStr(data.approverConfig) === ''
        //通过hasFlag区分添加节点后自动出现弹框及点击出现弹框
        if (data.hasFlag) {
          if (data.nodeConfig.conditionNodes && data.nodeConfig.conditionNodes.length > 0 && data.conditionTip) {
            data.approverConfig.properties.isSetPerson = '1'
            console.log(data.bPriorityLevel)
            //条件分支
            data.nodeConfig.conditionNodes.forEach((element) => {
              if (
                element.childNode &&
                !element.childNode.properties.isSetPerson &&
                element.childNode.name === data.approverConfig.name &&
                element.childNode.type === data.approverConfig.type
              ) {
                //条件分支节点赋值
                element.childNode = data.approverConfig
              }
            })
          } else {
            data.nodeConfig.childNode = data.approverConfig
          }
          emit('update:nodeConfig', data.nodeConfig)
        } else {
          emit('update:nodeConfig', data.approverConfig)
        }
        data.approverDrawer = false
      },
      //保存条件设置
      saveCondition() {
        data.approverDrawer = false
        // console.log('data.nodeConfig', data.nodeConfig)
        // console.log('data.approverConfig', data.approverConfig)
        //条件循环设置
        console.log(data.conditionsConfig)
        for (var i = 0; i < data.conditionsConfig.conditionNodes.length; i++) {
          data.conditionsConfig.conditionNodes[i].error = data.conditionStr(data.conditionsConfig.conditionNodes[i], i) == '请设置条件'
        }
        // 区分添加节点后自动出现弹框及点击出现弹框
        if (data.hasFlag) {
          //  data.conditionsConfig.childNode = data.nodeConfig.childNode
          //  data.nodeConfig.childNode = data.conditionsConfig
          emit('update:nodeConfig', data.nodeConfig)
        } else {
          emit('update:nodeConfig', data.conditionsConfig)
        }
      },
      //删除节点
      delNode() {
        emit('update:nodeConfig', data.nodeConfig.childNode)
      },
      //添加条件
      addTerm() {
        let len = data.nodeConfig.conditionNodes.length

        data.nodeConfig.conditionNodes.push({
          name: '条件' + (len + 1),
          type: 'condition',
          priorityLevel: len + 1,
          properties: data.setInitCond(),
          childNode: null
        })
        for (var i = 0; i < data.nodeConfig.conditionNodes.length; i++) {
          data.nodeConfig.conditionNodes[i].error =
            data.conditionStr(data.nodeConfig.conditionNodes[i], i) == '请设置条件' && i != data.nodeConfig.conditionNodes.length - 1
        }
        emit('update:nodeConfig', data.nodeConfig)
      },
      //删除条件
      delTerm(index) {
        data.nodeConfig.conditionNodes.splice(index, 1)
        for (var i = 0; i < data.nodeConfig.conditionNodes.length; i++) {
          data.nodeConfig.conditionNodes[i].priorityLevel = i + 1
          data.nodeConfig.conditionNodes[i].name = '条件' + (i + 1)
          data.nodeConfig.conditionNodes[i].error =
            data.conditionStr(data.nodeConfig.conditionNodes[i], i) == '请设置条件' && i != data.nodeConfig.conditionNodes.length - 1
        }

        emit('update:nodeConfig', data.nodeConfig)
        if (data.nodeConfig.conditionNodes.length == 1) {
          if (data.nodeConfig.childNode) {
            if (data.nodeConfig.conditionNodes[0].childNode) {
              data.reData(data.nodeConfig.conditionNodes[0].childNode, data.nodeConfig.childNode)
            } else {
              data.nodeConfig.conditionNodes[0].childNode = data.nodeConfig.childNode
            }
          }
          emit('update:nodeConfig', data.nodeConfig.conditionNodes[0].childNode)
        }
      },
      reData(dataV, addData) {
        if (!dataV.childNode) {
          dataV.childNode = addData
        } else {
          data.reData(dataV.childNode, addData)
        }
      },
      //打开弹框
      setPerson(priorityLevel, item, dataV, tip) {
        console.log('dataV', dataV)
        data.getChooseConditionData(dataV)
        if (tip) {
          data.conditionTip = tip
        }
        if (dataV) {
          //添加节点自动出现弹框传值
          data.hasFlag = true
          // 条件
          if (priorityLevel == 1) {
            data.bPriorityLevel = priorityLevel
            data.conditionsConfig = JSON.parse(JSON.stringify(dataV))
            data.approverConfig = data.conditionsConfig.conditionNodes[priorityLevel - 1]
            return
          }
          data.approverDrawer = true //避免条件下新增条件 弹窗bug
          // 审批人、抄送人
          if (dataV.type === 'notifier') {
            //抄送人回显多选框
            if (
              dataV.properties.actionerRules.some((item) => {
                return item.type === 'target_select'
              })
            ) {
              dataV.properties.addTargetApproval = true
            }
          }
          data.approverConfig = JSON.parse(JSON.stringify(dataV))
        } else {
          //点击出现弹框
          data.approverDrawer = true
          // 条件
          let { type } = data.nodeConfig
          if (type == 'route') {
            data.bPriorityLevel = priorityLevel
            data.conditionsConfig = JSON.parse(JSON.stringify(data.nodeConfig))
            data.approverConfig = data.conditionsConfig.conditionNodes[priorityLevel - 1]
            console.log('data.approverConfig', data.approverConfig)

            return
          }

          // 审批人、抄送人
          data.approverConfig = JSON.parse(JSON.stringify(data.nodeConfig))
        }
      },
      arrTransfer(index, type = 1) {
        //向左-1,向右1
        data.nodeConfig.conditionNodes[index] = data.nodeConfig.conditionNodes.splice(index + type, 1, data.nodeConfig.conditionNodes[index])[0]
        data.nodeConfig.conditionNodes.map((item, index) => {
          item.priorityLevel = index + 1
        })
        for (var i = 0; i < data.nodeConfig.conditionNodes.length; i++) {
          data.nodeConfig.conditionNodes[i].error =
            data.conditionStr(data.nodeConfig.conditionNodes[i], i) == '请设置条件' && i != data.nodeConfig.conditionNodes.length - 1
        }
        emit('update:nodeConfig', data.nodeConfig)
      },

      //组织架构选择人/部门
      handleSelectDept(index) {
        data.tIndex = index
        data.selectDataList = []
        data.select = false
        if (data.approverConfig.type == 'approver') {
          if (data.approverConfig.properties.actionerRules[0].type === 'target_approval') {
            data.selectType = '0'
            data.defaultProps = { label: 'name', children: 'child', disabled: 'disabled' }
            orgStructureSelectionRef.value.init() //选人
            data.selectDataList = data.approverConfig.properties.actionerRules[0].approvals.map((e) => {
              return {
                id: e.id,
                name: e.name,
                targetType: 'target_approval'
              }
            })
          }
          if (data.approverConfig.properties.actionerRules[0].type === 'target_label') {
            data.selectType = '2'
            data.select = true
            data.defaultProps = { label: 'name', children: 'jobList', disabled: 'disabled' }
            orgStructureSelectionRef.value.init() //选岗位
            if (data.approverConfig.properties.actionerRules[0].labels) {
              data.selectDataList = [
                {
                  id: data.approverConfig.properties.actionerRules[0].labels,
                  name: data.approverConfig.properties.actionerRules[0].labelNames,
                  targetType: 'target_label'
                }
              ]
            }
          }
        }

        if (data.approverConfig.type == 'notifier') {
          data.selectType = '0'
          data.defaultProps = { label: 'name', children: 'child', disabled: 'disabled' }
          orgStructureSelectionRef.value.init() //选人
          data.approverConfig.properties.actionerRules.forEach((item) => {
            if (item.type === 'target_approval') {
              if (item.type !== 'target_select') {
                if (item.approvals && item.approvals.length) {
                  item.approvals.forEach((ele) => {
                    ele.targetType = 'target_approval'
                    data.selectDataList.push(ele)
                  })
                }
              }
            }
          })
        }

        if (data.approverConfig.type == 'condition') {
          data.selectType = '0'
          data.defaultProps = { label: 'name', children: 'child', disabled: 'disabled' }
          orgStructureSelectionRef.value.init() //选人
          let conditionsList = data.approverConfig.properties.conditions[data.tIndex]
          let approverIndex = data.approverConfig.properties.conditions[data.tIndex].findIndex((item) => {
            return item.type === data.chooseConditionData[0].id
          })
          conditionsList[approverIndex].conds = conditionsList[approverIndex].conds ? conditionsList[approverIndex].conds : []
          data.selectDataList = conditionsList[approverIndex].conds.map((item) => {
            return {
              id: item.value,
              name: item.attrs.name,
              targetType: 'target_approval'
            }
          })
        }
      },
      //组织架构人/部门数据
      submitOrgSelect(value) {
        if (value && value.length > 0) {
          //审批人- 指定成员
          if (data.approverConfig.type == 'approver') {
            if (data.approverConfig.properties.actionerRules[0].type === 'target_approval') {
              data.approverConfig.properties.actionerRules[0].approvals = value.map((item) => {
                return {
                  name: item.name,
                  id: item.id
                }
              })
            }
            if (data.approverConfig.properties.actionerRules[0].type === 'target_label') {
              data.approverConfig.properties.actionerRules[0].labels = value[0].id
              data.approverConfig.properties.actionerRules[0].labelNames = value[0].name
            }
          }
          //抄送人
          if (data.approverConfig.type == 'notifier') {
            data.approverConfig.properties.actionerRules = []
            value.forEach((item) => {
              data.approverConfig.properties.actionerRules.push({ type: 'target_approval', approvals: [{ name: item.name, id: item.id }] })
            })
          }

          if (data.approverConfig.type == 'condition') {
            let conditionsList = data.approverConfig.properties.conditions[data.tIndex]
            let approverIndex = data.approverConfig.properties.conditions[data.tIndex].findIndex((item) => {
              return item.type === data.chooseConditionData[0].id
            })
            conditionsList[approverIndex].conds = []
            value.forEach((item) => {
              conditionsList[approverIndex].conds.push({ type: 'user', value: item.id, attrs: { name: item.name, avatar: item.avatar } })
            })
          }
        }
      },

      handleClose(id, tag, idx) {
        nextTick(() => {
          if (data.approverConfig.type == 'approver') {
            data.approverConfig.properties.actionerRules[0].approvals.splice(
              data.approverConfig.properties.actionerRules[0].approvals.findIndex((e) => e.id == id),
              1
            )
          }
          if (data.approverConfig.type == 'notifier') {
            data.approverConfig.properties.actionerRules.splice(idx, 1)
          }

          if (data.approverConfig.type == 'condition') {
            let conditionsList = data.approverConfig.properties.conditions[idx]

            let approverIndex = data.approverConfig.properties.conditions[idx].findIndex((item) => {
              return item.type === data.chooseConditionData[0].id
            })
            conditionsList[approverIndex].conds.splice(
              conditionsList[approverIndex].conds.findIndex((e) => e.value == id),
              1
            )
          }
        })
      },
      //添加条件组
      addConditionGroup() {
        if (data.approverConfig.properties.conditions.length > 2) {
          return ElMessage.warning('最多可以添加3个条件组')
        }
        let condNode = data.chooseConditionData[data.getCondFirstNodeIndex()]
        data.approverConfig.properties.conditions.push([{ type: condNode.id, paramLabel: condNode.name }])
        data.approverConfig.properties.properties.push([condNode.id])
      },
      /**
       * @msg: - 条件触发方法
       */
      chooseConditionsChange(v, index) {
        nextTick(() => {
          const typeArr = ['organizer', 'amount', 'purchase_origin']
          const nameArr = ['发起人', '金额', '采购来源']
          let flag = [true, true, true], // 已存在列表中的数据不覆盖
            check = [true, true, true], // 校验选中的数据
            idx = -1
          flag[0] = !data.approverConfig.properties.conditions[index].some((e) => {
            return e.type == typeArr[0]
          })
          flag[1] = !data.approverConfig.properties.conditions[index].some((e) => {
            return e.type == typeArr[1]
          })
          flag[2] = !data.approverConfig.properties.conditions[index].some((e) => {
            return e.type == typeArr[2]
          })
          check[0] = data.approverConfig.properties.properties[index].some((e) => {
            return e == typeArr[0]
          })
          check[1] = data.approverConfig.properties.properties[index].some((e) => {
            return e == typeArr[1]
          })
          check[2] = data.approverConfig.properties.properties[index].some((e) => {
            return e == typeArr[2]
          })
          if (flag[0] && check[0]) {
            data.approverConfig.properties.conditions[index].push({ type: typeArr[0], paramLabel: nameArr[0] }) //是否显示发起人
          }
          if (flag[1] && check[1]) {
            data.approverConfig.properties.conditions[index].push({
              type: typeArr[1],
              paramLabel: nameArr[1],
              unit: '元',
              betweenness: [{ key: 'g' }, { key: 'l' }]
            }) //是否显示金额
          }
          if (flag[2] && check[2]) {
            data.approverConfig.properties.conditions[index].push({
              type: typeArr[2],
              paramLabel: nameArr[2],
              purchaseOrigins: []
            }) //是否显示采购来源
          }
          // TODO  检验不存在直接移除取消选中的条件
          if (!check[0]) {
            idx = data.approverConfig.properties.conditions[index].findIndex((e) => {
              return e.type === typeArr[0]
            })
            if (idx != -1) {
              data.approverConfig.properties.conditions[index].splice(idx, 1)
            }
          }
          if (!check[1]) {
            idx = data.approverConfig.properties.conditions[index].findIndex((e) => {
              return e.type === typeArr[1]
            })
            if (idx != -1) {
              data.approverConfig.properties.conditions[index].splice(idx, 1)
            }
          }
          if (!check[2]) {
            idx = data.approverConfig.properties.conditions[index].findIndex((e) => {
              return e.type === typeArr[2]
            })
            if (idx != -1) {
              data.approverConfig.properties.conditions[index].splice(idx, 1)
            }
          }
        })
      },
      /**
       * @msg: - 获取采购来源数组
       * @param { Array } - flag 展示权限
       */
      getChooseConditionData(dataV) {
        nextTick(() => {
          //  判断条件展示按钮
          data.setCondNodeFlag()
          //   修改初始值
          dataV?.conditionNodes &&
            dataV.conditionNodes.forEach((x) => {
              x.properties = data.setInitCond()
            })
        })
      },
      setCondNodeFlag() {
        data.conditionList &&
          data.conditionList.length &&
          data.chooseConditionData.forEach((item, index) => {
            if (data.conditionList.indexOf(item.id) > -1) {
              data.chooseConditionData[index].flag = true
            }
          })
      },
      getCondFirstNodeIndex() {
        return data.conditionList && data.conditionList.length && data.chooseConditionData.findIndex((item) => data.conditionList.indexOf(item.id) > -1)
      },
      // 设置默认节点
      setInitCond() {
        let condNode = data.chooseConditionData[data.getCondFirstNodeIndex()]
        return {
          conditions: [[{ type: condNode.id, paramLabel: condNode.name }]],
          properties: [[condNode.id]]
        }
      },
      /**
       * @msg: - 删除条件
       */
      rowDel(index, idx) {
        nextTick(() => {
          data.approverConfig.properties.conditions[index].splice(idx, 1)
          data.approverConfig.properties.properties[index].splice(idx, 1)
        })
      },
      //删除条件组
      groupDel(index) {
        data.approverConfig.properties.conditions.splice(index, 1)
        data.approverConfig.properties.properties.splice(index, 1)
      },

      getName(list, name) {
        if (list && list.length) {
          return list
            .map((item) => {
              return item[name]
            })
            .join(',')
        } else {
          return ''
        }
      },
      filtersMethods(val, filtersList) {
        for (let i = 0; i < filtersList.length; i++) {
          if (val == filtersList[i].id) {
            return filtersList[i].name
          }
        }
      },
      // 获取采购值
      getPurchase(key, keys) {
        let name = ''
        key.forEach((ele) => {
          keys.forEach((item) => {
            if (item.id === ele) {
              name += item.name + ','
            }
          })
        })
        return name ? name.slice(0, name.length - 1) : ''
      },
      // 获取金额key值
      getMoneyLabel(key) {
        let label = ''
        switch (key) {
          case 'l':
            label = 'upperBound'
            break
          case 'g':
            label = 'lowerBoundNotEqual'
            break
          case 'le':
            label = 'upperBoundEqual'
            break
          case 'e':
            label = 'boundEqual'
            break
          case 'ge':
            label = 'lowerBound'
            break
          case 'between':
            label = 'between'
            break
          default:
            break
        }
        return label ? label : ''
      },
      //  获取金额运算符
      getMoneyOperator(val, keyList, key) {
        let label = null
        let index = keyList.findIndex((item) => {
          return item.id === val
        })
        if (keyList[index]) {
          label = keyList[index][key]
        }
        return label
      },
      //介于判断 删除已用字段
      operatorChange(val, row) {
        nextTick(() => {
          delete row['']
          switch (val) {
            case 'l':
              delete row.upperBoundEqual
              break
            case 'le':
              delete row.upperBound
              break
            case 'g':
              delete row.lowerBound
              break
            case 'ge':
              delete row.lowerBoundNotEqual
              break
            default:
              break
          }
        })
      },
      chooseOperator(val, row, key) {
        nextTick(() => {
          delete row['']
          delete row['upperBound']
          delete row['lowerBoundNotEqual']
          delete row['upperBoundEqual']
          delete row['boundEqual']
          delete row['lowerBound']
          if (key !== 'between') {
            row.betweenness = [{ key: 'g' }, { key: 'l' }]
          }
        })
      },
      getImg(type) {
        const imgModules = import.meta.globEager('./img/*.png')
        switch (type) {
          case 'approver':
            return imgModules['./img/shenpi.png'].default
          case 'notifier':
            return imgModules['./img/chaosong.png'].default
          default:
            break
        }
      },
      getNodeType(val) {
        if (val == 'approver') {
          return 1
        } else if (val == 'notifier') {
          return 2
        } else if (val == 'start') {
          return 3
        } else if (val == 'route') {
          return 4
        } else if (val == 'condition') {
          return 5
        }
      },
      //  修改标题
      titleInput() {
        data.nodeConfig.inputFlag = true
        nextTick(() => {
          titleInputBlurRef.value.select()
        })
      },
      titleInputBlur() {
        nextTick(() => {
          data.nodeConfig.inputFlag = false
        })
      }
    })

    watch(
      () => data.approverDrawer,
      (val) => {
        if (!val) {
          data.hasFlag = false
          data.conditionTip = ''
        }
      }
    )
    return {
      ...toRefs(data),
      titleInputBlurRef,
      orgStructureSelectionRef,
      ctx
    }
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-dialog__title) {
  font-size: 18px !important;
  font-weight: 600 !important;
}

:deep(.default-style) {
  margin-left: 25px;
}
.search-style {
  label {
    width: 50px !important;
  }
  :deep(.el-row) {
    padding-right: 0px !important;
  }
  :deep(.el-form-item__content) {
    margin-left: 50px !important;
  }
}
.flex-style {
  display: flex;
  justify-content: space-between;
}
.dang-style {
  font-size: 14px;
}
.dialog-style {
  z-index: 99999 !important;
  background: rgba(0, 0, 0, 0.5);
}
.v-modal {
  background: none !important;
  z-index: -1 !important;
}

.error_tip {
  position: absolute;
  top: 36px;
  right: 0px;
  transform: translate(150%, 0px);

  i {
    font-size: 24px;
  }
}

.add-node-popover-body {
  display: flex;
}
.radio_title {
  :deep(.el-radio) {
    margin: 0 30px 30px 0;
  }
}
:deep(.el-radio) {
  margin: 12px;
}
</style>
