import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Member from './components/member/Member.vue';
import Search from './components/search/Search.vue';
import ShoppingCart from './components/shoppingCart/ShoppingCart.vue';

var router = new VueRouter({
  routes: [
    {
      path: '/', 
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/member',
      component: Member,
      children: [

      ]
    },
    {
      path: '/shoppingCart',
      component: ShoppingCart,
      children: [

      ]
    },
    {
      path: '/search',
      component: Search,
      children: [

      ]
    },
  ],
  linkActiveClass: 'mui-active',  // 设置选中高亮
});
export default router