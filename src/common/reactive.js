

/***
 * 当render function 被渲染的时候，会读取所有对象的值，会触发 getter 
 * 函数进行 依赖收集，依赖收集 的目的是将观察者 Watcher 对象存放到当前
 * 闭包的订阅者 Dep 的 subs 中
 * 
 * 在修改对象值的时候会触发 setter， setter 通知之前 依赖收集 得到的
 * Dep 中每个 Watcher 就开始调用 update 来更新视图。
 */ 

// 模拟视图更新
function cb (val) {
  /* 渲染视图 */
  console.log("视图更新啦～:newval:"+val);
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) {
        return;
      }
      cb(newVal)
    }
  })
}

function observer(value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }
  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data)
  }
}

// 订阅者， 主要用来存放 Watcher 观察者对象
class Dep {
  constructor() {
    /* 用来存放Watcher对象的数组 */
    this.subs = [];
  }

  /* 在subs中添加一个Watcher对象 */
  addSub(sub) {
    this.subs.push(sub)
  }

  /* 通知所有Watcher对象更新视图 */
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }
}

// 观察者 Watcher
class Watcher {
  constructor() {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.target = this;
  }

  update() {
    console.log('视图更新啦～')
  }
}

Dep.target = null;