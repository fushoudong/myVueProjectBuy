<template>
  <div>
    <!-- 顶部header区域 -->
    <mt-header fixed title="黑马程序员-gz10期">
      <router-link to="/home" slot='left' v-show="selected!='home'">
        <mt-button class="primary" icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 中间路由切换区域 -->
    <router-view class='container'></router-view>
    <!-- 底部 tableBar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="./home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="./member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="./search">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" v-text="shoppingCart" v-if="shoppingCart !=0"></span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="./shoppingCart">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'home',
        shoppingCart: 1,
      }
    }
  }
</script>

<style>
  .appIcon, .tabbarText {
    color: #9a968f;
  }
  .appIcon {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .mint-button-text {
    line-height: 40px;
  }
</style>