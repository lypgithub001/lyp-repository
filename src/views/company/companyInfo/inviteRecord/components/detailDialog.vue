<!-- detailDialog -->
<template>
  <el-dialog-module :title="title" width="600px" :isShow="dialogVisible" :isFooter="false" :dialogButton="['', '']" @onClose="closeHandle">
    <template #content>
      <!-- <div class="container">
        <Table v-loading="loading" :propsLabelList="column" :tableData="tableData" :showSelect="false"> </Table>
      </div> -->
      <div class="content">
        <!-- 邀请人姓名2（所在部门 职位名称) -->
        <div>
          {{ detailData.inviterName }} ( <span style="margin-right: 16px">{{ detailData.inviterOrgNames }}</span
          >{{ detailData.inviterEmployeeJob }} )
        </div>
        <!-- 邀请【姓名】（手机号码）加入【部门名称】 -->
        <div>
          邀请【{{ detailData.name }}】（{{ detailData.phone }}）加入 <span style="color: #1664ff">【{{ detailData.orgNames }}】</span>
        </div>
        <!-- 邀请时间：2022-02-22  10:09 -->
        <div><span style="color: #919191">邀请时间：</span>{{ detailData.createTime }}</div>
        <!-- 邀请状态：待确认 -->
        <div>
          <span style="color: #919191">邀请状态：</span><span :class="filterJoinResult(detailData).class">{{ filterJoinResult(detailData).label }}</span>
        </div>
      </div>
    </template>
    <!-- <template v-slot:footer>
      <table-bottom style="margin: 0">
        <template v-slot:bottomLeft>
          <el-button size="mini" @click="closeHandle">取消</el-button>
        </template>
        <template v-slot:bottomRight>
          <Pagenation @getList="pageHandle" :pageTotal="pageTotal"></Pagenation>
        </template>
      </table-bottom>
    </template> -->
  </el-dialog-module>
</template>

<script>
import { toRefs, reactive, computed } from 'vue'
export default {
  name: 'detailDialog',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    let state = reactive({
      dialogVisible: props.isShow,
      detailData: null,
      filterJoinResult: computed(() => (val) => {
        let res = {
          label: '',
          class: ''
        }
        //   console.log(123, val.joinResult)

        switch (val.joinResult) {
          case 0:
            res.label = '待确定'
            res.class = 'pending'
            // if(val.expirationTime)
            break
          case 1:
            res.label = '已同意'
            res.class = 'agreed'
            break
          case 2:
            res.label = '已拒绝'
            res.class = 'refused'
            break
          case 3:
            res.label = '已过期'
            res.class = 'expired'
            break
        }
        console.log(123, res)
        return res
      })
    })

    const showConfirm = (isShow, record) => {
      console.log(record)
      // state.dialogVisible = isShow
      state.dialogVisible = true
      state.detailData = record
    }

    const closeHandle = () => {
      state.dialogVisible = false
    }

    return {
      ...toRefs(state),
      showConfirm,
      closeHandle
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  line-height: 40px;
}
.pending {
  color: #1664ff;
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
</style>
