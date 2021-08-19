<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">hahaha</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banner: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.data.banner.list
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
