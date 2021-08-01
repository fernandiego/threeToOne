<template>
  <img alt="Vue logo" src="./assets/logo.png">
    {{valor.message}}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      valor: 0
    }
  },
  mounted(){
   axios.get('http://localhost:3001/api').then(ret => {
    this.valor = ret.data
   })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
