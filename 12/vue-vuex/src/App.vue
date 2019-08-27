<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Login></Login>
    <HelloWorld/>
    <!--状态管理-->
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync2">异步增加</button>
    <div>当前数字：{{count}},{{isEvenOrOdd}}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions(['increment','decrement','incrementAsync']),
    //推荐使用
    incrementAsync2(){
      this.$store.dispatch('incrementAsync');
    }
  },
  computed: {
    ...mapGetters(['count','isEvenOrOdd'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
