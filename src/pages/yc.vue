<template>
  <div class="detailBox">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8"  v-for="( item, index ) in recruitList">
        <div class="gutter-box">
          <a :href="item.href" target="_blank">
            <div class="listBox">
              <div class="listTlt">
                <h3>
                  <span>{{ item.cityName }}</span>
                  <span>{{ item.title }}</span>
                </h3>
              </div>
              <div class="listContnet">
                <p>发布时间：{{ item.release }}</p>
                <p>招聘人数：{{ item.people }}</p>
                <p>报名时间：{{ item.registration }}</p>
              </div>
            </div>
          </a>
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
        recruitList : recruitList,
        isActive : 0
      }
    },
    methods :{
      filterArr(){
        let that = this
        that.recruitList = that.recruitList.filter( item => {
          return item.city == 'c' + that.$route.name
        })
      }
    },
    created : function(){
      let that = this
      that.$router.push({
        path: `?index=` + that.$route.name,
      })
      that.filterArr()
    }
  }
</script>

<style lang="scss">
  @import ".././css/base.scss";
</style>
