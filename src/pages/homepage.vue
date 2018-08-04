<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;">
    <div style="width: 100%;float: top;">
      <navi></navi>
      <div>
        <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">
        <img src="/static/pic/标语.png" class="img-responsive" alt="Cinque Terre" style="text-align:center;top: 180px;z-index: 0;position: absolute;width: 50%;left: 25%;">
        <button type="button" class="mainButton">即刻trust</button>
        <img src="/static/pic/特色.png" class="img-responsive" alt="Cinque Terre" style="text-align:center;top: 490px;z-index: 0;position: absolute;width: 40%;left: 30%;">
      </div>
    </div>
    <footerBar style="float: bottom"></footerBar>
  </div>

</template>

<script>
    import navi from '@/components/navi.vue';
    import footerBar from '@/components/footerBar.vue';
    export default {
      name: "homepage",
      components:{navi,footerBar},
      mounted: function () {
        $(".whole").css("background-color","transparent");
        $(".wholeNav").css("background-color","transparent");
      }

    }
</script>

<style scoped>
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
    top: 390px;
    position: absolute;
    width: 14%;
    left: 43%;
    letter-spacing: 2px;
  }
</style>
