<template>
  <div>
    <header-box></header-box>
    <sydw-banner></sydw-banner>
    <main-box :citys="citys" ></main-box>
    <back-top></back-top>
    <footer-box></footer-box>
  </div>
</template>

<script>
  import headerBox from './header'
  import sydwBanner from './sydwBanner'
  import mainBox from './mainBox'
  import backTop from './backTop'
  import footerBox from './footer'
  import haerbinBox from './../pages/haerbin'

  export default {
    data(){
      return {
        citys:[
          { name : '全部' , cityId : 'c0' , citySpell : '/'},
          { name : '哈尔滨' , cityId : 'c1' , citySpell : 'haerbin'},
          { name : '齐齐哈尔' , cityId : 'c2' , citySpell : 'qqhe'},
          { name : '牡丹江' , cityId : 'c3' , citySpell : 'mdj'},
          { name : '佳木斯' , cityId : 'c4' , citySpell : 'jms'},
          { name : '大庆' , cityId : 'c5' , citySpell : 'dq'},
          { name : '鸡西' , cityId : 'c6' , citySpell : 'jx'},
          { name : '双鸭山' , cityId : 'c7' , citySpell : 'sys'},
          { name : '伊春' , cityId : 'c8' , citySpell : 'yc'},
          { name : '七台河' , cityId : 'c9' , citySpell : 'qth'},
          { name : '鹤岗' , cityId : 'c10' , citySpell : 'hg'},
          { name : '黑河' , cityId : 'c11' , citySpell : 'hh'},
          { name : '绥化' , cityId : 'c12' , citySpell : 'sh'},
          { name : '大兴安岭' , cityId : 'c13' , citySpell : 'dxal'},
        ]
      }
    },
    components :{
      headerBox,
      mainBox,
      backTop,
      sydwBanner,
      footerBox
    }
  }
</script>
