<template>
  <div>
    <h1>sdfasf</h1>
    <input v-model="msg" /><button @click="sendMsg">send</button>
    <ul>
      <li v-for="(m, index) in msgList" :key="`${index}-${m}`">{{m}}</li>
    </ul>
  </div>
</template>

<script>
// import { ref, onMounted, watch } from 'vue'
import Ws from '../common/socket'

export default {
  props: {
    user: Object,
    value: String
  },
  data() {
    return {
      // value: this.value
      ws: null,
      msg: '',
      msgList: []
    }
  },
  // setup(props) {
    // let userList = ref([])

    // const getUserList = async () => {

    //   console.log('getUserlist is call', props.value)
    //   userList.value = await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve([...userList.value, props.user])
    //     }, 0)
    //   })
    // }
    // onMounted(getUserList)

    // watch(props.user, () => {
    //   getUserList()
    // })

    // watch(props.value, (val) => {
    //   console.log(val)
    // })

    // console.log('country code setup userList: ', userList)
    // return {
    //   userList,
    //   getUserList,
    // }
  // },

  created() {
    this.ws = new Ws()
    this.ws.connect()
  },

  mounted() {
    
    setTimeout(() => {
      this.ws.socket.addEventListener('message', this.onMessageHanlder)
    }, 1000)
  },

  methods: {
    sendMsg() {
      this.ws.send(this.msg)
    },
    onMessageHanlder(e) {
      console.log('onMessageHanlder', e.data)
      this.msgList.push(e.data)
      console.log(this.msgList)
      this.msg = ''
    }    
    
  }
}
</script>