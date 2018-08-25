<template>
  <div class="UserDetail" >
    <adminNavi></adminNavi>
    <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">
    <div class="userdetail" style="padding:50px 0px 0px 0px;position: absolute;width: 100%;">

      <div class="base-info" style="padding:10px 0px 0px 100px;">

        <label>用户名称：</label>
        <label>XXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>信用评级：</label>
        <label>XXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label >手机号：</label>
        <label>XXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>邮箱：</label>
        <label>XXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>借款状态：</label>
        <label>XXXXXXX</label>
        <router-link to="/usermanage">
          <button type="button" class="returnButton">返回列表</button>
        </router-link>
      </div>
      <br/>
      <br/>
      <div class="append-info" style="padding:20px 0px 0px 100px;">
        <label>标的信息</label>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label>投资历史</label>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label>个人财务</label>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>


    </div>

    <footerBar></footerBar>
  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  export default {
    name: "userdetail",
    components:{adminNavi,footerBar},
  }
</script>


<style scoped>
  .userdetail{
    height: 572px;
    min-width: 160px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 10px;
    background-color:rgba(173,216,230,0.5);
    color: white;
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 60px;
    position: absolute;
    letter-spacing: 2px;
  }

  .returnButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 40px;
    padding: 0px 0px;
    line-height: 30px;
    background-color: lightskyblue;
    color: white;
    border: none;
    font-size: 18px;
    font-family: "Microsoft YaHei UI";
    top: 530px;
    position: absolute;
    width: 14%;
    left: 43%;
    letter-spacing: 2px;
  }

</style>
