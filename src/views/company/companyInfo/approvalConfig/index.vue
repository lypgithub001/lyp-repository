<template>
  <div class="processManagement">
    <div class="clue_list_box">
      <div class="content">
        <div class="filter_content"></div>
        <div class="table_content aflow-page-body" v-loading="tableLoading">
          <div class="group-list" v-for="(item, index) in tableData" :key="index">
            <div class="group-item">
              <div class="group-item-title">
                <div class="title-text">
                  {{ item.businessGroupLabel }}
                  <span class="form-num">( {{ item.businessTypeList.length }} )</span>
                </div>
              </div>
              <div class="group-item-forms">
                <div class="form-row" v-for="(ele, index1) in item.businessTypeList" :key="index1">
                  <div class="form-title">
                    <div class="form-title-img">
                      <div class="app-icon">
                        <img :src="ele.icon" alt="" />
                        <div class="app-icon-mask"></div>
                      </div>
                    </div>
                    <div class="form-title-text">
                      <div class="title-text">{{ ele.businessTypeLabel }}</div>
                      <div class="title-subtitle">{{ ele.description }}</div>
                    </div>
                  </div>
                  <div class="form-visible">
                    <div class="edit-form-visible">
                      <div class="visible-key">审批设置：</div>
                      <div class="visible-value">
                        <div class="value">
                          <span v-if="ele.status == 0">无需审批，直接发布</span>
                          <span v-if="ele.status == 1">启用审批</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-date">
                    <div class="date-key">最后更新：</div>
                    <div class="date-value">
                      {{ ele.updateTime ? formatDate(new Date(ele.updateTime), 'YYYY-MM-DD HH:mm:ss') : '-' }}
                    </div>
                  </div>
                  <!-- <div class="form-tags"></div> -->
                  <div class="form-actions">
                    <el-button size="small" type="text" @click="operationBtn(1, ele)">编辑</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { formatDate } from '@/utils/common.js'
import { approveBusinessList } from '@/api/company/approvalConfig.js'

export default {
  name: 'processManagement',
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      tableLoading: false, //表格加载
      tableData: [
        //   {
        //     businessGroup: 2,
        //     businessGroupLabel: '采购',
        //     businessTypeList: [
        //       {
        //         businessGroup: 2,
        //         businessGroupLabel: '采购',
        //         businessType: 52,
        //         businessTypeLabel: '采购预算',
        //         conditionList: ['amount', 'organizer', 'purchase_origin'],
        //         description: '采购预算',
        //         icon: 'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png',
        //         id: 235445186340869,
        //         processConf: null,
        //         sort: 0,
        //         status: 1,
        //         updateTime: '2021-12-27 18:34:02'
        //       },
        //       {
        //         businessGroup: 2,
        //         businessGroupLabel: '采购',
        //         businessType: 53,
        //         businessTypeLabel: '采购需求申请',
        //         conditionList: ['amount', 'organizer', 'purchase_origin'],
        //         description: '采购预算',
        //         icon: 'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png',
        //         id: 235445186340870,
        //         processConf: null,
        //         sort: 0,
        //         status: 1,
        //         updateTime: '2021-12-27 18:34:02'
        //       }
        //     ]
        //   }
      ] //表格数据
    })
    onMounted(() => {
      getList()
    })
    function operationBtn(type, row) {
      switch (type) {
        case 1: //编辑
          let path = ''
          if (route.path == '/market/company/approvalConfig') {
            path = '/market'
          }
          router.push({ path: path + '/company/approvalConfig/formWork', query: { businessGroup: row.businessGroup, businessType: row.businessType } })
          break
        default:
          break
      }
    }
    //查询列表
    function getList() {
      state.tableLoading = true
      approveBusinessList('')
        .then((res) => {
          state.tableLoading = false
          if (res.code == 200) {
            state.tableData = res.data
            state.tableData.forEach((e) => {
              e.businessTypeList.forEach((j) => {
                if (!j.icon) {
                  j.icon = 'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png'
                }
              })
            })
          }
        })
        .catch((err) => {
          state.tableLoading = false
        })
    }

    return {
      operationBtn,
      formatDate,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.processManagement {
  //   margin-top: 16px;
  .aflow-page-body {
    //  padding: 0 16px;
    overflow: auto;
    height: auto;
    .group-list {
      .group-item {
        background: #fff;
        border: 1px solid rgba(17, 31, 44, 0.08);
        border-radius: 8px;
        margin-bottom: 16px;
        position: relative;
        box-shadow: 0px 4px 20px -8px rgb(50 50 71 / 8%);
        .group-item-title {
          padding: 0 23px;
          display: flex;
          align-items: center;
          height: 52px;
          .title-text {
            color: #111f2c;
            font-size: 14px;
            font-weight: bold;
            flex: 1;
            .form-num {
              font-weight: normal;
              color: rgba(17, 31, 44, 0.56);
            }
          }
        }
        .group-item-forms {
          padding-left: 20px;
          border-top: 1px solid rgba(17, 31, 44, 0.08);
          .form-row {
            display: flex;
            align-items: center;
            padding: 0 0;
            height: 64px;
            border-bottom: 1px solid rgba(17, 31, 44, 0.08);
            // background-color: #fff;
            .app-icon {
              background-color: #f6f6f6;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .form-title {
              width: 0;
              display: flex;
              align-items: center;
              flex: 1.6;
              padding-right: 20px;
              .app-icon {
                width: 32px;
                height: 32px;
                position: relative;
                .app-icon-mask {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-image: url('https://gw.alicdn.com/tfs/TB1cHKfhUz1gK0jSZLeXXb9kVXa-200-200.png');
                  background-size: 100%;
                }
              }

              .form-title-text {
                padding-left: 8px;
                overflow: hidden;
                .title-text {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 14px;
                  color: #111f2c;
                }
                .title-subtitle {
                  overflow: hidden;
                  max-width: 250px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 12px;
                  color: rgba(17, 31, 44, 0.72);
                }
              }
            }
            .form-visible {
              flex: 1;
              .edit-form-visible {
                .visible-key {
                  font-size: 12px;
                  color: rgba(17, 31, 44, 0.72);
                }
                .visible-value {
                  margin-top: 4px;
                  .value {
                    max-width: 120px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                    color: #111f2c;
                  }
                  .link {
                    cursor: pointer;
                    font-size: 12px;
                    color: #0089ff;
                    padding-left: 8px;
                  }
                }
              }
            }
            .form-date {
              min-width: 160px;
              flex: 1;
              .date-key {
                font-size: 12px;
                color: rgba(17, 31, 44, 0.72);
              }
              .date-value {
                font-size: 12px;
                color: #111f2c;
                padding-top: 4px;
              }
            }
            .form-tags {
              min-width: 142px;
              flex: 1;
              font-size: 12px;
            }
            .form-actions {
              display: flex;
              width: 100px;
              justify-content: center;
            }
          }
          .form-row:last-child {
            border: none;
          }
        }
      }
    }
  }
}
</style>

 
