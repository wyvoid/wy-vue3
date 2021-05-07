<template>
  <div>

  </div>
</template>

<script>
// import { onMounted } from 'vue'
export default {
  setup() {
    function maopaoSort(arr) {
      let temp
      for (let i = 0; i < arr.length-1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
          if (arr[j] < arr[j-1]) {
            temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
          }
        }
      }
      return arr
    }

    // onMounted(maopaoSort([4,5,9]))
    // onMounted(maopaoSort([9,8,7,6,5]))

    return {
      maopaoSort,
      // quickSort
    }
  },

  mounted() {
    // console.log(this.quickSort([3,2,1], 0, 2))
    console.log(this.quickSort1([0,9,7,2,3,3,6]))
    console.log('unique2:', this.unique2([0, 1,1,2,2,2,5,3,3,1,2,2,4,4,9]))
  },

  methods: {

    quickSort(array, l, r) {
      if (l >= r) return

      let left = l
      let right = r
      let pivot = array[l]  // 选择第一个数作为 pivot

      while(left<right) {
        // 从右向左找到第一个小于 pivot 的值
        while(left<right && array[right] >= pivot) {
          right--
        }
        if (left<right) {
          array[left] = array[right]
          left++
        }
        // 从左向右找到第一个大于 pivot 的值
        while(left<right && array[left]<pivot) {
          left++
        }
        if (left<right) {
          array[right] = array[left]
          right--
        }
      }
      array[left] = pivot
      this.quickSort(array, l, left-1)
      this.quickSort(array, left+1, r)
      return array
    },

    quickSort1(arr) {
      if(arr.length <= 1) return arr
      let index = Math.floor(arr.length/2)
      let pivot = arr.splice(index, 1)
      let leftArr = []
      let rightArr = []

      arr.forEach((item) => {
        if (item < pivot) {
          leftArr.push(item)
        } else {
          rightArr.push(item)
        }
      })
      return this.quickSort1(leftArr).concat(pivot, this.quickSort1(rightArr))
    },

    unique1(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
          if (array[i] == array[j]) {
            array.splice(j, 1)
            j--
          }
        }
      }
      return array
    },

    unique2(array) {
      var newarray = []
      for (let i = 0; i < array.length; i++) {
        if (newarray.indexOf(array[i]) === -1) {
          newarray.push(array[i])
        }
      }
      return newarray
    }
  },

}
</script>