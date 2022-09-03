<template>
  <div class="rate" :class="{ disabled: disabled }">
    <div :class="[isdefault == true ? 'star-wrap' : 'star-wrap-other', isRequired === true ? 'is-required' : '']">
      <i
        v-for="(i, index) in 5"
        :key="index"
        @mouseenter="disabled ? '' : (curScore = i)"
        @mouseleave="disabled ? '' : (curScore = '')"
        @click="disabled ? '' : setScore(i)"
        :class="getClass(i)"
      >
        <i v-if="disabled && i == Math.floor(score) + 1" class="icon-star" :style="{ width: width, height: height }"></i>
      </i>
      <span v-if="showText" class="text">{{ curScore || score }}分</span>
      <span v-if="showWord" class="text" style="font-size: 14px">{{ getWord(score) }}</span>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: 'MyRate',
  props: {
    // 分数，默认0，保留一位小数
    score: {
      type: Number,
      default: 0
    },
    //是否必选
    isRequired: {
      type: Boolean,
      default: false
    },
    // 是否只读，默认false，鼠标点击可以打分
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示分数，默认false
    showText: {
      type: Boolean,
      default: false
    },
    // 是否显示文字，默认false
    showWord: {
      type: Boolean,
      default: false
    },
    //索引
    index: {
      type: Number,
      default: 0
    },
    //  是否默认星星
    isdefault: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    onMounted(() => {
      state.getDecimal()
    })
    const state = reactive({
      curScore: '',
      width: '',
      height: '',
      showWordList: ['非常差', '差', '一般', '好', '非常好'],
      getClass(i) {
        if (state.curScore === '') {
          return i <= props.score ? 'icon-star' : 'icon-star-o'
        } else {
          return i <= state.curScore ? 'icon-star' : 'icon-star-o'
        }
      },
      getDecimal() {
        state.width = Number(props.score * 100 - Math.floor(props.score) * 100) + '%'
      },
      setScore(i) {
        emit('updataScore', i)
      },
      getWord(val) {
        return state.showWordList[Math.round(val - 1)]
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.rate {
  .text {
    position: relative;
    top: -4px;
    font-size: 16px;
    font-weight: 400;
    color: #e01b2f;
  }
  .is-required {
    position: relative;
  }
  .is-required::before {
    position: absolute;
    content: '*';
    left: -8px;
    color: #f56c6c;
    top: 10px;
  }
  .star-wrap {
    line-height: 0;
    .icon-star-o {
      position: relative;
      width: 20px;
      height: 20px;
      line-height: 0;
      display: inline-block;
      margin-right: 3px;
      background: url('@/assets/img/icon-star-grey.png');
      background-size: cover;
      .icon-star {
        position: absolute;
        left: 0;
        top: 0;
      }
      transition: 0.7s;
    }
    .icon-star {
      width: 20px;
      height: 20px;
      line-height: 0;
      display: inline-block;
      margin-right: 3px;
      background: url('@/assets/img/icon-star-red.png');
      background-size: cover;
      transition: 0.7s;
    }

    i:last-child {
      margin-right: 0px;
    }
  }
  .star-wrap-other {
    line-height: 0;
    .icon-star-o {
      position: relative;
      width: 16px;
      height: 16px;
      line-height: 0;
      display: inline-block;
      margin-right: 3px;
      background: url('@/assets/img/default-stars.png');
      background-size: cover;
      .icon-star {
        position: absolute;
        left: 0;
        top: 0;
      }
      transition: 0.7s;
    }
    .icon-star {
      width: 16px;
      height: 16px;
      line-height: 0;
      display: inline-block;
      margin-right: 3px;
      background: url('@/assets/img/select-stars.png');
      background-size: cover;
      transition: 0.7s;
    }

    i:last-child {
      margin-right: 0px;
    }
  }
}
</style>
