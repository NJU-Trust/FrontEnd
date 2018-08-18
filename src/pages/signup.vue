<template>
  <div class="container">
    <img src="/static/pic/logo1_white.png" style="width:15%;position:absolute;top:15px;left: 8%;" align=center><br>
    <div class="mainbox">
      <div class="loginbody">
        <h3 style="color: white;float: top;" align="center">登录</h3>
        <input type="text" id="account" style="margin-top: 6%;" placeholder="账户/邮箱">
        <input id="password" type="password" style="margin-top: 8%;" align="center" placeholder="请输入密码"><br>
        <input type="checkbox" id="remember" style="display:inline;margin-left: 11%;margin-top: 13px;vertical-align: -3px">
        <p style="display: inline;color: white">记住密码</p>
        <a href="./findPassword.html" style="margin-left: 20%">忘记密码？</a>
        <a href="./signup.html" style="margin-left: 3%">立即注册</a>
        <button id="login" v-on:click="login()">登录</button>
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

</style>
