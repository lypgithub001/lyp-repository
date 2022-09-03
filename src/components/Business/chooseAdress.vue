<template>
  <div>
    <!-- 选择省市区 -->
    <div class="flex">
      <el-form-item prop="provinceId">
        <el-select v-model="form.provinceId" placeholder="省" @change="provinceChange" :style="{ width: selectWidth + 'px' }">
          <el-option v-for="item in dicData.provinceList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="cityId" v-if="form.provinceId != '100000' && form.provinceId != '900000'" :style="{ marginLeft: marginLeft + 'px' }">
        <el-select v-model="form.cityId" placeholder="市" @change="cityChange" :style="{ width: selectWidth + 'px' }">
          <el-option v-for="item in dicData.cityList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        prop="countryId"
        v-if="form.provinceId != '100000' && form.provinceId != '900000' && showCountry"
        :style="{ marginLeft: marginLeft + 'px' }"
      >
        <el-select v-model="form.countryId" placeholder="区" @change="countryChange" :style="{ width: selectWidth + 'px' }">
          <el-option v-for="item in dicData.areaList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
        </el-select>
      </el-form-item>
    </div>
  </div>
</template>
<script setup>
import provinceTree from '@/assets/js/provinceCity.js'
import { ref, reactive, toRefs } from 'vue'
//接收参数
const props = defineProps({
  //是否可选择区，false否，true是
  showCountry: {
    type: Boolean,
    default: true
  },
  //间距
  marginLeft: {
    type: Number,
    default: 10
  },
  //宽度
  selectWidth: {
    type: Number,
    default: 150
  },
  //rule校验
  rules: {
    type: Object,
    default: {}
  },
  //是否显示中国
  showChinese: {
    type: Boolean,
    default: false
  },
  //省市区form参数
  form: {
    type: Object,
    default: {
      provinceId: '',
      cityId: '',
      countryId: ''
    }
  },
  //天眼查回显省市区信息使用
  skyEyeInfo: {
    type: Object,
    default: {
      base: '',
      city: '',
      district: ''
    }
  }
})
//定义传值事件
const emits = defineEmits(['chooseAdress'])

const { form, skyEyeInfo } = toRefs(props)
//定义省市区相关
const dicData = reactive({
  provinceList: [],
  cityList: [],
  areaList: []
})

//省份数据处理
//如果显示中国
if (props.showChinese) {
  dicData.provinceList = provinceTree.map((item) => {
    return {
      name: item.name,
      id: item.id
    }
  })
} else {
  dicData.provinceList = provinceTree
    .map((item) => {
      return {
        name: item.name,
        id: item.id
      }
    })
    .filter((ele) => ele.id !== 100000)
}

//获取市
function provinceChange(val, type = 1) {
  // 修改省份清空市数据
  if (type == 1) {
    //默认选择1
    form.value.cityId = ''
    form.value.countryId = ''
  }
  dicData.cityList = []

  const list = provinceTree.find((e) => e.id == val)
  //如果是中国或者钓鱼岛
  if (val == '100000' || val == '900000') {
    dicData.cityList = []
  } else if (list.child.length === 0) {
    dicData.cityList = []
  } else {
    dicData.cityList = list.child
  }
  dicData.cityList = dicData.cityList.map((item) => {
    return {
      name: item.name,
      id: Number(item.id),
      child: item.child
    }
  })
  //天眼查回显市  || 正常数据回填
  if (skyEyeInfo.value.city || skyEyeInfo.value.cityName) {
    JSON.parse(JSON.stringify(dicData.cityList)).forEach((ele) => {
      if (ele.name === skyEyeInfo.value.city || ele.name === skyEyeInfo.value.cityName) {
        form.value.cityId = ele.id
        cityChange(ele.id)
      }
    })
  }
  if (type == 1) {
    emits('chooseAdress', { id: Number(list.id), name: list.name }, 'province')
  }
}
//获取区
function cityChange(val, type = 1) {
  // 修改城市清空区数据
  if (type == 1) {
    form.value.countryId = ''
  }
  dicData.areaList = []
  const list = dicData.cityList.find((e) => e.id == val)
  if (!list.child) {
    dicData.areaList = []
  } else {
    dicData.areaList = list.child
  }
  dicData.areaList = dicData.areaList.map((item) => {
    return {
      name: item.name,
      id: Number(item.id)
    }
  })
  console.log(list, 'list')
  if (type == 1) {
    emits('chooseAdress', { id: list.id, name: list.name }, 'city')
  }
  //天眼查回显区
  if (skyEyeInfo.value.district || skyEyeInfo.value.districtName) {
    JSON.parse(JSON.stringify(dicData.areaList)).forEach((ele) => {
      if (ele.name === skyEyeInfo.value.districtName) {
        console.log('🚀 ~ file: chooseAdress.vue ~ line 174 ~ JSON.parse ~ ele.name === skyEyeInfo.value.districtName', ele)
      }
      if (ele.name === skyEyeInfo.value.district || ele.name === skyEyeInfo.value.districtName) {
        form.value.countryId = ele.id
        countryChange(ele.id)
      }
    })
  }
}
//修改区
function countryChange(val) {
  console.log(val)
  const list = dicData.areaList.find((e) => e.id == val)
  emits('chooseAdress', { id: list.id, name: list.name }, 'country')
}

// 初始化省份列表（天眼查回显使用）
let priviceList = JSON.parse(JSON.stringify(provinceTree))
//天眼查搜索
function skyEyeSearch() {
  if (skyEyeInfo.value.base) {
    // 天眼查相关信息判断省份回显
    priviceList.forEach((ele) => {
      if (ele.base === skyEyeInfo.value.base) {
        form.value.provinceId = Number(ele.id)
        provinceChange(Number(ele.id), 3)
      }
    })
  }
}
// 普通数据回填
function defaultReset() {
  if (skyEyeInfo.value.provinceId) {
    // 天眼查相关信息判断省份回显
    priviceList.forEach((ele) => {
      if (ele.id === skyEyeInfo.value.provinceId) {
        form.value.provinceId = Number(ele.id)
        provinceChange(Number(ele.id), 3)
      }
    })
  }
}

defineExpose({
  provinceChange,
  cityChange,
  skyEyeSearch,
  defaultReset,
  countryChange
})
</script>
<style lang="scss" scoped>
.el-form-item--small.el-form-item {
  margin-bottom: 0;
}
</style>
