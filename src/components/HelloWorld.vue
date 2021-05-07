<template>
  <Header></Header>
  <Render tag="h1"></Render>
  <div class="box">
    <div class="c1" @click="dbc" @mousemove="thrt">{{value}}</div>
    <div class="c2" id="content">2</div>
    <div class="c3">3</div>
    <!-- <h1 style="clear: both"></h1> -->
  </div>
  <div class="hello">
    <aside>
      <ul>
        <li> <router-link to="/countrycode">countrycode</router-link></li>
      </ul>
    </aside>
    <Sort />
    <Vfor />
    <MyMap></MyMap>
    <Setup title="我是setup 的 title">
      <!-- <span>你好啊</span> -->
    </Setup>
    <div class="flex-test">
      <div class="c1"></div>
      <div class="c2"></div>
    </div>
    <CountryCode :user="user"></CountryCode>
  </div>
</template>

<script>
import CountryCode from './CountryCode'
import MyMap from './MyMap'
import Setup from './Setup'
import Vfor from './Vfor'
import Sort from './Sort'
import Render from './Render'
import Header from './Header'
import { flatten, debounce, throttle1 } from '../common/utils'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CountryCode,
    Setup,
    MyMap,
    Vfor,
    Sort,
    Render,
    Header,
  },
  data() {
    return {
      user: {
        name: 'Li blues',
        age: '23',
        create: Date.now()
      },
      value: '234'
    }
  },
  mounted() {
    console.log(
      flatten([4,[3,[1,2]]])
    )
    this.$bus.$emit('parentMount')
  },

  methods: {
    dbc: debounce(function db() {
      console.log('我延迟 3000 ms 执行:'+Date.now())
    }, 2000, true),
    thrt: throttle1(function() {
      this.value++
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }  
}

a {
  color: #42b983;
}

.flex-test {
  display: flex;
  background: #42b983;
  height: 100px;
}
.flex-test >div {
  border: 1px dashed #ff0;
  /* flex: 1 2 200px; */
}

.flex-test .c1 {
  flex: auto;
}
.flex-test .c2 {
  flex: 0 0 400px;
}
</style>


<style lang="less" scoped>
.box {
  position: relative;
  // &::after {
  //   content: '';
  //   display: block;
  //   clear: left;
  // }
  // overflow: hidden;
  display: flow-root;
  border: 1px solid #df0;
  >div{
    border: 1px solid #000;
    // float: left;
    margin: 10px;
  }
  .c1 {
    // float: left;
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    // overflow: scroll;
    border: 10px solid #ddf;
    padding: 10px;
    margin: 10px;

  }
  .c2 {
    // float: left;
    overflow: scroll;


  }
  .c3 {
    // clear: both;
    // height: 100px;
  }
}
</style>

