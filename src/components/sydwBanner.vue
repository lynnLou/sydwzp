<template>
  <div class="banner">
    <div class="container">
      <img src="./../assets/banner01.jpg" alt="">
      <img src="./../assets/banner02.jpg" alt="">
      <img src="./../assets/banner03.jpg" alt="">
      <div class="banTxt">
        <h1>黑龙江省事业单位</h1>
        <h3>招聘考试信息汇总</h3>
        <span></span>
        <p>2019年黑龙江省事业单位公告内容及详情 <br>含公告发布时间、公告正文、招聘人数、报名时间 <br>以及事业单位报考报名入口</p>
        <a href="#" class="button">了解更多</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .banner{
    background: url(./../assets/bannerBg.jpg) center top no-repeat;}
  .banner .container{
    position: relative;}
  .banner img{display: block;
    pointer-events: none;
    width: 100%;}
  .banTxt{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 115px;
    color: #0037b6;}
  h1{
    font-size: 72px;
    color: #0037b6;
    font-weight: bold;}
  h3{
    font-size: 42px;color: #0037b6;
    font-weight: bold;}
  span{
    display: block;
    width: 80px;
    height: 9px;
    margin: 20px 0 30px;
    background-color: #0037b6;}
  p{
    font-size: 16px;
    color: #666666;
    line-height: 30px;}
  .button{
    display: block;
    width: 180px;
    height: 66px;
    border: 1px solid #0037b6;
    color: #0037b6;text-align: center;
    line-height: 64px;
    font-size: 24px;
    font-weight: bold;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top: 35px;transition: .5s}
  .button:hover{
    background-color: #0037b6;
    color: #fff;}
</style>
