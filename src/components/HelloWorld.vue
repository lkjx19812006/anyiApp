<template>
  <div class="hello">
      <!-- 测试vuex -->
      <button @click="testVuex">测试vuex</button>
      <p>{{testVux}}</p>

      <!-- 测试过滤器 -->
      <p>{{msg}}</p>
      <p>{{msg | testFilter}}</p>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '111'
    }
  },
  computed:{
    testVux(){
      //读取vuex 的值
      return this.$store.state.test.test
    }
  },
  methods: {
    testVuex(){
      //设置vuex的值
      this.$store.dispatch('setTest', '测试vuex')
    }
  }
}
</script>
<style scoped lang="scss">
.hello {
    margin-top: rem()
}
</style>
