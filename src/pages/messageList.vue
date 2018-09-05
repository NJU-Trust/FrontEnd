<template>
  <div class="container">
    <navi></navi>
    <div class="myspace">
      <h2>通知中心</h2>
      <p style="color: #777777;">在这里，您可以浏览查看借款进展、投资、交易状况、发布情况等通知消息</p>
    </div>
    <el-card  class="box-card">

    </el-card>

  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'

    export default {
        name: "messageList",
      components:{navi, footerBar, rightBar},
      mounted: function () {
        localStorage.route="#message";
        $('#message').attr('src', '/static/pic/message_blue.png');
      }

    }
</script>

<style scoped>
  .container {
    width:100%;
    background: #D9F3FB
  ;
    /*background-image:url('/static/pic/messageBackground.png');*/
    /*background-size: cover;*/
    /*background-attachment:fixed;*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    padding: 0;
    height: 600px;
  }

  .myspace {
    text-indent: 6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12),
    0 1px 6px 0 rgba(0, 0, 0, .12);
    border-radius: 3px;
    margin-top: 69px;
  }
</style>
