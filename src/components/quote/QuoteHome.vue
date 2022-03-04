<template>
  <div class="quote">
    <div class="header">
      <span class="logo"  @click.prevent="returnBtn()">砼之家</span>
      <span class="quoteName">报价库</span>
    </div>
    <div class="return">
      <img src="../../assets/return.png" class="return-img" @click.prevent="returnBtn()">
      <div class="type" v-for="(label,index) in label">
        <div><span>{{label.name}}</span></div>
      </div>
    </div>
    <div class="content" v-for="(label,index) in label">
      <div class="conHeader">
        <div class="name-left">{{label.name}}</div>
        <span class="line"></span>
      </div>
      <div class="contentNow">
        <div class="now-box" v-for="(item,index) in label.description" @click.prevent="details">
          <img class="now-img" src="item.imgUrl">
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        label: [{
            name: '混凝土搅拌站',
            type: '1',
            description: [{
                text: 'S30站',
              }, {
                text: 'S35站',

              },
              {
                text: 'S40站',
              }, {
                text: 'S45站',

              }, {
                text: 'S50站',
              }, {
                text: 'S60站',
              },
              {
                text: 'S90站',
              }
            ]
          }, {
            name: '稳定土搅拌站',
            type: '2',
            description: [{
                text: '300站',
              },
              {
                text: '400站',
              },
              {
                text: '600站',
              },
              {
                text: '700站',
              },
              {
                text: '800站',
              }
            ]
          },
          {
            name: '沥青搅拌站',
            type: '3',
            description: [{
                text: '1000型',
              },
              {
                text: '2000型',
              },
              {
                text: '3000型',
              },
              {
                text: '5000型',
              },
              {
                text: '6000型',
              }
            ]
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
      details(){
        this.$router.push({
          path:'/QuoteDetails'
        })
        return false
      }
    }

  }
</script>

<style scoped>
  .quote {
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

  .quoteName {
    font-size: 16px;
    margin-left: 35px;
    font-weight: 600;
  }

  .return {
    padding: 8px 2px;
    display: flex;
    border-bottom: 1px solid #BBBBBB;
    line-height: 42px;
  }

  .return-img {
    width: 26px;
    height: 26px;
  }

  .type {
    margin-top: 3px;
    display: flex;
    text-align: center;
  }

  .type div {
    margin-left: 20px;
    line-height: 20px;
  }

  .content {
    margin-top: 13px;
    margin-left: 9px;
  }

  .conHeader {
    display: flex;
  }

  .name-left {
    width: 101px;
  }

  .line {
    display: block;
    background: rgba(187, 187, 187, 100);
    width: 300px;
    height: 1px;
    margin-top: 8px;
  }

  .contentNow {
    display: flex;
    flex-wrap: wrap;
  }

  .now-box {
    width: 24%;
    margin-top: 15px;
  }

  .now-img {
    width: 56px;
    height: 42px;
  }

  .text {
    margin-top: 13px;
    padding-left: 8px;
  }
</style>
