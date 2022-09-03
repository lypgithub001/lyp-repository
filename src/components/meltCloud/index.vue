<template>
  <div id="notice"></div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import RongIMLibs from '@/assets/js/RongIMLib-3.0.5.js'
import { useStore } from 'vuex'
const RongIMLib = new RongIMLibs()
console.log(RongIMLib)
const store = useStore()
console.log('store', store)
//从store获取融云
const RongIMClient = computed(() => store.state.user.RongIMClient)
const RongFlag = computed(() => store.state.user.RongFlag)
const rongCloudToken = computed(() => store.state.user.userInfo.rongCloudToken)
const emits = defineEmits(['getInfo', 'getRyMessage']),
  getToke = () => {
    if (!RongIMClient.value && !RongFlag.value) {
      connectRongIM()
    } else {
      let users = {
        token: rongCloudToken.value || ''
      }
      console.log(users)
      RongIMClient.value
        .changeUser(users)
        .then((users) => {
          console.log('切换用户成功, 当前用户 id 为: ', users.id)
        })
        .catch((error) => {
          console.log('切换用户失败: ', error.code, error.msg)
        })
    }
  },
  connectRongIM = () => {
    //融云初始化
    store.commit(
      'SET_RONGIMCLIENT',
      RongIMLib.init({
        // appkey: '82hegw5u81msx' // 测试的 key
        appkey: 'e0x9wycfevarq' // 生产的 key
      })
    ) //------------------------------重要填写appkey
    beforeIm() //设置监听，必须先设置监听，再连接
    nowIm() //连接融云
  },
  connectRy = (user) => {
    let time = null
    RongIMClient.value
      .connect(user)
      .then(function (user) {
        //   console.log(user)
        console.log('链接成功, 链接用户 id 为: ', user.id)
        store.commit('SET_RONGFLAG', true)
        clearTimeout(time)
      })
      .catch(function (error) {
        //   console.log(user)
        //   console.log('链接失败: ', error.code, error.msg)
        time = setTimeout(() => {
          connectRy(user)
        }, 3500)
      })
  },
  nowIm = () => {
    //  console.log(rongCloudToken.value)
    //自己的token------从接口获取，写到缓存
    var user = {
      token: rongCloudToken.value || ''
    }
    connectRy(user)
    //主动断开链接
    //  data.RongIMClient.disconnect().then(() => console.log('断开链接成功'))
    //主动断开重新链接
    //  data.RongIMClient.reconnect()
    //    .then((user) => {
    //      console.log('重新链接成功, 链接用户 id 为: ', user.id)
    //    })
    //    .catch((error) => {
    //      console.log('链接失败: ', error.code, error.msg)
    //    })
  },
  beforeIm = () => {
    var conversationList = [] // 当前已存在的会话列表
    RongIMClient.value.watch({
      conversation: function (event) {
        const updatedConversationList = event.updatedConversationList // 更新的会话列表
        const latestConversationList = RongIMClient.value.Conversation.merge({ conversationList, updatedConversationList })
        console.log('更新会话汇总:', updatedConversationList)
        console.log('最新会话列表:', latestConversationList)
      },
      message: (event) => {
        const message = event.message
        const content = JSON.parse(message.content.content)
        console.log('收到新消息:', content)
        emits('getRyMessage', content)
        //   const h = this.$createElement
        //   emits('getInfo')
        //   data.RongIMClient.changeUser({ token: 'ef3bY594dsy7gNsZPYR3m8CtvqOADjc+Tf9F0kXvPDite+s6V78hCw==@5z0y.cn.rongnav.com;5z0y.cn.rongcfg.com' })
        //     .then((users) => {
        //       console.log('切换用户成功, 当前用户 id 为: ', users.id)
        //     })
        //     .catch((error) => {
        //       console.log('切换用户失败: ', error.code, error.msg)
        //     })
        //   this.$notify({
        //     title: JSON.parse(message.content.content).title,
        //     message: h('div', { style: 'color: teal;cursor: pointer;' }, JSON.parse(message.content.content).content),
        //     onClick: () => {
        //       this.$router.push({ name: 'message-center' })
        //     }
        //   })
      },
      status: function (event) {
        var status = event.status
        //   console.log('连接状态码:', status)
      }
    })
  },
  sendMessage = (userId, content) => {
    var conversation = RongIMClient.value.Conversation.get({
      targetId: userId,
      type: RongIMLib.CONVERSATION_TYPE.PRIVATE
    })
    conversation
      .send({
        messageType: RongIMLib.MESSAGE_TYPE.TEXT, // 'RC:TxtMsg'
        content: {
          content: content // 文本内容
        }
      })
      .then(function (message) {
        console.log('发送文字消息成功', message)
      })
  },
  getHistoryMessage = (userId) => {
    var conversation = RongIMClient.value.Conversation.get({
      targetId: userId,
      type: RongIMLib.CONVERSATION_TYPE.PRIVATE
    })
    var option = {
      timestamp: +new Date(),
      count: 20
    }
    conversation.getMessages(option).then(function (result) {
      var list = result.list // 历史消息列表
      var hasMore = result.hasMore // 是否还有历史消息可以获取
      console.log('获取历史消息成功', list, hasMore)
    })
  }
defineExpose({
  sendMessage,
  getHistoryMessage,
  getToke
})
</script>

<style lang="scss">
.notice {
}
</style>
