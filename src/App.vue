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
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-search"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'home',
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