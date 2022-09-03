<!-- companyCard -->
<template>
  <div>
    <div class="companyCard" v-for="(item, i) in cardList" :key="i" @click="item.click && item.click(item)">
      <el-card shadow="hover">
        <div class="text item">
          <div class="left">
            <div class="companyPic" v-if="item.src">
              <img :src="item.src" alt="" />
            </div>
            <div class="info">
              <div class="title" v-html="item.title"></div>
              <div class="description" v-html="item.description"></div>
            </div>
          </div>
          <div class="right">
            <div v-if="!item.btnList.length > 0" class="status" :class="classFilter(item)">{{ statusFilter(item) }}</div>
            <div v-if="item.btnList && item.btnList.length > 0" class="btnGroup">
              <el-button :type="_.type" v-for="(_, index) in item.btnList" :key="index" size="mini" @click="_.click" :class="_.class">{{ _.label }}</el-button>
            </div>
            <div v-if="!item.btnList.length > 0" v-html="item.statement"></div>
            <!-- <div
              v-if="!item.btnList.length > 0"
              v-html="item.statement + `<span style='color: #B5B5BD;'>${statusFilter(item)}<span>`"
            ></div> -->
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed } from 'vue'
export default {
  name: 'companyCard',
  components: {},
  props: {
    // 卡片展示信息
    cardList: {
      type: Array,
      default: () => []
    },
    // 所有状态源列表
    statusList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    let state = reactive({
      // 计算状态
      statusFilter: computed(() => (record) => {
        const res = props.statusList.filter((item) => item.value == record.status)
        return res[0]?.label
      }),
      // 计算类名
      classFilter: computed(() => (record) => {
        const res = props.statusList.filter((item) => item.value == record.status)
        //   console.log(res)
        return res[0]?.class
      })
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.companyCard {
  //   margin: 16px;
  margin-top: 16px;
  .item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left,
    .right {
      flex: 1;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
    }
    .left {
      display: flex;
      .companyPic {
        width: 68px;
        height: 68px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        .title {
          margin-bottom: 24px;
          color: #1d2129;
          //  font-family: 'siyuan, siyuan-Regular';
          font-size: 14px;
          font-family: 'PingFang SC';
          font-style: normal;
          font-weight: 600;
          line-height: 22px;
        }
        .description {
          font-family: 'siyuan, siyuan-Regular';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
    .right {
      div {
        text-align: right;
      }
      .status {
        margin-bottom: 24px;
      }
      .btnGroup {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
      }
      .statement {
        color: #b5b5bd;
      }
    }
  }
  .pending {
    //  color: #1664ff;
    color: #ff9900;
  }
  .agreed {
    color: #52c41a;
  }
  .refused {
    color: #ff4d4f;
  }
  .expired {
    color: #c4c4c4;
  }
}
</style>
