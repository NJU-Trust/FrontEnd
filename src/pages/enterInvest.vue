<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;margin:0;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="square">
      <br><br><br>
      <p class="slogan">Trust us, receive fond</p><br><br><br>
      <div class="col-md-3 project">
        <input type="button" value="小额短期投资" class="button" onclick="location.href='/largeInvest'"/>
      </div>
      <div class="col-md-3 project">
        <input type="button" value="大额长期投资" class="button" onclick="location.href='/largeInvest'"/>
      </div>
    </div>
    <div style="float:bottom; padding:0;margin-top:200px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  export default {
    name: "enterInvest",
    components:{navi, footerBar, rightBar},
    data(){
      return{
        back:{
          backgroundImage:"url(" + require("../../static/pic/dahuo.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% auto"
        }
      }
    }
  }
</script>

<style scoped>
  .square{
    margin-top:120px;
    margin-left:12.5%;
    width:75%;
    height:500px;
    background-color:rgba(111,109,109,0.6);
  }
  .slogan{
    color:white;
    text-align: center;
    font-size:40px;
  }
  .project{
    float:left;
    margin-left:15%;
    height:50%;
    background-color:rgba(51,50,50,0.6);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .button{
    background: #333232;
    width:100%;
    height: 89%;
    margin-top: 5.5%;
    border:transparent;
    color:white;
    font-size:20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .button:hover{
    background:#E4E9F3;
    color:black;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
</style>
