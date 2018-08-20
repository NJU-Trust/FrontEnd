<template>
  <personalCenter paneltitle="普通验证">
    <div>
      <div class="chooseButton">
        <el-row>
          <el-button id="midcheck_btn" @click="change_mid" autofocus="true" >中级用户认证</el-button>
          <el-button id="adcheck_btn" @click="change_ad">高级用户认证</el-button>
        </el-row>
      </div>

      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">中级账号校验</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中级账号是会计职称的一种，会计职称分为会计初级职称、会计中级职称、会计高级职称。根据现行会计职称管理规定，通过中级会计职称考试后可以评定会计师职称。会计师指具有一定会计专业水平，经考核取得证书、可以接受当事人委托，承办有关审计、会计、咨询、税务等方面业务的会计人员，在西方国家，会计师同律师、医师、工程师一样，都是自由职业者。在中国，会计师，又是会计干部的技术职称之一。
        </p>
      </div>

      <div class="AdUsrInstruction" id="ad_info" style="display: none;margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">高级账号校验</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级账号是会计职称的一种，会计职称分为会计初级职称、会计中级职称、会计高级职称。根据现行会计职称管理规定，通过中级会计职称考试后可以评定会计师职称。会计师指具有一定会计专业水平，经考核取得证书、可以接受当事人委托，承办有关审计、会计、咨询、税务等方面业务的会计人员，在西方国家，会计师同律师、医师、工程师一样，都是自由职业者。在中国，会计师，又是会计干部的技术职称之一。
        </p>
      </div>
      <hr/>
      <div style="min-height: 300px">
        <div class="mid_checkpanel" id="mid_checkid" style="margin-top: 30px;margin-bottom: 30px">
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请上传校园卡照片</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">校园卡正面，能清楚看到头像，姓名以及学号</div>
            </el-upload>
          </div>
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请上传学生证照片</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">学生证首页，能清楚看清楚头像，姓名，院系以及学号</div>
            </el-upload>
          </div>
        </div>
        <div class="ad_checkpanel" id="ad_checkid" style="margin-top: 30px;margin-bottom: 30px;display: none;" >
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请上传手持身份证照片</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">手持身份证照片，身份证头像需高清</div>
            </el-upload>
          </div>
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请导入支付宝数据</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">上传支付宝的消费记录，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">会进行脱敏处理，不会泄露个人隐私</div>
            </el-upload>
          </div>
        </div>
      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>

    </div>

    <!--<form role="form">-->
      <!--<div class="form-group">-->
        <!--<label for="inputStuCard">点击此处上传校园卡照片</label>-->
        <!--<input type="file" id="inputStuCard">-->
        <!--<p class="help-block">校园卡正面，能清楚看到头像，姓名以及学号</p>-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label for="inputStuLicense">点击此处上传学生证</label>-->
        <!--<input type="file" id="inputStuLicense">-->
        <!--<p class="help-block">学生证首页，能清楚看清楚头像，姓名，院系以及学号</p>-->
      <!--</div>-->
      <!--<button type="submit" class="btn btn-default">提交</button>-->
    <!--</form>-->
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"normalcheck",
    components: {personalCenter},
    methods:{
      change_mid(){
        document.getElementById("ad_info").style.display = "none";
        document.getElementById("ad_checkid").style.display = "none";
        document.getElementById("mid_info").style.display = "inline";
        document.getElementById("mid_checkid").style.display = "inline";
      },
      change_ad(){
        document.getElementById("mid_info").style.display = "none";
        document.getElementById("mid_checkid").style.display = "none";
        document.getElementById("ad_info").style.display = "inline";
        document.getElementById("ad_checkid").style.display = "inline";
      },
    },
  }

</script>

<style scoped>

  .chooseButton{
    margin-top: 2%;
    margin-bottom: 5%;
  }
  /*.row{*/
    /*width:400px;*/
    /*padding: 10px;*/
  /*}*/

</style>
