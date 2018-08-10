<template>
  <el-carousel :interval="3000" type="card" height="400px" style="text-align: center;margin-top: 50px;width: 76%;margin-left: 12%;margin-bottom: 50px">
    <el-carousel-item v-for="item in 10" :key="item" class="is-always-shadow el-card rangeCard">

    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "topRange"
    }
</script>

<style scoped>
  .rangeCard{
  }
</style>
