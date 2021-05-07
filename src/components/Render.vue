<script>
import { h } from 'vue'
export default {
  props: {
    tag: String
  },
  mounted() {
    this.$bus.$on('parentMount', function() {
      console.log('prenet moounted')
    })
  },
  render() {
    return h(this.tag, {}, 'hello wy')
  },
}
</script>