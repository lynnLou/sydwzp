<template>
  <div class="detailBox">
    <a-row>
      <a-col :span="8" v-for="item in recruitList" class="recruit" :class="item.city " :key="item.index">
        <a class="item" :href="item.href" target="_blank">
          <a-card :title="item.title" >
            <p>发布时间：{{ item.release }}</p>
            <p>招聘人数：{{ item.people }}</p>
            <p>报名时间：{{ item.registration }}</p>
          </a-card>
        </a>
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
        recruitList : recruitList
      }
    },
    methods :{
      filterArr(){
        let that = this
        that.recruitList = that.recruitList.filter( item => {
          return item.city == 'c5'
        })
      }
    },
    created : function(){
      let that = this
      that.filterArr()
    }
  }
</script>

<style lang="scss" scoped>
  .ant-row{
    margin: 0 -10px;}
  .recruit{transition: .1s; overflow: hidden; box-sizing: border-box;
    padding: 10px;}
  .detailBox{
    .item{
      display: block;
      p{
        line-height: 1.8;}
    }

  }

</style>
