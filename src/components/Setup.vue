<template>
<div>
  <h1>{{book.title}}</h1>
  <!-- 从setup 返回的 refs 在模板中访问是被自动解开的，因此不应在模板中使用 .value -->
</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  props: {
    title: String,
  },
  setup(props, context) {

    const readersNumber = ref(22)
    const book = reactive({title: 'vue3 guide'})
    // props 是响应式的，不能使用 es6 解构， 因为它会消除 prop 的响应性。
    const { title } = toRefs(props)
    console.log(title.value)
    // Attribute (非响应式对象)
    console.log(context.attrs)
    // 插槽 (非响应式对象)
    console.log(context.slots)
    // 触发事件 (方法)
    console.log(context.emit)

    // return () => h('h3', [readersNumber.value, book.title])
    return {
      book,
      readersNumber
    }
  },
}
</script>

<style lang="less" scoped>

</style>