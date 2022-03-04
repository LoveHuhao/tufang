<template>
  <div class="details">
    <div class="header">
      <img src="../assets/return.png" class="return" @click.prevent="returnBtn()">
      <span>文章详情</span>
    </div>
    <div class="head"> <span>混凝土90站，如何工作才能让效能达到最高？</span></div>

    <div class="date"><span>2021-12-21 土方之家</span></div>
    <img src="../../build/logo.png" class="detailsImg">
    <ul class="detailsNow">
      <li>卖车价可以比市场价贵10几万 冷藏车成高价卖车骗局重灾区
        一辆成本13万的冷藏车，卖给用户报价27万，这么离谱价格却是真有其事。
        为什么冷藏车成了高价卖车骗局的重灾区？据广州经销商介绍，因为冷藏车根据配置不同价格波动很大。一辆4米2的冷藏车可以卖15万，也可以卖25万。而金融公司也很难分清楚冷藏车的真实价格，这就让骗子有了赚差价的机会。
        在实际操作时，不少骗子会以平台的名义向经销商预定大量的车（会特别选择价格较低的冷藏车），然后大幅加价卖给终端用户。卖车时自然少不了常见的包货源套路，说是每月能赚2万元，背个8000元的贷款不是大事。
        骗子们靠着这个方法，能在不到半年的时间内获得大量的收入，然后等到用户发现没货源开始找过来的时候，骗子们就该跑路了。不少骗子甚至还会换地方从新开始这一套骗局。
      </li>
      <li>骗局破产骗子跑路 金融公司和用户成最大受害者</li>
    </ul>
    <div class="bottomBox">
      <div class="box-left">
        <span class="name">混凝土90站</span>
        <img src="../../build/logo.png" class="bottomImg">
      </div>
      <div class="box-right">
        <div class="label">
          湖南三力 混凝土90站 每小时最大方量80方 效率看得见
        </div>
        <div class="quote">厂家报价：xx万元——xx万元</div>
        <div class="ask" @click.prevent="ask">询底价</div>
        <div v-show="boxshou">
          <div class="boxshous" @click.prevent="ask"></div>
          <div class="askBox">
            <div class="boxTop">
              <span>免费获取最低价</span>
              <img src="../assets/close.png" @click.prevent="ask" class="close">
            </div>
            <div class="boxImg">
              <img src="../../build/logo.png" class="boxImg-img">
              <div class="boxImg-right">
                <div class="boxImg-label">
                  湖南三力 混凝土90站 每小时最大方量80方 效率看得见
                </div>
                <div class="boxImg-quote">厂家报价：xx万元——xx万元</div>
              </div>
            </div>
            <div class="boxNeme">
              <span> * 姓名</span>
              <input type="" name="" id="" value="" placeholder="请输入姓名 方便称呼" />
            </div>
            <div class="boxNeme mobile">
              <span> * 手机号</span>
              <input type="" name="" id="" value="" placeholder="请输入手机号，仅用于询价" />
            </div>
            <div class="boxNeme mobile region">
              <span> * 建站地区</span>
              <span>湖南</span>
              <span>长沙市</span>
            </div>
            <button type="button" class="button">立即询价</button>
            <span class="cue">提交即视为同意</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        boxshou: false
      }
    },
    methods: {
      returnBtn() {
        this.$router.push({
          path: '/'
        })
        return false
      },
      ask(){
        this.boxshou = !this.boxshou
      }
    }
  }
</script>

<style scoped>
  .header {
    line-height: 31px;
    text-align: center;
    color: #101010;
    font-size: 16px;
    border: 1px solid #BBBBBB;
  }

  .return {
    width: 23px;
    height: 23px;
    margin: 5px 4px;
    position: absolute;
    left: 5px;
    top: 0;
  }

  .head {
    font-size: 28px;
    line-height: 40px;
  }

  .date {
    margin-left: 7px;
    font-size: 14px;
    margin-top: 5px;
  }

  .detailsImg {
    width: 366px;
    height: 122px;
    margin: 5px;
  }

  .detailsNow {
    width: 357px;
    margin: 9px;
    line-height: 140%;
    margin-bottom: 30px;
  }

  li::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000000;
    /* border-radius:；圆角，使方形div变圆形 */
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }

  .bottomBox {
    border: 1px solid #BBBBBB;
    height: 132px;
    display: flex;
        margin: 10px;
  }
  .box-left {
    margin-left: 8px;
    margin-top: 4px;
  }

  .name {
    line-height: 110%;
  }

  .bottomImg {
    margin-top: 5px;
    width: 105px;
    height: 72px;
  }

  .box-right {
    margin-top: 20px;
    padding-right: 9px;
    font-size: 12px;
  }

  .label {
    line-height: 168%;
    color: #101010;
  }

  .quote {
    margin-top: 6px;
    color: #BBBBBB;
  }

  .ask {
    border-radius: 5px;
    color: #EC806B;
    background-color: #F2CAC2;
    font-size: 14px;
    width: 65px;
    line-height: 29px;
    text-align: center;
    margin-left: 135px;
    margin-top: 15px;
  }

  .boxshous {
    background: #BBBBBB;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .askBox {
    background: #FFFFFF;
    width: 98.5%;
    height: 370px;
    position: absolute;
    bottom: 0;
    left: 2px;
  }

  .boxTop {
    line-height: 35px;
    border-bottom: 1px solid #BBBBBB;
    font-size: 14px;
    text-align: center;
  }

  .close {
    margin-left: 100px;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
  }

  .boxImg {
    display: flex;
  }

  .boxImg-img {
    width: 105px;
    height: 60px;
    margin: 9px 5px;
  }

  .boxImg-right {
    margin: 9px 5px;
    font-size: 12px;
  }

  .boxImg-label {
    line-height: 168%;
    color: #101010;
    padding-left: 5px;
  }

  .boxImg-quote {
    margin-top: 6px;
    color: #BBBBBB;
  }

  .boxNeme {
    line-height: 45px;
    border: 1px solid #BBBBBB;
    font-size: 14px;
    margin-left: 2px;
    margin-right: 3px;
  }

  .mobile {
    margin-top: 4px;
  }

  .boxNeme span {
    margin-left: 8px;
    width: 90px;
    display: inline-block;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #9B9898;
  }

  .region {
    display: flex;
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

  .cue {
    display: inline-block;
    color: rgba(16, 16, 16, 100);
    margin-left: 66px;
    margin-top: 9px;
  }
</style>
