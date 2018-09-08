<template>
  <div class="container">
    <navi></navi>
    <div class="myspace">
      <h2>通知中心</h2>
      <p style="color: #777777;">在这里，您可以浏览查看验证结果、借款进展、投资、还款、交易状况、发布情况等通知消息</p>
    </div>


    <el-card class="box-card">
      <el-menu :default-active="activeIndex" class="el-menu-demo is-always-shadow" mode="horizontal" @select="handleSelect" active-text-color="dodgerblue" default-active="1">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">验证</el-menu-item>
        <el-menu-item index="3">借款</el-menu-item>
        <el-menu-item index="4">还款</el-menu-item>
        <el-menu-item index="5">投资</el-menu-item>
        <el-menu-item index="6">交易</el-menu-item>
        <el-menu-item index="7">发布</el-menu-item>
      </el-menu>
      <el-table
        :data="tableData"
        stripe
        height="500"
        style="width: 100%;">
        <el-table-column
          prop="state"
          label="状态"
          width="150">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间"
          width="150">
        </el-table-column>
        <el-table-column
          prop="kind"
          label="类型"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="kind"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          width="100"
        >
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">删除</el-button>
        </el-table-column>
      </el-table>

      <div style="margin-top: 20px">
        <a>删除已读</a>
        <a>一键已读</a>
      </div>


    </el-card>
    <footer-bar></footer-bar>
    <right-bar></right-bar>


  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'

    export default {
        name: "messageList",
      components:{navi, footerBar, rightBar},
      mounted: function () {
        localStorage.route="#message";
        $('#message').attr('src', '/static/pic/message_blue.png');
      }

    }
</script>

<style scoped>
  .container {
    width:100%;
    background: #D9F3FB
  ;
    /*background-image:url('/static/pic/messageBackground.png');*/
    /*background-size: cover;*/
    /*background-attachment:fixed;*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    padding: 0;
  }

  .myspace {
    text-indent: 6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12),
    0 1px 6px 0 rgba(0, 0, 0, .12);
    border-radius: 3px;
    margin-top: 69px;
  }

  .el-card{
    width: 90%;
    margin-left: 5%;
    margin-top: 15px;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 75px;
  }

  .el-menu-item{
    width: 100px;
    text-align: center;
    font-size: 15px;
  }

  .chooseKind button{
    display: inline;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #48576a;
    width: 100px;
  }
  a{
    margin-right: 30px;
    color: dodgerblue;
    cursor: pointer;
  }

</style>
