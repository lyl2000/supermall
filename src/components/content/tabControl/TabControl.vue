<template>
  <div class="tab-control">
    <el-row>
      <el-col v-for="(item, index) in titles" :key="item" :span="width" class="tab-control-item">
        <span :class="{active: index === curIdx}" @click="itemClick(index)">{{item}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    width: function() {
      return 24 / (this.titles.length | 1);
    }
  },
  data() {
    return {
      curIdx: 0
    }
  },
  methods: {
    itemClick(index) {
      this.curIdx = index;
    }
  }
}
</script>

<style>
  .el-col {
    flex: 1;
    border-radius: 4px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .el-col span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
