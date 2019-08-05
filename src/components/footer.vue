<template>
  <footer>
    <div class="container">
      <p>Copyright©1999-<span>{{ year }}</span>北京中公教育科技有限公司 .All Rights Reserved</p>
      <p>全国统一咨询电话：400-6300-999</p>
      <p>
        京ICP备10218183号 京ICP证161188号 京公网安备11010802020593号 出版物经营许可证新出发京批字第直130052号
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    data (){
      return {
        year : 0
      }
    },
    methods : {
      now_year (){
        let that = this
        let date = new Date();
        let now_year = date.getFullYear();
        that.year = now_year
      }
    },
    created () {
      let that = this
      that.now_year()
    }
  }
</script>

<style lang="css">
  footer{background: #3b3b3b;padding: 30px 0;color: #fff;font-size: 12px; text-align: center;
    line-height: 24px;}

</style>
