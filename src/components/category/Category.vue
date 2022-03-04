<template>
  <div class="CategoryDetails">
    <div class="header">
      <span class="logo" @click.prevent="returnBtn">砼之家</span>
    </div>
    <div class="return">
      <img src="../../assets/return.png" class="return-img" @click.prevent="returnBtn">
      <div>混凝土搅拌站报价</div>
    </div>
    <img src="../../../build/logo.png" class="categoryImg">
    <div class="label">
      <div class="label-left"><span>共有8个站型</span></div>
      <div class="label-right">
        <div class="heat">热度</div>
        <div class="price">价格</div>
      </div>
    </div>
    <div class="categoryBox" @click.prevent="details">
      <img src="../../assets/close.png" class="boxImg">
      <div class="boxContent">
        <div class="boxName">混凝土S30站</div>
        <div class="boxPrice">18.6万-45万</div>
        <div class="boxAccord">共200款站型符合条件</div>
      </div>
      <img src="../../assets/advance.png" class="advance">
    </div>


  </div>
</template>

<script>
  export default {
    methods: {
      returnBtn() {
        this.$router.push({
          path: '/'
        })
        return false
      },
      details(){
        this.$router.push({
          path:'/CategoryDetails'
        })
        return false
      }
    }
  }
</script>

<style scoped>
  .CategoryDetails {
    font-size: 14px;
    color: #101010;
    font-family: 'PingFang-SC-Regular';
  }

  .header {
    background: #327FD7;
    color: #FFFFFF;
    line-height: 44px;
  }

  .logo {
    font-size: 28px;
    padding-left: 17px;
    font-weight: 900;
  }

  .return {
    border-bottom: 1px solid #BBBBBB;
    line-height: 39px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

  .return-img {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 5px;
    top: 55px;
  }

  .categoryImg {
    width: 374px;
    height: 90px;
    margin: 1px;
  }

  .label {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 20px;
    border: 1px solid #BBBBBB;
  }

  .label-left {
    margin: 12px;
  }

  .label-right {
    margin: 12px;
    display: flex;
  }

  .heat {
    margin-right: 25px;
  }

  .price {
    margin-right: 15px;
  }

  .categoryBox {
    display: flex;
    border: 1px solid #BBBBBB;
  }

  .boxImg {
    width: 107px;
    height: 97px;
    margin: 14px 12px;
  }

  .boxContent {
    margin-top: 19px;
    width: 150px;
  }

  .boxContent div {
    line-height: 25px;
  }

  .boxName {
    font-size: 16px;

  }

  .boxPrice {
    font-size: 16px;
    color: #F95151;
    margin-top: 3px;
  }
  .boxAccord{
    font-size: 14px;
    color: #BBBBBB;
  }
  .advance{
    width: 23px;
    height: 23px;
    margin-top: 50px;
    margin-left: 40px;
  }
</style>
