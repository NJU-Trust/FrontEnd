<template>
  <personalCenter paneltitle="账户总览">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always" id="card_test">
          总是显示
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
    </el-row>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"userspace",
    components: {personalCenter},
    mounted() {

    },
    methods: {

    }
  }

</script>

<style scoped>
  #card_test {
    background-image: url("../../static/pic/photo.jpg");
    width: 249px;
    height: 253px;
  }

</style>

