<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="url in urls" class="infinite-list-item" :key="url.img">
        <div class="demo-image__preview">
          <el-image
            :src="url.img"
            :url="url.img"
            :preview-src-list="[url.img]"
          ></el-image>
        </div>
        <a :href="url.img">
          <p class="img-title">{{ url.title }}</p>
          <p class="img-desc">{{ url.price }} ⭐{{ url.collect }}</p>
        </a>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  props: {
    urls: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.urls.length >= 30;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.$emit("pullingUp");
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.infinite-list-item {
  width: 96%;
}
.img-title {
  color: rgb(128, 224, 39);
  text-align: center;
}
.img-desc {
  color: rgb(39, 218, 224);
  text-align: center;
}
</style>
