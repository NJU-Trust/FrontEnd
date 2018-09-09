<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;">
    <navi></navi>
    <div id="mainPic">
      <img src="/static/pic/标语.png" class="img-responsive" alt="Cinque Terre" style="padding-top: 15%;z-index: 0;width: 50%;margin-left: 25%;">
      <button type="button" class="mainButton" v-on:click="trustNow()">即刻trust</button>
      <img src="/static/pic/特色.png" class="img-responsive" alt="Cinque Terre" style="margin-top:2%;z-index: 0;width: 40%;margin-left: 30%;">
    </div>
    <rightBar></rightBar>

    <div style="width: 100%;padding-bottom: 50px;padding-top: 20px">
      <h2 style="width: 100%;text-align: center">全方位平台优势</h2>
      <p style="width: 100%;font-size: 16px;text-align: center;letter-spacing: 1px">从借款到投资，全面贴心设计，让您的体验更轻松愉悦</p>
      <div style="width: 100%;text-align: center;margin-top: 50px">
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/anonymity.png"/>
          <h4>保护隐私，放心借款</h4>
          <hr>
          <h5>借贷资金匿名化</h5>
          <p>减少同学间资金拆借的尴尬</p>
          <p>避免信息被有心人利用</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/finance.png"/>
          <h4>自动分析，财务无忧</h4>
          <hr>
          <h5>信息获取自动化</h5>
          <p>自动生成个人财务报表，节省精力</p>
          <p>减少信息不对称，便于客观比较</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/safety.png"/>
          <h4>综合评价，诚信为本</h4>
          <hr>
          <h5>全方位信用评级</h5>
          <p>硬性软性指标，综合评估信用额度</p>
          <p>打击欺诈拖欠，打造诚信氛围</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/chooseFree.png"/>
          <h4>精准推荐，自主选择</h4>
          <hr>
          <h5>交易对象可自选</h5>
          <p>分析投资偏好,个性化优质标推荐</p>
          <p>展示融资信息，支持条件筛选</p>
        </div>
      </div>
    </div>

    <announcement></announcement>


    <div style="width: 100%;text-align: center;margin-top: 60px">
      <h2>优质标量身推荐</h2>
      <br><br>
      <el-button type="plain" id="shiftRecommend"  v-on:click="shiftRecommend()" round>小额/大额推荐</el-button>
      <a href="/invest"><el-button type="plain" id="goInvest" style="margin-left: 60%" v-on:click="shiftRecommend()" round>进入投资中心</el-button></a>
      <br><br>
      <el-card id="recommend" style="height: 600px;width: 90%;margin-left:5%;overflow-y: auto;overflow-x: hidden">
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
        <invest-list></invest-list><br>
      </el-card>
    </div>


    <div style="width: 100%;text-align: center;margin-top: 60px">
      <h2>校友投资排行榜</h2>
      <top-range></top-range>
    </div>

    <footerBar style="float: bottom"></footerBar>

  </div>

</template>

<script>
    import navi from '@/components/navi.vue';
    import footerBar from '@/components/footerBar.vue';
    import rightBar from '@/components/rightBar.vue'
    import announcement from '@/components/announcement.vue'
    import topRange from '@/components/topRange.vue'
    import Login from "./login";
    import investList from '@/components/investList.vue'
    export default {
      name: "homepage",
      components:{Login, navi, footerBar, rightBar,announcement,topRange,investList},
      mounted: function () {
        $(".whole").css("background-color","transparent");
        $(".wholeNav").css("background-color","transparent");
        var winHeight=0;
        if (window.innerHeight)
          winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
          winHeight = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight)
          winHeight = document.documentElement.clientHeight;
        document.getElementById("mainPic").style.height= winHeight +"px";

      },
      beforeCreate: function () {
        localStorage.route="#homepage";
        localStorage.ifLogin=1;
      },
      methods: {
        trustNow:function () {
          if(localStorage.ifLogin==1){
            this.$router.push('/userSpace');
          }else{
            this.$router.push('/signup')
          }

        }

      }

    }
</script>

<style scoped>
  #mainPic{
    width:100%;
    height: 610px;
    background-image:url('/static/pic/background1.png');
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
    top:0;
  }

  .mainButton{
    border-radius: 30px;
    height: 50px;
    min-width: 160px;
    min-height: 60px;
    padding: 0px 0px;
    line-height: 50px;
    background-color: lightskyblue;
    color: white;
    border: none;
    font-size: 22px;
    font-family: "Microsoft YaHei UI";
    margin-top: 5%;
    width: 14%;
    margin-left: 43%;
    letter-spacing: 2px;
  }

  h2{
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 3px;
    padding-top: 50px;
  }

  .advantage-card{
    width: 22%;
    text-align: center;
    padding-bottom: 20px;
    display: inline-block;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }

  .advantage-card img{
    height:100px;
    margin-top: 30px;
  }

  .advantage-card h4{
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 10px;
  }

  hr{
    border-top:1px dashed lightgray;
  }

  .advantage-card h5{
    font-weight: bold;
    letter-spacing: 1px;
    color: lightskyblue;
    font-size: 16px;
    padding-bottom: 3px;
  }
  .advantage-card p{
    line-height: 10px;
  }
</style>
