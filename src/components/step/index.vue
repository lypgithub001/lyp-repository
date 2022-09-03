<template>
  <!-- 横向步骤条 -->
  <div class="step-card" :class="{ 'fixed-step-card': fixedTop }">
    <card-container :typeArea="true" :isTitle="false">
      <template #content>
        <div class="step-a">
          <div class="step-b" v-for="(item, index) in stepList" :key="index">
            <div class="step-c">
              <div class="step-circle" :class="{ 'step-active': index + 1 <= active }">
                <span v-if="index + 2 > active">{{ index + 1 }}</span>
                <span v-else>✔</span>
              </div>
              <div class="step-line" :class="{ 'step-active': index + 1 <= active }"></div>
            </div>
            <div class="step-title" :class="{ 'step-active-title': index + 1 <= active }">{{ item.title }}</div>
          </div>
        </div>
      </template>
    </card-container>
  </div>
</template>
<script>
import { toRefs, reactive, watch, nextTick, onMounted } from 'vue'

export default {
  name: '',
  components: {},
  props: {
    //[{ title:''}]
    stepList: {
      type: Array,
      default: () => []
    },
    // 步数
    active: {
      type: Number,
      default: 1
    },
    //  固定悬浮到头部
    fixedTop: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    onMounted(() => {
      state.calcWidth()
    })
    const state = reactive({
      init() {},
      calcWidth() {
        nextTick(() => {
          let dom = document.querySelectorAll('.step-title')
          for (let i = 0; i < dom.length; i++) {
            let left = (32 - dom[i].offsetWidth) / 2
            dom[i].style.marginLeft = left + 'px'
          }
        })
      }
    })
    watch(
      () => props.stepList,
      (val) => {
        state.calcWidth()
      }
    )
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.step-card {
  background: #fff;
  .step-a {
    display: flex;
    justify-content: center;
    padding-left: 50px;
  }
  .step-b {
    .step-title {
      font-size: 14px;
      text-align: center;
      line-height: 24px;
      display: inline-block;
      font-family: 'siyuan, siyuan-Regular';
      font-weight: 400;
      color: #425466;
    }
    .step-active-title {
      font-family: 'siyuan, siyuan-Medium';
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    .step-c {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .step-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 14px;
        font-family: 'siyuan, siyuan-Regular';
        font-weight: 400;
        text-align: center;
        color: #506172;
        line-height: 32px;
        background: #ffffff;
        border: 1px solid #cbd5e0;
      }
      .step-line {
        width: 223px;
        height: 1px;
        align-items: center;
        margin: 0 20px;
        background: #cbd5e0;
      }

      .step-active {
        background: #16ce9c;
        color: #ffffff;
      }
    }
  }

  .step-b:last-child {
    .step-line {
      display: none;
    }
  }
}
.fixed-step-card {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
