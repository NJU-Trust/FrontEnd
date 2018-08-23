<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo1_white.png" style="width:15%;position:absolute;top:15px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="loginbody">
        <h3 style="color: white;float: top;" align="center">登录</h3>
        <input type="text" id="account" style="margin-top: 6%;" placeholder="账户/邮箱">
        <input id="password" type="password" style="margin-top: 8%;" align="center" placeholder="请输入密码"><br>
        <input type="checkbox" id="remember" style="display:inline;margin-left: 11%;margin-top: 13px;vertical-align: -3px">
        <p style="display: inline;color: white">记住密码</p>
        <a href="./findPassword" style="margin-left: 20%">忘记密码？</a>
        <a href="./signup" style="margin-left: 3%">立即注册</a>
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
      name: "login",
      methods: {
        login: function () {
          var ac=document.getElementById('account').value;
          var pw=document.getElementById('password').value;
          this.$axios.post("http://localhost:8000/api/auth/login", {"username": ac, "password": pw}).then(res => {
            var data=res.data;
            if(data.result){
              localStorage.ifLogin=1;
              localStorage.account=ac;
              localStorage.ifUnread = data.ifRead;
              localStorage.photoSrc = data.photoSrc;
              localStorage.ifAdmin=data.ifAdmin;
              localStorage.ifExamine=data.ifExamine;
              this.$router.replace('./');
            }else{
              alert("账户或密码错误");
            }

          });
        }
      }
    }

</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/loginBackground.jpg');
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
    width: 36%;
    height: 330px;
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
    height:13.5%;
    min-height: 20px;
    border-radius: 15px;
    font-size: 18px;
  }

  input[type="password"]{
    width:78%;
    margin-left: 11%;
    height:13.5%;
    min-height: 20px;
    border-radius: 15px;
    font-size: 18px;
  }

  button{
    width:78%;
    height:35px;
    border-radius: 15px;
    font-size: 20px;
    margin-left: 11%;
    margin-top: 3%;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bott a{
    color: lightyellow;
  }
</style>
