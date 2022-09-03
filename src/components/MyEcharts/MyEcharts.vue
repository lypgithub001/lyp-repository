<template>
  <div :style="{ width: width, height: height }">
    <div :id="chartId" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, reactive, toRef, computed, watch, onBeforeUnmount } from 'vue'
import * as Echarts from 'echarts'
import china from '@/assets/js/china.js'
Echarts.registerMap('china', china)

function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

const props = defineProps({
  chartId: {
    //id
    type: String,
    default: ''
  },
  optionInfo: {
    //option对象
    type: Object,
    default: {}
  },
  width: {
    //图标宽度
    type: String,
    default: '375px'
  },
  height: {
    //图标长度
    type: String,
    default: '300px'
  }
})
const animationDuration = 6000
const state = reactive({
  resizeDiv: null,
  resizeHandler: null,
  chart: null
})
let chart
onMounted(() => {
  state.resizeHandler = debounce(() => {
    // state.myChart 所绘制的图表
    if (chart) {
      chart.resize()
    }
  }, 100)
  window.addEventListener('resize', state.resizeHandler)
})
const createChart = () => {
  // 基于准备好的dom，初始化echarts实例
  chart?.dispose()
  nextTick(() => {
    state.resizeDiv = document.getElementById(props.chartId)
    if (!state.resizeDiv) return
    chart = Echarts.init(state.resizeDiv)
    // 指定图表的配置项和数据
    chart?.setOption(props.optionInfo, animationDuration)
  })
}
onBeforeUnmount(() => {
  nextTick(() => {
    window.removeEventListener('resize', state.resizeHandler)
    chart?.dispose()
    state.resizeHandler = null
    chart = null
    state.resizeDiv = null
  })
})
watch(
  () => props.optionInfo,
  () => {
    createChart()
  }
)
defineExpose({
  state
})
</script>
