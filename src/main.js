/**
 * js入口程序
 */
console.log('ok');
import Vue from 'vue';  // 导入vue，使用vue环境
import VueRouter from 'vue-router'; // 导入vue-router配置路由
import App from './App.vue';  // 导入APP.vue组件
import router from './router.js'  // 导入路由组件
import 'bootstrap/dist/css/bootstrap.css';
import './lib/mui/fonts/mui.ttf';
import './lib/mui/css/mui.min.css';
import './css/css.css';
import { Header,Button,Tabbar,TabItem,Cell } from 'mint-ui'; // 按需导入mint-ui相关组件
import 'mint-ui/lib/style.css'; // 导入样式，使其生效

Vue.use(VueRouter);
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Tabbar.name,Tabbar);
Vue.component(TabItem.name,TabItem);
Vue.component(Cell.name,Cell);

var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router
})