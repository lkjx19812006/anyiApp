<style lang="scss" scoped>
@import "../css/common.scss";
.contianer {
  height: 100%;
  width: 100%;
  background: pink;
  .loading-wrap {
    height: rem(200);
    width: rem(200);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.4);
    border-radius: rem(20);
    padding: rem(40) 0;
    .anyi-loading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
<template>
    <div class="contianer">
        <h1 @click="$back()">home页面</h1>
        <div class="loading-wrap">
          <anyi-loading color="#e0e0e0" loadingColor="#e0e0e0" type="wrap" text="loading..." size="30px"/>
        </div>      
    </div>
</template>
<script>
export default {
  data() {
    return {
      myswitch: false,
      radioValue: "1"
    };
  },
  mounted() {
    console.log(this.$store.state.routerRecord.globPathArr);
    console.log(this.$back);
  },
  methods: {
    switchChange() {
      console.log(this.myswitch);
    },
    radioChange() {
      console.log(this.radioValue);
    }
  }
};
</script>