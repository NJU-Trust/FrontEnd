<template>
  <div class="UserDetail" >
    <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">
    <div class="userdetail" style="padding:50px 0px 0px 0px;position: absolute;width: 100%;">

      <div class="base-info" style="padding:10px 0px 0px 100px;">

        <label>用户名称：</label>
        <label>XXXXXXXXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>用户等级：</label>
        <label>XXXXXXXXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label >手机号：</label>
        <label>XXXXXXXXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>邮箱：</label>
        <label>XXXXXXXXXXXXXX</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <button type="button" class="returnButton">返回列表</button>
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
        <label>投资信息</label>
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
      </div>


    </div>



  </div>



</template>

<script>
  export default {
    name: "userdetail",
  }
</script>


<style scoped>
  .userdetail{
    height: 550px;
    min-width: 160px;
    min-height: 60px;
    padding: 0px 0px;
    line-height: 10px;
    background-color:rgba(0,50,200,0.3);
    color: white;
    border: none;
    font-size: 13px;
    font-family: "Microsoft YaHei UI";
    top: 80px;
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
    top: 550px;
    position: fixed;
    width: 14%;
    left: 43%;
    letter-spacing: 2px;
  }

</style>
