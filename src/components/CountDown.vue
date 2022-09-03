<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanqing
 * @Date: 2022-08-19 10:02:51
 * @LastEditors: wanqing
 * @LastEditTime: 2022-08-20 20:17:37
-->
<template>
  <slot name="time" :showDate="showDate"></slot>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, computed, inject, watch } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  tableLength: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Number,
    default: 0
  }
})
const timeID = ref()
const showDate = ref()
const endTime = ref()
const timestamp = ref()

onMounted(() => {
  let item = props.item
  timestamp.value = props.timestamp
  if (item.notStart) {
    if (item.startTime) {
      endTime.value = item.startTime?.replace(/-/g, '/')
    }
  } else {
    if (item.endTime) {
      endTime.value = item.endTime?.replace(/-/g, '/')
    }
    if (item.model == 2) {
      let the = new Date(item?.startTime)
      if (the > timestamp) {
        endTime.value = item.startTime?.replace(/-/g, '/')
      }
    }
  }

  timeID.value = setInterval(() => {
    loveTime(endTime.value)
  }, 1000)
})

function loveTime(endTime) {
  let newDate = timestamp.value
  let the = new Date(endTime)
  let date = the - newDate //当前服务器时间戳
  if (the < newDate) return
  let days = Math.floor(date / 1000 / 60 / 60 / 24) // 从这里开始
  let daysmod = date - days * 24 * 60 * 60 * 1000
  let hours = Math.floor(daysmod / 1000 / 60 / 60)
  let hoursmod = date - days * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60
  let minutes = Math.floor(hoursmod / 1000 / 60)
  let minutesmod = date - days * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60 - minutes * 1000 * 60
  let seconds = Math.floor(minutesmod / 1000) // 到这里结束，是将总毫秒转化成对应天数+小时数+分钟数+秒数的转换方法
  showDate.value = {
    days: days < 1 ? 0 : days,
    hours: hours < 1 ? 0 : hours,
    minutes: minutes < 1 ? 0 : minutes,
    seconds: seconds < 1 ? 0 : seconds
  }
  timestamp.value += 1000

  if (showDate.value.days == 0 && showDate.value.hours == 0 && showDate.value.minutes == 0 && showDate.value.seconds == 0) {
    clearInterval(timeID.value)
  }
}
</script>
