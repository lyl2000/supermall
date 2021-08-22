<template>
  <div class="block">
    <el-carousel height="190px" width="100%">
      <el-carousel-item v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <el-image :src="item.image" alt=""/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
