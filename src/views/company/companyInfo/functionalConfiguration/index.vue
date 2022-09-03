<template>
  <div class="mall-manage">
    <img src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/rightRadius.png" alt="" class="topRight" />
    <!-- 选项卡遍历 -->
    <div class="cardShow">
      <div class="cardVersion flex-between">
        <div v-for="(item, index) in menuList" class="svgBox" :key="index">
          <img :src="item.iconSvg" class="shadow" alt="" />
          <div class="svgText">{{ item.svgText }}</div>
          <svg-icon :name="'nowVersion'" class="nowVersion" v-if="nowVersion === item.id" :width="'.74rem'" :height="'.74rem'"></svg-icon>
          <div class="text">{{ item.text }}</div>
          <svg-icon :name="'allVersion'" class="allVersion" v-if="item.id === 1" :width="'1.9rem'" :height="'.2rem'"></svg-icon>
          <svg-icon
            :name="standardStatusIcon"
            class="standardStatusIcon"
            v-if="nowVersion !== item.id && item.id === 1"
            :width="'.74rem'"
            :height="'.74rem'"
          ></svg-icon>
          <img :src="item.img" alt="" class="posImg" />

          <div class="menuBox">
            <div class="listBox" v-if="item.id === 1 || item.id === 0">
              <div class="PriceAndMember" v-if="item.id === 1 || item.id === 0">
                <div v-if="item.id == 0" class="noMoney">永久免费</div>
                <div v-if="item.id == 1" class="normalMoney">
                  <div>
                    <span style="font-size: 0.16rem; margin-right: 0.1rem">标准定价</span>
                    <span style="font-family: 'DIN Alternate'; font-weight: 700; font-size: 0.4rem; color: #ff4d4f">39800</span>
                    <span style="font-size: 0.16rem; color: #ff4d4f; margin-left: 0.04rem">元起/年</span>
                  </div>
                  <div style="display: flex; align-items: center">
                    <div style="background: #4e5969; width: 0.05rem; height: 0.05rem; border-radius: 50%; margin-right: 0.08rem"></div>
                    <div style="font-size: 0.14rem; color: #4e5969; font-weight: 400">年平台商城采购额超过39.8万元即可免费申请使用</div>
                  </div>
                </div>
              </div>
              <div class="lineBox" :style="{ border: i === 2 ? 'none' : '' }" v-for="(typeList, i) in item.list" :key="i">
                <div class="flex">
                  <div class="point"></div>
                  <div class="name">{{ typeList.name }}</div>
                </div>
                <div class="type">
                  {{ typeList.type }}
                </div>
              </div>
            </div>

            <div v-else class="tagImgBox">
              <img class="tagImg" src="http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/versionTitleList.png" alt="" />
            </div>

            <template v-if="item.id != 2">
              <div v-if="nowVersion == item.id" class="pleaseExcept" style="margin-top: vh(30)">当前版本</div>
              <template v-else>
                <div v-if="item.id == 0" class="alreadyPrimary" @click="chooseVersion(item.id)">立即使用</div>
                <template v-if="item.id == 1">
                  <div v-if="standardStatus == 0" class="pleaseExcept" style="margin-top: vh(30)">{{ btnText }}</div>
                  <div v-else class="alreadyPrimary" @click="chooseVersion(item.id)">{{ btnText }}</div>
                </template>
              </template>
            </template>
            <div v-else class="pleaseExcept">敬请期待...</div>
          </div>
        </div>
      </div>
    </div>
    <img class="bottomLeft" src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/leftBottom.png" alt="" />
    <img class="bottomRight" src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/rightBottom.png" alt="" />
  </div>
  <div class="bottomTitle">Copyright © 2021-2022 智采云（北京）科技有限公司 ｜ 浪潮集团有限公司 京ICP备2021036704号-2</div>

  <!-- 联系我们 -->
  <el-dialog
    v-model="contactUs.visible_contactUs"
    :show-close="false"
    custom-class="mall-manage-dialog"
    width="600px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <template #header="{ close, titleId, titleClass }" v-if="false"></template>
    <div class="contactInfo">
      <div class="tip1">请联系智采云业务员进行咨询、协议签署，协议签署后即可开通使用</div>
      <img class="bottomLeft" src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/tel.png" alt="" />
      <div class="tip2">致电智采云客服热线</div>
      <div class="tip3">400-645-6677</div>
      <div class="tip4">（服务时间：周一到周五早9点-晚18点）</div>
      <el-button type="primary" @click="contactUs.openOrCloseServiceTel(0)" style="margin-top: 20px">我知道了</el-button>
    </div>
  </el-dialog>
</template>
<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
import { updateSolutionInfo, applyStandard } from '@/api/systemManagement/organizationalStructure.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {})
//当前版本类型
const nowVersion = computed(() => JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo.solutionVersion ?? 0)
// 标准版的开通状态
const standardStatus = computed(() =>
  typeof JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo.standardStatus == 'number'
    ? Number(JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo.standardStatus)
    : -1
)
// 按钮显示文字
const btnText = computed(() => {
  let value = ''
  //   if (nowVersion.value == 1) {
  switch (standardStatus.value) {
    case -1:
      // 未开通
      value = '立即申请'
      break
    case 0:
      // 待审核
      value = '开通中'
      break
    case 1:
      //  1已开通
      value = '立即使用'
      break
    case 2:
      // 2已拒绝
      value = '重新申请'
      break
    case 3:
      //  3已过期
      value = '立即续期'
      break
  }
  //   }
  return value
})
// statusIcon src
const standardStatusIcon = computed(() => {
  let value = 'standardStatus-' + standardStatus.value
  console.log(79, 'value-->', value)
  return value
})
//选择版本类型
const chooseVersion = (id) => {
  console.log(107, 'standardStatus.value-->', standardStatus.value)
  console.log(108, 'nowVersion.value-->', nowVersion.value)
  if (nowVersion.value !== id) {
    if (id == 0) {
      chooseUpdateSolutionInfo(id)
    }
    if (id == 1) {
      switch (standardStatus.value) {
        case -1:
        //   value = '立即申请'
        case 2:
        //   value = '立即申请'
        case 3:
          //   value = '立即续期'
          contactUs.openOrCloseServiceTel(1)
          break
        case 1:
          //  value = '立即使用'
          chooseUpdateSolutionInfo(id)
          break
      }
    }
  }
}

const contactUs = reactive({
  visible_contactUs: false,
  // 打开客服电话弹窗
  openOrCloseServiceTel: async (v) => {
    console.log(110, 'v-->', v)
    if (v) {
      try {
        const res = await applyStandard()
        if (res.code == 200) {
          contactUs.visible_contactUs = true
        }
      } catch (error) {}
    } else {
      contactUs.visible_contactUs = false
      location.reload()
    }
  }
})
//修改版本
const chooseUpdateSolutionInfo = async (id) => {
  try {
    // businessType 业务类别0采购，1销售，2采购+销售
    let res = await updateSolutionInfo({ businessType: 2, solutionVersion: id })
    if (res.code === 200) {
      store.commit('SAVE_TREE', {})
      location.reload()
    } else {
      ElMessage.warning(res.message)
    }
  } catch (error) {}
}
//菜单类型
const menuList = ref([
  {
    iconSvg: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/commonly.png',
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/putongbanzuanshi.png',
    id: 0,
    svgText: '采购版',
    text: '方便快捷的功能采购工具，登录即用，内含采购咨询、商城比价、询价采购、竞价采购等多种采购方式，一键触达质优价廉的商品及服务，使寻源效果最大化。',
    list: [
      {
        name: '采购咨询',
        type: '描述采购需求，获得平台商家回复及报价'
      },
      {
        name: '商城、询价、竞价采购',
        type: '多元化采购方式，满足日常采购场景，高效完成物品采购'
      },
      {
        name: '订单协同',
        type: '采购订单高效协同，订单全流程留痕'
      }
    ]
  },
  {
    iconSvg: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/platform.png',
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/pingtaibanzuanshi.png',
    id: 1,
    svgText: '标准版',
    text: '为企业提供规范、合规、阳光的采购全生命周期管理功能，实现线上化的内外部采供协同，大幅提升采购效率，优化供应商报价结构，降低采购成本。',
    list: [
      {
        name: '供应商管理',
        type: '完整的供应商全生命周期管理，供应商信息实时掌控'
      },
      {
        name: '内部协同',
        type: '从采购需求、寻源、订单验收到领用完成采购业务内部协同'
      },
      {
        name: '外部协同',
        type: '实现外部供应商准入、寻源、合同、订单、结算全过程协同'
      }
    ]
  },
  {
    iconSvg: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/shopMall.png',
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/shangchengbanzuanshi.png',
    id: 2,
    svgText: '专业版',
    text: '适用于生产、制造、工程类企业，除标准版功能之外还具备电子招投标、竞争性谈判等采购方式，满足企业全场景采购管理，通过强大的系统连接能力，快速实现集团采购业务闭环。'
  }
])
</script>

<style lang="scss">
// 弹窗样式
.mall-manage-dialog {
  top: 50% !important;
  margin-top: -223px !important;
  .el-dialog__header,
  .el-dialog__body {
    padding: 0 !important;
  }
  .el-dialog__body {
    .contactInfo {
      width: 100%;
      height: 446px;
      background-image: url('https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/ContactUsDialogBg.png');
      background-position: center center;
      background-size: 100% 446px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .tip1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #1d2129;
      }
      .tip2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1d2129;
      }
      .tip3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 34px;
        color: #1d2129;
      }
      .tip4 {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #86909c;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.bottomTitle {
  text-align: center;
  color: #86909c;
  height: vh(22);
  line-height: vh(22);
  margin-top: vh(20);
  font-size: 0.14rem;
  margin-bottom: vh(30);
}
.mall-manage {
  //   background: url('http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/versionBanner.png') no-repeat;
  background: linear-gradient(180deg, #e6f0ff 0%, #e3edfe 100%);
  background-size: 100% 100%;
  height: calc(100vh - 116px - vh(72));
  //   width: calc(100vw - 280px);
  //   min-width: 1200px;
  padding: vh(58) 0.8rem vh(56);
  position: relative;
  box-sizing: border-box;
  .bottomLeft {
    position: absolute;
    bottom: 0;
    left: 0.18rem;
    height: 2.03rem;
    width: 1.17rem;
  }
  .bottomRight {
    position: absolute;
    bottom: 0;
    right: 0.34rem;
    width: 1.54rem;
    height: 2.71rem;
  }
  .cardShow {
    .cardVersion {
      .svgBox {
        position: relative;
        width: calc((100% - 40px) / 3);
        background: #fff;
        border-radius: 0.08rem;
        z-index: 1;
        height: vh(831);
        .posImg {
          position: absolute;
          top: vh(96);
          right: 0;
          width: vh(123);
          height: vh(123);
        }
        .nowVersion {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
        }
        .allVersion {
          position: absolute;
          top: vh(190);
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 1;
        }
        .standardStatusIcon {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
        }
        .shadow {
          width: 100%;
          height: vh(220);
          border-radius: 0;
          box-shadow: none;
          //  border-top-left-radius: 8px;
          //  border-top-right-radius: 8px;
        }
        .svgText {
          position: absolute;
          width: 100%;
          top: vh(35);
          left: 0;
          font-weight: 600;
          font-size: 0.4rem;
          line-height: vh(40);
          font-style: normal;
          letter-spacing: 0.1rem;
          color: #ffffff;
          text-align: center;
          z-index: 1;
        }
        .text {
          font-style: normal;
          font-weight: 400;
          font-size: 0.16rem;
          line-height: vh(32);
          /* identical to box height, or 120% */
          color: #ffffff;
          position: absolute;
          top: vh(90);
          left: 0;
          text-align: left;
          width: 100%;
          padding: 0 0.2rem;
          box-sizing: border-box;
          z-index: 1;
        }
        .menuBox {
          background: #fff;
          width: 100%;
          margin-top: vh(-3);
          //  padding: vh(48) 0.4rem vh(56);
          padding: 0.3rem 0.4rem vh(56);
          box-sizing: border-box;
          border-bottom-left-radius: 0.08rem;
          border-bottom-right-radius: 0.08rem;
          .listBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .PriceAndMember {
              width: 100%;
              height: vh(103);
              // height: 1.03rem;
              background-image: url('https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/supplierVersion/PriceAndMemberBg.png');
              background-position: center center;
              background-size: 100% vh(103);
              margin-bottom: vh(30);
              box-sizing: border-box;
              .noMoney {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
                font-size: 0.3rem;
                box-sizing: border-box;
              }
              .normalMoney {
                width: 100%;
                height: 100%;
                padding: vh(20) 0.2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
              }
            }

            .lineBox {
              line-height: vh(24);
              margin-bottom: vh(25);
              border-bottom: 1px solid #e5e6eb;
              width: 100%;
              padding-bottom: vh(25);
            }
            .point {
              background: #1d2129;
              width: 0.06rem;
              height: 0.06rem;
              border-radius: 50%;
              margin-top: vh(10);
              margin-right: 0.08rem;
            }
            .name {
              font-style: normal;
              color: #000000;
              font-weight: 600;
              font-size: 0.16rem;
            }
            .type {
              font-style: normal;
              font-weight: 400;
              //   font-size: 0.16rem;
              //   line-height: vh(24);
              font-size: 0.13rem;
              line-height: vh(22);
              /* identical to box height, or 150% */
              /* 文字/Text-4(次强调-正文标题) */
              color: #4e5969;
              margin-top: vh(10);
            }
          }
          .pleaseExcept {
            width: 2rem;
            height: vh(48);
            left: 1.4rem;
            border: 1px solid #86909c;
            border-radius: 0.02rem;
            color: #86909c;
            font-weight: 400;
            font-size: 0.18rem;
            line-height: vh(48);
            text-align: center;
            margin: 0 auto 0;
            position: absolute;
            bottom: vh(56);
            left: 50%;
            transform: translate(-50%, 0);
          }
          .alreadyPrimary {
            background: #165dff;
            box-shadow: 0px 0.14rem 0.14rem -0.04rem rgba(142, 174, 255, 0.63);
            border-radius: 0.02rem;
            width: 2rem;
            line-height: vh(48);
            height: vh(48);
            font-style: normal;
            font-weight: 400;
            font-size: 0.18rem;
            cursor: pointer;
            text-align: center;
            color: #ffffff;
            margin: 0 auto;
            position: absolute;
            bottom: vh(56);
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
      .svgBox:hover {
        border-radius: 0.08rem;
        margin-top: vh(-20);
        filter: drop-shadow(0px 0.1rem 0.14rem rgba(41, 105, 250, 0.1));
        transition: all 0.2s linear;
        height: vh(831);
      }
    }
  }
}
.topRight {
  width: 1.24rem;
  height: 1.5rem;
  position: absolute;
  top: vh(19);
  right: 0;
}
.tagImgBox {
  width: 3.4rem;
  height: 2.35rem;
  margin: auto;
  box-sizing: border-box;
  margin-top: 0.7rem;
  .tagImg {
    width: 100%;
    height: 100%;
    //   height: vh(290);
    //   margin: 0.7rem auto 0.86rem;
    display: block;
  }
}

// @media all and (min-width: 1866px) {
//   .name {
//     font-size: 18px !important;
//   }
//   .tagImg {
//     width: 100%;
//     height: auto;
//   }
//   .svgBox {
//     height: 761px !important;
//   }
// }
// @media all and (max-width: 1600px) {
//   .text {
//     font-size: 16px !important;
//   }
// }
// @media all and (max-width: 1866px) {
//   .lineBox {
//     margin-bottom: 20px !important;
//   }
//   .tagImg {
//     width: 100%;
//     height: auto;
//   }
//   .svgBox {
//     height: 797px !important;
//   }
// }
</style>
