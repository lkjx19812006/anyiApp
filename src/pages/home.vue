<style scoped lang="less">
@import "../css/common.less";
.container {
  bottom: 50px;
}
.top-header {
  padding-top: unit(120/@rem, rem);
}
.header {
  margin: auto;
  margin-top: unit(50/@rem, rem);
  height: unit(240/@rem, rem);
  width: unit(240/@rem, rem);
  border: 2px solid #d0d0d0;
  border-radius: 100%;
}
.title {
  text-align: center;
  padding: unit(10/@rem, rem);
}
.items {
  padding: 0 unit(50/@rem, rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .item {
    flex-direction: row;
    .content {
      flex: 0 1 auto;
      padding: unit(30/@rem, rem) unit(20/@rem, rem);
      color: #333;
      margin-bottom: unit(40/@rem, rem);
      background: #e0e0e0;
    }
    .block {
      flex: 1;
    }
  }
  .left {
    margin-right: unit(100/@rem, rem);
  }
  .right {
    margin-left: unit(100/@rem, rem);
    justify-content: flex-end;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  margin: auto;
  background: #e0e0e0;
  padding: 4px 10px;
  input {
    margin-left: 20px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #d0d0d0;
    border-radius: 21px;
    background: #fff;
    text-indent: 20px;
    font-size: unit(32/@rem, rem);
  }
}
</style>
<template> 
<div class="container">
  <div class="footer flex row c-center">
    <span class="f-0">
        展开
    </span>
    <input @focus="inputFocus" type="text" class="f-1">
  </div> 
  <anyi-page ref="page" class="class home" @scroll="scroll" header="0px" :footer="footer">   
      <div class="top-header">
        <div class="header">          
        </div>
        <h2 class="title">jiajia</h2>
      </div>
      <ul class="items">
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
          <li class="item right flex">
              <div class="block">
              </div>
              <div class="content">
                  如果你不知道怎么问,
                  风险管家,我可以为你提
              </div>
          </li>
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
            <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
      </ul>  
      <ul class="items">
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
          <li class="item right flex">
              <div class="block">
              </div>
              <div class="content">
                  如果你不知道怎么问,
                  风险管家,我可以为你提
              </div>
          </li>
          <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
            <li class="item left flex">
              <div class="content">  
                Hi,我是你的私人风险管家,我可以为你提供风险预测,风险建议等服务,我知道的可多了,有什么问题直接问我就好了
              </div>
              <div class="block">
              </div>
          </li>
      </ul>   
  </anyi-page>
</div>

   
</template>
<script>
export default {
  data() {
    return {
      footer: "50px"
    };
  },
  methods: {
    scroll(e) {
      console.log(e.target.scrollTop);
    },
    inputFocus() {
      console.log(this);
    }
  }
};
</script>
