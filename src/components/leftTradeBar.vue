<template>
  <el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  style="height: auto;margin-top: 30px">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>交易大厅</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">交易大厅</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>我的闲置</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="2-1">闲置上传</el-menu-item>
      <el-menu-item index="2-2">正在进行</el-menu-item>
      <el-menu-item index="2-3">成功交易</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</template>

<script>
    export default {
        name: "leftTradeBar"
    }
</script>

<style scoped>

</style>
