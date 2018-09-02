<template>
  <personalCenter paneltitle="身份验证">
    <div>
      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">中级账号校验</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中级账号是会计职称的一种，会计职称分为会计初级职称、会计中级职称、会计高级职称。根据现行会计职称管理规定，通过中级会计职称考试后可以评定会计师职称。会计师指具有一定会计专业水平，经考核取得证书、可以接受当事人委托，承办有关审计、会计、咨询、税务等方面业务的会计人员，在西方国家，会计师同律师、医师、工程师一样，都是自由职业者。在中国，会计师，又是会计干部的技术职称之一。
        </p>
      </div>
      <hr/>
      <div style="min-height: 300px">
        <div class="mid_checkpanel" id="mid_checkid" style="margin-top: 30px;margin-bottom: 30px">
          <div style="min-height: 300px;">
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
          <div style="min-height: 300px;">
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

        </div>
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
    name:"normalcheck",
    components: {personalCenter},
    methods:{


    },
  }

</script>

<style scoped>

</style>

<style>
  #leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftBI,#leftAC,#leftCC{ color: #777777 !important; }
  #leftNC { color: dodgerblue !important}
</style>
