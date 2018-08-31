<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">闲置市场</h2>
        <p style="color: #777777;">欢迎来这里，让您的闲置创造价值！</p>
      </div>
    </div>

    <!--左边栏-->
    <div>
      <leftTradeBar></leftTradeBar>
    </div>

    <!--正文-->
    <!--用于个人发布消息-->
    <div class="publishmes" style="position:relative;left:80px;top:-350px;">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" style="position:relative;left:140px;top:60px;">
        <el-form-item label="消息性质">
          <el-radio-group v-model="sizeForm.resource" size="small">
            <el-radio border label="失物招领"></el-radio>
            <el-radio border label="寻物启事"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="物品类别" style="position:relative;left:400px;top:-55px">
          <el-select v-model="sizeForm.region" placeholder="请选择物品类别" style="width:200px">
            <el-option label="校园卡" value="校园卡"></el-option>
            <el-option label="钥匙" value="钥匙"></el-option>
            <el-option label="证件" value="证件"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物品名称" style="position:relative;top:-55px">
          <el-input v-model="sizeForm.name"
                    style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item label="联系方式"  style="position:relative;left:400px;top:-107px">
          <el-input v-model="sizeForm.phone"
                    style="width:200px;"
                    placeholder="手机号，QQ号"></el-input>
        </el-form-item>
        <el-form-item label="物品图片" style="position:relative;top:-100px;">
          <el-upload class="upload-demo"
                     drag
                     action="https://jsonplaceholder.typicode.com/posts/"
                     multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="物品信息" style="position:relative;top:-100px;">
          <el-input type="textarea"
                    style="width:380px;"
                    v-model="sizeForm.desc"></el-input>
        </el-form-item>
        <el-form-item size="large" style="position:relative;top:-120px;left:500px;">
          <el-button type="primary" @click="onSubmit">发布</el-button>
        </el-form-item>
      </el-form>
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
  import LeftTradeBar from "../components/leftTradeBar";

  export default {
    name: "trade",
    components:{LeftTradeBar, leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          phone: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      };
    },
    methods: {
      onSubmit() {
        //提交的跳转函数功能还没写好
        console.log('submit!');
      }
    }

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
