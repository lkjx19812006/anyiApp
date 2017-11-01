<template>
  <transition :name="transitionName">
    <router-view id="app" class="child-view"></router-view>          
  </transition>  
</template>

<script>
import HttpServer from "./common/httpServer";
var httpserver = new HttpServer();
export default {
  name: "app",
  data() {
    return {
      title: httpserver.url,
      tempLength: 0,
      transitionName: "slide-left"
    };
  },
  computed: {
    //计算当前路由数组长度
    routerLength() {
      return this.$store.state.routerRecord.globPathArr.length;
    }
  },
  watch: {
    routerLength(val) {
      this.transitionName =
        val > this.tempLength ? "slide-left" : "slide-right";
      this.tempLength = val;
    }
  },
  mounted() {
    this.tempLength = this.routerLength;
  }
};
</script>

<style lang="scss">
@import "./css/common.scss";
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // transition: all .5s cubic-bezier(.55,0,.1,1);
}
//路由动效 样式
.slide-left-enter-active {
  transition: transform 0.5s ease-in-out;
}
.slide-left-leave-active {
  transition: transform 0.5s 0.2s ease-out;
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active {
  transition: transform 0.3s ease-in-out;
  z-index: 1;
}
.slide-right-leave-active {
  transition: transform 0.3s 0.2s ease-out;
  z-index: 2;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
