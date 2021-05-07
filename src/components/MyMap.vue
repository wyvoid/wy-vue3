<template>
<div>
  <MyMarker></MyMarker>
</div>
</template>
<script>
import MyMarker from './MyMarker'
import { provide, reactive, ref } from 'vue'
export default {
  components: {
    MyMarker
  },
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longtitude: 90,
      latitude: 135
    })
    provide('location', location)
    provide('geolocation', geolocation)
    const updateLocation = () => {
      location.value = 'South Pole'
    }    
    provide('updateLocation', updateLocation)
  },
}
</script>
<style lang="less" scoped>
div {
  width: 100%;
  height: 100px;
}
</style>