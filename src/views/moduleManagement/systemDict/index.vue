<template>
  <div class="container">
    <!-- :objectSpanMethod="objectSpanMethod" -->
    <Table :tableData="sysList" v-loading="loading" :showIndex="true" :showSelect="false" :showBorder="true" ref="tableRef">
      <template #column>
        <el-table-column label="类型" show-overflow-tooltip align="center" class-name="cellCustom">
          <template #default="scope">
            <div class="scope_div">
              {{ scope.row.type }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="编码" show-overflow-tooltip align="center" class-name="cellCustom">
          <template #default="scope">
            <div class="scope_div">
              <div class="cellSingle" v-for="item in scope.row.items" :key="item.code">{{ item.code }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="内容" show-overflow-tooltip align="center" class-name="cellCustom">
          <template #default="scope">
            <div class="scope_div">
              <div class="cellSingle" v-for="item in scope.row.items" :key="item.code">{{ item.label }}</div>
            </div>
          </template>
        </el-table-column>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { systemDict } from '@/api/moduleManagement/dictionaries'
const sysList = ref(),
  loading = ref(false),
  getSysList = () => {
    loading.value = true
    systemDict()
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          sysList.value = res.data
        } else {
          ElMessage.error(res.message)
        }
      })
      .catch(() => {
        loading.value = false
      })
  }
onMounted(() => {
  //获取系统字典
  getSysList()
})
</script>

<style scoped lang="scss">
:deep(.cellCustom) {
  padding: 0px;
  .cell {
    padding: 0px;
  }
}
</style>
