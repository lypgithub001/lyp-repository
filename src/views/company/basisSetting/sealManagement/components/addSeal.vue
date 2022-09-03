<template>
  <div class="addSeal">
    <el-form :model="ruleForm" ref="formRef" class="form-card" label-position="right" :rules="rules" v-if="isReadonly">
      <card-container :typeArea="true" :isTitle="false">
        <template #title></template>
        <template #content>
          <el-row>
            <el-col :span="24">
              <el-form-item label="公司名称"> {{ ruleForm.companyName }} </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="name" label="印章名称">
                <el-input placeholder="请输入印章名称" v-model="ruleForm.name" show-word-limit maxlength="30" class="w520"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="type" label="印章类型">
                <el-select v-model="ruleForm.type" placeholder="请选择印章类型" class="w250" @change="typeChange">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in sealTypeList" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="isDefault" label="本公司默认用章">
                <el-radio-group v-model="ruleForm.isDefault">
                  <el-radio :label="true">是</el-radio>
                  <el-radio :label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="ruleForm.type">
              <el-form-item label="选择印章样式" prop="style">
                <div class="img">
                  <!-- 圆形章-五角星 -->
                  <div
                    class="img-bg"
                    :class="{ 'img-bg-active': ruleForm.style == 'CIRCLE_STAR' }"
                    v-if="isShowStyle('CIRCLE_STAR')"
                    @click="sealYsClick('CIRCLE_STAR')"
                  >
                    <div class="img-bg-a img1"></div>
                    <div class="img-bg-d"></div>
                  </div>
                  <!-- 椭圆章 -->
                  <div class="img-bg" :class="{ 'img-bg-active': ruleForm.style == 'ELLIPSE' }" v-if="isShowStyle('ELLIPSE')" @click="sealYsClick('ELLIPSE')">
                    <div class="img-bg-a img2"></div>
                    <div class="img-bg-d"></div>
                  </div>
                  <!-- 圆形章-不带五角星 -->
                  <div class="img-bg" :class="{ 'img-bg-active': ruleForm.style == 'CIRCLE' }" v-if="isShowStyle('CIRCLE')" @click="sealYsClick('CIRCLE')">
                    <div class="img-bg-a img3"></div>
                    <div class="img-bg-d"></div>
                  </div>
                  <!-- 方形横排 -->
                  <div
                    class="img-bg"
                    :class="{ 'img-bg-active': ruleForm.style == 'SQUARE_HORIZONTAL' }"
                    v-if="isShowStyle('SQUARE_HORIZONTAL')"
                    @click="sealYsClick('SQUARE_HORIZONTAL')"
                  >
                    <div class="img-bg-a img4"></div>
                    <div class="img-bg-d"></div>
                  </div>
                  <!-- 方形竖排 -->
                  <div
                    class="img-bg"
                    :class="{ 'img-bg-active': ruleForm.style == 'SQUARE_VERTICAL' }"
                    v-if="isShowStyle('SQUARE_VERTICAL')"
                    @click="sealYsClick('SQUARE_VERTICAL')"
                  >
                    <div class="img-bg-a img5"></div>
                    <div class="img-bg-d"></div>
                  </div>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="sealSizeLists.length">
              <el-form-item prop="size" label="印章尺寸">
                <el-select v-model="ruleForm.size" placeholder="请选择印章尺寸" class="w250">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in sealSizeLists" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="hasHtext()">
              <el-form-item prop="htext" label="横向文字">
                <el-input placeholder="请输入横向文字" v-model="ruleForm.htext" show-word-limit maxlength="8" class="w250"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="hasQtext()">
              <el-form-item prop="qtext" label="下弦文字">
                <el-input placeholder="请输入下弦文字" v-model="ruleForm.qtext" show-word-limit maxlength="20" class="w250"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="usexy" label="使用协议">
                <el-checkbox v-model="ruleForm.usexy" label="同意" />
                <el-button type="text" class="manage" @click="useClick">《印章管理协议》</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </card-container>
      <card-container :typeArea="true" :isTitle="false" style="text-align: right">
        <template #content>
          <el-button size="mini" @click="handleBtn('submit')" type="primary" :loading="loading">提交</el-button>
        </template>
      </card-container>
    </el-form>
    <el-form :model="ruleForm" ref="formRef" class="form-card label124" id="details_sty" label-position="right" v-else>
      <card-container :typeArea="true" :isTitle="false">
        <template #title></template>
        <template #content>
          <el-row>
            <el-col :span="24">
              <el-form-item label="公司名称："> {{ ruleForm.companyName }} </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="印章名称：">
                {{ ruleForm.name }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="印章类型：">
                {{ getLabel(ruleForm.type, sealTypeList) }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="本公司默认用章：">
                {{ ruleForm.isDefault ? '是' : '否' }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="选择印章样式：">
                <el-image
                  :src="ruleForm.imageUrl"
                  style="width: 100px; height: 100px"
                  :preview-src-list="[ruleForm.imageUrl]"
                  :appendToBody="true"
                  :z-index="3000"
                  fit="cover"
                />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="印章尺寸：" v-if="ruleForm.size">
                {{ getLabel(ruleForm.size, sealSizeList) }}
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="ruleForm.htext">
              <el-form-item label="横向文字：">
                {{ ruleForm.htext }}
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="ruleForm.qtext">
              <el-form-item label="下弦文字；">
                {{ ruleForm.qtext }}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="使用协议：">
                <span class="manage" @click="useClick" style="padding: 0">《印章管理协议》</span>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </card-container>
    </el-form>

    <Imgp ref="imgpRef" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, nextTick, inject, computed } from 'vue'
import Imgp from './imgp.vue'
import { useStore } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
import { createSeal } from './creatSeal.js'
import { sealInfoAdd, sealInfoQueryDetails, sealInfoQueryTypes } from '@/api/company/basisSetting/sealManagement.js'
import { useRoute } from 'vue-router'
import { getLabel } from '@/utils/common.js'
import { queryCompanyList } from '@/api/company/companyCertification.js'

export default {
  name: 'company/basisSetting/addSeal',
  props: {},
  components: { Imgp },
  setup() {
    const imgpRef = ref()
    const formRef = ref()
    const store = useStore()
    const route = useRoute()
    const closeNowTag = inject('closeNowTag')
    const dicData = reactive({
      //状态
      statusList: store.getters.filteredSystemDictList('SealStatusEnum'),
      //印章类型
      sealTypeList: store.getters.filteredSystemDictList('SealTypeEnum'),
      //印章尺寸
      sealSizeList: store.getters.filteredSystemDictList('SealSizeEnum'),
      //印章类型
      sealTypeLists: [],
      sealSizeLists: []
    })
    const state = reactive({
      ruleForm: {},
      route,
      getLabel,
      rules: {
        type: { message: '请选择印章类型', required: true, trigger: 'change' },
        isDefault: { message: '请选择本公司默认用章', required: true, trigger: 'change' },
        size: { message: '请选择印章尺寸', required: true, trigger: 'change' },
        name: { message: '请输入印章名称', required: true, trigger: 'blur' },
        usexy: { message: '请选择使用协议', required: true, trigger: 'change' },
        //   htext: { message: '请输入横向文字', required: true, trigger: 'blur' },
        //   qtext: { message: '请输入下弦文字', required: true, trigger: 'blur' },
        style: { message: '请选择印章样式', required: true, trigger: 'change' }
      },
      previewList: [],
      styleList: [],
      loading: false,
      routeType: '',
      isReadonly: computed(() => state.routeType != 'view'), //控制操作权限
      init() {
        state.getTeamList()
      },
      //查询团队公司列表
      async getTeamList() {
        try {
          let res = await queryCompanyList()
          if (res.code === 200) {
            let resData = res.data || []
            state.ruleForm = {
              isDefault: false,
              companyId: route.query.companyId,
              companyName: resData.find((x) => x.id == route.query.companyId)?.name
            }
          }
        } catch (error) {}
      },
      handleBtn(key) {
        switch (key) {
          case 'submit':
            console.log(state.ruleForm)
            formRef.value.validate((valid) => {
              if (valid) {
                state.loading = true
                sealInfoAdd(state.ruleForm)
                  .then((res) => {
                    state.loading = false
                    if (res.code == 200) {
                      ElMessage.success('提交成功')
                      closeNowTag()
                    }
                  })
                  .catch(() => {
                    state.loading = false
                  })
              }
            })
            break
          default:
            break
        }
      },
      useClick() {
        imgpRef.value.init()
      },
      sealYsClick(type) {
        if (state.ruleForm.style == type) return
        state.ruleForm.qtext = undefined
        state.ruleForm.htext = undefined
        state.ruleForm.style = type
        dicData.sealSizeLists = []
        let size = state.styleList.find((x) => x.style === state.ruleForm.style)?.sizes || []
        dicData.sealSizeLists = dicData.sealSizeList.filter((x) => {
          return size.includes(x.id)
        })
        //   nextTick(() => {
        //     let create = ''
        //     if (idx == 1) {
        //       create = new createSeal('canvas' + idx, state.ruleForm.htext, state.name)
        //       create.createSealCx()
        //     }
        //     if (idx == 2) {
        //       create = new createSeal('canvas' + idx, state.ruleForm.htext, state.name)
        //       create.createEllipseSealCx()
        //     }
        //     if (idx == 3) {
        //       create = new createSeal('canvas' + idx, state.ruleForm.htext, state.name, 'DIANZIYONGZHANGCESHIYOUXIANGONGSI')
        //       create.createEllipseSealEx()
        //     }
        //   })
      },
      async getSealType() {
        let res = await sealInfoQueryTypes()
        if (res.code == 200) {
          dicData.sealTypeLists = res.data
        }
      },
      typeChange(e) {
        state.ruleForm.style = null
        state.styleList = dicData.sealTypeLists.find((x) => x.type === e)?.styleList || []
      },
      isShowStyle(style) {
        return state.styleList.some((x) => x.style === style)
      },
      hasHtext() {
        return state.styleList.find((x) => x.style === state.ruleForm.style)?.includeHText
      },
      hasQtext() {
        return state.styleList.find((x) => x.style === state.ruleForm.style)?.includeQtext
      },
      async getDetail(id) {
        let res = await sealInfoQueryDetails(id)
        if (res.code == 200) {
          state.ruleForm = res.data
        }
      }
    })
    onMounted(() => {
      state.getSealType()
      nextTick(() => {
        state.routeType = route.query.type
        if (route.query.id) {
          state.getDetail(route.query.id)
        } else {
          state.init()
        }
      })
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      imgpRef,
      formRef
    }
  }
}
</script>
 

<style scoped lang="scss">
.addSeal {
  .manage {
    font-size: 14px;
    cursor: pointer;
    color: #1664ff;
  }
  .img {
    display: flex;
    color: #ff4d4f;
    font-size: 12px;

    .img-bg {
      width: 100px;
      height: 100px;
      margin-right: 12px;
      border: 1px solid #f2f3f5;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      .img-bg-a {
        width: 82px;
        height: 82px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .img1 {
        background-image: url('./img/1.png');
      }
      .img2 {
        background-image: url('./img/2.png');
      }
      .img3 {
        background-image: url('./img/3.png');
      }
      .img4 {
        background-image: url('./img/4.png');
      }
      .img5 {
        background-image: url('./img/5.png');
      }
    }
    .img-bg-active {
      border: 1px solid #1664ff;
      position: relative;
      .img-bg-d {
        width: 20px;
        height: 20px;
        background-image: url('./img/dui.png');
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        right: -4px;
        bottom: -4px;
      }
    }
    .img-bg-active::before {
      content: '';
      width: 0;
      height: 0;
      border-color: transparent #1664ff transparent transparent;
      border-style: solid;
      border-width: 20px 20px 0 0;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .canvas {
    position: absolute;
    left: 50%;
    top: -30px;
  }
}
</style>
