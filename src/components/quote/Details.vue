<template>
  <div class="details">
    <div class="header">
      <span class="logo" @click.prevent="returnBtn()">砼之家</span>
      <span class="caseName">报价库</span>
    </div>
    <div class="return">
      <!-- <div></div> -->
      <span>混凝土搅拌站报价</span>
      <span>S30站</span>
    </div>
    <div class="brand">
      <span class="brandBtn">品牌</span>
    </div>
    <div class="line"></div>
    <div class="cue">
      <span>共有{{}}款</span>
    </div>
    <div class="content">
      <img src="../../assets/close.png" class="contentImg">
      <div class="contentRight">
        <span class="rightTop">湖南润天智科 S30搅拌站 仕高玛主机 美立方 最高打28方水泥 </span>
        <div class="rightBox">
          <span class="suggestion">厂商指导价： 18万</span>
          <div class="price" @click.prevent="inquiry"><span class="base">询底价</span></div>
        </div>
      </div>
    </div>
    <div class="content">
      <img src="../../assets/close.png" class="contentImg">
      <div class="contentRight">
        <span class="rightTop">湖南润天智科 S30搅拌站 仕高玛主机 美立方 最高打28方水泥 </span>
        <div class="rightBox">
          <span class="suggestion">厂商指导价： 18万</span>
          <div class="price"><span class="base">询底价</span></div>
        </div>
      </div>
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
      inquiry(){
        this.$router.push({
          path:'/Inquiry'
        })
        return false
      }
    }
  }
</script>

<style scoped>
  .details {
    font-size: 14px;
    color: #101010;
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

  .caseName {
    font-size: 16px;
    margin-left: 35px;
    font-weight: 600;
  }

  .return {
    border-bottom: 1px solid #BBBBBB;
    line-height: 39px;
    text-align: center;
  }

  .brand {
    margin-top: 13px;
    margin-left: 10px;
  }

  .brandBtn {
    border: 1px solid #BBBBBB;
    padding: 10px 30px;
    display: inline-block;
  }

  .line {
    width: 100%;
    height: 10px;
    background: #F7F8F7;
    margin-top: 13px;
  }

  .cue {
    margin: 5px 10px;
  }

  .content {
    border-top: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
    display: flex;
    padding-left: 10px;
    padding-bottom: 16px;
  }

  .contentImg {
    width: 101px;
    height: 63px;
  }

  .contentRight {
    margin: 8px 2px 0 10px;
  }

  .rightTop {
    line-height: 120%;
  }

  .rightBox {
    display: flex;
  }

  .suggestion {
    color: #EC3D3D;
    font-size: 13px;
    display: inline-block;
    line-height: 24px;

  }

  .price {
    margin-left: 50px;
    border-radius: 5px;
    background: #F2CAC2;
    color: #EC806B;
  }

  .base {
    display: inline-block;
    padding: 5px;
  }
</style>
