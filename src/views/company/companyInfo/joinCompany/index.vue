<template>
  <div v-loading="loading" class="joinCompany">
    <HeaderTabs :tabList="tabList" headerTitle="申请加入公司" @tabClick="tabClick" :activeName="activeName">
      <template #tabBottomContainer v-if="activeName == 0">
        <div class="searchInput">
          <el-input
            prefix-icon="el-icon-search"
            v-model="searchForm_st.name"
            placeholder="搜索您所在的公司/团队，发送加入申请"
            style="width: 430px; margin-right: 10px"
          ></el-input>
          <el-button type="primary" :disabled="searchForm_st.name && searchForm_st.name.length < 2" @click="searchData_st">搜索</el-button>
        </div>
      </template>
    </HeaderTabs>

    <!-- <component :is="currentCom" :ref="currentRef"></component> -->
    <div class="searchTeam" infinite-scroll-distance="10" v-if="activeName == 0" v-infinite-scroll="load_st" :infinite-scroll-disabled="isDisabled_st">
      <companyCard
        v-loading="loading_st"
        v-show="cardList_st.length > 0"
        :cardList="cardList_st"
        :statusList="statusList"
        class="infinite-list"
        style="overflow: auto"
      />
      <!-- <noData v-show="isShowNoDataCom_st" /> -->
      <div class="noData" v-show="isShowNoDataCom_st">
        <!-- <el-empty :image-size="100" image="@/assets/svg/no-company.svg" description="暂未搜索到该企业/团队，您可以重新搜索或在平台中创建该企业"></el-empty> -->
        <!-- <div class="pic"> -->
        <img src="@/assets/svg/no-company.svg" alt="" />
        <!-- </div> -->
        <p>暂未搜索到该企业/团队，您可以重新搜索或在平台中创建该企业</p>
        <el-button type="primary" @click="goCreate">前往创建</el-button>
      </div>
      <add title="申请加入团队" ref="addRef_st" width="500px" @load="load_st" />
    </div>
    <div class="applyRecord" v-if="activeName == 1">
      <companyCard :cardList="cardList_ap" :statusList="statusList_ap" />
      <el-empty v-show="!cardList_ap.length"></el-empty>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, watch, nextTick } from 'vue'
import companyCard from '../components/companyCard.vue'
import add from './components/add.vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { getCompanyListData } from '@/api/company/teamManager'
import { teamUserInfoMultiTeamInfo } from '@/api/company/teamManager.js'
import { getApplyListData } from '@/api/company/teamManager.js'
import { getLabel } from '@/utils/common.js'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'company-joinCompany',
  components: {
    companyCard,
    add
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const dicData = reactive({
      statusList: [
        {
          label: '待确认',
          value: 0,
          class: 'pending'
        },
        {
          value: 1,
          class: 'agreed',
          label: '已同意'
        },
        {
          value: 2,
          class: 'refused',
          label: '已拒绝'
        },
        {
          value: 3,
          class: 'expired',
          label: '已过期'
        }
      ],
      tabList: [
        {
          label: '搜索团队',
          name: '0'
        },
        {
          label: '申请记录',
          name: '1'
        }
      ]
    })
    //多团队列表
    const teamList = ref([])
    //获取用户所有团队列表
    const getTeamList = async () => {
      try {
        let res = await teamUserInfoMultiTeamInfo()
        if (res.code === 200) {
          teamList.value = res.data
        } else {
          ElMessage.warning(res.message)
        }
      } catch (error) {}
    }
    const searchTeam = reactive({
      page_st: { current: 1, size: 10 },
      pageTotal_st: 0,
      cardList_st: [],
      isShowNoDataCom_st: false,
      searchForm_st: {
        name: ''
      },
      addRef_st: ref(null),
      isDisabled_st: true,
      loading_st: false,
      fetchData_st: async (emitVal) => {
        console.log(emitVal)
        // 点击搜索调接口
        searchTeam.loading_st = true
        searchTeam.isDisabled_st = false
        try {
          const { data: res, code: code } = await getCompanyListData({
            keyword: searchTeam.searchForm_st.name,
            ...searchTeam.page_st
          })
          searchTeam.loading_st = false
          if (code === 200) {
            //   更新单条
            let temp = []
            //   console.log(res)
            res.records.forEach((item, i) => {
              //  得到 btnList
              //   console.log(item)
              item.btnList = getBtnList(item)
              //   console.log(23123, item.btnList)
              temp.push({
                id: item.id,
                teamId: item.teamId,
                title: item.name,
                description: item.areaLocation,
                src: item.logo,
                btnList: item.btnList || []
              })
            })
            //   console.log(23123, temp)
            if (res.records.length > 0) {
              searchTeam.cardList_st = temp.concat(searchTeam.cardList_st)
            } else {
              // 如果数据不再增加就停止
              searchTeam.isDisabled_st = true
            }
            if (searchTeam.cardList_st.length > 0) {
              searchTeam.isShowNoDataCom_st = false
            } else {
              searchTeam.isShowNoDataCom_st = true
            }
          } else {
            ElMessage.warning(res.message)
          }
        } catch (error) {
          searchTeam.loading_st = false
        }
      },
      load_st: async (emitVal) => {
        searchTeam.page_st.current += 1
        if (emitVal) {
          searchTeam.page_st.current = 1
          searchTeam.cardList_st = []
          if (emitVal.joinStatus == 1) {
            // 同意申请加入
          } else {
            // 未加入团队
            // 清空搜索, 跳到申请记录页面
            searchTeam.searchForm_st.name = ''
            state.activeName = '1'
            applyRecord.fetchData_ap()
          }
          //  await searchTeam.fetchData_st(emitVal)
        }
      },
      searchData_st: () => {
        searchTeam.page_st.current = 1
        searchTeam.cardList_st = []
        searchTeam.fetchData_st()
      },
      showAddDialog_st: (item) => {
        searchTeam.addRef_st.showConfirm(item)
      },
      handleSearch: (e) => {
        if (!e) {
          searchTeam.searchForm_st = {}
        }
        searchTeam.fetchData_st()
      },
      goCreate: () => {
        router.push({ path: '/company/createCompany', query: { searchName: searchTeam.searchForm_st.name } })
      }
    })

    const getBtnList = (item) => {
      // console.log(123123123, 'joinStatus--->', searchTeam.joinStatus)
      // console.log(123123123, 'item--->', item)
      let btnList = []
      // 当前所在团队列表对比
      let list = teamList.value.filter((ele) => ele.id == item.teamId) || []
      if (list.length > 0) {
        btnList = [
          {
            label: ' 已加入',
            value: 0,
            class: 'agreed',
            type: 'text'
          }
        ]
        console.log(btnList)
        return btnList
      }
      console.log(btnList)
      const res = applyRecord.cardList_ap.filter((ele) => ele.teamId == item.teamId)
      console.log(res)
      if (res.length > 0) {
        switch (res[0].status) {
          case 0:
            btnList = [
              {
                label: '待确认',
                value: 0,
                class: 'pending',
                type: 'text'
              }
            ]
            break
          case 1:
            btnList = [
              //   {
              //     label: ' 已同意',
              //     value: 0,
              //     class: 'agreed',
              //     type: 'text'
              //   }
              {
                label: '申请加入',
                class: '',
                type: 'primary',
                click: () => searchTeam.showAddDialog_st(item)
              }
            ]

            // console.log(btnList)
            break
          case 2:
            //  btnList = [
            //    {
            //      value: 2,
            //      class: 'refused',
            //      label: '已拒绝',
            //      type: 'text'
            //    }
            //  ]
            btnList = [
              {
                label: '再次申请',
                class: '',
                type: 'primary',
                click: () => searchTeam.showAddDialog_st(item)
              }
            ]
            break
          case 3:
            //  btnList = [
            //    {
            //      value: 3,
            //      class: 'expired',
            //      label: '已过期',
            //      type: 'text'
            //    }
            //  ]
            btnList = [
              {
                label: '再次申请',
                class: '',
                type: 'primary',
                click: () => searchTeam.showAddDialog_st(item)
              }
            ]
            break
        }
      } else {
        btnList = [
          {
            label: '申请加入',
            class: '',
            type: 'primary',
            click: () => searchTeam.showAddDialog_st(item)
          }
        ]
      }
      // console.log(22222, btnList)
      return btnList
      // return {
      //   btnList,
      //   status: res[0].status
      // }
    }

    const applyRecord = reactive({
      cardList_ap: [],
      statusList_ap: [
        {
          label: '待确认',
          value: 0,
          id: 0,
          name: '提交',
          class: 'pending'
        },
        {
          value: 1,
          id: 1,
          class: 'agreed',
          name: '同意',
          label: '已同意'
        },
        {
          value: 2,
          id: 2,
          class: 'refused',
          name: '拒绝',
          label: '已拒绝'
        },
        {
          value: 3,
          id: 3,
          class: 'expired',
          name: '过期',
          label: '已过期'
        }
      ],
      fetchData_ap: async () => {
        try {
          const res = await getApplyListData({ size: -1 })
          if (res.code == 200) {
            let temp = []
            res.data.records.forEach((item, i) => {
              temp.push({
                teamId: item.teamId,
                status: item.joinResult,
                title: `申请加入【<span style="color:#1664ff">${item.teamInfo?.teamName || ''}</span>】【<span style="color:#1664ff">${
                  item.applyDepartment
                }</span>】，职位【<span style="color:#1664ff">${item.employeeJob}</span>】`,
                description: `申请说明：${item.applyDescribe}`,
                statement: `<span style="color: #B5B5BD;">${getLabel(item.joinResult, applyRecord.statusList_ap)}时间： </span><span style="color:#1664FF">${
                  item.updateTime || item.createTime
                }</span>`,
                inviteTime: item.updateTime,
                btnList: item.btnList || []
              })
            })
            applyRecord.cardList_ap = temp
            console.log(applyRecord.cardList_ap)
          }
        } catch (error) {}
      }
    })

    let state = reactive({
      // searchForm_st: {},
      loading: false,
      activeName: '0'
    })

    onMounted(() => {
      nextTick(() => {
        if (route.query.haveRecord == '1') {
          tabClick({ index: '1' })
        }
      })
      getTeamList()
      applyRecord.fetchData_ap()
    })

    // tab切换
    function tabClick(tab) {
      state.activeName = +tab.index + ''
      if (state.activeName == 1) {
        searchTeam.searchForm_st.name = ''
        searchTeam.page_st.current = 1
        searchTeam.cardList_st = []
        applyRecord.fetchData_ap()
      }
    }

    return {
      ...toRefs(state),
      ...toRefs(searchTeam),
      ...toRefs(dicData),
      ...toRefs(applyRecord),
      tabClick
    }
  }
}
</script>

<style scoped lang="scss">
.joinCompany {
  :deep(.el-loading-mask) {
    min-height: calc(100vh - 120px);
  }

  .searchInput {
    margin: 20px 0;
  }

  //   :deep(.searchTeam .infinite-list .companyCard) {
  //     margin-left: 0 !important;
  //     margin-right: 0 !important;
  //   }
  :deep(.el-card) {
    border: 0;
  }

  .noData {
    margin: 90px;
    text-align: center;
    p {
      margin-bottom: 40px;
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #86909c;
    }
  }
}
</style>
