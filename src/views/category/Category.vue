<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" class="list-item" :key="i">
        {{ i }}
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 300;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 100;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>

</style>
