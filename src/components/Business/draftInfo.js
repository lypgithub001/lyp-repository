import { draftInfoAdd, draftInfoUpdate, draftInfoQueryDetails, draftInfoDelete } from '@/api/draft/index.js'
import { ElMessage } from 'element-plus'

// 获取草稿详情
const getDraftInfoQueryDetails = (id) => {
  if (!id) return
  return new Promise((resolve, reject) => {
    draftInfoQueryDetails(id)
      .then((res) => {
        if (res.code === 200) {
          let obj = res.data.content
          obj.code = 200
          console.log(obj)
          resolve(obj || { code: 200 })
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 草稿存储  form = {content:{},title:'',type:''}
const draftInfoSave = (form) => {
  return new Promise((resolve, reject) => {
    let query = ''
    if (!form.id) {
      query = draftInfoAdd
    } else {
      query = draftInfoUpdate
    }
    query(form)
      .then((res) => {
        if (res.code === 200) {
          ElMessage.success('草稿保存成功')
          resolve(form.id ? form.id : res.data)
        } else {
          reject()
        }
      })
      .catch((err) => {
        reject()
      })
  })
}

// 删除草稿
const getDraftInfoDelete = (id) => {
  if (!id) return
  draftInfoDelete(id).then((res) => {
    if (res.code == 200) {
      // ElMessage.warning('删除成功')
    }
  })
}
export { getDraftInfoQueryDetails, draftInfoSave, getDraftInfoDelete }
