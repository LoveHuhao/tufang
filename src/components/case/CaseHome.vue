<template>
  <div class="case">
    <div class="header">
      <span class="logo" @click.prevent="returnBtn()">砼之家</span>
      <span class="caseName">案例中心</span>
    </div>
    <div class="imgBox">
      <img src="../../../../tufang-vue/build/logo.png" class="img">
    </div>
    <div class="text">
      <span>
        吉林正处在振兴发展的关键时期，基础设施建设可谓是吉林振兴的“硬件”，吉林振兴迈向新的征程，良好基础设施是最“硬”的支撑，吉林要振兴，基建必先行。近年来，以吉林省高速公路集团有限公司为代表的大型国有独资集团以推动吉林全面振兴、全方位振兴为己任，使吉林省的交通等基础设施得到了充足的发展，激发了吉林省经济发展的活力。
        吉林省高速公路集团有限公司（以下简称吉高集团）是经吉林省政府批准组建的大型国有企业集团、重点功能类企业。紧紧抓住建设交通强国、打造交通强省的重大战略机遇，2020年旗下吉林省交通实业发展有限公司、吉林省路桥工程（集团）有限公司在综合对比多个主流厂家和实地应用案例后，南方路机设备智能、环保、稳定、区域化服务快速优良、建站咨询服务一体的专业解决方案得到了客户的认可和信赖，接连购置了三套南方路机沥青搅拌站。
        吉林省交通实业发展有限公司是吉高集团下属的全资子公司，主要从事交通安全设施等各类工程材料的生产、经销以及公路、桥梁质量检测等业务，目前拥有南方路机GLBR4000+GLBR5000（预留再生框架）两套沥青搅拌设备，目前主要承担园区沥青路面混合料的搅拌生产，经过持续近半年的运营生产，南方路机GLBR型沥青混合料先进的设备结构，原再生一体机的设计，优越的沥青混凝土再生功能，得到了客户充分的肯定。
      </span>
    </div>
    <div class="bottomBox">
      <div class="box-left">
        <span class="name">混凝土90站</span>
        <img src="../../../build/logo.png" class="bottomImg">
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
              <img src="../../assets/close.png" @click.prevent="ask" class="close">
            </div>
            <div class="boxImg">
              <img src="../../../build/logo.png" class="boxImg-img">
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
    data() {
      return {
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
      ask() {
        this.boxshou = !this.boxshou
      }
    }
  }
</script>

<style scoped>
  .case {
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

  .caseName {
    font-size: 16px;
    margin-left: 35px;
    font-weight: 600;
  }

  .imgBox {
    margin: 4px 5px 15px 3px;
  }

  .img {
    width: 100%;
    height: 108px;
  }

  .text {
    line-height: 140%;
    border: 1px solid #BBBBBB;
    margin-top: 11px;
    padding: 2px 2px 50px 2px;
    margin-bottom: 14px;
  }

  .bottomBox {
    border: 1px solid #BBBBBB;
    height: 132px;
    display: flex;
  }

  .box-left {
    margin-left: 18px;
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
  .button{
    width: 98.5%;
    line-height: 47px;
    text-align: center;
    background: #EC3D3D;
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 2px;
    margin-top: 9px;
  }
  .cue{
    display: inline-block;
    color: rgba(16, 16, 16, 100);
    margin-left: 66px;
    margin-top: 9px;
  }
</style>
