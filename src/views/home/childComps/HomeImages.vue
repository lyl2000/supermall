<template>
  <div class="demo-image">
    <div class="block" v-for="url in urls" :key="url">
      <el-image
        :src="url"
        :url="url"></el-image>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      urls: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .demo-image {
   z-index: 0;
 }
</style>
