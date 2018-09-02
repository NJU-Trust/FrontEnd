<template>
  <personalCenter paneltitle="身份验证">
    <div style="background-image: url('/static/pic/decoration.png');background-size: 80% 80% ;">
      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">中级账号校验(校园验证)</h3>
        <p class="lead" style="font-size:18px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完善校园信息，您将体验更加多样的服务，尽享便携金融。
        </p>
      </div>
      <hr/>
      <el-tabs type="border-card" style="min-height: 600px;">
        <el-tab-pane label="基本资料" style="padding:20px;">
          <el-form ref="base_form" :rules="base_rules" :model="base_form" label-width="100px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="base_form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <template>
                <el-radio v-model="base_form.gender" label="男">男</el-radio>
                <el-radio v-model="base_form.gender" label="女">女</el-radio>
              </template>
            </el-form-item>
            <el-form-item label="出生日期" prop="date">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="base_form.date" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="身份证号" prop="id_card">
              <el-input v-model="base_form.id_card"></el-input>
            </el-form-item>
            <el-form-item label="学校" prop="university">
              <el-input v-model="base_form.university"></el-input>
            </el-form-item>
            <el-form-item label="学院" prop="institution">
              <el-input v-model="base_form.institution"></el-input>
            </el-form-item>
            <el-form-item label="专业" prop="major">
              <el-input v-model="base_form.major"></el-input>
            </el-form-item>
            <el-form-item label="支付宝账号" prop="alipay">
              <el-input v-model="base_form.alipay"></el-input>
            </el-form-item>

            <el-form-item style="float:right;">
              <el-button type="primary" @click="submitForm('base_form')">立即创建</el-button>
              <el-button @click="resetForm('base_form')">重置</el-button>
            </el-form-item>
          </el-form>

          <div style="min-height: 300px;padding:40px 0px 10px 0px;">
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
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="个性信息" style="padding:20px;">
          <el-form ref="selfinfo_form" :rules="selfinfo_rules" :model="selfinfo_form" label-width="100px">
            <div class="fail_subject" style="width:100%;">
              <el-form-item class="info_input" label="挂科数目" prop="fail">
                <el-input v-model.number="selfinfo_form.fail"></el-input>
              </el-form-item>

            </div>

          </el-form>
        </el-tab-pane>
      </el-tabs>

      <hr/>


    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"normalcheck",
    components: {personalCenter},
    data() {
      return {
        base_form: {
          name: '',
          gender: '男',
          date: '',
          id_card:'',
          university:'',
          major:'',
          institution:'',
          alipay:''
        },
        base_rules:{
          name:[
            {required:true, message:'请输入您的姓名',trigger:'blur'},
            {min:1,max:6, message:'长度在1-6之间', trigger:'blur'}
          ],
          gender:[
            {required:true}
          ],
          date:[
            {type:'date', required:true, message:'请选择出生日期', trigger:'change'}
          ],
          id_card:[
            {required:true, message:'请输入您的身份证',trigger:'blur'},
            {min:15,max:18, message:'长度为15或18', trigger:'blur'}
          ],
          university:[
            {required:true, message:'请输入您的大学',trigger:'blur'}
          ],
          major:[
            {required:true, message:'请输入您的专业',trigger:'blur'}
          ],
          institution:[
            {required:true, message:'请输入您的学院',trigger:'blur'}
          ],
          alipay:[
            {required:true, message:'请输入您的支付宝账号',trigger:'blur'}
          ]
        },
        selfinfo_form:{
          fail:'',
          school_award:'',
          city_award:'',
          province_award:'',
          country_award:'',
          income_description:'',
          volunteer:'',
        },
        selfinfo_rules:{
          fail:[
            {required:true,type: 'number', message: '必须为数字值'}
          ]
        },
        fileList: [
          {name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          ]
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }

</script>

<style scoped>
  .info_input{
    width:400px;
  }
</style>
