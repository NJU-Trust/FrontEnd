<template>
  <personalCenter paneltitle="财务验证">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="高级账户验证" name="first">
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="校园信息上传" name="second">
        <div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="学校分类" name="1">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="16">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="专业情况	" name="2">
            </el-collapse-item>
            <el-collapse-item title="受教育情况	" name="3">
            </el-collapse-item>
            <el-collapse-item title="经济来源	" name="4">
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"advancedcheck",
    components: {personalCenter},
    data() {
      return {
        activeName: 'first',
        activeNames: ['1'],
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(val) {
        console.log(val);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }

</script>

<style scoped>

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftBI,#leftCC{ color: #777777 !important; }*/
  #leftAC{ color: dodgerblue !important}
</style>
