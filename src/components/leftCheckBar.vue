<template>

  <div class="leftsidenav" style="position:relative;left:-160px;">
    <div style="position:relative;top:-100px;">
    <div class="left_menus">
      <p class="left_head"  ><b>用户信息审核</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/EnterVerify" id="leftA"  @click="setA">非结构化信息</a></li>
      </ul>
      <hr/>
    </div>
    <div class="left_menus">
      <p class="left_head"><b>借款申请审核</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/smalltargetcheck">小额标的</a></li>
        <li><a href="/largetargetcheck">大额标的</a></li>
      </ul>
      <hr/>
    </div>
    </div>
  </div>

  <!--
  <el-row class="tac" style="position:relative;top:-100px;left:50px;">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  -->
</template>

<script>
  export default {
    name: "leftCheckBar",
    methods: {
      setA: function () {
        this.$store.commit('newAuthor', '基本信息')
      },
      setB: function () {
        this.$store.commit('newAuthor', '普通验证');
        //document.getElementById("checkA").style.color = "#ffffff";
        //document.getElementById("temptitle").style.color="#ffffff";
      },
      setC: function () {
        document.getElementById("userinformation").style.display = "none";
        // document.getElementById("tmptitle").color = "#ffffff";
        // this.$store.commit('newAuthor','财务统计');
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:400px;
    width:200px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  /*----------左侧导航栏修正----------*/
  .left_menus ul{
    list-style: none;
    position: relative;
  }

  .left_head {
    font-size: 16px;
    color: #48576a;
    text-indent: 8%;
    margin-top: -3%;
    margin-bottom: -3%;
  }

  .left_ul li{
    margin: 3%;
    padding: 0;
    min-width: 80px;
    font-size: 15px;
  }

  .left_ul li a{
    color: #777777;
    text-decoration:none;
  }

  .left_ul li a:hover{
    color: dodgerblue;
  }

  .left_ul li a.active{
    color: dodgerblue;
  }


  #leftnav li{
    margin: 0;
    padding: 0;
    min-width: 80px;
    text-align: center;
    background-color: white;
  }

  #leftnav li a{
    color: black;
  }

  #leftnav li.active a{
    color: white;
    background-color: black;
  }

  #leftnav li a:hover{
    background-color: black;
  }

  #leftnav li:hover a{
    color:white;
  }

  #left_sub_nav li{
    margin: 0;
    padding: 0;
    min-width: 80px;
    text-align: center;
    background-color: snow;
  }

  #left_sub_nav li a{
    color: black;
  }

  #left_sub_nav .active a{
    color: darkviolet;
  }

  #left_sub_nav li a:hover{
    color:darkviolet;
  }

</style>
