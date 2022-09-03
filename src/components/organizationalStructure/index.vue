<!--选择人员或者部门-->
<template>
  <div class="org-structure-selection">
    <el-dialog
      v-model="data.visible"
      :width="props.width"
      :before-close="modalClose"
      :modal="props.modal"
      :append-to-body="props.appendToBody"
      :show-close="false"
      :closeOnClickModal="false"
      custom-class="org-structure-selection"
      @open="data.isLoading = false"
      :top="'10vh'"
    >
      <section class="tree-transfer__content" v-loading="data.loading" v-if="data.visible">
        <h3 class="tree-transfer__title">{{ sourceTitle }}</h3>
        <div class="tree-transfer__left">
          <div style="position: relative; width: 100%; height: 30px">
            <el-input v-model.trim="data.filterText" placeholder="请输入关键词"> </el-input>
          </div>
          <el-scrollbar v-if="showTree" class="tree-transfer__list">
            <el-tree
              ref="tree"
              :data="data.treeData"
              :check-strictly="props.selectType == '1' && props.select"
              :node-key="props.nodeKey"
              :props="props.defaultProps"
              :highlight-current="true"
              :expand-on-click-node="true"
              :filter-node-method="filterNode"
              :check-on-click-node="true"
              :default-checked-keys="
                props.select && record && record.length > 0
                  ? [record[0].id]
                  : !props.select && data.showIdList && data.showIdList.length > 0
                  ? data.showIdList
                  : []
              "
              show-checkbox
              default-expand-all
              @check="getCheckedKeysAll"
            >
              <template #default="{ node, data }">
                <div class="custom-tree-node" style="width: 100%">
                  <span class="textStyle" v-if="data.orgType === 1 || data.orgType === 0 || selectType == 2">{{ data.name }}</span>
                  <div class="avatarBox" v-if="data.orgType !== 1 && data.orgType !== 0 && selectType != 2">
                    <img :src="data.avatar" alt height="32" width="32" v-if="data.avatar" />
                    <div v-else class="borderAvatar">
                      {{ data.name ? data.name.slice(0, 1) : '' }}
                    </div>
                    <span style="margin-left: 12px">{{ data.name }}</span>
                  </div>
                </div>
              </template>
            </el-tree>
          </el-scrollbar>
        </div>
        <div class="tree-transfer__right">
          <!-- <h3 class="tree-transfer__title right__title">
            <span>{{ targetTitle }}</span>
            <span v-if="isTargetNodesEmpty" class="tree-transfer__right-close" @click="clearTargetNodes">清空</span>
          </h3> -->
          <el-scrollbar class="tree-transfer__list">
            <div class="tree-transfer__right_selected">
              <div>已选：{{ record.length }}{{ unit }}</div>
              <div v-if="isTargetNodesEmpty" class="tree-transfer__right-close" @click="clearTargetNodes">清空</div>
            </div>
            <ul class="tree-transfer__list-ul">
              <li v-for="(item, index) of record" :key="index" class="tree-transfer__list-li">
                <label>
                  <img :src="item.avatar" alt class="fl" height="32" width="32" v-if="item.avatar" style="margin-top: 5px" />
                  <div v-else class="fl borderAvatar">
                    {{ item.name ? item.name.slice(0, 1) : '' }}
                  </div>
                  <div class="fl tree-transfer__list-detail">
                    <span style="margin-left: 12px">{{ item.name }}</span>
                    <span style="margin-left: 12px" v-if="item.orgNames">{{ item.orgNames }}</span>
                  </div>
                </label>
                <span class="tree-transfer__list-delete" @click="handleDeleteItem(index)">
                  <i class="el-icon-close" />
                </span>
              </li>
            </ul>
          </el-scrollbar>
          <!-- <div class="dialog_footer">
            <el-button style="margin-right: 10px" size="mini" @click="modalClose">取消</el-button>
            <el-button :loading="data.isLoading" class="" size="mini" type="primary" @click="handleSubmit">确定</el-button>
          </div> -->
        </div>
      </section>
      <template v-slot:footer>
        <table-bottom style="margin: 0">
          <template v-slot:bottomRight>
            <el-button style="margin-right: 10px" size="mini" @click="modalClose">取消</el-button>
            <el-button :loading="data.isLoading" class="" size="mini" type="primary" @click="handleSubmit">确定</el-button>
          </template>
        </table-bottom>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, computed, ref, watch, nextTick } from 'vue'
import { orgQueryTreeWithUserInfo } from '@/api/systemManagement/organizationalStructure'
import { jobQueryJobList } from '@/api/company/basisSetting/postManagement.js'
import { ElMessage } from 'element-plus'
const props = defineProps({
  // 宽度
  width: {
    type: String,
    default: '1000px'
  },
  // 树形列表数据
  modal: {
    type: Boolean,
    default: true
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  // dialog 标题
  dialogTitle: {
    type: String,
    default: 'Title'
  },
  // transfer 标题
  transferTitle: {
    type: Array,
    default: () => ['源列表', '目标列表']
  },
  isGroup: {
    type: Boolean,
    default: false
  },
  // 树形列表节点 key
  nodeKey: {
    type: String,
    default: 'id'
  },
  // 树形列表 data 默认 prop
  defaultProps: {
    type: Object,
    default: () => ({ label: 'name', children: 'child', disabled: 'disabled' })
  },
  // 部门人员岗位的选择：true单选 false多选
  select: {
    type: Boolean,
    default: false
  },
  // 0人员  1部门 2岗位
  selectType: {
    type: String,
    default: '0'
  },
  //是否人员id=部门id+','+人员id拼接   true拼接，false不拼接
  isJoiningTogether: {
    type: Boolean,
    default: false
  },
  // 已选择的人员或者部门或者岗位列表
  selectDataList: {
    type: Array,
    default: () => []
  },
  //是否过滤部门, true过滤，false不过滤
  isCompanyType: {
    type: Boolean,
    default: false
  },
  //是否必须选择
  mustChoose: {
    type: Boolean,
    default: true
  },
  //是否授权
  isAuthor: {
    type: Boolean,
    default: false
  },
  // 单位
  unit: {
    type: String,
    default: '人'
  }
})
let showTree = ref(true)
//定义数据
let data = reactive({
  visible: false,
  targetNodes: [],
  filterText: '',
  isLoading: false,
  loading: false,
  isShowTree: false,
  immediateSuperior: false, //直属上级
  immediateSuperiorDisabled: false,
  showIdList: [], //勾选的数组列表
  OtherList: [], //选择流程人员专用
  treeData: []
})
const sourceTitle = computed(() => props.transferTitle[0])
const targetTitle = computed(() => props.transferTitle[1])
const unit = computed(() => props.unit)
// console.log(unit.value)
watch(
  () => [data.filterText, data.treeData],
  ([filNew, treeNew], [filOld, treeOld]) => {
    if (filNew) {
      if (!isNaN(filNew) && filNew.length >= 2) {
        tree.value.filter(filNew)
      } else if (isNaN(filNew)) {
        tree.value.filter(filNew)
      } else if (filNew == '') {
        tree.value.filter(filNew)
      }
    } else {
      tree.value.filter()
    }
  }
)
const isTargetNodesEmpty = computed(() => record.value?.length !== 0),
  //记录原始数据
  record = ref(),
  // 获取组织架构树
  init = () => {
    data.visible = true
    data.loading = true
    record.value = []
    data.showIdList = []
    nextTick(() => {
      console.log('props', props.selectType)

      if (props.selectType == 2) {
        // 岗位列表
        jobQueryJobList()
          .then((res) => {
            data.loading = false
            if (res.code === 200) {
              data.treeData = res.data
              record.value = []
              //选岗位
              chooseJob()
            }
          })
          .catch(() => {
            data.loading = false
          })
      } else {
        // 0人员  1部门  2部门人员混选
        let poData = props.isAuthor ? { certificationState: 1 } : {}
        orgQueryTreeWithUserInfo(poData)
          .then((res) => {
            data.loading = false
            if (res.code === 200) {
              if (props.isCompanyType) {
                data.treeData = chooseDataDecursionFunc(JSON.parse(JSON.stringify(res.data)))
              } else {
                data.treeData = res.data
              }
              console.log(data.treeData)
              //  data.visible = props.dialogVisible
              record.value = []
              if (props.selectType == '1') {
                //将已选择其他的数据处理
                otherData()
              } else if (props.selectType == '0') {
                //选人
                chooseManyMen()
              }
            }
          })
          .catch(() => {
            data.loading = false
          })
      }
    })
  },
  //显示选择人员
  showChooseMen = (data) => {
    for (let j = 0; j < data.length; j++) {
      //设置部门禁用
      if ((data[j].orgType === 0 || data[j].orgType === 1) && props.select) {
        data[j].disabled = true
      }

      if (data[j].child && data[j].child.length > 0) {
        for (var i = 0; i < data[j].child.length; i++) {
          if ((data[j].child[i].orgType === 0 || data[j].child[i].orgType === 1) && props.select) {
            data[j].child[i].disabled = true
          }
        }

        //单选
        if (props.select) {
          if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
            // 判断人员编辑回显
            record.value[0] = data[j]
          }
        } else {
          if (props.selectDataList.length > 0) {
            // 判断人员编辑回显
            props.selectDataList.forEach((ele) => {
              if (data[j].id == ele) {
                record.value.push(data[j])
              }
            })
          }
        }
        iterations(data[j].child)
        //将人员列表加入部门列表
        if (data[j].userList.length > 0) {
          data[j].child = data[j].child.concat(
            data[j].userList.map((ele) => {
              //如果是需要部门id拼接用户id
              if (props.isJoiningTogether) {
                ele.id = data[j].id + ',' + ele.userId
                ele.newName = data[j].name + ',' + ele.name
              } else {
                ele.id = ele.userId
                ele.newName = ele.name
              }
              return ele
            })
          )
        }
      } else {
        if (data[j].userList.length > 0) {
          data[j].child = data[j].userList.map((ele) => {
            //如果是需要部门id拼接用户id
            if (props.isJoiningTogether) {
              ele.id = data[j].id + ',' + ele.userId
              ele.newName = data[j].name + ',' + ele.name
            } else {
              ele.id = ele.userId
              ele.newName = ele.name
            }
            return ele
          })
        }
        //单选
        if (props.select) {
          if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
            // 判断人员编辑回显
            record.value[0] = data[j]
          }
        } else {
          if (props.selectDataList.length > 0) {
            // 判断人员编辑回显
            props.selectDataList.forEach((ele) => {
              if (data[j].id == ele) {
                record.value.push(data[j])
              }
            })
          }
        }
      }
    }
    record.value = unique(record.value)
  },
  //只显示岗位
  showJob = (data) => {
    for (let j = 0; j < data.length; j++) {
      if (props.select) {
        data[j].disabled = true
        if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
          // 判断部门编辑回显
          record.value[0] = data[j]
        }
      } else {
        if (props.selectDataList.length > 0) {
          // 判断部门编辑回显
          props.selectDataList.forEach((ele) => {
            if (data[j].id == ele.id) {
              record.value.push(data[j])
            }
          })
        }
      }
      data[j].children = []
      if (data[j].jobList && data[j].jobList.length > 0) {
        for (var i = 0; i < data[j].jobList.length; i++) {
          if (props.select) {
            if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
              // 判断部门编辑回显
              record.value[0] = data[j]
            }
          } else {
            if (props.selectDataList.length > 0) {
              // 判断部门编辑回显
              props.selectDataList.forEach((ele) => {
                if (data[j].id == ele.id) {
                  record.value.push(data[j])
                }
              })
            }
          }
          data[j].children.push(data[j].jobList[i])
        }
      } else {
        data[j].children = data[j].jobList
      }
    }
    record.value = unique(record.value)
  },
  //递归处理可选择数据
  chooseDataDecursionFunc = (data) => {
    let list = []
    for (let j = 0; j < data.length; j++) {
      if (data[j].orgType === 1) {
        data[j].child = null
      } else {
        if (data[j].child && data[j].child.length > 0) {
          data[j].child = chooseDataDecursionFunc(data[j].child)
        }
        list.push(data[j])
      }
    }
    return list
  },
  //只显示部门
  showDerpartment = (data) => {
    for (let j = 0; j < data.length; j++) {
      if (props.select) {
        //   data[j].disabled = true
        if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
          // 判断部门编辑回显
          record.value[0] = data[j]
        }
      } else {
        if (props.selectDataList.length > 0) {
          // 判断部门编辑回显
          props.selectDataList.forEach((ele) => {
            if (data[j].id == ele.id) {
              record.value.push(data[j])
            }
          })
        }
      }
      if (data[j].manageable === false) {
        data[j].disabled = true
      }
      data[j].children = []
      if (data[j].child && data[j].child.length > 0) {
        for (var i = 0; i < data[j].child.length; i++) {
          if (props.select) {
            if (props.selectDataList.length > 0 && props.selectDataList[0].id == data[j].id) {
              // 判断部门编辑回显
              record.value[0] = data[j]
            }
          } else {
            if (props.selectDataList.length > 0) {
              // 判断部门编辑回显
              props.selectDataList.forEach((ele) => {
                if (data[j].id == ele.id) {
                  record.value.push(data[j])
                }
              })
            }
          }
          if (data[j].child[i].manageable === false) {
            data[j].child[i].disabled = true
          }
          data[j].children.push(data[j].child[i])
        }
        iterations(data[j].children)
      } else {
        data[j].children = data[j].child
      }
    }
    record.value = unique(record.value)
  },
  /*
 3                     模拟: 原始数组：[1,2,8,9,5,8,4,0,4]
 4                             索引值：0,1,2,3,4,5,6,7,8
 5                           伪新数组：[1,2,8,9,5,8,4,0,4]
 6                     使用indexOf方法找到数组中的元素在元素在中第一次出现的索引值
 7                             索引值：0,1,2,3,4,2,6,7,6
 8                         返回前后索引值相同的元素：
 9                           新数组：[1,2,8,9,5,4,0]    
 去重    
10                 */
  unique = (arr) => {
    // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
    return arr.filter(function (item, index) {
      return arr.indexOf(item, 0) === index
    })
  },
  //选择人员
  chooseManyMen = () => {
    if (props.selectDataList.length > 0) {
      // 判断人员编辑回显
      record.value = props.selectDataList
      data.showIdList = props.selectDataList.map((item) => {
        return item.id
      })
    }
    iterations(data.treeData)
  },
  //选择岗位
  chooseJob = () => {
    if (props.selectDataList.length > 0) {
      // 判断人员编辑回显
      record.value = props.selectDataList
      data.showIdList = props.selectDataList.map((item) => {
        return item.id
      })
    }
    iterations(data.treeData)
  },
  // 递归显示列表数据
  iterations = (data) => {
    if (data.length) {
      if (props.selectType == '1') {
        // 只显示选择部门
        showDerpartment(data)
      } else if (props.selectType == '2') {
        // 只显示选择岗位
        showJob(data)
      } else {
        //显示选择人员
        showChooseMen(data)
      }
    }
  },
  //选择部门初始方法
  otherData = () => {
    if (props.selectDataList?.length > 0) {
      data.showIdList = props.selectDataList.map((item) => {
        return item.id
      })
    }
    iterations(data.treeData)
  },
  //搜索过滤
  filterNode = (value, data, node) => {
    if (!value) {
      return true
    }
    // var level = node.level
    var _array = [] // 这里使用数组存储 只是为了存储值。
    getReturnNode(node, _array, value)
    var result = false
    _array.forEach((item) => {
      result = result || item
    })
    return result
  }
const tree = ref(),
  //修改选中显示
  getCheckedKeys = (data) => {
    const currNode = tree.value.getCheckedNodes()
    data.index = currNode.length
    currNode.sort(compare('index')).reverse()
    var arr = []
    if (!props.select) {
      for (var i = 0; i < currNode.length; i++) {
        if (props.selectType == 0) {
          if (currNode[i].orgType !== 1 && currNode[i].orgType !== 0) {
            arr.push(currNode[i])
          }
        } else if (props.selectType == 2) {
          if (currNode[i].groupId) {
            arr.push(currNode[i])
          }
        } else {
          arr.push(currNode[i])
        }
        //   if (!currNode[i].parent) {
        //     currNode[i].parent = getParents(data.treeData, currNode[i].id) ? getParents(data.treeData, currNode[i].id)[0].name : []
        //   }
      }
    } else {
      tree.value.setCheckedNodes([data])
      arr = [data]
    }
    record.value = arr
    //  if (props.selectType == '1') {
    //    record.value = getSimpleCheckedNodes(tree.value.store)
    //    record.value = record.value.sort(compare('index')).reverse()
    //  }
  },
  //选择人员或部门或者岗位
  getCheckedKeysAll = (data, check) => {
    //部门
    if (props.selectType == 1) {
      getCheckedKeysDepartment(data, check)
      //岗位
    } else if (props.selectType == 2) {
      getCheckedKeysJob(data, check)
    } else {
      //  人员
      getCheckedKeysMen(data, check)
    }
  },
  //如果是选择人员
  getCheckedKeysMen = (data, check) => {
    if (props.selectType == '0' && props.select) {
      if (check) {
        //   data.targetNodes = []
        tree.value.setCheckedNodes([data])
        //   data.targetNodes = [data]
        record.value = []
        record.value = [data]
      }
    } else {
      getCheckedKeys(data)
    }
  },
  //如果是部门单选跟其他拆分
  getCheckedKeysDepartment = (data, check) => {
    if (props.selectType == '1' && props.select) {
      if (check) {
        //   data.targetNodes = []
        tree.value.setCheckedNodes([data])
        //   data.targetNodes = [data]
        record.value = []
        record.value = [data]
      }
    } else {
      getCheckedKeys(data)
    }
  },
  //如果是岗位跟其他拆分
  getCheckedKeysJob = (data, check) => {
    if (props.selectType == '2' && props.select) {
      if (check) {
        tree.value.setCheckedNodes([data])
        record.value = []
        record.value = [data]
      }
    } else {
      getCheckedKeys(data)
    }
  },
  // 数组排序
  compare = (property) => {
    return function (a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value2 - value1
    }
  },
  // 选择部门 或者人员
  getSimpleCheckedNodes = (store) => {
    const checkedNodes = []
    const traverse = function (node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes

      childNodes.forEach((child) => {
        if (child.checked) {
          checkedNodes.push(child.data)
        }
        if (child.indeterminate) {
          traverse(child)
        }
      })
    }
    traverse(store)
    return checkedNodes
  },
  getParents = (data, id) => {
    for (var i in data) {
      if (data[i].id == id) {
        return []
      }
      if (data[i].children) {
        var ro = getParents(data[i].children, id)
        if (ro !== undefined) return ro.concat(data[i])
      }
    }
  },
  //定义子组件传值方法
  clickemit = defineEmits(['subumit', 'close']),
  //筛选
  getReturnNode = (node, _array, value) => {
    var isPass = node.data && node.data.name && node.data.name.indexOf(value) !== -1
    isPass ? _array.push(isPass) : ''
    // this.index++
    if (!isPass && node.level != 1 && node.parent) {
      getReturnNode(node.parent, _array, value)
    }
  },
  //点击删除选中人员
  handleDeleteItem = (id) => {
    record.value = record.value.filter((item) => item !== record.value[id])
    tree.value.setCheckedNodes(record.value)
  },
  //保存选择
  handleSubmit = () => {
    if (record.value.length == 0 && props.mustChoose) {
      ElMessage.warning(`请${props.transferTitle[0]}`)
      return
    }
    record.value.forEach((item) => {
      if (item.type == 2) {
        item.parent = getParents(data.treeData, item.id) ? getParents(data.treeData, item.id)[0].name : []
      }
    })
    clickemit('subumit', record.value)
    data.visible = false
  },
  clearTargetNodes = () => {
    record.value = []
    tree.value.setCheckedKeys([])
    showTree.value = false
    nextTick(() => {
      showTree.value = true
    })
  },
  //关闭弹窗
  modalClose = () => {
    data.visible = false
    data.showIdList = []
    data.filterText = ''
    data.OtherList = []
    record.value = []
    //  tree.value.setCheckedKeys([])
    //  clickemit('close')
  }
defineExpose({
  init
})
</script>

<style lang="scss">
.org-structure-selection {
  .el-dialog__footer {
    padding: 0;
    border-top: 1px solid #edeff2;
    // .el-button {
    //   font-size: 16px;
    //   min-width: 72px;
    // }
    // .el-button--default {
    //   background: #f2f3f5;
    // }
  }

  .custom-tree-node {
    .avatarBox {
      display: flex;
      margin-top: 1px;
      align-items: center;
      margin-left: 3px;
    }
  }
  .borderAvatar {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    border: 1px solid #1664ff;
    color: #1664ff;
    text-align: center;
    line-height: 34px;
  }
  :deep(.el-dialog__body) {
    padding: 0;
  }
  :deep(.el-checkbox) {
    display: flex;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  :deep(.el-checkbox__label) {
    font-weight: 500;
    font-size: 15px;
  }
  :deep(.el-checkbox__input) {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 3px;
    position: relative;
    vertical-align: middle;
  }
  .textStyle {
    display: block;
    max-width: 185px;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    font-family: siyuan, siyuan-Medium;
    font-weight: 500;
    text-align: left;
    //  color: #303133;
  }
  .is-disabled {
    display: none;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #1664ff !important;
    border-color: #1664ff !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #1664ff !important;
    border-color: #1664ff !important;
  }

  .el-dialog {
    width: 742px;
    height: 600px !important;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  }

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__body {
    padding: 0px;
  }

  .el-input__inner {
    /* height: 30px;
    line-height: 30px; */
    margin-bottom: 20px;
    border: none;
    border-radius: 2px;
    background: #fff;
    border: 1px solid #e5e6eb;
  }

  .dialog-footer {
    display: none;
  }
  .dialog_footer {
    height: 48px;
    padding-top: 10px;
    box-sizing: border-box;
    text-align: center;
    border-top: 1px solid #edeff2;
    button {
      width: 60px;
      height: 32px;
      border-radius: 4px;
    }
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .tree-transfer__content {
    position: relative;
    overflow: hidden;
    height: 600px;

    .tree-transfer__title {
      padding: 20px 30px;
      // height: 48px;
      // line-height: 48px;
      color: #333;
      font-size: 16px;
      border: 1px solid #e5e6eb;
    }
    .right__title {
      border-bottom: 1px solid #edeff2;
    }
    .tree-transfer__left .tree-transfer__list {
      height: calc(100%);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      // width: calc(100% - 48px);
      padding-top: 10px;
    }
    .tree-transfer__right .tree-transfer__list {
      padding-left: 10px;
      width: 100%;
      height: calc(100% - 44px);
      box-sizing: border-box;
    }

    .tree-transfer__left {
      position: absolute;
      top: 64px;
      left: 0;
      padding: 30px 0;
    }

    .tree-transfer__middle {
      position: absolute;
      top: 50%;
      left: 40%;
      width: 20%;
      transform: translateY(-50%);
      text-align: center;
    }

    .tree-transfer__right {
      position: absolute;
      top: 64px;
      right: 0;
      .tree-transfer__right_selected {
        display: flex;
        justify-content: space-between;
        div:nth-child(1) {
          color: #4e5969;
          font-weight: 400;
          font-size: 14px;
          padding: 5px 0;
        }
      }
      .tree-transfer__right-close {
        float: right;
        color: #1664ff;
        font-size: 15px;
        cursor: pointer;
      }

      .tree-transfer__list-ul {
        padding: 20px 0;
        .fl {
          float: left;
        }
        .tree-transfer__list-detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 42px;
          span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 350px;
          }
          span:nth-child(1) {
            font-size: 14px;
            color: #1d2129;
          }
          span:nth-child(2) {
            font-size: 12px;
            color: #86909c;
            margin-top: 5px;
          }
        }
      }

      .tree-transfer__list-li {
        position: relative;
        padding: 4px 0;
        border-radius: 3px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 15px;
        font-family: siyuan, siyuan-Medium;
        font-weight: 500;
        text-align: left;
        //   color: #303133;
      }

      .tree-transfer__list-li:hover {
        background-color: #f5f7fa;
      }

      .tree-transfer__list-li:hover .tree-transfer__list-delete {
        display: block;
      }

      .tree-transfer__list-delete {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -10px;
        color: #4e5969;
        cursor: pointer;
        text-align: center;
      }
    }
    .tree-transfer__left,
    .tree-transfer__right {
      // border: 1px solid #ebeef5;
      width: 50%;
      height: calc(100% - 64px);
      box-sizing: border-box;
      vertical-align: middle;
      padding: 30px 30px;
    }
    .tree-transfer__left {
      border-right: 1px solid #edeff2;
      height: calc(100% - 64px);
    }
    .chat_left {
      position: relative;
      width: 100%;
    }
    .chat_position {
      position: absolute;
      height: 48px;
      width: 100%;
      line-height: 48px;
      color: #1664ff;
      text-align: center;
      bottom: 0;
      cursor: pointer;
      background: rgba(255, 255, 255, 1);
      border-top: 1px solid #edeff2;
      z-index: 2;
    }
    .chat_list {
      padding-left: 10px;
      padding-bottom: 50px;
    }
  }
  :deep(.el-scrollbar__bar.is-vertical) {
    right: -24px;
  }
  :deep(.el-tree-node__content) {
    height: 26px;
    line-height: 26px;
    padding: 10px 0;
  }
  .el-tree-node__content {
    padding: 10px 0;
  }
}
</style>
