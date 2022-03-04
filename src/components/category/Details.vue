<template>
  <div class="details">
    <div class="header">
      <span class="logo" @click.prevent="returnBtn">砼之家</span>
    </div>
    <div class="return">
      <img src="../../assets/return.png" class="return-img" @click.prevent="returnBtn">
      <div>混凝土搅拌站报价</div>
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
  export default {
    data(){
      return{
        detailedList:[{
          name:'搅拌主机'
        },{
          name:'水泥称量系统'
        },
        {
          name:'配料机'
        },
        {
          name:'控制室'
        },
        {
          name:'操作系统'
        },
        {
          name:'电控操作系统'
        },
        {
          name:'螺旋输送机'
        },
        {
          name:'粉煤灰称量系统'
        },
        {
          name:'电机'
        },
        {
          name:'蝶阀'
        },
        {
          name:'皮带'
        },
        {
          name:'矿粉称量系统'
        },
        {
          name:'电机'
        }
        ]
      }
    },
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

  .detailsImg {
    width: 375px;
    height: 185px;
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
  .detailedLabel{
    display: inline-block;
    margin-left: 10px;
  }
  .flexBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 100px;
  }
  .detailedList{
    width: 49%;
    line-height: 60px;
    border: 1px solid #BBBBBB;
    margin-left: 1px;
    text-align: center;
  }
  .box1{
    border: 1px solid #BBBBBB;
    padding: 10px;
  }
</style>
