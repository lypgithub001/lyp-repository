<!-- selectCard -->
<template>
  <div class="selectCard">
    <div
      class="upMoney_selectCard"
      :class="item.isActive ? 'active' : ''"
      style=""
      v-for="(item, index) in list"
      :key="item.id"
      @click="upMoneyClick(item, index)"
    >
      <slot :item="item" :index="index" name="content"></slot>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'selectCard',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const newprops = props,
      upMoneyClick = (val, index) => {
        newprops.list.forEach((item, ii) => {
          //  item.id == 100 ? (item.id = 0) : (item.id = 100)
          if (ii == index) {
            item.isActive = true
          } else {
            item.isActive = false
          }
          console.log(38, 'val-->', val)
        })
        emit('selectFn', val)
      }

    return {
      ...toRefs(newprops),
      upMoneyClick
    }
  }
}
</script>

<style lang="scss">
.selectCard {
  display: flex;

  .upMoney_selectCard {
    width: 180px;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e6eb;
    margin-right: 20px;
    border-radius: 2px;
    cursor: pointer;
    .upMoney_text_selectCard {
      .color69 {
        color: #4e5969;
      }
      .fw600 {
        font-weight: 600;
      }
      .size24 {
        font-size: 24px;
      }
      .size14 {
        font-size: 14px;
      }
    }
  }
  .active {
    background: url('@/assets/img/pay/accountBalanceSelected.png') 100% 0 no-repeat;
    background-size: 22px 22px;
    border: 1px solid #165dff;
    span {
      color: #165dff !important;
    }
  }
}
</style>
