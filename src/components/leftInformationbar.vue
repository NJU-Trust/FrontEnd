<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="height: auto;margin-top: 30px">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>与我相关</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">发布消息</el-menu-item>
        <el-menu-item index="1-2">正在进行</el-menu-item>
        <el-menu-item index="1-3">已经完成</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>消息集散</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">失物/寻物</el-menu-item>
        <el-menu-item index="2-2">其他</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>


</template>

<script>
    export default {
        name: "leftInformationbar"
    }
</script>

<style scoped>

</style>
