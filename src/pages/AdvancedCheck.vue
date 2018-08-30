<template>
  <personalCenter paneltitle="财务验证">
    <div>
      <div class="AdUsrInstruction" id="ad_info" style="display: inline;margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">高级账号校验</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级账号是会计职称的一种，会计职称分为会计初级职称、会计中级职称、会计高级职称。根据现行会计职称管理规定，通过中级会计职称考试后可以评定会计师职称。会计师指具有一定会计专业水平，经考核取得证书、可以接受当事人委托，承办有关审计、会计、咨询、税务等方面业务的会计人员，在西方国家，会计师同律师、医师、工程师一样，都是自由职业者。在中国，会计师，又是会计干部的技术职称之一。
        </p>
      </div>
      <hr/>
      <div style="min-height: 300px">
        <div class="ad_checkpanel" id="ad_checkid" style="margin-top: 30px;margin-bottom: 30px;display: inline;" >
          <div style="position: relative">
            <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
              <label>请导入银行卡数据</label><br>
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                <div class="el-upload__tip" slot="tip">银行卡正面照片，需能看清卡号</div>
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
      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>
      <hr/>
      <div>
        <h3 style="text-indent: 0px">非机构化数据提交</h3>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="学校分类" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="专业情况	" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="受教育情况	" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="经济来源	" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"advancedcheck",
    components: {personalCenter},
    methods:{

    },
  }

</script>

<style scoped>

</style>
