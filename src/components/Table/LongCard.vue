<template>
  <div v-if="longcardValue.length" class="longcardVal-contanier">
    <div class="LongCard" v-for="(item, index) in longcardValue" :key="index">
      <div class="container">
        <div class="divider" v-if="index == 0">
          <el-divider />
        </div>

        <div class="contanier-body">
          <div class="content-left">
            <img :src="item.logo ? item.logo : imglogo" @error="onImgError" />
          </div>
          <div class="content-right">
            <div class="content-right-top">
              <div class="top-reader">
                <!-- 公司名称 -->
                <p @click="rowClick(type, item)" style="cursor: pointer">{{ item.oppositeCompanyName }}</p>
                <tag-style
                  :content="getLabel(item.certificationState, certificationstatus)"
                  :contentsvg="item.certificationState == 3 ? true : false"
                ></tag-style>
                <!-- 认证状态 -->
                <!-- //会员等级 -->
                <!-- <tag-style
                  :content="item.gradeName"
                  v-show="item.gradeName"
                  :payingMembers="item.gradeName == '免费会员' || item.gradeName == '默认会员' ? false : true"
                ></tag-style> -->
              </div>
            </div>

            <div class="content-left-midllo">
              <!-- 评级 -->
              <Star :score="item.avgScore" :index="index" :disabled="true" :isdefault="false" v-if="firstAcname"></Star>
              <tag-style :content="getLabel(item.otherstatus, state)" v-if="typeof item.otherstatus == 'number'"></tag-style>
              <!-- 其他状态 -->

              <!-- 标签 -->
              <!-- <div class="labelCon" v-if="issupplierLabel">
                <div v-for="(items, inder) in item.supplierLabel" :key="inder" class="supplierLabel" v-show="inder <= 6">
                  <li>{{ items }}</li>
                </div>

                <div class="supplierLabel more" @mouseenter="item.showDetail = true" @mouseleave="item.showDetail = false" v-if="item.supplierLabel.length > 7">
                  更多<i class="el-icon-arrow-down"></i>
                  <div class="button-tips" v-if="item.showDetail && item.supplierLabel.length > 6">
                    <div class="tops">
                      <div v-for="(cont, supindex) in item.supplierLabel" :key="supindex" class="supplierLabel-tips" v-show="supindex > 6">
                        <li>{{ cont }}</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>

            <div class="content-left-bottom">
              <slot name="column" :itemdata="item"> </slot>
            </div>
          </div>

          <!-- <div class="content-card" v-if="isCard">
            <div class="img-card">
              <el-carousel :interval="5000" arrow="always" height="150px">
                <el-carousel-item v-for="(cardintem, index) in item.goodSkuVOList" :key="index">
                  <img :src="cardintem.absolutePath" />
                  <p>{{ cardintem.spuName }}</p>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div> -->
        </div>
        <div class="divider">
          <el-divider />
        </div>
      </div>
      <div v-if="isdropdown">
        <div class="dropdown-xiang" v-if="isdefult">
          <div class="dropdown-left" v-if="ifonayone">
            <el-button size="mini" type="primary" @click="logicHandle(2, item)"> {{ buttonValue }} </el-button>
          </div>
          <div class="dropdown" v-else>
            <el-dropdown trigger="click">
              <i class="iconRightClass el-icon-more"></i>
              <template #dropdown>
                <el-dropdown-menu v-for="(itemval, index) in dropdown" :key="index">
                  <el-dropdown-item @click="logicHandle(itemval.type, item)">{{ itemval.label }} </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="dropdown-xiang" v-else>
          <div class="dropdown-left" v-if="item.otherstatus == 0">
            <el-button size="mini" type="primary" @click="logicHandle(3, item)"> 同意 </el-button>
            <el-button size="mini" type="primary" @click="logicHandle(4, item)"> 拒绝 </el-button>
          </div>
          <div class="dropdown">
            <!-- <el-dropdown trigger="click"> -->
            <!-- <i class="iconRightClass el-icon-more"></i>
              <template #dropdown v-if="item.otherstatus == 0">
                <el-dropdown-menu v-for="(itemval, index) in item.dropdwnVlaue" :key="index">
                  <el-dropdown-item @click="logicHandle(itemval.type, item)" v-if="index != 1">{{ itemval.label }} </el-dropdown-item>
                </el-dropdown-menu>
              </template> -->
            <!-- <template #dropdown v-else>
                <el-dropdown-menu v-for="(itemval, index) in item.dropdownOther" :key="index">
                  <el-dropdown-item @click="logicHandle(itemval.type, item)">{{ itemval.label }} </el-dropdown-item>
                </el-dropdown-menu>
              </template> -->
            <!-- </el-dropdown> -->
          </div>
        </div>
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
    state: {
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
      default: false
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
    ifonayone: {
      type: Boolean,
      default: false
    },
    buttonValue: {
      type: String,
      default: ''
    },
    isdropdown: {
      // 是否有下拉按钮
      type: Boolean,
      default: true
    }
  },

  setup(props, { emit }) {
    //展开收起
    const offerFlag = ref(false)

    const logicHandle = (type, item) => {
      emit('logicHandle', type, item)
    }
    function rowClick(type, item) {
      emit('rowClick', type, item)
    }
    function onImgError(e) {
      let img = e.srcElement
      img.src = imglogo
      img.error = null
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
      })
      state.longcardValue = state.longcardValue
    })
    return {
      ...toRefs(state),
      getLabel,
      imglogo,
      logicHandle,
      rowClick,
      offerFlag,
      onImgError
    }
  }
}
</script>

<style scoped lang="scss">
.page-component div .LongCard:first-child {
  .container {
    .divider:first-child {
      margin: -60px 0 30px;
    }
  }
}
.LongCard {
  position: relative;
  :deep(.container) {
    border-radius: 0;
    padding: 30px 30px 0px 30px;
  }
  .divider {
    padding-top: 20px;
  }
  .el-divider {
    margin: 0 auto;
    background: #e5e6eb;
  }
  .contanier-body {
    display: flex;
    //  align-items: center;

    .content-left img {
      width: 96px;
      height: 96px;
      border-radius: 4px;
    }
    .content-right {
      // width: 100%;
      margin-left: 20px;
      position: relative;
      flex: 1;
      .content-right-top {
        display: flex;
        justify-content: space-between;
        //   margin-bottom: 5px;

        .top-reader {
          display: flex;
          align-items: center;
          .tagClass {
            margin: 0 5px 0 5px;

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
        flex-wrap: wrap;

        :deep(.rate) {
          margin-right: 10px;
          margin-top: 10px;
        }
        .tagClass {
          margin-right: 10px;
          margin-top: 10px;
          font-weight: 600;
        }
        .labelCon {
          display: flex;
          .supplierLabel {
            margin-top: 10px;
            background: #e8f3ff;
            border-radius: 2px;
            margin-right: 10px;
            color: #165dff;
            font-weight: 400;
            font-size: 12px;
            line-height: 27px;
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
      .zksq-btn {
        position: absolute;
        right: 0;
      }
      .content-left-bottom {
        :deep(p) {
          color: #4e5969;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-right: 75px;
        }
      }
      @media screen and (max-width: 1700px) {
        .content-left-bottom {
          :deep(p) {
            padding-right: 20px;
          }
        }
      }
    }
    .content-card {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      width: 40%;
      .img-card {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        img {
          width: 96px;
          height: 96px;
        }
        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #1d2129;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100px;
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
  .dropdown-xiang {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    .dropdown-left {
      margin-right: 40px;
    }
    .dropdown {
      // position: absolute;
      // top: 30px;
      // right: 30px;
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

  .tops {
    max-width: 400px;
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
:deep(.el-carousel) {
  position: static;
}
:deep(.el-carousel__container) {
  position: static;
}
:deep(.el-carousel__item) {
  left: 80px;
}
</style>
