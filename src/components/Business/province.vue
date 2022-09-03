<template>
  <el-popover placement="bottom" width="auto" trigger="click" ref="elPopoverRef">
    <template #reference>
      <p class="fake-select-title" @click="visible = !visible">
        {{ titleComputed }}
        <svg-icon name="arrow_down" />
      </p>
    </template>
    <template #default>
      <el-cascader-panel
        class="cascader-panel"
        :options="provinceList"
        v-model="selectValue"
        ref="panelRef"
        :props="{
          checkStrictly: true,
          value: 'name',
          label: 'name',
          children: 'child'
        }"
        @change="clodePopver"
        style="height: auto; z-index: 80002"
      />
    </template>
  </el-popover>
</template>

<script>
import { toRefs, reactive, onMounted, ref, computed, nextTick, watchEffect } from 'vue'
import provinceTree from '@/assets/js/provinceCity.js'
import { companyQueryDetails } from '@/api/company/createCompany.js'
import { jsonp } from 'vue-jsonp'
export default {
  name: 'province',
  components: {},
  props: {
    // 无匹配时展示的title
    title: {
      type: String,
      default: ''
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  emits: ['cbFn'],
  setup(props, { emit }) {
    onMounted(() => {
      state.getPosition()
      filterArea()
    })
    const panelRef = ref(),
      elPopoverRef = ref()
    const visible = ref(false)
    const { title } = toRefs(props)

    const filterArea = () => {
      state.provinceList = provinceTree
        .map((item) => {
          return {
            name: item.name,
            id: item.id,
            child: item.child
          }
        })
        .filter((ele) => ele.id !== 100000)
      state.provinceList.unshift({
        name: '全部地区',
        id: undefined
      })
      // if (sessionStorage.getItem('ipPos')) {
      //   ipPosFn(JSON.parse(sessionStorage.getItem('ipPos')))
      // } else {
      //   getEnterPriseDetails()
      // }
    }

    const titleComputed = computed(() => {
      return props.title
    })
    const selectValue = computed(() => {
      return props.title
    })
    function ipPosFn(e) {
      if (e?.ad_info?.nation === '中国' && e?.ad_info?.province && e?.ad_info?.city) {
        const pos1 = provinceTree.find((x) => x.name == e?.ad_info?.province)
        console.log(778899, pos1)
        if (pos1) {
          const pos2 = pos1.child.find((x) => x.name == e?.ad_info?.city)
          if (e?.ad_info?.city && pos2.id) {
            console.log(pos2.name)
            if (pos2.name) {
              emit('adrss', pos2.name)
              state.title = pos2.name
              selectValue.value = pos2.name
            } else {
              state.title = '全部地区'
            }
          }
        }
      }
    }
    //根据id查询企业信息详情
    async function getEnterPriseDetails() {
      if (!JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.rootOrgId) return
      try {
        let res = await companyQueryDetails(JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.rootOrgId)
        if (res.code === 200) {
          const pos1 = provinceTree.find((x) => x.id == res.data.areaProvinceId)
          if (pos1) {
            const pos2 = pos1.child.find((x) => x.id == res.data.areaCityId)
            if (res.data.areaCityId && pos2.name) {
              console.log(pos1.name, pos2.name)
              if (pos2.name) {
                emit('adrss', pos2.name)
                state.title = pos2.name
                selectValue.value = pos2.name
              } else {
                state.title = '全部地区'
              }
            }
          }
        }
      } catch (error) {}
    }
    const state = reactive({
      provinceList: [],
      title: title.value,

      clodePopver: (e) => {
        emit('cbFn', e)
        console.log(e)
        state.title = e[e.length - 1]
        elPopoverRef.value.visibility = false
      },
      // 获取定位
      getPosition: async () => {
        console.log('provinceRef2233')
        if (sessionStorage.getItem('ip') && !sessionStorage.getItem('ipPos')) {
          const url = 'https://apis.map.qq.com/ws/location/v1/ip',
            params = {
              // 以下三个参数为 调通接口必填的参数，少一个则会报错
              output: 'jsonp',
              key: 'EAJBZ-7TAKJ-CSCF7-FUT2M-ZYD63-PPFZY',
              ip: sessionStorage.getItem('ip')
            }
          jsonp(url, params)
            .then((res) => {
              console.log(2233333)
              sessionStorage.setItem('ipPos', JSON.stringify(res.result))
              store.commit('SET_AREA', res.result)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    })

    return {
      ...toRefs(state),
      filterArea,
      titleComputed,
      panelRef,
      selectValue,
      visible,
      elPopoverRef
    }
  }
}
</script>

<style scoped lang="scss">
.fake-select-title {
  margin-bottom: 20px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  color: #1664ff;
  font-size: 14px;
  cursor: pointer;
  .svg-icon {
    width: 6px;
    height: 5px;
    margin-left: 7px;
  }
}
.cascader-panel {
  background: #ffffff;
}
</style>
