export default class Ws {
  constructor() {
    this.socket = null
    this.heartBeatTimer = null
  }

  connect() {
    const socket = new WebSocket('ws://localhost:9999')
    socket.onopen = () => {
      socket.send('发送数据。。。。')
      this.socket = socket
      this.startHeartBeat()
    }
    socket.onmessage = (e) => {
      const msg = e.data
      console.log('数据已接收', msg)
    }
    socket.onclose = (e) => {
      console.log(e)
      console.log('连接已关闭。。。')
      this.connect()
    }
  }

  send(data) {
    if (!this.socket) {
      console.log('socket  对象不存在')
      return
    }
    this.socket.send(data)
  }

  startHeartBeat() {

    if (this.heartBeatTimer) {
      clearInterval(this.heartBeatTimer)
      this.heartBeatTimer = null
    }
    this.heartBeatTimer = setInterval(() => {
      this.socket.send('h')
    }, 15000)
  }

  stopHeartBeat() {
    clearInterval(this.heartBeatTimer)
    this.heartBeatTimer = null
  }

  close() {
    this.stopHeartBeat()
    this.socket.close()
    this.socket = null
  }
}