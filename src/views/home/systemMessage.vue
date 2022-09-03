<template>
  <div class="systemMessage" id="systemMessage">
    <card-container :typeArea="false" style="margin-bottom: 0; margin-right: 0">
      <template #title
        >系统消息
        <div class="right">
          <el-button @click="more" style="text-align: right">更多 <i class="el-icon-arrow-right"></i></el-button>
        </div>
      </template>
      <template #content>
        <div class="sysme">
          <ul class="sysme-ul" v-if="tableData.length">
            <li v-for="(item, index) in tableData" :key="index">
              <p>
                <svg-icon name="svg-xitongxiaoxi-tongguo" v-if="item.viewStatus == 0" width="28px" height="28px"></svg-icon>
                <svg-icon name="svg-_xitongxiaoxi-weitongguo" v-if="item.viewStatus == 1" width="28px" height="28px"></svg-icon>
                <svg-icon name="svg-xitongxiaoxi-putongxiaoxi" v-if="item.viewStatus == 2" width="28px" height="28px"></svg-icon>
                {{ item.content }}
              </p>
              <span class="senderTime">{{ item.senderTime }}</span>
            </li>
          </ul>
          <div v-else class="el-empty">暂无数据</div>
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { msgQueryPage } from '@/api/home/index.js'
import { getLabel } from '@/utils/common.js'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

export default {
  name: 'systemMessage',
  components: {},
  props: {
    mainType: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const Announcementa0perationRef = ref()
    const dicData = reactive({
      // 数据字典
      MsgMainTypeEnum: store.getters.filteredSystemDictList('MsgSmallTypeEnum') //消息通知
    })
    const state = reactive({
      tableData: [
        //   {
        // content: '您提交的采购申请已通过',
        // createTime: '2021-12-12 10:09',
        // viewStatus: 0
        //   },
      ],
      more: () => {
        router.push({ path: '/home/moreSystemMessages', query: { mainType: props.mainType } })
      },
      getList: () => {
        msgQueryPage({ type1: props.mainType, size: 3, status: 0  }).then((res) => {
          if (res.code == 200) {
            state.tableData = res.data.records
            state.tableData.forEach((e) => {
              e.viewStatus = 2
              if (e.content.indexOf('通过') != -1) {
                e.viewStatus = 0
              }
              if (e.content.indexOf('拒绝') != -1) {
                e.viewStatus = 1
              }
            })
            // state.setHeight()
          } else {
            ElMessage.warning(res.message)
          }
        })
      },
      throttle(fn, delay) {
        let timer = null
        let firstTime = true
        return function (...args) {
          if (firstTime) {
            // 第一次加载
            fn.apply(this, args)
            return (firstTime = false)
          }
          if (timer) {
            // 定时器正在执行中，跳过
            return
          }
          timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn.apply(this, args)
          }, delay)
        }
      },
      setHeight() {
        if (document.querySelector('#systemMessage')) {
          let dom = document.querySelector('#systemMessage').offsetHeight - 97
          let num = Math.round(dom / 60)
          if (num > 0) {
            state.tableData = state.tableData.slice(0, num)
          }
        }
      }
    })
    //  onMounted(() => {
    //    window.onresize = state.throttle(() => {
    //      return (() => {
    //        state.setHeight()
    //      })()
    //    }, 1000)
    //  })
    state.getList()
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      Announcementa0perationRef
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/mixin.scss';
.systemMessage {
  //   height: 224px;
  //   flex: 1;
  //   min-width: 200px;
  margin-bottom: 20px;
  .right {
    float: right;
    position: relative;
    top: -5px;
  }
  .right span {
    padding-left: 4px;
    font-size: 14px;
    line-height: 20px;
    color: #86909c;
    font-family: 'siyuan, siyuan-Regular';
  }
  .sysme-ul {
    height: 137px;
  }
  .sysme li {
    display: flex;
    //  justify-content: left;
    align-items: center;
    position: relative;
    padding-bottom: 10px;
    cursor: pointer;
    //  border-bottom: 1px solid #f2f3f5;

    justify-content: space-between;
    .lingicon {
      display: block;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      text-align: center;
      line-height: 28px;
    }
    .tongguo {
      background: rgba(82, 196, 26, 0.07);
    }
    .jujue {
      background: rgba(255, 77, 79, 0.07);
    }
    .tijiao {
      background: rgba(22, 100, 255, 0.1);
    }
  }
  .sysme li + li {
    margin-top: 11px;
  }
  .sysme li img {
    width: 12px;
    height: 12px;
  }
  .sysme li p {
    font-size: 14px;
    font-family: 'siyuan, siyuan-Regular';
    line-height: 20px;
    font-weight: 400;
    color: #1d2129;
    padding-left: 7px;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
  }
  .senderTime {
    color: #86909c;
    font-size: 14px;
    font-family: 'siyuan, siyuan-Regular';
    line-height: 20px;
    font-weight: 400;
  }
  .sysme li:last-child {
    margin-bottom: 0;
  }

  .el-button--default {
    box-shadow: none;
  }
  .el-empty {
    line-height: 137px;
    padding: 0;
    color: #909399;
  }
}
</style>
