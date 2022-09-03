<template>
  <!-- 供应商新样式 -->
  <div v-if="longcardValue.length" class="longcardVal-contanier">
    <div class="LongCard" v-for="(item, index) in longcardValue" :key="index">
      <div class="divider" v-if="index == 0">
        <el-divider />
      </div>
      <div class="container">
        <div class="contanier-body">
          <div class="content-left">
            <img :src="item.logo ? item.logo : imglogo" @error="onImgError" />
          </div>
          <div class="contanier-left">
            <div class="content-left">
              <div class="content-left-top">
                <div class="top-reader">
                  <!-- 公司名称 -->
                  <p @click="rowClick(type, item)" style="cursor: pointer">{{ item.oppositeCompanyName }}</p>
                  <tag-style
                    :content="getLabel(item.certificationState, certificationstatus)"
                    :contentsvg="item.certificationState == 3 ? true : false"
                    :class="item.certificationState == 3 ? 'certification' : 'certificationDef'"
                  ></tag-style>
                  <!-- 认证状态 -->
                  <!-- //会员等级 -->
                  <!-- <tag-style
                    :content="item.gradeName"
                    v-show="item.gradeName"
                    :payingMembers="item.gradeName === '免费会员' ? false : true"
                    :class="item.gradeName === '免费会员' ? 'gradeNamedefult' : 'gradeNameNodef'"
                  ></tag-style> -->
                  <!-- 分类 -->
                  <tag-style
                    :content="getLabel(item.supplierClassify, SupplierServiceSpuEnum)"
                    v-show="item.supplierClassify"
                    class="supplierClassify"
                  ></tag-style>
                </div>
              </div>

              <div class="content-left-midllo">
                <!-- 评级 -->
                <Star :score="item.avgScore" :index="index" :disabled="true" :isdefault="false" v-if="firstAcname"></Star>
                <tag-style :content="getLabel(item.otherstatus, dicstate)" v-if="typeof item.otherstatus == 'number'"></tag-style>
                <!-- 其他状态 -->

                <!-- 标签 -->
                <div class="labelCon">
                  <div v-for="(items, inder) in item.supplierLabel" :key="inder" class="supplierLabel" v-show="inder <= 2" ref="supplierLabelTRef">
                    <li>{{ items }}</li>
                  </div>

                  <div
                    class="supplierLabel more"
                    @mouseenter="item.showDetail = true"
                    @mouseleave="item.showDetail = false"
                    v-if="item.supplierLabel.length > 3"
                  >
                    更多<i class="el-icon-arrow-down"></i>
                    <div class="button-tips" v-if="item.showDetail && item.supplierLabel.length > 3">
                      <div class="tops">
                        <div v-for="(cont, supindex) in item.supplierLabel" :key="supindex" class="supplierLabel-tips" v-show="supindex >= 3">
                          <li v-if="supindex <= 13">{{ cont }}</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-left-bottom">
                <slot name="column" :itemdata="item"> </slot>
              </div>
            </div>
          </div>
          <div class="card-right-top">
            <div class="card-top" v-if="item.goodSpuVOList">
              <div class="card-services">
                <span v-if="item.supplierClassify == 1">服务</span><span v-else-if="item.supplierClassify == 2">商品</span><span v-else>商品/服务</span>（共{{
                  item.goodSpuNum
                }}个）
              </div>
              <div class="card-more" @click="logicHandle(2, item)">查看更多 <i class="iconfont icon-fangxiangxian-you"></i></div>
            </div>
            <div class="content-card">
              <!-- 右侧图片 -->

              <div class="img-card" v-for="(card, index) in item.goodSpuVOList" :key="index">
                <div class="goodspos">
                  <img :src="card.masterUrl ? card.masterUrl : goodDeflut" class="goodSImg" @error="absolutePathError" v-if="index <= 6" />
                  <p v-if="card.supplierClassify == 1" class="supplierClassify"><span>服务类</span></p>
                </div>
                <p class="spuName">{{ card.spuName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <el-divider />
      </div>
    </div>
  </div>
  <div v-else class="noValue">
    <el-card v-if="firstadd" @click="logicHandle(1)">
      <div class="first-card">
        <i class="iconfont icon-a-tianjiajiahao"></i>
        <p>添加{{ MainName }}</p>
      </div>
    </el-card>
    <el-row v-else>
      <el-col :span="24">
        <el-card class="no-value">
          <div>
            <img src="@/assets/svg/no-data.svg" />
            <p>暂无数据</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { toRefs, reactive, ref, onMounted, watchEffect } from 'vue'
import { getLabel } from '@/utils/common.js'
import imglogo from '@/assets/img/default-logo.png'
import Star from '@/components/star/Star.vue'
import goodDeflut from '@/assets/img/goodDeflut.png'
export default {
  name: 'LongCard',
  components: { Star },
  emits: ['logicHandle', 'rowClick'],

  props: {
    firstadd: {
      //  是否有添加按钮
      type: Boolean,
      default: false
    },
    dropdown: {
      type: Array,
      default: () => []
    },
    longcardValue: {
      type: Array,
      default: () => []
    },
    dicstate: {
      //  状态枚举 其他状态
      type: Array,
      default: () => []
    },
    certificationstatus: {
      //  认证状态 枚举
      type: Array,
      default: () => []
    },
    MainName: {
      type: String,
      default: ''
    },
    firstAcname: {
      //  是有有星星
      type: Boolean,
      default: true
    },
    isdefult: {
      //  是否默认点击按钮
      type: Boolean,
      default: true
    },
    issupplierLabel: {
      //  是否有标签
      type: Boolean,
      default: false
    },
    isCard: {
      //  右侧是否有图片
      type: Boolean,
      default: false
    },
    SupplierServiceSpuEnum: {
      //  分类 枚举
      type: Array,
      default: () => []
    },
    ismoreIcon: {
      //  右侧三个点
      type: Boolean,
      default: true
    }
  },

  setup(props, { emit }) {
    onMounted(() => {
      //宽度
    })
    //展开收起
    const showmore = ref(false)

    const logicHandle = (type, item) => {
      console.log(type, item)
      emit('logicHandle', type, item)
    }
    function rowClick(type, item) {
      emit('rowClick', type, item)
    }
    function moreSupplier(item) {
      emit('moreSupplier', item)
    }

    function onImgError(e) {
      let img = e.srcElement
      img.src = imglogo
      img.error = imglogo
    }

    function absolutePathError(e) {
      let img = e.srcElement
      img.src = goodDeflut
      img.error = goodDeflut
    }
    const state = reactive({
      longcardValue: [],
      goodSkuVOList: []
    })
    watchEffect(() => {
      console.log(props.longcardValue)
      state.longcardValue = props.longcardValue
      state.longcardValue.forEach((item, index) => {
        item.showDetail = false
        if (item.goodSpuVOList && item.goodSpuVOList.length > 5) {
          item.goodSpuVOList = item.goodSpuVOList.splice(0, 5)
        }
      })
      console.log(state.longcardValue)
    })
    return {
      ...toRefs(state),
      getLabel,
      imglogo,
      logicHandle,
      rowClick,
      showmore,
      onImgError,
      goodDeflut,
      absolutePathError,
      moreSupplier
    }
  }
}
</script>

<style scoped lang="scss">
.page-component div .LongCard:first-child {
  .divider:first-child {
    margin: -20px 0 0;
    padding: 20px 0 0;
  }
}
.LongCard {
  position: relative;

  :deep(.container) {
    border-radius: 0;
    padding: 30px 20px 30px 20px;
    box-shadow: none;
    background: linear-gradient(180deg, #fafcff 0%, #ffffff 100%, rgba(255, 255, 255, 0) 100%);
  }

  .el-divider {
    margin: 0 auto;
    background: #f2f3f5;
  }
  .contanier-body {
    display: flex;
    //  align-items: center;

    .content-left img {
      width: 96px;
      height: 96px;
      border-radius: 4px;
    }
    .contanier-left {
      display: flex;
      align-items: center;
      min-width: 600px;
      // max-width: 600px;
      // overflow: hidden;
    }
    .content-left {
      margin-left: 20px;
      position: relative;
      // min-width: 550px;
      .content-left-top {
        display: flex;
        justify-content: space-between;

        .top-reader {
          display: flex;
          align-items: center;
          .tagClass {
            // margin: 0 5px 0 5px;
            margin-left: 10px;
            height: 20px;
            line-height: 18px;
            font-weight: 600;
          }
          p {
            color: #1d2129;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
          }
        }
        .el-button {
          border: none;
          color: #1664ff;
        }
      }
      .content-left-midllo {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        margin-top: 5px;
        white-space: nowrap;
        :deep(.rate) {
          margin-right: 10px;
          margin-top: 10px;
        }
        .tagClass {
          margin-right: 10px;
          margin-top: 10px;
          height: 20px;
          line-height: 20px;
          font-weight: 600;
        }
        .labelCon {
          //  max-width: 330px;
          //  overflow: hidden;
          //  text-overflow: ellipsis;
          //  white-space: nowrap;
          display: flex;
          .supplierLabel {
            margin-top: 10px;
            background: #e8f3ff;
            border-radius: 2px;
            margin-right: 10px;
            color: #165dff;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            padding: 0px 10px;
          }
          .isshow {
            display: none;
          }
          .more {
            cursor: pointer;
            position: relative;
          }
        }
      }

      .content-left-bottom {
        max-width: 500px;
        overflow: hidden;
        :deep(.industry) {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 90px;
        }
        //   :deep(span) {
        //     //  color: #4e5969;
        //     //  font-weight: 400;
        //     font-size: 14px;
        //     //  line-height: 22px;
        //     white-space: nowrap;
        //     text-overflow: ellipsis;
        //     overflow: hidden;
        //     //  padding-right: 75px;
        //     max-width: 100px;
        //   }
      }
    }
    .card-right-top {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      margin-left: 180px;
      .card-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .card-services {
          font-weight: bold;
          font-size: 14px;
          line-height: 22px;
          color: #1d2129;
        }
        .card-more {
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #86909c;
          cursor: pointer;
        }
      }
      .content-card {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: flex-start;
        margin-right: 36px;
        .img-card {
          display: flex;
          flex-direction: column;
          margin-right: 20px;
          .goodspos {
            position: relative;
            overflow: hidden;
            .goodSImg {
              width: 106px;
              height: 106px;
            }
            .supplierClassify {
              position: absolute;
              top: 9px;
              right: -25px;
              background: #165dff;
              text-align: center;
              opacity: 0.5;
              width: 74px;
              height: 24px;
              transform: rotate(45deg);
              overflow: hidden;
              padding: 2px 10px;
              span {
                color: #ffffff;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
              }
            }
          }

          .spuName {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #1d2129;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 106px;
            padding-top: 10px;
          }
        }
      }
    }

    @media (max-width: 1860px) and (min-width: 1700px) {
      .card-right-top {
        margin-left: 50px;
        .content-card {
          max-width: 620px;
          overflow: hidden;
        }
      }
    }
    @media (max-width: 1730px) and (min-width: 1600px) {
      .card-right-top {
        margin-left: 50px;
        .content-card {
          max-width: 500px;
          overflow: hidden;
        }
      }
    }
    @media (max-width: 1600px) {
      .card-right-top {
        margin-left: 50px;
        .content-card {
          max-width: 340px;
          overflow: hidden;
        }
      }
    }
    @media (min-width: 1400px) and (max-width: 1600px) {
      .card-right-top {
        margin-left: 30px;
        .content-card {
          max-width: 250px;
          overflow: hidden;
        }
      }
    }
    @media (max-width: 1400px) {
      .card-right-top {
        margin-left: 20px;
        .content-card {
          max-width: 250px;
          overflow: hidden;
        }
      }
    }
  }
  .background {
    width: 96px;
    height: 96px;
    border-radius: 4px;

    p {
      text-align: center;
      line-height: 96px;
      font-weight: 600;
      font-size: 20px;
    }
  }

  .dropdown {
    //  position: absolute;
    //  top: 30px;
    //  right: 30px;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid #e5e6eb;
    :deep(.iconRightClass) {
      padding: 4px 9px;
    }
    :deep(.el-icon-more:before) {
      color: #1664ff;
    }
  }
  .dropdown:hover {
    border: 1px solid #1664ff;
  }
}

.noValue {
  :deep(.el-card) {
    display: flex;
    justify-content: center;
    height: 152px;
    align-items: center;
    box-shadow: none;
    border-radius: 0;
    margin-top: 10px;
    img {
      width: 200px;
      height: 100px;
    }
    p {
      color: #86909c;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      padding-left: 10px;
    }
  }
  .first-card {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .no-value {
    background: none;
    border: none;
    box-shadow: none;
  }
}

.el-popup-parent--hidden > .atooltip {
  background: black;
  font-size: 12px;
  max-width: 400px;
}
.button-tips {
  //   width: 208px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 15px 20px 0px rgba(20, 37, 63, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.1);
  padding: 12px;
  box-sizing: border-box;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9999999;
  .tops {
    //  max-width: 400px;
    display: flex;
    align-items: center;
    flex-direction: row;
    white-space: nowrap;
    .supplierLabel-tips {
      color: #165dff;
      font-weight: 400;
      font-size: 12px;
      line-height: 27px;
      padding: 0px 10px;
      background: #e8f3ff;
      border-radius: 2px;
      margin: 10px 10px 0 0;
    }
  }
}
.gradeNamedefult {
  color: #86909c !important;
  border: 1px solid #e5e6eb;
  border-radius: 2px;
  background: none !important;
}
.gradeNameNodef {
  color: #eba947 !important;
  border: 1px solid #eba947;
  border-radius: 2px;
  background: none !important;
}
.certification {
  color: #165dff !important;
  border: 1px solid #165dff;
  border-radius: 2px;
  background: none !important;
}
.certificationDef {
  color: #86909c !important;
  border: 1px solid #e5e6eb;
  border-radius: 2px;
  background: none !important;
}
.supplierClassify {
  color: #ff9900 !important;
  border: 1px solid #ff9900;
  border-radius: 2px;
  background: none !important;
}
</style>
