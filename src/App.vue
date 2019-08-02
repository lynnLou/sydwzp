<template>
  <div id="app">
    <frame-box></frame-box>
  </div>
</template>

<script>
import frameBox from './components/frame'
export default {
  name: 'App',
  components :{
    frameBox
  }
}
</script>

<style lang="css">
  body{
    background-color: #fff;}
*{box-sizing: border-box}
h1,h2,h3,h4,h5,h6,p{
  margin: 0;}
ul,ol{
  padding: 0;
  margin: 0;
  list-style: none}
  .container{
    width: 1200px;
    margin: 0 auto;}
  .container:after{content:"";
    display: table;
    clear: both;}
</style>
