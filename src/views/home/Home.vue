<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">hahaha</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <tab-control
      class="tab-control"
      :titles="['精选', '关注', '特别']"
    ></tab-control>
    <home-images :urls="goods['pop'].list"></home-images>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeImages from "./childComps/HomeImages";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeData } from "network/home";

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
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
    this.getData('pop');
  },
  methods: {
    getData(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data);
        console.log(this.goods[type].list);
      })
    }
  }
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
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 1;
}
</style>
