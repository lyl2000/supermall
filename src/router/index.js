import Vue from 'vue'
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Mine = () => import('views/mine/Mine');

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
  },
  {
    path: '/mine',
    component: Mine
  }
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

export default router
