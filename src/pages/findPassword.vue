<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo1_white.png" style="width:15%;position:absolute;top:15px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">找回密码</h3>
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入用户名/手机号/邮箱">
        <input id="messageCode" type="text" style="width:40%;margin-top: 20px;" placeholder="请输入验证码">
        <button id="sendMessage">获取验证码</button>
        <button id="signup" class="bigButton" v-on:click="findPw()">确认找回</button><br>
        <div style="width: 100%;text-align: center;margin-top: 10px">
          <a href="/login" style="font-size: 16px;color: yellow;">返回登录界面</a>
        </div>

      </div>

      <!--<div style="text-align: center; color: white;text-align: center;font-size: 20px; margin-top: 2%">-->
      <!--<span style="color: white;text-align: center;font-size: 22px;font-family: 'Microsoft YaHei UI'">Trust,让你的大学生活更美好</span><br>-->
      <!--<p style="color: white;text-align: center;display: block;padding-top: 40px">@怎么码都码不队</p>-->
      <!--<div style="margin-top: 0;" class="bott">-->
      <!--<a>关于我们</a>|<a>联系我们</a>|<a>微博</a>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <footer-bar style="margin-top: 100px"></footer-bar>
  </div>
</template>

<script>
    export default {
        name: "findPassword"
    }
</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/signupBackground.png');
    background-size: cover;
    background-attachment:fixed;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
  }

  .mainbox{
    -webkit-box-align: center;
    align-items: center;
    margin-top: 100px;
  }

  .mainbody{
    width:40%;
    height: 615px;
    position: relative;
    margin: auto;
    padding: 35px 30px;
    color: black;
    border-radius: 4px;
    background: black;
    box-shadow: 1px 1px 4px #767676;
    opacity: 0.6;
  }

  input[type="text"]{
    width:78%;
    margin-left: 11%;
    height:36px;
    min-height: 20px;
    border-radius: 5px;
    font-size: 14px;
    padding: 11px;
  }

  input[type="password"]{
    width:78%;
    margin-left: 11%;
    height:36px;
    min-height: 20px;
    border-radius: 5px;
    font-size: 14px;
    padding: 11px;
  }

  button{
    vertical-align: 10%;
    width:30%;
    height:35px;
    border-radius: 15px;
    font-size: 14px;
    margin-left: 5%;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bigButton{
    width:78%;
    height:35px;
    border-radius: 15px;
    font-size: 20px;
    margin-left: 11%;
    margin-top: 8%;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bott a{
    color: lightyellow;
  }
</style>
