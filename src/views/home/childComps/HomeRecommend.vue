<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.link" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0px 15px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
}
</style>
