<template>
    <div class="main">

      <div class="container">
        <ul class="cityList">
          <li v-for="( city , index ) in citys">
            <a-button :data-cityid="city.cityId"  @click="changeCity" :data-num = 'index' class="button" :class="{ active : index == isactive }"><router-link :to="{path:city.citySpell, query:{index: index}}"> {{ city.name }} </router-link></a-button>
          </li>
        </ul>
      </div>

        <div class="container">
          <transition name="fade" mode="out-in" >
            <keep-alive>
              <router-view ></router-view>
            </keep-alive>

          </transition>
        </div>

    </div>
</template>


<script>

  export default {
    props:{
      citys: {
        type: Array,
        default: ''
      }
    },
    data(){
      return {
        isactive : 0,
        recruitList : recruitList.reverse(),
        allRecruitList : recruitList.reverse()

      }
    },
    methods : {
      filterCity(e){
        let that = this;
        that.recruitList = that.allRecruitList
        let citycode = e.target.dataset.cityid
        that.recruitList = that.recruitList.filter( item => {
          return item.city == citycode
        })
      },
      changeCity(e){
        let that = this
        that.isactive = e.currentTarget.dataset.num
      }

    },
    created () {
      let that = this
      that.isactive = that.$route.name
    }

  }
</script>

<style lang="scss" scoped>
  .cityList{
    margin-top: 20px;
    display: flex;justify-content: flex-start; flex-wrap: wrap;
    li{
      margin-right: 20px;
      margin-bottom: 36px;
      a{
        display: block;
        /*padding: 0 15px;*/
      }
    }
  }
  .recruit{transition: .1s; overflow: hidden; box-sizing: border-box;
    padding: 10px;}
  .detailBox{
    .item{
      display: block;
      p{
        line-height: 1.8;}
    }

  }
  h2{text-align: center;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0px 0 50px rgba(0,0,0,.05);
  }
  .button{
    font-size: 22px;
    padding: 0 25px;
    line-height: 42px;
    height: auto;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    color: #0037b6;
    border: 2px solid #0037b6;}
  .button:hover,.button.active{
    background-color: #0037b6;
    color: #fff;}
</style>
