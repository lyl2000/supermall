<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">hahaha</div></nav-bar>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
