<template>
  <div>
    <div class="return">
      <img src="../../assets/return.png" class="return-img" @click.prevent="returnBtn">
      <div>询底价</div>
    </div>
    <div class="flexBox">
      <img src="../../assets/close.png" class="left">
      <span class="middle"> 混凝土搅拌站s30站，每小时30方量</span>
      <div class="right" @click.prevent="select">
        <span>换站型</span>
        <img src="../../assets/advance.png" class="advance">
      </div>
    </div>
    <div class="input">
    <input type="" name="" id="" value="" placeholder="    *    请填写您的姓名（1-6个汉字）" />
    </div>
    <div class="input">
       <input type="" name="" id="" value="" placeholder="    *    请填写手机号获取底价" />
    </div>
    <div class="region">
      <span class="build"> 建站地区</span>
      <span class="hunan">湖南长沙</span>
      <span class="modify">修改</span>
    </div>
    <div class="region">
      <span class="build"> ·</span>
      <span class="hunan">我同意</span>
      <a href="">《个人信息保护声明》</a>
    </div>

    <div class="bottom">
      <span>免费获取最底价</span>
    </div>



  </div>
</template>

<script>
  export default {
    name: 'Inquiry',
    methods:{
      returnBtn(){
        this.$router.push({
          path:'/'
        })
        return false
      },
      select(){
        this.$router.push({
          path:'/SelectType'
        })
        return false
      }
    }
  }
</script>

<style scoped>
  .return {
    border: 1px solid #BBBBBB;
    line-height: 39px;
    text-align: center;
    font-size: 14px;
  }

  .return-img {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 5px;
    top: 7px;
  }

  .flexBox{
    display: flex;
    border: 1px solid #BBBBBB;
    height: 86px;
  }
  .left{
    width: 103px;
    height: 66px;
    margin: 7px 0 0 10px;
  }
  .middle{
    font-size: 12px;
    color: #101010;
    line-height: 20px;
    display: inline-block;
    margin-top: 20px;
    width: 173px;
  }
  .right{
    display: flex;
    margin-top: 40px;
    margin-left: 15px;
    color: #736F6F;
  }
  .advance{
    width: 20px;
    height: 20px;
    margin-top: -3px;
    margin-left: 5px;
  }
  .input{
    width: 357px;
    border: 1px solid #BBBBBB;
    margin-top: 15px;
    margin-left: 9px;
    text-align: center;
  }
  input{
    width: 100%;
    line-height: 44px;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: red;
  }
.region{
  border: 1px solid #BBBBBB;
  margin-top: 22px;
  line-height: 48px;
}
.build,.hunan{
  margin-left: 10px;
}
.modify{
  margin-left: 150px;
}
.bottom{
  position: absolute;
  left: 0;
  bottom: 0;
  background: #E86950;
  width: 100%;
  line-height: 55px;
  text-align: center;
  font-size: 18px;
  color: #F7F8F7;
  font-weight: bold;
}
  .button {
    width: 98.5%;
    line-height: 47px;
    text-align: center;
    background: #EC3D3D;
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 2px;
    margin-top: 9px;
  }
</style>
