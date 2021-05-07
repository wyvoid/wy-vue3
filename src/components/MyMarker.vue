<template>
  <div>
    <h1>{{userLocation}}</h1>
    <h2>{{userGeolocation.latitude}}</h2>
  </div>
</template>
<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const udl = inject('updateLocation')
    onMounted(() => {
    setTimeout(() => {
    udl()
        }, 2000)      
    })
    return {
      userLocation,
      userGeolocation
    }
  }
}
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100px;
}
</style>
