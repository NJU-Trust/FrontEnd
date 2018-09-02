<template>
  <personalCenter paneltitle="身份验证">
    <div style="background-image: url('/static/pic/decoration.png');">
      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">中级账号校验(校园验证)</h3>
        <p class="lead" style="font-size:18px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完善校园信息，您将体验更加多样的服务，尽享便携金融。
        </p>
      </div>
      <hr/>
      <label>start</label>

      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        style="font-size: 10px; color:transparent;"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>


      <label>end</label>
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
          <el-form ref="selfinfo_form" :rules="selfinfo_rules" :model="selfinfo_form" label-width="130px">
            <div class="fail_subject" style="width:100%;">
              <el-form-item class="info_input" label="挂科数目" prop="fail">
                <el-input v-model.number="selfinfo_form.fail"></el-input>
              </el-form-item>
            </div>
            <div class="reward" style="width:600px">
              <el-form-item class="info_input" label="获奖情况" style="width:640px">
                <!--school-->
                <div class="school" style="padding: 0px 0px 10px 0px;">
                  <el-form-item
                    v-for="(school_reward, index) in selfinfo_form.school_rewards"
                    :label="'校级奖项名称' + index"
                    :key="school_reward.key"
                    :prop="'school_rewards.' + index + '.value'"
                    :rules="{
                  required: true, message: '校级奖项名称不能为空', trigger: 'blur'
                  }" >
                    <div style="display: flex;width:400px;">
                      <el-input v-model="school_reward.value"></el-input>
                      <el-label>&nbsp;&nbsp;&nbsp;&nbsp;</el-label>
                      <el-button @click.prevent="remove_school_reward(school_reward)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item style="float:left;" >
                    <el-button @click="add_school_reward">新增校级奖项名称</el-button>
                  </el-form-item>
                  <br/>
                </div>

                <!--city-->
                <div class="city" style="padding: 0px 0px 10px 0px;">
                  <el-form-item
                    v-for="(city_reward, index) in selfinfo_form.city_rewards"
                    :label="'市级奖项名称' + index"
                    :key="city_reward.key"
                    :prop="'city_rewards.' + index + '.value'"
                    :rules="{
                  required: true, message: '市级奖项名称不能为空', trigger: 'blur'
                  }" >
                    <div style="display: flex;width:400px;">
                      <el-input v-model="city_reward.value"></el-input>
                      <el-label>&nbsp;&nbsp;&nbsp;&nbsp;</el-label>
                      <el-button @click.prevent="remove_city_reward(city_reward)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item style="float:left;">
                    <el-button @click="add_city_reward">新增市级奖项名称</el-button>
                  </el-form-item>
                  <br/>
                </div>

                <!--province-->
                <div class="province" style="padding:0px 0px 10px 0px;">
                  <el-form-item
                    v-for="(province_reward, index) in selfinfo_form.province_rewards"
                    :label="'省级奖项名称' + index"
                    :key="province_reward.key"
                    :prop="'province_rewards.' + index + '.value'"
                    :rules="{
                  required: true, message: '省级奖项名称不能为空', trigger: 'blur'
                  }" >
                    <div style="display: flex;width:400px;">
                      <el-input v-model="province_reward.value"></el-input>
                      <el-label>&nbsp;&nbsp;&nbsp;&nbsp;</el-label>
                      <el-button @click.prevent="remove_province_reward(province_reward)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item style="float:left;">
                    <el-button @click="add_province_reward">新增省级奖项名称</el-button>
                  </el-form-item>
                  <br/>
                </div>

                <!--country-->
                <div class="country" style="padding:0px 0px 10px 0px;">
                  <el-form-item
                    v-for="(country_reward, index) in selfinfo_form.country_rewards"
                    :label="'国家级奖项名称' + index"
                    :key="country_reward.key"
                    :prop="'country_rewards.' + index + '.value'"
                    :rules="{
                  required: true, message: '国家级奖项名称不能为空', trigger: 'blur'
                  }" >
                    <div style="display: flex;width:400px;">
                      <el-input v-model="country_reward.value"></el-input>
                      <el-label>&nbsp;&nbsp;&nbsp;&nbsp;</el-label>
                      <el-button @click.prevent="remove_country_reward(country_reward)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item style="float:left;">
                    <el-button @click="add_country_reward">新增国家级奖项名称</el-button>
                  </el-form-item>
                  <br/>
                </div>


              </el-form-item>
            </div>
            <el-form-item label="收入来源" prop="income">
              <el-checkbox-group v-model="selfinfo_form.income">
                <el-checkbox label="家庭供给" name="type"></el-checkbox>
                <el-checkbox label="助学贷款" name="type"></el-checkbox>
                <el-checkbox label="奖学金" name="type"></el-checkbox>
                <el-checkbox label="兼职收入" name="type"></el-checkbox>
                <el-checkbox label="投资偶然获得" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item class="info_input" label="其他收入来源说明" prop="income_description">
              <el-input type="textarea" v-model="selfinfo_form.income_description" style="width:400px"></el-input>
            </el-form-item>
            <el-form-item class="info_input" label="志愿时长：小时" prop="volunteer">
              <el-input v-model.number="selfinfo_form.volunteer"></el-input>
            </el-form-item>

            <div class="qualifications" >
              <el-form-item class="info_input" label="获得证书" style="width:640px">
                <!--qualifications-->
                <div class="qualifications" style="padding:0px 0px 10px 0px;">
                  <el-form-item
                    v-for="(self_qualification, index) in selfinfo_form.self_qualifications"
                    :label="'获得证书名称' + index"
                    :key="self_qualification.key"
                    :prop="'self_qualifications.' + index + '.value'"
                    :rules="{
                  required: true, message: '证书名称不能为空', trigger: 'blur'
                  }" >
                    <div style="display: flex;width:400px;">
                      <el-input v-model="self_qualification.value"></el-input>
                      <el-label>&nbsp;&nbsp;&nbsp;&nbsp;</el-label>
                      <el-button @click.prevent="remove_self_qualification(self_qualification)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item style="float:left;">
                    <el-button @click="add_self_qualification">新增证书名称</el-button>
                  </el-form-item>
                  <br/>
                </div>
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
          income:[],
          income_description:'',
          volunteer:'',
          school_rewards: [{
            value: ''
          }],
          city_rewards: [{
            value: ''
          }],
          province_rewards: [{
            value: ''
          }],
          country_rewards: [{
            value: ''
          }],
          self_qualifications: [{
            value: ''
          }],
        },
        selfinfo_rules:{
          fail:[
            {required:true,type: 'number', message: '必须为数字值'}
          ],
          volunteer:[
            {required:true,type: 'number', message: '必须为数字值'}
          ],
          income:[
            {required:true, message: '收入来源不能为空'}
          ]
        },
        //img
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
      },
      add_school_reward() {
        this.selfinfo_form.school_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_school_reward(item) {
        var index = this.selfinfo_form.school_rewards.indexOf(item)
        if (index !== -1) {
          this.selfinfo_form.school_rewards.splice(index, 1)
        }
      },
      add_city_reward() {
        this.selfinfo_form.city_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_city_reward(item) {
        var index = this.selfinfo_form.city_rewards.indexOf(item)
        if (index !== -1) {
          this.selfinfo_form.city_rewards.splice(index, 1)
        }
      },
      add_province_reward() {
        this.selfinfo_form.province_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_province_reward(item) {
        var index = this.selfinfo_form.province_rewards.indexOf(item)
        if (index !== -1) {
          this.selfinfo_form.province_rewards.splice(index, 1)
        }
      },
      add_country_reward() {
        this.selfinfo_form.country_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_country_reward(item) {
        var index = this.selfinfo_form.country_rewards.indexOf(item)
        if (index !== -1) {
          this.selfinfo_form.country_rewards.splice(index, 1)
        }
      },
      add_self_qualification() {
        this.selfinfo_form.self_qualifications.push({
          value: '',
          key: Date.now()
        });
      },
      remove_self_qualification(item) {
        var index = this.selfinfo_form.self_qualifications.indexOf(item)
        if (index !== -1) {
          this.selfinfo_form.self_qualifications.splice(index, 1)
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
  }

</script>

<style scoped>
  .info_input{
    width:400px;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftBI,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftNC { color: dodgerblue !important}
</style>
