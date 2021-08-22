<template>
  <div class="demo-image">
    <div class="block" v-for="url in urls" :key="url.img">
      <a :href="url.img"><el-image :src="url.img" :url="url.img"></el-image></a>
      <p class="img-title">{{url.title}}</p>
      <p class="img-desc">{{url.price}} ⭐{{url.collect}}</p>
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
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
 }
 .block {
   width: 48%;
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
