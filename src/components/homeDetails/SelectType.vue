<template>
  <div>
    <div class="return">
      <img src="../../assets/return.png" class="return-img" @click.prevent="returnBtn">
      <div>选择站型</div>
    </div>
    <div class="typeBox" >
      <div class="category" v-for="(item,index) in SelectTypeList" @click.prevent="CategoryDetails">
        <div class="box-li"><span class="textBorder">{{item.type}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        SelectTypeList:[{
          type:'混凝土30站'
        },
        {
          type:'混凝土30站'
        },
        {
          type:'混凝土30站'
        },
        {
          type:'混凝土30站'
        },
        {
          type:'混凝土30站'
        },
        {
          type:'混凝土30站'
        }
        ]
      }
    },
   methods:{
     returnBtn(){
       this.$router.push({
         path:'/'
       })
       return false
     },
     CategoryDetails(){
       this.$router.push({
         path:'/'
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
    font-size: 18px;
  }

  .return-img {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 5px;
    top: 7px;
  }
  .typeBox {
    margin-top: 8px;
    height: 92px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .category {
    margin-left: 20px;
    width: 25%;
    line-height: 40px;
    border: 1px solid #BBBBBB;
    margin-top: 20px;
  }
  .box-li {
    flex: 1;
    text-align: center;
  }
</style>
