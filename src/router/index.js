import Vue from 'vue'
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'  // 默认路由
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  }
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

export default router
