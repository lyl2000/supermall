<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <!-- <img slot="item-icon" src="..\..\..\assets\images\tabbar\home.svg" alt="" /> -->
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/message">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="" />
        <div slot="item-text">动态</div>
      </tab-bar-item>
      <tab-bar-item path="/blog">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="" />
        <div slot="item-text">文章</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
