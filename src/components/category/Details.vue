<template>
  <div class="details">
    <div class="header">
      <span class="logo" @click.prevent="returnBtn">砼之家</span>
      <div class="return">
        <img src="../../assets/return.png" class="return-img" v-on:click="back()">
        <div>混凝土搅拌站报价</div>
      </div>
    </div>

    <img src="../../assets/close.png" class="detailsImg">
    <div class="label">
      <div class="label-left">
        <span>厂商指导价：18.8万-60.35万</span>
      </div>
      <div class="label-right">
        <span class="basePrice" @click.prevent="inquiry">询底价</span>
      </div>
    </div>
    <div class="detailed">
      <span class="detailedLabel">站型配置清单</span>
    </div>
    <div class="flexBox">
      <div v-for="(item,index) in detailedList" class="detailedList">
        <span class="box1">{{item.name}}</span>
      </div>
    </div>


  </div>
</template>

<script>
  import {
    getDetailId
  } from '../../api/index.js'
  export default {
    data() {
      return {
        detailedList: []
      }
    },
    methods: {
      returnBtn() {
        this.$router.push({
          path: '/'
        })
        return false
      },
      back(){
        this.$router.go(-1);//返回上一层
      },
      inquiry() {
        this.$router.push({
          path: '/Inquiry'
        })
        return false
      }
    },
    created() {
      var typeId = this.$route.query.id
      getDetailId(typeId).then(res => {
        console.log(res.data.data,'res')
        this.detailedList = res.data.data.mechanicalSystemList
      })
    }
  }
</script>

<style scoped>
  .details {
    font-size: 14px;
    color: #101010;
    font-family: 'PingFang-SC-Regular';
  }

  .header {
    background: #327FD7;
    color: #FFFFFF;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
    background: #FFFFFF;
    color: #000000;
  }

  .return-img {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 5px;
    top: 55px;
  }

  .detailsImg {
    width: 375px;
    height: 185px;
    margin-top: 90px;
  }

  .label {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 21px;
    border: 1px solid #BBBBBB;
  }

  .label-left {
    margin: 12px;
    font-size: 16px;
  }

  .label-right {
    text-align: center;
    font-size: 18px;
    margin-right: 20px;
  }

  .basePrice {
    width: 80px;
    height: 22px;
    padding: 7px;
    background: #F95151;
    color: #FFFFFF;
    border-radius: 10px;
    display: inline-block;
    margin-top: 5px;
  }

  .detailed {
    margin-top: 7px;
    border: 1px solid #BBBBBB;
    line-height: 38px;
    font-size: 16px;
    font-weight: bold;
  }

  .detailedLabel {
    display: inline-block;
    margin-left: 10px;
  }

  .flexBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 100px;
  }

  .detailedList {
    width: 49%;
    line-height: 60px;
    border: 1px solid #BBBBBB;
    margin-left: 1px;
    text-align: center;
  }

  .box1 {
    border: 1px solid #BBBBBB;
    padding: 10px;
  }
</style>
