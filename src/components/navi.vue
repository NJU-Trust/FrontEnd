<template>
  <div class="whole" id="navi" style="width:100%;">
    <a href="./"><img src="/static/pic/logo1_silver.png" id="naviLogo" class="img-responsive logo" alt="Cinque Terre"></a>

    <nav class="navbar navbar-inverse wholeNav">
      <div class="container-fluid" style="width: 100%">
        <div class="collapse navbar-collapse" id="myNavbar" style="display: inline-block;font-size: 16px;width: 100%">
          <ul class="nav navbar-nav" id="nav" style="width: 100%">
            <li><a id="invest" href="./invest">投资</a></li>
            <li><a id="loan" href="/loan">借款</a></li>
            <li><a id="trade" href="/trade">交易</a></li>
            <li><a id="notice" href="/notice">发布</a></li>
            <li><a id="guide" href="./guide">教程</a></li>
            <li id="last" style="float: right;"><a id="signup" href="./signup">注册</a></li>
            <li id="secondLast" style="float: right;"><a id="login" href="/login">登录</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="manageAccount">
      <button style="background-color: lightskyblue">用户模式</button>
      <button>管理模式</button>
      <button>审核模式</button>
      <button v-on:click="logout">退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navi',
  mounted: function () {
    $(localStorage.route).css("color","dodgerblue");
    if(localStorage.route=="#homepage"){
      document.getElementById("naviLogo").src="/static/pic/logo1_white.png";
    }


    localStorage.ifLogin = false;
    localStorage.ifUnread = true;
    localStorage.photoSrc = '/static/pic/photo.jpg';
    localStorage.account="test";

    $("#manageAccount").css('display','none');
    if (localStorage.ifLogin==true){
      document.getElementById('last').removeChild(document.getElementById('signup'));
      document.getElementById('secondLast').removeChild(document.getElementById('login'));
      var personalCenter = document.createElement('a');
      personalCenter.innerText = '个人中心';
      personalCenter.href = './personalCenter.html';
      var newLi = document.createElement('li');
      newLi.style.cssFloat = 'right';
      $('#nav').append(newLi);
      newLi.appendChild(personalCenter);

      var message = document.createElement('img');
      message.className = 'message';
      message.src = '/static/pic/message_white.png';
      document.getElementById('secondLast').appendChild(message);
      if (localStorage.ifUnread){
        message.src = '/static/pic/message_yellow.png';
      }

      $('#last').hover(
        function(){
          $('#last').css('border-bottom','3px solid transparent');
          $('#last').css('border-top','3px solid transparent');
        },
        function(){
          $('#last').css('border-bottom','3px solid transparent');
          $('#last').css('border-top','3px solid transparent');
        }
      );
      $('#secondLast').hover(
        function(){
          $('#secondLast').css('border-bottom','3px solid transparent');
          $('#secondLast').css('border-top','3px solid transparent');
        },
        function(){
          $('#secondLast').css('border-bottom','3px solid transparent');
          $('#secondLast').css('border-top','3px solid transparent');
        }
      );
      $('.message').hover(
        function(){
          message.src = '/static/pic/message_blue.png';
        },
        function(){
          if(localStorage.ifUnread){
            message.src = '/static/pic/message_yellow.png';
          }else{
            message.src = '/static/pic/message_white.png';
          }
        }
      );

      var photo = document.createElement('img');
      photo.id="photo";
      photo.className = 'photo';
      photo.src = localStorage.photoSrc;
      document.getElementById('last').appendChild(photo);
      photo.onmouseover=function(e){
        $("#manageAccount").css('display','inherit');
        $(navi).mouseleave(function (e) {
          $("#manageAccount").css('display','none');
        })
      }
    }
  },

  methods: {
    logout: function () {
      this.$axios.get("/logout", {"account": 123}).then(res => {
        this.$router.replace('/index');
      });
    },

  }
}
</script>



<style scoped>
  .whole{
    padding: 0;
    position: absolute;
    background-color: black;
    z-index: 1;
  }
  .logo{
    max-width: 9%;
    display: inline-block;
    margin-left: 8%;
    margin-top: -48px;
  }
  .wholeNav{
    border-color: transparent;
    display: inline-block;
    min-width: 80%;
    min-height: 30px;
    margin-top: 5px;
    margin-bottom: 0;
    background-color: black;
  }



</style>

<style>
  #nav li{
    min-width: 90px;
    text-align: center;
    border-top:3px solid transparent;
    border-bottom:3px solid transparent;
  }

  #nav li:hover{
    border-top:3px solid dodgerblue;
    border-bottom:3px solid dodgerblue;
  }

  #nav li:hover a{
    color:dodgerblue;
  }

  .message{
    height:25px;
    width: auto;
    margin-top: 10px;
    cursor: pointer;
  }

  .message:hover{
    height:25px;
    width: auto;
    margin-top: 10px;
  }

  .photo{
    margin-top: 4px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  #nav li a{
    color: white;
  }

  #manageAccount{
    background-color: ghostwhite;
    border-color: #efefef;
    position: absolute;
    top:51px;
    right: 4%;
    width: 10%;
    display: none;
    z-index: 2;
  }

  #manageAccount button{
    background-color: ghostwhite;
    border: 0.5px #efefef solid;
    width: 100%;
  }

  #manageAccount button:hover{
    background-color: lightblue;
    border: 0.5px #efefef solid;
    width: 100%;
  }

</style>
