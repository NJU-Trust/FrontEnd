<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="height: auto;margin-top: 30px"
    router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>与我相关</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/notice">发布消息</el-menu-item>
        <el-menu-item index="/notice/mesunderway">正在进行</el-menu-item>
        <el-menu-item index="/notice/mesdone">已经完成</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>消息集散</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/notice/found">失物/寻物</el-menu-item>
        <el-menu-item index="/notice/#">其他</el-menu-item>
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
