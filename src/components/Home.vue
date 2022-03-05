<template>
  <div class="header">
    <div class="header-log">
      <div class="text">砼之家</div>
    </div>
    <div class="header-tab1 box">
      <div class="box-li tab1-left">
        <router-link to="/" class="router-link">资讯</router-link>
      </div>
      <div class="box-li tab1-middle">
        <router-link to="/QuoteHome" class="router-link">报价库</router-link>
      </div>
      <div class="box-li tab1-right">
        <router-link :to="{path:'/CaseHome',query:{id:1}}" class="router-link">案例中心</router-link>
      </div>
    </div>
    <div class="header-tab2 box">
      <div class="tab2-left box-li" v-for="(item,index) in catList" >
        <div @click="catClick(index)" :status='index'>
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <!-- 按类型 -->
    <div class="header-tab3 box" v-if="cur === 0">
      <div class="category" v-for="(item,index) in categoryList" :key="item.id" @click.prevent="CategoryDetails">
        <div class="box-li"><span class="textBorder">{{item}}</span></div>
      </div>
    </div>
    <div class="header-tab3 box" v-if="cur === 1">
      <div class="category" v-for="(item,index) in priceList" :key="item.id" @click.prevent="CategoryDetails">
        <div class="box-li"><span class="textBorder">{{item.label}}</span></div>
      </div>
    </div>
    <div class="header-tab3 box" v-if="cur === 2">
      <div class="category" v-for="(item,index) in brandList" :key="item.id" @click.prevent="CategoryDetails">
        <div class="box-li"><span class="textBorder">{{item}}</span></div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 内容 -->
    <div class="content" v-for="(item,index) in contentLists" :key="item.id">
      <div class="contentBox" @click.prevent="Details(item.id)">
        <!-- 跳转详情 -->
        <div class="">
          <img class="left-img" :src="item.imgUrl">
        </div>
        <div class="right-center">
          <div class="top-center">
            <span>{{item.title.length>30 ? item.title.substring(0,30)+'...' :item.title}}</span>
          </div>
          <div class="bottom-label">
            <span></span>
            <!-- 专家测试 -->
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
  import {
    getMxInFoPage
  } from '../api/index'

  export default {
    name: 'Home',
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000
        },
        paramsData: {
          pageNo: 0,
          pageSize: 0
        },
        cur:0,
        catList: ['按类别', '按价格', '按品牌'],
        categoryList:['混凝土搅拌机', '稳定土搅拌机', '沥青搅拌机'],
        swiperList: [{
            id: '001',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg'
          },
          {
            id: '002',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
          },
          {
            id: '003',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
          }
        ],
        priceList: [{
            id: '001',
            label: '5万以下'
          },
          {
            id: '002',
            label: '5-15万'
          },
          {
            id: '003',
            label: '15-25万'
          },
          {
            id: '004',
            label: '25-30万'
          },
          {
            id: '005',
            label: '40万以上'
          },
          {
            id: '006',
            label: '更多'
          },
        ],
        brandList:['三力'],
        contentLists:[],
      }
    },
    methods: {
      Details(id) {
        this.$router.push({
          path: '/Details',
          query:{id}
        })
        return false
      },
      CategoryDetails() {
        this.$router.push({
          path: '/Category'
        })
        return false
      },
      catClick(index) {
        // Tab点击
        this.cur = index
      }
    },
    created() {
      getMxInFoPage(this.paramsData).then(res => {
        // console.log(res.data.data.records, 'res')
        this.contentLists = res.data.data.records
      })

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper>>>.swiper-pagination-bullet {
    background: #fff !important // 样式进行穿透
  }

  [status='1'] {
    text-align: center;
    padding-right: 15px;
  }
  [status='2'] {
    text-align: right;
    padding-right: 20px;
  }

  .wrapper {
    margin-top: 5px;
    overflow: hidden;
    width: 100%;
  }

  .swiper-img {
    width: 100%;
    height: 146px;
  }

  .header {
    font-family: 'PingFang-SC-Regular';
  }

  .header-log {
    display: flex;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 100);
  }

  .header-log .text {
    line-height: 48px;
    width: 132px;
    color: rgba(50, 127, 215, 100);
    font-size: 28px;
    font-weight: 900;
  }

  .box {
    display: flex;
    font-size: 14px;
  }

  .header-tab1 {
    background-color: rgba(50, 127, 215, 100);
    line-height: 44px;
    border: 1px solid rgba(187, 187, 187, 100);
    font-weight: bold;
  }

  .box-li {
    flex: 1;
    text-align: center;
  }

  .tab1-left {
    text-align: left;
    padding-left: 15px;
  }

  .tab1-right {
    text-align: right;
    padding-right: 15px;
  }

  .header-tab2 {
    color: #101010;
    line-height: 36px;
    text-align: center;
    border-bottom: 1px solid rgba(187, 187, 187, 100);
  }

  .tab2-left {
    text-align: left;
    padding-left: 10px;
  }

  .tab2-middle {
    padding-left: 17px
  }

  .tab2-right {
    text-align: right;
    padding-right: 17px;
  }

  .router-link {
    color: #FFFFFF;
  }

  .header-tab3 {
    margin-top: 8px;
    /* height: 92px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .category {
    margin-left: 2%;
    width: 31%;
    margin-bottom: 10px;
  }

  .textBorder {
    width: 92px;
    line-height: 36px;
    border: 1px solid #BBBBBB;
    display: inline-block;
    background-color: #ECE8E8;
    color: #101010;
    border-radius: 5px;
  }

  .content {
    margin-top: 8px;
    border: 1px solid #BBBBBB;
  }

  .contentBox {
    height: 76px;
    display: flex;
  }

  .left-img {
    width: 135px;
    height: 69px;
    background-color: #000088;
    margin: 4px;
  }

  .right-center {
    margin-left: 6px;
  }

  .top-center {
    margin-top: 8px;
    margin-right: 13px;
    font-family: PingFangSC-regular;
    font-size: 12px;
    color: #101010;
    line-height: 150%;
  }

  .bottom-label {
    margin-top: 10px;
    font-size: 14px;
    color: #595757;
    display: inline-block;
  }
</style>
