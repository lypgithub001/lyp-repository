<template>
  <div class="header-tabs">
    <div class="tab-container">
      <div class="header-title" :style="{ paddingBottom: tabList.length == 0 ? '20px' : '0' }">
        <div v-if="headerTitle">
          {{ headerTitle }}
        </div>
        <slot name="header_title"></slot>
        <div class="rightContainer">
          <slot name="rightContainer"></slot>
        </div>
      </div>
      <div>
        <slot name="headerTitleBottomContainer"></slot>
      </div>
      <div style="position: relative">
        <el-tabs v-model="activeName" @tab-click="handleClick" v-if="tabList.length > 0" :class="[typeArea ? 'type_area' : '']">
          <template v-if="!notDefault">
            <el-tab-pane
              v-for="(item, index) in tabList"
              :label="`${item.label}${item.prop ? '（' + (statistical[item.prop] || 0) + '）' : ''}`"
              :name="item.name"
              :key="index"
            >
              <div>
                <slot name="tabBottomContainer"></slot>
              </div>
            </el-tab-pane>
          </template>
          <template v-else>
            <el-tab-pane
              v-for="(item, index) in tabList"
              :label="`${item.label}${item.prop ? '(' + (item.prop || 0) + ')' : ''}`"
              :name="item.name"
              :key="index"
            ></el-tab-pane>
          </template>
        </el-tabs>
        <div><slot name="headerContainer"></slot></div>
        <!-- tab 右侧位置 -->
        <div style="position: absolute; right: 25px; top: 16px; font-size: 14px">
          <slot name="rightInlineContainer"></slot>
        </div>
      </div>
      <div class="hr" v-if="showTenBorder"></div>
    </div>
    <slot name="bottomContainer"></slot>
    <div>
      <slot name="statusContainer"></slot>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive } from 'vue'
export default {
  name: '',
  components: {},
  props: {
    //默认值
    activeName: {
      //当前状态id
      type: String,
      default: '0'
    },
    //标题
    headerTitle: {
      type: String,
      default: ''
    },
    // 统计状态
    statistical: {
      type: Object,
      default: {}
    },
    //tab集合
    tabList: {
      type: Array,
      default: () => []
    },
    // 是否使用版心，默认false
    typeArea: {
      type: Boolean,
      default: false
    },
    //是否是默认的
    notDefault: {
      type: Boolean,
      default: false
    },
    //是否展示底部10px
    showTenBorder: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      handleClick(tab, event) {
        //tab按钮/当前状态下页面
        emit('tabClick', tab, event)
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.header-tabs {
  position: sticky;
  top: 0;
  z-index: 1000;
  //   margin-bottom: 10px;

  .tab-container {
    background: #fff;
    padding: 20px 20px 0 20px;
    // padding: 20px 40px;
    //  margin: 0 16px;
    /* box-shadow: 0px 4px 20px -8px rgb(50 50 71 / 8%); */
    border-radius: 2px;
    position: relative;
    .hr {
      position: absolute;
      left: -20px;
      width: 100%;
      height: 10px;
      background-color: #f2f3f5;
      margin: 0 20px;
    }
  }
  .header-title {
    font-size: 20px;
    color: #1d2129;
    // font-family: 'PingFangSC, PingFangSC-Semibold';
    font-weight: 600;
    text-align: left;
    line-height: 28px;
    display: flex;
    justify-content: space-between;
  }
  .type_area {
    width: 1150px;
    margin: 0 auto;
    position: relative;
    .el-tabs__nav-wrap {
      display: flex;
      justify-content: center;
      .el-tabs__nav-scroll {
        transform: translateX(-50%);
      }
    }
  }
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__active-bar {
    height: 1px;
    background-color: #1664ff;
  }
  .el-tabs__item {
    color: #4e5969;
    font-size: 14px;
    // font-family: 'PingFangSC, PingFangSC-Semibold';
  }
  .el-tabs__item.is-active {
    color: #1664ff;
    font-size: 14px;
    font-weight: 600;
  }
  .el-tabs__item {
    height: 60px;
    line-height: 60px;
  }
  .el-button--default {
    color: #6276a0;
    background: #ffffff;
    border-radius: 4px;
  }

  .back-container {
    background: #fff;
    border-top: 1px solid #edf2f7;
    padding: 13px 24px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    margin: 0 16px;
    height: 54px;
    line-height: 54px;
    .status-st {
      font-size: 24px;
      font-family: 'siyuan, siyuan-Medium';
      font-weight: 600;
      text-align: right;
      color: #ff8d66;
    }
    .fj-title {
      font-size: 12px;
      font-family: 'siyuan, siyuan-Regular';
      font-weight: 400;
      text-align: left;
      color: #7a828a;
    }
  }
  .rightContainer {
    height: 28px;
    display: flex;
    align-items: center;
  }
}
</style>
