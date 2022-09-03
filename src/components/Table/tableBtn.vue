<!-- tableBtn -->
<template>
  <el-button
    :size="item.size ? item.size : 'mini'"
    :type="item.type ? item.type : 'text'"
    @click="() => item.click()"
    v-for="(item, i) in btnList_show"
    :key="i"
    >{{ item.label }}</el-button
  >
  <MoreOperate v-if="btnList_more.length">
    <template #button>
      <el-dropdown-item v-for="(item, i) in btnList_more" :key="i" @click="() => item.click()">
        <el-button :size="item.size ? item.size : 'mini'" :type="item.type ? item.type : 'text'">{{ item.label }}</el-button>
      </el-dropdown-item>
    </template>
  </MoreOperate>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
  name: 'tableBtn',
  props: {
    btnList: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  setup(props) {
    const btnList_show = ref([])
    const btnList_more = ref([])
    const roles = JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet || [] // 使用插件时，绑定的值

    const fetchData = () => {
      // console.log(22222222222, props.btnList)
      // 筛选需要展示的按钮
      // const temp = props.btnList.filter((item) => item.isShow)
      const temp = []
      props.btnList.forEach((item) => {
        // 权限
        if (item.hasRole && item.hasRole.length) {
          //  console.log(123123123, roles)
          const itemRole = item.hasRole[0]
          const res = roles.filter((item) => item == itemRole)
          if (res.length) {
            //  有权限
            item.isShow1 = false
          } else {
            item.isShow1 = true
          }
        }
        if (!item.isShow && !item.isShow1) {
          temp.push(item)
        }
      })
      // console.log(22222222222, temp)
      if (temp.length >= 2) {
        // 更多
        btnList_more.value = temp.slice(2)
        //   console.log(333333333, btnList_more.value)
        // 前两个
        btnList_show.value = temp.slice(0, 2)
        //   console.log(3333333333, btnList_show.value)
      } else {
        btnList_show.value = temp
      }
    }

    watch(
      () => props.btnList,
      () => fetchData()
    )

    onMounted(() => {
      fetchData()
    })

    return { btnList_show, btnList_more }
  }
}
</script>

<style scoped lang="scss">
.tableBtn {
}
</style>
