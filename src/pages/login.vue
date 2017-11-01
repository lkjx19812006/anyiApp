<style scoped lang="less">
@import "../css/common.less";
.container {
  .logo-wrap {
    justify-content: center;
    align-items: center;
  }
  .logo {
    height: unit(240/@rem, rem);
    width: unit(160/@rem, rem);
    margin-top: unit(80/@rem, rem);
  }
  .title {
    margin-top: unit(20/@rem, rem);
    font-size: unit(36/@rem, rem);
  }
  .form-wrap {
    padding: unit(20/@rem, rem) unit(100/@rem, rem);
  }
  .code-wrap {
    flex-direction: row;
    input {
      flex: 1;
    }
    .get-code {
      flex: 0 0 auto;
      width: unit(180/@rem, rem);
      text-align: center;
      font-size: unit(28/@rem, rem);
      padding: unit(20/@rem, rem) 0;
    }
  }
  .submit {
    margin-top: unit(30/@rem, rem);
  }
  .tip {
    margin-top: unit(30/@rem, rem);
  }
  .more-login {
    position: absolute;
    width: 100%;
    padding: 0 unit(100/@rem, rem);
    bottom: unit(120/@rem, rem);
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
<template>
   <div class="container">
       <div class="logo-wrap flex">
           <img class="logo" src="../assets/images/logo.png">
           <h1 class="title">风险管家</h1>
       </div>
       <div class="form-wrap flex">
           <h2>{{formType}}</h2>
           <input type="text" placeholder="请输入常用手机号" v-model="mobile">
           <div class="code-wrap flex">
               <input type="text" placeholder="请输入收到的验证码" v-model="code">
               <button class="get-code" size="small">获取验证码</button>
           </div>
           <mt-button class="submit" type="default">进入风险管家</mt-button>
           <div class="tip">
               <span>
                   进入风险管家代表你已经同意
                   <a href="javascript:;">《风险管家用户协议》</a>
               </span>
           </div>           
       </div>
        <div class="flex more-login">
            <button @clock="changeLoginType">密码登陆</button>
            <button>微信登陆</button>
        </div>      
   </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      formType: "",
      code: ""
    };
  },
  methods: {
    pageScroll(e) {
      console.log(e.target.scrollTop);
    },
    changeLoginType(type) {
      switch (type) {
        case "pw": //密码登陆
          break;
        case "wx":
          break;
        default:
          break;
      }
    }
  }
};
</script>
