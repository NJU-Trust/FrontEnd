<template>
  <guidePanel paneltitle="平台定位">
    <!--顶栏 -->
    <div clas="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="title">
        <h2 class="title">新手教程</h2>
        <p style="color: #777777;">欢迎来这里，请开始你的学习之旅！</p>
      </div>
    </div>

    <!--右边栏 -->
    <div>
      <right-bar></right-bar>
    </div>

    <!--正文-->    
    <div class="main" :style="note">
      <leftGuideBar></leftGuideBar>
      <div class="inform">
        <h1 class="panel-title" id="tmptitle">
          {{ paneltitle }}
        </h1>
      </div>
      <div>
      

      </div>
    </div>


     <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </guidePanel>
  
</template>

<script>
  import guidePanel from "../components/guidePanel";

  export default{
    name: "guide",
    components:{guidePanel},
    data(){
      return{
          
      }
    },
  }

</script>

<style>
  

</style>
