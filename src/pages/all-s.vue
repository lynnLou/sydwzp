<template>
  <div class="detailBox">
      <a-row>
        <a-col :span="8" v-for="item in recruitList" class="recruit" :class="item.city " :key="item.index">
          <div class="item" :href="item.href" target="_blank">
            <div class="textBox">
              <h4>{{item.title}}</h4>
              <span class="cityIcon">{{item.cityName}}</span>
              <p>发布时间：{{ item.release }}</p>
              <p>招聘人数：{{ item.people }}</p>
              <p>报名时间：{{ item.registration }}</p>
            </div>
          </div>
        </a-col>
      </a-row>
  </div>
</template>

<script>
  export default {
    props:{

    },
    data(){
      return {
        recruitList : recruitList.reverse()

      }
    }
  }
</script>

<style lang="scss" scoped>
  .detailBox{
    }
  .ant-row{
    margin: 0 -10px;}
  .recruit{transition: .1s; overflow: hidden; box-sizing: border-box;
    padding: 10px;}
  .detailBox{padding: 50px 0;
    background-color: #66CCFF;
    color: #fff;
    .item{
      display: block;
      p{
        line-height: 1.8;}
    }
    .ant-card{
      background-color: transparent;}
    .textBox{
      display: block;
      padding: 30px 50px;
      padding-right: 15px;
      border: 2px solid #fff;
      position: relative;
      margin-left: 30px;}
    h4{font-size: 18px;
      color: #fff;
      margin-bottom: 10px;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;}
    p{
      font-size: 16px;
      line-height: 26px;
      color: #fff;}
    .cityIcon{
      position: absolute;
      left: -25px;
      top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      letter-spacing: 3px;
      text-align: center;
      width: 50px;
      height: 50px;
      background-color: #fff;
      color: #EE7751;
      font-size: 18px;
      line-height: 20px;
      font-weight: bold;}
  }

</style>
