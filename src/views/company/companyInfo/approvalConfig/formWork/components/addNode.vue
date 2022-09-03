<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <el-popover placement="right-start" :width="180" popper-class="add-node-popover" v-model:visible="visible">
        <div class="add-node-popover-body">
          <div class="add-node-popover-item node-approver" @click="addType('approver')">
            <div class="item-wrapper">
              <img src="./img/approver.png" alt="" class="img-style" />
            </div>
            <p>审批人</p>
          </div>
          <div class="add-node-popover-item node-notifier" @click="addType('notifier')">
            <div class="item-wrapper">
              <img src="./img/notifier.png" alt="" class="img-style" />
            </div>
            <p>抄送人</p>
          </div>
          <div class="add-node-popover-item node-condition" @click="addType('route')">
            <div class="item-wrapper">
              <img src="./img/route.png" alt="" class="img-style" />
            </div>
            <p>条件分支</p>
          </div>
        </div>
        <template #reference>
          <button class="btn" type="button">
            <i style="color: #fff" class="el-icon-plus"></i>
          </button>
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script>
import { computed, reactive, toRefs } from 'vue'
export default {
  props: ['childNodeP', 'nodeConfig', 'tip'],

  setup(prop, { emit }) {
    const data = reactive({
      visible: false,
      parentObj: {},
      childNodeP: computed(() => {
        return prop.childNodeP
      }),
      nodeConfig: computed(() => {
        return prop.nodeConfig
      }),
      tip: computed(() => {
        return prop.tip
      }),
      addType(type) {
        this.visible = false
        console.log('prop', prop)
        let data
        if (type != 'route') {
          if (type == 'approver') {
            data = {
              name: '审批人',
              type: 'approver',
              inputFlag: false,
              properties: {
                actionerRules: [
                  {
                    type: 'target_approval',
                    approvals: [],
                    actType: 'or'
                  }
                ],
                noneActionerAction: 'auto',
                isSetPerson: '' //条件判断
              },
              childNode: this.childNodeP,
              error: true
            }
          } else if (type == 'notifier') {
            data = {
              name: '抄送人',
              error: true,
              type: 'notifier',
              inputFlag: false,
              properties: {
                actionerRules: [],
                addTargetApproval: false, //允许发起人添加抄送人
                isSetPerson: '' //条件判断
              },
              childNode: this.childNodeP
            }
          }
          this.$parent.setPerson('', '', data, this.tip) //添加节点自动弹出弹框
        } else {
          data = {
            type: 'route',
            childNode: this.childNodeP,
            conditionNodes: [
              {
                name: '条件1',
                error: true,
                type: 'condition',
                priorityLevel: 1,
                properties: { conditions: [[{ type: 'organizer', paramLabel: '发起人' }]], properties: [['organizer']] },
                childNode: null
              },
              {
                name: '条件2',
                error: true,
                type: 'condition',
                priorityLevel: 2,
                properties: { conditions: [[{ type: 'organizer', paramLabel: '发起人' }]], properties: [['organizer']] },
                childNode: null
              }
            ]
          }
          this.$parent.setPerson(1, '', data) //添加节点自动弹出弹框
        }
        emit('update:childNodeP', data)
      }
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.add-node-btn-box {
  cursor: pointer;
  width: 240px;
  display: inline-flex;
  flex-shrink: 0;
  position: relative;
  &:first-child {
    margin-left: 16px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 0px;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    width: 2px;
    // height: 100%;
    background-color: #cccccc;
  }
}
.img-style {
  width: 36px;
}
</style>

<style lang="scss">
.add-node-popover {
  padding: 14px 26px;
  height: 75px;
  .add-node-popover-body {
    display: flex;
    .add-node-popover-item {
      margin-right: 20px;
      text-align: center;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      i {
        font-size: 36px;
      }
      p {
        color: #333;
        margin-top: 15px;
      }
    }
    .node-approver {
      i {
        color: #e6a23c;
      }
    }
    .node-condition {
      i {
        color: #67c23a;
      }
    }
    .node-notifier {
      i {
        color: #4880ff;
      }
    }
  }
}
</style>
