<template>
  <div class="home">
    <home-scroll :urls="showGoods" @pullingUp="loadMore">
      <nav-bar class="home-nav"> <div slot="center">hahaha</div> </nav-bar>
      <home-swiper :banner="banner" />
      <home-recommend :recommend="recommend" />
      <tab-control class="tab-control" :titles="['精选', '关注', '特别']" @tabClick="changeTitle" />
    </home-scroll>
    <el-backtop target=".home" :visibility-height="5" :bottom="80" :right="20" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeScroll from "./childComps/HomeScroll";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeScroll,
    TabControl,
  },
  computed: {
    showGoods() {
      return this.goods[this.curType].list;
    },
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      curType: "pop",
    };
  },
  created() {
    this.getMultiData();
    this.getData("pop");
    this.getData("news");
    this.getData("sell");
  },
  methods: {
    getMultiData() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getData(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data);
        this.goods[type].page += 1;
      });
    },
    changeTitle(index) {
      this.curType = Object.keys(this.goods)[index];
    },
    loadMore() {
      this.getData(this.curType);
    }
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 64px;
  height: 100vh;
  overflow-x: hidden;
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
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
