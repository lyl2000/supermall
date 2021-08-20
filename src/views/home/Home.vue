<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">hahaha</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <tab-control :titles="['精选', '关注', '特别']"></tab-control>
    <home-images></home-images>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeImages from "./childComps/HomeImages";

import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabControl/TabControl';

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeImages,
    TabControl,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.home {
  padding-bottom: 64px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>
