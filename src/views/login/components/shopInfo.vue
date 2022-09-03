<template>
  <div class="shopInfoBox">
    <div class="box">
      <div class="title flex-between">
        <div>采购咨询</div>
        <el-input placeholder="搜索供应商" prefix-icon="el-icon-search" v-model.trim="searchCompany">
          <template #append>
            <div class="append_box">
              <div class="search-button" @click="changeCompany(searchCompany, 0)">搜索</div>
            </div>
          </template>
        </el-input>
        <!-- <el-input placeholder="搜索供应商" prefix-icon="el-icon-search" @change="changeCompany" v-model.trim="searchCompany"> </el-input> -->
      </div>
      <div class="contentBox flex">
        <div class="seachType" @click="changeCompany('所属行业', 1)">
          <img src="@/assets/img/login/suoshuhangye.png" alt="" width="40" height="40" />
          <div>所属行业</div>
        </div>
        <div class="seachType" @click="changeCompany('供应商品', 1)">
          <img src="@/assets/img/login/gongyingshangpin.png" alt="" width="40" height="40" />
          <div>供应商品</div>
        </div>
        <div class="seachType" @click="changeCompany('评价', 1)">
          <img src="@/assets/img/login/pingjia.png" alt="" width="40" height="40" />
          <div>评价</div>
        </div>
        <div class="seachType" @click="changeCompany('认证状态', 1)">
          <img src="@/assets/img/login/renzhengzhuangtai.png" alt="" width="40" height="40" />
          <div>认证状态</div>
        </div>
        <div class="seachType" @click="changeCompany('所在地区', 1)" style="margin-right: 0">
          <img src="@/assets/img/login/suozaidiqu.png" alt="" width="40" height="40" />
          <div>所在地区</div>
        </div>
      </div>
    </div>
    <div class="box" style="margin-top: 16px">
      <div class="title flex-between">
        <div>商品搜索</div>
        <el-input placeholder="搜索商品" prefix-icon="el-icon-search" v-model.trim="searchCommodity">
          <template #append>
            <div class="append_box">
              <div class="search-button" @click="changeCommodity(searchCommodity, 0)">搜索</div>
            </div>
          </template>
        </el-input>
      </div>
      <div class="contentBox flex">
        <div class="seachType" @click="changeCommodity('办公用品', 1)">
          <img src="@/assets/img/login/bangong.png" alt="" width="40" height="40" />
          <div>办公用品</div>
        </div>
        <div class="seachType" @click="changeCommodity('MRO', 1)">
          <img src="@/assets/img/login/mor.png" alt="" width="40" height="40" />
          <div>MRO</div>
        </div>
        <div class="seachType" @click="changeCommodity('劳保用品', 1)">
          <img src="@/assets/img/login/laobaoyongpin.png" alt="" width="40" height="40" />
          <div>劳保用品</div>
        </div>
        <div class="seachType" @click="changeCommodity('商务礼品', 1)">
          <img src="@/assets/img/login/shangwulipin.png" alt="" width="40" height="40" />
          <div>商务礼品</div>
        </div>
        <div class="seachType" @click="changeCommodity('装修服务', 1)" style="margin-right: 0">
          <img src="@/assets/img/login/zhuangxiufuwu.png" alt="" width="40" height="40" />
          <div>装修服务</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
//搜索商品
const searchCommodity = ref('')
const changeCommodity = (val, type = 0) => {
  console.log(val, type)
  if (val) {
    if (type === 1) {
      window.open(import.meta.env.VITE_VUE_APP_MALL_ENV)
    } else {
      window.open(import.meta.env.VITE_VUE_APP_MALL_ENV + `/search?keyword=${val}`)
    }
  }
}
//搜索供应商
const searchCompany = ref('')
const changeCompany = (val, type = 0) => {
  if (val) {
    if (type === 1) {
      window.open(import.meta.env.VITE_VUE_APP_MALL_ENV + `/searchSupplierList`)
    } else {
      window.open(import.meta.env.VITE_VUE_APP_MALL_ENV + `/search?keyword=${val}&origin=web`)
    }
  }
}
</script>
<style lang="scss" scoped>
.shopInfoBox {
  height: 374px;
  width: 491px;
  box-sizing: border-box;
  .box {
    height: 179px;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    padding: 24px 24px 0 24px;
    box-sizing: border-box;
  }
  .title {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    border-left: 4px solid #165dff;
    padding-left: 7px;
    position: relative;
    .search-button {
      background: #1664ff;
      border-radius: 0px 2px 2px 0px;
      height: 32px;
      color: #fff;
      padding: 0 16px;
      line-height: 32px;
      box-sizing: border-box;
      position: absolute;
      top: -7px;
      right: -1px;
      font-weight: 400;
      font-size: 14px;
    }
    :deep(.el-input--small .el-input__icon) {
      line-height: 34px;
      position: absolute;
      margin-right: 5px;
      top: -5px;
    }
    :deep(.el-input--small .el-input__inner) {
      height: 32px;
      background: rgba(247, 248, 250, 1);
      border: none;
      position: absolute;
      top: -5px;
      right: 0;
      line-height: 20px;
    }
    :deep(.el-input__inner) {
      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #c9cdd4;
      }
    }
    :deep(.el-input--small) {
      width: 260px;
    }
  }
  .contentBox {
    margin-top: 40px;
    padding-bottom: 12px;
    .seachType {
      cursor: pointer;
      width: 60px;
      margin-right: 40px;
      text-align: center;
      color: #1d2129;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
