<template>
  <div v-if="Array.isArray(tableData) && tableData.length">
    <card-container v-for="(item, index) in tableData" :key="index" :isTitle="false">
      <template #content>
        <el-row class="content">
          <el-col :span="20" class="main_attribute">
            <div style="display: flex">
              <div class="check_box" v-if="checkShow">
                <el-checkbox :modelValue="item.jsCheck" @change="(e) => checkFn(index, e)"></el-checkbox>
              </div>

              <el-tooltip placement="top" effect="light">
                <template #content>
                  {{ (mainColumn?.getLabel && mainColumn.getLabel(item)) || item[mainProperty] || '-' }}
                </template>
                <div v-if="mainColumn.length" class="contentValue omit syWeigth">
                  {{ (mainColumn?.getLabel && mainColumn.getLabel(item)) || item[mainProperty] || '-' }}
                </div>
                <div v-else>-</div>
              </el-tooltip>

              <div
                :class="['status_button', statusFilter(statusItem?.getLabel && statusItem.getLabel(item))]"
                v-for="(statusItem, i) in statusColumn"
                :key="i"
                @click="statusItem.contentClick ? statusItem.contentClick(item) : contentClick(item)"
              >
                {{ (statusItem?.getLabel && statusItem.getLabel(item)) || item[statusItem?.prop] || '-' }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <!-- 右上角自定义内容 -->
            <div style="display: flex; justify-content: end">
              <slot name="topRight" :row="item"></slot>
            </div>
          </el-col>
        </el-row>
        <div style="display: flex">
          <div v-if="mainUrl" class="main_img_box">
            <img class="main_img" :src="item[mainUrl]" alt="" />
          </div>
          <el-row class="content">
            <el-col :sm="6" :lg="6" :xl="4" class="attribute" v-for="(contentItem, index) in contentColumn" :key="index">
              <span class="label">{{ contentItem.label }}：</span>
              <el-tooltip placement="top" effect="light">
                <template #content>
                  {{
                    (contentItem?.getLabel && contentItem.getLabel(item)) ||
                    item[contentItem?.prop] ||
                    (((contentItem?.getLabel && contentItem.getLabel(item)) || item[contentItem?.prop]) === 0 ? 0 : '-')
                  }}
                </template>
                <span
                  class="contentValue omit syWeigth"
                  :style="{ color: contentItem.color ? (typeof contentItem.color === 'string' ? contentItem?.color : contentItem.color(item)) : '' }"
                  @click="contentItem.contentClick ? contentItem.contentClick(item) : contentClick(item)"
                >
                  {{
                    (contentItem?.getLabel && contentItem.getLabel(item)) ||
                    item[contentItem?.prop] ||
                    (((contentItem?.getLabel && contentItem.getLabel(item)) || item[contentItem?.prop]) === 0 ? 0 : '-')
                  }}
                </span>
              </el-tooltip>
            </el-col>
            <slot name="content" :row="item" :serialNumber="index"></slot>
          </el-row>
        </div>
      </template>
    </card-container>
  </div>
  <card-container v-else :isTitle="false">
    <template #content>
      <div class="empty syWeigth">暂无数据</div>
    </template>
  </card-container>
</template>

<script setup>
import { computed, watch } from 'vue'
import statusFilter from '@/utils/statusFilter.js'

const props = defineProps({
  //表格数据
  tableData: {
    type: Array,
    default: []
  },
  // 选择方式，默认单选(true)  true：多选，false：单选
  selectWay: {
    type: Boolean,
    default: true
  },
  // 勾选框展示，默认展示(true)  true：不显示，false：不显示
  checkShow: {
    type: Boolean,
    default: true
  },
  // 卡片渲染的属性
  column: {
    type: Array,
    default: []
  },
  // 卡片的主属性 prop,唯一
  mainProperty: {
    type: String,
    default: ''
  },
  // 卡片的主图 prop,唯一
  mainUrl: {
    type: String,
    default: ''
  },
  // 卡片的状态属性 prop,多个
  statusProperty: {
    type: Array,
    default: []
  },
  // 卡片不需要渲染的状态属性 prop,多个
  noRender: {
    type: Array,
    default: []
  }
})
const emits = defineEmits(['checkCb'])

// 点击单选框
function checkFn(checkIndex, e) {
  props.tableData[checkIndex].jsCheck = e

  let res = []
  if (!props.selectWay) {
    props.tableData.forEach((item, index) => {
      if (index !== checkIndex) {
        item.jsCheck = false
      } else if (e) {
        res.push(props.tableData[index])
      }
    })
    emits('checkCb', res, e)
  } else {
    props.tableData.forEach((item, index) => {
      if (item.jsCheck) {
        res.push(props.tableData[index])
      }
    })
    emits('checkCb', res, e)
  }
}
const contentClick = (row) => {
  //   console.log(row)
}

// 过滤主属性 column
const mainColumn = computed(() => {
  return props.column.filter((x) => x.prop === props.mainProperty)
})

// 过滤状态属性 column
const statusColumn = computed(() => {
  return props.column.filter((item) => {
    const res = props.statusProperty.find((x) => item.prop === x)
    if (res) return item
  })
})

// 过滤内容属性 column
const contentColumn = computed(() => {
  return props.column.filter(
    (item) =>
      item.prop !== props.mainProperty && props.statusProperty.findIndex((x) => item.prop === x) < 0 && props.noRender.findIndex((x) => item.prop === x) < 0
  )
})
//tableData变化清空选中
watch(
  () => props.tableData,
  (val) => {
    if (val) {
      props.tableData.forEach((item, index) => {
        item.jsCheck = false
      })
      emits('checkCb', [])
    }
  }
)
</script>
<style lang="scss" scoped>
.content {
  flex: 1;
  cursor: pointer;
  .main_img_box {
    display: flex;
    align-items: center;
    margin-top: 16px;
    .main_img {
      width: 56px;
      height: 56px;
      border-radius: 4px;
      margin-right: 20px;
    }
  }

  .main_attribute {
    display: flex;
    align-items: center;

    .check_box {
      margin-right: 16px;
      line-height: 24px;
    }
    .contentValue {
      max-width: 800px;
      margin-right: 12px;
      font-size: 16px;
      color: #27272e;
    }

    .status_button {
      white-space: nowrap;
      width: 120%;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      margin-right: 16px;
      padding: 2px 24px;
      background: #ff6e6c;
      border-radius: 11px;
      transform: scale(0.83);
      flex: 1;
    }
  }
  .attribute {
    font-size: 14px;
    margin-top: 16px;
    display: flex;
    flex-wrap: nowrap;
    .label {
      color: #7a828a;
      white-space: nowrap;
    }
    .contentValue {
      color: #27272e;
      padding-right: 8px;
    }
  }
}
.empty {
  text-align: center;
  line-height: 48px;
  color: #7a828a;
}
</style>
