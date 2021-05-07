export function flatten(arr) {
  let flattenArr = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenArr = flattenArr.concat(flatten(item))
    } else {
      flattenArr.push(item)
    }
  })

  return flattenArr
}

export function deepClone (target, map = new WeakMap()) {
  if (typeof target === 'object' && target !== null) {
    let cloneTarget = Array.isArray(target) ? [] : {}

    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)

    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

export const mapArray =  Array.prototype.mapArray =  function(fn, thisArgs) {

  if (Object.prototype.toString.call(fn) !== '[Object Function]') {
    throw new Error('param one must be function')
  }

  let resArr = []
  let currArr = this

  for (let i = 0; i < currArr.length; i++) {
    resArr[i] =  fn.call(thisArgs, currArr[i], i, currArr)
  }
  return resArr
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(fn, wait, immediate) {
  let timer

  return function() {
    let context = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (callNow) {
        fn.apply(context, args)
      }
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export function throttle(fn, delay) {
  let previous = 0
  return function() {
    const context = this
    const args = arguments
    let now = Date.now()
    if (now - previous > delay) {      
      fn.apply(context, args)
      previous = now
    }
  }
}

export function throttle1(fn, delay) {
  let timer
  return function() {
    const context = this
    const args = arguments
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args)
        clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}

export function defineReactive(data, key, value) {  
  Object.defineProperty(data, key, {    
    enumerable: true,    
    configurable: true,     
    get: function defineGet() {      
      console.log(`get key: ${key} value: ${value}`)      
      return value    
    },     
    set: function defineSet(newVal) {      
      console.log(`set key: ${key} value: ${newVal}`)      
      value = newVal    
    }  
  })
}
export function observe(data) {  
  Object.keys(data).forEach(function(key) {    
    defineReactive(data, key, data[key])  
  })
}

export function isObjEmpty(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(`${key}: ${obj[key]}`)
      return false
    }
    return true
  }
}