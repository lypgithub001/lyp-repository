<template>
  <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :isFooter="false" @onSubmit="saveInfo" :closeOnClickModal="false" width="1000px">
    <template #content>
      <div class="view-business-info" v-loading="loading">
        <div class="company-table" style="height: 100%">
          <div class="cell-container">
            <div class="cell-left">
              <span>统一社会信用代码</span>
            </div>
            <div class="cell-right">{{ purchaseData.creditCode || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>法定代表人</span></div>
            <div class="cell-right">{{ purchaseData.legalPersonName || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>成立日期</span></div>
            <div class="cell-right">
              {{ purchaseData.estiblishTime ? formatDate(new Date(purchaseData.estiblishTime), 'YYYY-MM-DD') : purchaseData.dateOfEstablishment || '-' }}
            </div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>经营状态</span></div>
            <div class="cell-right">{{ purchaseData.regStatus || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>注册资本</span></div>
            <div class="cell-right">{{ purchaseData.regCapital || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>实缴资本</span></div>
            <div class="cell-right">{{ purchaseData.actualCapital || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>企业类型</span></div>
            <div class="cell-right">{{ purchaseData.companyOrgType || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>所属行业</span></div>
            <div class="cell-right">{{ purchaseData.industry || purchaseData.industryCategory || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>纳税人识别号</span></div>
            <div class="cell-right">{{ purchaseData.taxNumber || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>组织机构代码</span></div>
            <div class="cell-right">{{ purchaseData.orgNumber || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>工商注册号</span></div>
            <div class="cell-right">{{ purchaseData.regNumber || '-' }}</div>
          </div>

          <div class="cell-container">
            <div class="cell-left"><span>纳税人资质</span></div>
            <div class="cell-right">{{ getLabel(purchaseData.companyType, companyTypeList) }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>营业期限</span></div>
            <div class="cell-right">
              {{
                (purchaseData.estiblishTime ? formatDate(new Date(purchaseData.estiblishTime), 'YYYY-MM-DD') : purchaseData.dateOfEstablishment || '-') +
                (' 至 ' + (purchaseData.toTime ? formatDate(new Date(Number(purchaseData.toTime)), 'YYYY-MM-DD') : '9999-12-31'))
              }}
            </div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>行政区划</span></div>
            <div class="cell-right">{{ (purchaseData.city || '-') + (purchaseData.district || '-') }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>登记机关</span></div>
            <div class="cell-right">{{ purchaseData.regInstitute || '-' }}</div>
          </div>
          <div class="cell-container">
            <div class="cell-left"><span>参保人数</span></div>
            <div class="cell-right">{{ purchaseData.socialStaffNum || 0 }}人</div>
          </div>
          <div class="cell-container" style="width: 100%">
            <div class="cell-left"><span>注册地址</span></div>
            <div class="cell-right">{{ purchaseData.regLocation || '-' }}</div>
          </div>
          <div class="cell-container" style="width: 100%">
            <div class="cell-left"><span>经营范围</span></div>
            <div class="cell-right">{{ purchaseData.businessScope || '-' }}</div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <el-button @click="saveInfo" type="primary">我知道了</el-button>
    </template>
  </el-dialog-module>
</template>
<script>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
import { getLabel, formatDate } from '@/utils/common.js'
import { useStore } from 'vuex'
import { companyQueryInfoNormal, companyQueryInfoSpecial } from '@/api/company/createCompany.js'
import { ElMessage } from 'element-plus'

export default {
  setup() {
    const state = reactive({
      companyTypeList: [
        {
          id: 0,
          name: '非一般纳税人'
        },
        {
          id: 1,
          name: '一般纳税人'
        }
      ],
      isShow: false,
      title: '供应商工商信息',
      loading: false,
      purchaseData: {},
      formatDate,
      getLabel,
      //初始化 name 企业名称
      init(name) {
        state.purchaseData = {}
        state.supplierFn(name)
      },
      async supplierFn(name) {
        state.loading = true
        try {
          let res = await companyQueryInfoNormal(name)
          if (res.code === 200) {
            if (res.data) {
              state.purchaseData = res.data || {}
              state.isShow = true
              state.loading = false
            } else {
              state.getSpecial(name)
            }
          } else {
            ElMessage.warning(res.message)
          }
        } catch (error) {
          state.loading = false
        }
      },
      getSpecial: async (name) => {
        try {
          let res = await companyQueryInfoSpecial(name)
          if (res.code === 200) {
            state.purchaseData = res.data || {}
            state.isShow = true
            state.loading = false
          }
        } catch (error) {
          state.loading = false
        }
      },
      onClose: () => {
        state.isShow = false
      },
      saveInfo: () => {
        state.isShow = false
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.view-business-info {
  margin-bottom: 20px;
  .company-table {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .cell-container {
      width: 50%;
      display: flex;
      border: 1px solid #edf2f7;
      border-top: 0px;
      font-size: 13px;
      box-sizing: border-box;
      .cell-left {
        width: 160px;
        line-height: 32px;
        background: #f7fafc;
        flex-shrink: 0;
        color: #86909c;
        padding: 0 24px;
        border-right: 1px solid #edf2f7;
        position: relative;
        span {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
      .cell-right {
        flex: 1;
        line-height: 32px;
        padding: 0 12px;
        color: #4e5969;
      }
    }
    .cell-container:nth-child(1) {
      border-top: 1px solid #edf2f7;
    }
    .cell-container:nth-child(2) {
      border-top: 1px solid #edf2f7;
    }
  }
}
</style>
