<template>
  <el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  style="height: auto;margin-top: 30px" router="true">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>交易大厅</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/trade">交易大厅</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>我的闲置</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/trade/mine">闲置上传</el-menu-item>
      <el-menu-item index="/trade/going">正在进行</el-menu-item>
      <el-menu-item index="/trade/finished">成功交易</el-menu-item>
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
