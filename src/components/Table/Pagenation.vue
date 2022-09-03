<template>
  <div>
    <el-pagination
      background
      :layout="layout"
      :page-sizes="pageSize"
      :current-page="page.current"
      :page-size="page.size"
      :total="pageTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-if="defaultVlue"
    ></el-pagination>
    <el-pagination
      background
      :layout="layout"
      :page-sizes="pageSizeOther"
      :current-page="pageOther.current"
      :page-size="pageOther.size"
      :total="pageTotal"
      @size-change="handleSizeChangeOther"
      @current-change="handleCurrentChangeOther"
      v-else
    ></el-pagination>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  props: {
    //分页样式
    layout: {
      type: String,
      default: 'total,sizes, prev, pager, next'
    },
    //分页页数与条数
    page: {
      type: Object,
      default: {
        current: 1,
        size: 10
      }
    },
    //总数
    pageTotal: {
      type: Number,
      default: 0
    },
    //每页条数
    pageSize: {
      type: Array,
      default: [10, 20, 50, 100]
    },
    //每页条数60
    pageSizeOther: {
      type: Array,
      default: [60, 120, 180]
    },
    //分页页数与条数
    pageOther: {
      type: Object,
      default: {
        current: 1,
        size: 60
      }
    },
    defaultVlue: {
      //  默认条数
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const { page } = toRefs(props)
    const { pageOther } = toRefs(props)
    //条数变化时
    const handleSizeChange = (val) => {
      page.value.size = val
      emit('getList', page.value)
    }
    //当前页变化时
    const handleCurrentChange = (val) => {
      page.value.current = val
      emit('getList', page.value)
    }
    //条数变化时
    const handleSizeChangeOther = (val) => {
      pageOther.value.size = val
      emit('getList', pageOther.value)
    }
    //当前页变化时
    const handleCurrentChangeOther = (val) => {
      pageOther.value.current = val
      emit('getList', pageOther.value)
    }
    return {
      handleCurrentChange,
      handleSizeChange,
      handleCurrentChangeOther,
      handleSizeChangeOther,
      page,
      pageOther
    }
  }
}
</script>

<style></style>
