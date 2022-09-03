import { searchOrg } from '@/api/systemManagement/organizationalStructure'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const getSearchOrg = async (data) => {
    const val = ref({})
    await searchOrg(data)
      .then((res) => {
        if (res.code === 200) {
          val.value = res.data
        } else {
          ElMessage.warning(res.message)
        }
      })
      .catch(() => {})
    return val
  }
  return { getSearchOrg }
}
