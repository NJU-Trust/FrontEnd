<template>
  <div class="leftsidenav">
    <div class="left_menus">
      <p class="left_head" style="margin-top: 10px"><b>个人信息</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/UserSpace" id="leftAA" class="active" @click="setA">基本信息</a></li>
        <li><a href="/UserSpace/FinancialStanding">财务信息</a></li>
        <li><a href="/UserSpace/SchoolPerformance">校园表现</a></li>
      </ul>
      <hr/>
    </div>
    <div class="left_menus">
      <p class="left_head"><b>我的项目</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/UserSpace/ProjectRencently">最近项目</a></li>
        <li><a href="/UserSpace/ProjectFavorite">收藏项目</a></li>
        <li><a href="/UserSpace/ProjectHistory">历史项目</a></li>
      </ul>
      <hr/>
    </div>
    <div class="left_menus">
      <p class="left_head"><b>历史统计</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/UserSpace/LoanStatistics">融资统计</a></li>
        <li><a href="/UserSpace/InvestEarnings">投资收益</a></li>
      </ul>
      <hr/>
    </div>
    <div class="left_menus">
      <p class="left_head"><b>信用验证</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/UserSpace/NormalCheck" id="checkA" @click="setB">普通验证</a></li>
        <li><a href="/UserSpace/AdvancedCheck">完整验证</a></li>
        <li><a href="/UserSpace/AlumniCheck">校友验证</a></li>
        <li><a href="/UserSpace/CrossCheck">关系网检验</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
      name: "leftUserBar",
      methods:{
        setA: function () {
          this.$store.commit('newAuthor','基本信息')
        },
        setB: function () {
          this.$store.commit('newAuthor','普通验证');
          //document.getElementById("checkA").style.color = "#ffffff";
          //document.getElementById("temptitle").style.color="#ffffff";
        },
        setC: function () {
          document.getElementById("userinformation").style.display="none";
          // document.getElementById("tmptitle").color = "#ffffff";
          // this.$store.commit('newAuthor','财务统计');
        }
      }
  }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:700px;
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
