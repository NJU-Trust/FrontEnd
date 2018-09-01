<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布平台 -- 发布消息</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--左边栏-->
    <div>
      <leftInformationbar></leftInformationbar>
    </div>

    <!--正文-->
    <div class="back">
      <div class="publishmes" style="position:relative;left:80px;top:-350px;">
      <el-form :rules="rules" ref="ruleForm" :model="sizeForm" label-width="80px" size="mini" style="position:relative;left:140px;top:60px;">
          <el-form-item label="消息性质" prop="type">
            <el-radio-group v-model="sizeForm.type" size="small">
              <el-radio border label="失物招领"></el-radio>
              <el-radio border label="寻物启事"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="物品类别" prop="itemtype" style="position:relative;left:400px;top:-55px">
            <el-select v-model="sizeForm.region"  placeholder="请选择物品类别" style="width:200px">
              <el-option label="校园卡" value="校园卡"></el-option>
              <el-option label="钥匙" value="钥匙"></el-option>
              <el-option label="证件" value="证件"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物品名称" prop="name" style="position:relative;top:-55px">
            <el-input v-model="sizeForm.name"
                      palceholder="请输入物品名称"
                      style="width:200px;"></el-input>
          </el-form-item>
          <el-form-item label="联系方式"
                        prop="phone"
                        style="position:relative;left:400px;top:-107px">
            <el-input v-model.number="sizeForm.phone"
                      type="phone"
                      style="width:200px;"
                      placeholder="QQ号"></el-input>
          </el-form-item>
          <el-form-item label="物品图片" prop="pic" style="position:relative;top:-100px;">
            <el-upload class="upload-demo"
                       drag
                       action="https://jsonplaceholder.typicode.com/posts/"
                       multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="物品信息" prop="desc" style="position:relative;top:-100px;">
            <el-input type="textarea"
                      style="width:360px"
                      minRows="1"
                      maxRows="3"
                      autosize
                      placeholder="请输物品的详细信息"
                      v-model="sizeForm.desc"></el-input>
          </el-form-item>
          <el-form-item size="large" style="position:absolute;top:400px;left:500px;">
            <el-button type="primary" @click="onSubmit()">发布</el-button>
          </el-form-item>
        </el-form>
    </div>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>

  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftInformationbar from "@/components/leftInformationbar.vue"

  export default {
    name: "notice",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        sizeForm: {
          name: '',
          itemtype: '',
          type:'',
          phone: '',
          pic: '',
          mestype: [],
          desc: ''
        },
        rules: {
          mestype: [
            {required: true, message: '请选择消息类型', trigger: 'change' }
          ],
          pic: [
            { required: true, message: '请上传相关图片', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          itemtype: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写物品详细信息', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '联系方式不能为空'},
            { type: 'number', message: '联系方式必须为数字'},
          ]
        },
      };
    },
    methods: {
      onSubmit() {
        this.$confirm('确认发布这条信息吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发布成功!'
          });
          this.$router.push('/notice/mesunderway');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }

  }
</script>

<style scoped>

  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height: 200px;
    display:flex;
  }

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
  /*主体样式*/
  .publishmes{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:550px;
    width:1000px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

</style>
