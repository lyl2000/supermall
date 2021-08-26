<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  mounted() {
    new BScroll('.wrapper', {
      probeType: 3,
      click: true,
      pullUpLoad: true
    }).on('pullingUp', () => {
      console.log('上拉加载更多');
    });
  },
}
</script>

<style scoped>

</style>
