<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo1_white.png" style="width:15%;position:absolute;top:15px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="loginbody">
        <h3 style="color: white;float: top;" align="center">注册</h3>
        <input id="phone" type="text" style="margin-top: 20px;" placeholder="请输入手机号码">
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入邮箱地址">
        <input id="nickname" type="text" style="margin-top: 20px;" align="center" placeholder="请输入昵称，长度在2到15个字符之间"><br>
        <input id="password" type="password" style="margin-top: 20px;" align="center" placeholder="请输入密码，长度在6到20个字符之间"><br>
        <input id="passwordConfirm" type="password" style="margin-top: 20px;" align="center" placeholder="确认密码"><br>
        <input id="messageCode" type="text" style="width:40%;margin-top: 20px;" placeholder="请输入短信验证码">
        <button id="sendMessage">获取验证码</button>
        <input id="emailCode" type="text" style="width:40%;margin-top: 20px;" placeholder="请输入邮箱验证码">
        <button id="sendEmail">获取验证码</button>
        <button id="signup" class="bigButton" v-on:click="signup()">注册</button><br>
        <div style="width: 100%;text-align: center;margin-top: 10px">
          <a href="/login" style="font-size: 16px;color: yellow;">已有账号，立即登录</a>
        </div>

      </div>

      <div style="text-align: center; color: white;text-align: center;font-size: 20px; margin-top: 2%">
        <span style="color: white;text-align: center;font-size: 22px;font-family: 'Microsoft YaHei UI'">Trust,让你的大学生活更美好</span><br>
        <p style="color: white;text-align: center;display: block;padding-top: 40px">@怎么码都码不队</p>
        <div style="margin-top: 0;" class="bott">
          <a>关于我们</a>|<a>联系我们</a>|<a>微博</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "signup"
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
    padding-bottom: 0;
  }

  .mainbox{
    -webkit-box-align: center;
    align-items: center;
    margin-top: 100px;
  }

  .loginbody{
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
