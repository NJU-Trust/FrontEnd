<template>
  <div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>

    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace">个人中心</h2>
        <p style="color: #777777;">在此处，你可以查看个人财务统计和收藏情况，并进行信用验证</p>
      </div>
    </div>

    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative; background-color: #D9F3FB">
      <div class="container-fluid">
        <div class="row">
          <div style="height: 50px">
            <!--纯粹占个位置。。-->
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3">
            <left-user-bar></left-user-bar>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-9" id ="mainbody" >
            <userPanel paneltitle="基础信息">
              <slot></slot>
            </userPanel>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
  import navi from "../components/navi";
  import leftUserBar from "../components/leftUserBar";
  import FooterBar from "../components/footerBar";
  import userPanel from "../components/userPanel";

  export default {
    name:"personalCenter",
    components: {FooterBar, leftUserBar, navi, userPanel},
    props:['title']
  }
</script>

<style scoped>

  div.myspace{
    /*个人中心*/
    text-indent: 4.5%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .myspace p{
    font-size: 15px;
    color: #505050;
  }

</style>
