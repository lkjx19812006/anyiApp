<style lang="scss" scoped>
@import "../css/common.scss";
.contianer {
  height: 100%;
  width: 100%;
  background: orange;
}
</style>
<template>
    <div class="contianer">
        <h1>用户页面</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.routerRecord.globPathArr);
  },
  methods: {}
};
</script>

