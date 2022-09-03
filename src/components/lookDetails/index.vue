<!-- 浏览详情组件 -->
<template>
  <div>
    <el-row v-if="props.type === 1" class="bgWhite">
      <template v-for="(item, index) in props.list">
        <el-col v-if="!item.flag" :key="index" style="display: flex" :span="item.span || 12">
          <!-- :style="{ width: item.width || '160px' }" -->
          <div class="leftlabel">{{ item.label ? item.label + '：' : '' }}</div>
          <!-- :style="{ width: `calc(100% - ${item.width || '160px'})` }" -->
          <div class="rightName"  v-if="!item.vHtml">{{ item.name }}</div>
          <div class="rightName" v-html="item.name" v-else></div>
        </el-col>
      </template>
    </el-row>
    <el-row v-else class="bgWhite">
      <template v-for="(item, index) in props.list">
        <!-- list 传入 span属性控制展示样式 -->
        <el-col v-if="!item.flag" :key="index" style="display: flex" :span="item.span || 8">
          <div class="leftlabel">
            <span>{{ item.label ? item.label + '：' : '' }}</span>
          </div>
          <div v-if="item.type === 'list'" class="rightName">
            <div v-for="(info, i) in item.name" :key="i">{{ info }}</div>
          </div>
          <div v-else class="rightName">
            <!-- click:true 可点击 -->
            <el-button type="text" v-if="item.click" @click="detailsClick()" style="min-height: 0; padding: 0">{{ item.name }}</el-button>
            <span v-else>{{ item.name }}</span>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup>
import { watch, nextTick } from 'vue'

const props = defineProps({
  //展示的数组
  list: {
    type: Array,
    defalt: []
  },
  //展示的类型，如果值等于1就显示弹窗两列，否则是新页面三列
  type: {
    type: Number,
    defalt: 0
  }
})
const emit = defineEmits(['detailsClick'])

//自动创建指定长度二维数组
function creatNewArray(num) {
  let arr = new Array(num)
  for (let j = 0; j < arr.length; j++) {
    arr[j] = []
  }
  return arr
}

// 补足数组
function makeUpArray(arr = [], num = 0) {
  let diff = num - (arr.length % num) //补足数组
  if (diff != num) {
    for (let k = 0; k < arr.length; k++) {
      if (k < diff) {
        arr.push({})
      }
    }
  }
  return arr
}

// 按长度数组分割返回按列排序数据
function cuttingArray(arr, num) {
  let newArr = [],
    cutArr = creatNewArray(num)
  for (var i = 0; i < Math.ceil(arr.length / num); i++) {
    var start = i * num
    var end = start + num
    newArr.push(arr.slice(start, end))
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      cutArr[j].push(newArr[i][j])
    }
  }
  return cutArr
}
// 获取所有dom宽度并返回分组中最大值
function getAllDomWidth(arr, num) {
  let widthArr = creatNewArray(num),
    maxArr = creatNewArray(num)
  for (let m = 0; m < arr.length; m++) {
    for (let n = 0; n < arr[m].length; n++) {
      widthArr[m].push(arr[m][n].offsetWidth)
    }
  }
  for (let x = 0; x < widthArr.length; x++) {
    maxArr[x] = Math.max(...widthArr[x])
  }
  return maxArr
}
watch(
  () => props.list,
  (val) => {
    let num = props.type == 1 ? 2 : 3
    makeUpArray(props.list, num)
    nextTick(() => {
      let dom = document.querySelectorAll('.leftlabel'),
        cutNewArray = cuttingArray([...dom], num),
        maxArr = getAllDomWidth(cutNewArray, num)
      // 循环给每列dom赋最大值
      for (let m = 0; m < cutNewArray.length; m++) {
        for (let n = 0; n < cutNewArray[m].length; n++) {
          cutNewArray[m][n].style.width = maxArr[m] + 'px'
        }
      }
    })
  }
)
//可点击详情
function detailsClick() {
  emit('detailsClick')
}
</script>

<style scoped lang="scss">
.bgWhite {
  background: rgba(255, 255, 255, 0);
}
.leftlabel {
  //   width: 120px;
  white-space: nowrap;
  font-size: 14px;
  //  font-family: siyuan, siyuan-Regular;
  font-weight: 400;
  text-align: left;
  color: #7a828a;
  margin-bottom: 16px;
}
.rightName {
  font-size: 14px;
  //  font-family: siyuan, siyuan-Regular;
  font-weight: 600;
  text-align: left;
  color: #27272e;
  //   line-height: 20px;
  margin-right: 24px;
  margin-bottom: 16px;
  word-wrap: break-word;
  flex: 1;
}
</style>
