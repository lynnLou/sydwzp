<template>
  <header class="header">
    <div class="container">
      <a href="#" class="logo">
        <img src="./../assets/logo.png" alt="">
      </a>
      <ul class="links">
        <li><a href="#">中公首页</a></li>
        <li><a href="#">面授课程</a></li>
        <li><a href="#">网校课程</a></li>
        <li><a href="#">图书商城</a></li>
        <li><a href="#">联系我们</a></li>
      </ul>
      <div class="tel">咨询电话:4006300999</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header{
    background-color: #fff;
    .logo{
      float: left;
      padding: 5px;
      img{
        display: block; height: 40px}
    }
    .links{
      float: left;
      margin-left: 20px;
      li{
        float: left;
        line-height: 40px;
        padding: 10px 0 5px;
        font-size: 14px;
      &+li{
        margin-left: 10px;}
        a{
          color: #333;
          display: block;
          padding: 0 10px;
          transition: .1s;
          border-bottom: 5px solid transparent;
          &:hover{
          border-bottom: 5px solid #f00;}
        }
      }
    }
    .tel{
      float: right;
      line-height: 40px;
      padding: 10px 0;
      font-size: 14px;}
  }
</style>
