<template>
  <div id="app">
    <header>
      <h1>{{title}}</h1>
    </header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HttpServer from './common/httpServer'
var httpserver = new HttpServer()
export default {
  name: "app",
  data(){
    return{
      title: httpserver.url
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
@import "./css/common.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  header {
    position: fixed;
    width: 100%;
    top: 0;
    margin: auto;
    height: rem(100);
    background: red;
  }
}
</style>
