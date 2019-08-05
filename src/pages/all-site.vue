<template>
  <div class="detailBox">
<!--    <a-list :grid="{ gutter: 30, column: 3 }" :dataSource="recruitList">-->
<!--      <a-list-item slot="renderItem" slot-scope="item, index">-->
<!--        <a class="item" :href="item.href" target="_blank">-->
<!--          <a-card :title="item.title">-->
<!--            <p>发布时间：{{ item.release }}</p>-->
<!--            <p>招聘人数：{{ item.people }}</p>-->
<!--            <p>报名时间：{{ item.registration }}</p>-->
<!--          </a-card>-->
<!--        </a>-->
<!--      </a-list-item>-->
<!--    </a-list>-->

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
        recruitList : recruitList
      }
    },
    methods : {
      reverseInfo (){
        let that = this
        that.recruitList = recruitList.reverse()
      }
    },
    created () {
      this.reverseInfo()
    }
  }
</script>

<style lang="scss">
  @import ".././css/base.scss";

</style>
