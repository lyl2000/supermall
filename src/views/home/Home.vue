<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">hahaha</div></nav-bar>
    <div class="wrapper">
      <div class="content">
        <home-swiper :banner="banner"></home-swiper>
        <home-recommend :recommend="recommend"></home-recommend>
        <tab-control
          class="tab-control"
          :titles="['精选', '关注', '特别']"
          @tabClick="changeTitle"
        ></tab-control>
        <home-images :urls="showGoods"></home-images>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeImages from "./childComps/HomeImages";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeData } from "network/home";
import BScroll from 'better-scroll';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeImages,
    TabControl,
  },
  computed: {
    showGoods() {
      return this.goods[this.curType].list;
    }
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      curType: 'pop'
    };
  },
  created() {
    this.getMultiData();
    this.getData('pop');
    this.getData('news');
    this.getData('sell');
  },
  mounted() {
    this.scroll = new BScroll('.wrapper', {
      probeType: 3,
      pullUpLoad: true
    });
    this.scroll.on('scroll', (position) => {
      console.log(position);
    });
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
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
      })
    },
    changeTitle(index) {
      this.curType = Object.keys(this.goods)[index];
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
  z-index: 9;
}
</style>
