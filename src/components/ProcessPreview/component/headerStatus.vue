<template>
  <div>
    <p class="avater_none">
      <img :src="item.approveUserImage" alt="" />
      <span v-if="show" class="statusCircle" :style="{ background: bgColor }">
        <i :class="[str]"></i>
      </span>
    </p>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: {}
  },
  show: {
    type: Boolean,
    default: false
  }
})
const bgColor = ref('')
const className = ref('')
watch(
  () => props.item,
  (val) => {
    console.log(val)
    getBg(val.status)
    getClass(val.status)
  },
  {
    immediate: true
  }
)

function getBg(status) {
  switch (status) {
    case 0:
      bgColor.value = '#FF9900'
      break
    case 1:
      bgColor.value = '#52C41A'
      break
    case 2:
      bgColor.value = '#FF4D4F'
      break
  }
}
function getClass(status) {
  switch (status) {
    case 0:
      // obj.bgColor = '#FF9900'
      className.value = 'el-icon-more'
      break
    case 1:
      // obj.bgColor = '#52C41A'
      className.value = 'el-icon-check'
      break
    case 2:
      // obj.bgColor = '#FF4D4F'
      className.value = 'el-icon-close'
      break
  }
}
</script>
<style lang="scss" scoped>
// .avater_none {
//   position: relative;
//   img {
//     margin: auto;
//   }
//   .statusCircle {
//     display: block;
//     position: absolute;
//     width: 14px;
//     height: 14px;
//     border-radius: 50%;
//     bottom: 0;
//     right: 7px;
//     i {
//       position: absolute;
//       font-size: 12px;
//       color: #fff;
//       left: 1px;
//       line-height: 14px;
//     }
//   }
// }
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
</style>
