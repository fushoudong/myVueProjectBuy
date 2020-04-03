<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe 
      :auto="2000" 
      :showIndicators="false"
      class="mtSwipe">
      <mt-swipe-item 
        v-for="(item,index) in swipeList" :key="index">
        <img :src="item.img" style="width: 100%;height: auto"/>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 栅格 -->
    <div class="mui-content">
      <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6">
              <a href="#">
                <img :src="imgSrc1"/>
              </a>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
              <li class="mui-table-view-cell">
                  <a class="mui-navigate-right">
                      Item 1
                  </a>
              </li>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swipeList:[],
        imgSrc1: '../../img/menu1.png'
      }
    },
    created() {
      this.getAllPic();
    },
    methods: {
      getAllPic() {
        this.$http.get('http://www.liulongbin.top:3005/api/getlunbo')
        .then((res=> {
          if(res.status == 200) {
            console.log("res",res.body.message);
            this.swipeList = res.body.message;
          }

        }),(err => {
          console.log('获取失败',err)
        }))
      }
    }
  }
</script>

<style scoped>
  .mtSwipe {
    font-size: 20px;
    word-break: break-all;
    text-align: center;
    font-weight: 700;
    color: white;
    height: 130px;
    line-height: 130px;
  }
  .mint-swipe-item:nth-child(1){
    background: #0089dc;
  }
  .mint-swipe-item:nth-child(2){
    background: #ffd705;
    color: black;
  }
  .mint-swipe-item:nth-child(3){
    background: #ff2d4b;
  }
</style>