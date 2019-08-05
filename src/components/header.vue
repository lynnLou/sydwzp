<template>
  <header class="header">
    <div class="container">
      <a href="http://hlj.offcn.com/" class="logo">
        <img src="./../assets/logo.png" alt="">
      </a>
      <ul class="links">
        <li><a href="http://hlj.offcn.com/" target="_blank">中公首页</a></li>
        <li><a href="http://hlj.offcn.com/zg/51sydw/" target="_blank">面授课程</a></li>
        <li><a href="http://hlj.offcn.com/html/2018/04/46582.html" target="_blank">网校课程</a></li>
        <li><a href="https://shop109916632.taobao.com/category-938681334.htm?spm=a1z10.1-c.0.0.6da656a37F0Bq8&search=y&catName=%CA%C2%D2%B5%B5%A5%CE%BB" rel="nofollow" target="_blank">图书商城</a></li>
        <li><a href="http://hlj.offcn.com/html/about/contactus/" target="_blank">联系我们</a></li>
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
