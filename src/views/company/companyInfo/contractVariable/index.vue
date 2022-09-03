<template>
  <div>
    <HeaderTabs :tabList="tabList" :activeName="activeName" :headerTitle="headerTitle" @tabClick="tabClick">
      <template v-slot:rightContainer> </template>
    </HeaderTabs>
    <table-search @handleSearch="handleSearch" style="margin-top: 16px">
      <template #search>
        <el-input v-model.trim="searchForm.code" placeholder="变量代码"></el-input>
        <el-input v-model.trim="searchForm.code" placeholder="变量名称"></el-input>
      </template>
    </table-search>
    <table-card :tableData="tableData" @checkCb="checkCb" :column="column" mainProperty="companyName"> </table-card>
    <table-bottom>
      <template v-slot:bottomLeft>
        <el-button size="mini" @click="logicHandle(1)" :disabled="selectData.length !== 1">浏览</el-button>
        <el-button size="mini" class="add-button" @click="logicHandle(2)" v-if="activeName == 1">新建</el-button>
      </template>
      <template v-slot:bottomRight>
        <Pagenation @getList="pageHandle" :page="page" :pageTotal="pageTotal"></Pagenation>
      </template>
    </table-bottom>
    <AddVariable ref="addVariableRef" />
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import { getLabel } from '@/utils/common.js'
import AddVariable from './components/AddVariable.vue'
export default {
  name: 'company-contractVariable',
  components: {
    AddVariable
  },
  setup() {
    const addVariableRef = ref()
    const dicData = reactive({
      statusList: [
        { name: '已生效', id: 1 },
        { name: '未生效', id: 0 },
      ]
    })
    const state = reactive({
      selectData: [],
      activeName: '0',
      column: [
        // 表头data
        { prop: 'companyName', label: '变量代码' },
        { prop: 'code', label: '变量名称' },
        { prop: 'level', label: '变量备注' },
      ],
      tableData: [
        {
          companyName: '北京国际吹牛逼有限责任公司',
          code: 'CNB8695732',
          level: 'A',
          person: '樊继权',
          tel: 18888888888,
          editor: '孙悟空',
          createTime: '2022-11-22 10:10:46',
          editeTime: '2022-11-23 10:16:46',
          createBy: '唐三藏',
          linStatus: 1,
          approStatus: 2,
          status: 0
        },
        {
          companyName: '北京国际吹牛逼有限责任公司',
          code: 'CNB8695732',
          level: 'A',
          person: '樊继权',
          tel: 18888888888,
          editor: '孙悟空',
          createTime: '2022-11-22 10:10:46',
          editeTime: '2022-11-23 10:16:46',
          createBy: '唐三藏',
          linStatus: 0,
          approStatus: 3,
          status: 1
        },
        {
          companyName: '北京国际吹牛逼有限责任公司',
          code: 'CNB8695732',
          level: 'A',
          person: '樊继权',
          tel: 18888888888,
          editor: '孙悟空',
          createTime: '2022-11-22 10:10:46',
          editeTime: '2022-11-23 10:16:46',
          createBy: '唐三藏',
          linStatus: 0,
          approStatus: 1,
          status: 0
        },
        {
          companyName: '北京国际吹牛逼有限责任公司',
          code: 'CNB8695732',
          level: 'A',
          person: '樊继权',
          tel: 18888888888,
          editor: '孙悟空',
          createTime: '2022-11-22 10:10:46',
          editeTime: '2022-11-23 10:16:46',
          createBy: '唐三藏',
          linStatus: 2,
          approStatus: 3,
          status: 0
        }
      ],
      headerTitle: '合同变量管理',
      searchForm: {},
      tabList: [
        {
          label: '系统变量',
          name: '0'
        },
        {
          label: '自定义变量',
          name: '1'
        },
      ],
      tabClick: (tab, event) => {
        console.log(tab, event)
        state.activeName = tab.props.name
      },
      //初始化列表
      init: () => {
        // state.getList({ size: 10, current: 1 })
      },
      handleSearch(val) {
        if (val) {

        } else {
          state.searchForm = {

          }
        }
        state.init()
      },
      logicHandle(val) {
        switch (val) {
          case 1: //浏览
            addVariableRef.value.init('view', state.selectData)
            break
          case 2: //新建
            addVariableRef.value.init('add')
            break
        }
      },
      checkCb(data) {
        console.log(data)
        state.selectData = data
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      addVariableRef
    }
  }

}
</script>
<style lang="scss">
</style>