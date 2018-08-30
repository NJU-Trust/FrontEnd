<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;background-color: #D9F3FB;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0; margin-top:100px;">
      <div style="margin-bottom: 50px;text-align: center;">
        <h1>个性推荐</h1>
        <p>Trust平台根据您输入的金额及预期收益率，结合投资风险为您推荐的八个投资标的方案</p>
      </div>
      <div style="width:45%;float:left;margin-left:8%;">
        <div style="margin-left:5%;width:91%;">
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
        </div>
      </div>
      <div style="width:45%;float:left;">
        <div style="width:91%;">
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import investList from '@/components/investList.vue';
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
    export default {
      name: "recommend",
      components:{navi, footerBar, rightBar,investList},
    }
</script>

<style scoped>

</style>
