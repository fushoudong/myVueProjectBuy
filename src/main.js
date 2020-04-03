/**
 * js入口程序
 */
console.log('ok');
import Vue from 'vue';  // 导入vue，使用vue环境
import VueRouter from 'vue-router'; // 导入vue-router配置路由
import VueResource from 'vue-resource'; // 导入vue-resource
import App from './App.vue';  // 导入APP.vue组件
import router from './router.js'  // 导入路由组件
import 'bootstrap/dist/css/bootstrap.css';
import './lib/mui/fonts/mui.ttf';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'; // 负责购物车等默认图标库外的图标
import './css/css.css';
import { Header,Button,Tabbar,TabItem,Cell,Swipe,SwipeItem } from 'mint-ui'; // 按需导入mint-ui相关组件
import 'mint-ui/lib/style.css'; // 导入样式，使其生效

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Tabbar.name,Tabbar);
Vue.component(TabItem.name,TabItem);
Vue.component(Cell.name,Cell);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router
})