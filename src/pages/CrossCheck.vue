<template>
  <personalCenter paneltitle="关系验证">
    <div>
      <div class="AluUsrInstruction" id="ad_info" style="display: inline;margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">关系网验证</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;芝麻信用，是蚂蚁金服旗下独立的第三方征信机构，通过云计算、机器学习等技术客观呈现个人的信用状况，已经在信用卡、消费金融、融资租赁、酒店、租房、出行、婚恋、分类信息、学生服务、公共事业服务等上百个场景为用户、商户提供信用服务。
        </p>
      </div>
      <hr/>
      <div style="min-height: 300px">

      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"crosscheck",
    components: {personalCenter},
    methods:{

    },
  }

</script>

<style scoped>


</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftBI{ color: #777777 !important; }*/
  #leftCC { color: dodgerblue !important}
</style>
