<template>
  <div>
    <el-steps :active="active">
      <el-step title="输入绑定手机"></el-step>
      <el-step title="输入验证码"></el-step>
      <el-step title="输入新邮箱"></el-step>
    </el-steps>

    <br/><br/>
    <div style="padding-right: 400px">
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="请输入您绑定的手机号码" v-if="active==0">
          <el-input v-model="phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="请输入您收到的验证码" v-if="active==1">
          <el-input v-model="verificationCode"></el-input>
        </el-form-item>
        <el-form-item label="请输入您的新邮箱" v-if="active==2">
          <el-input v-model="mailAddr"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="active==3">
      <label style="font-size: 18px">重新设置邮箱的相关邮件已发送，请登录{{ mailAddr }}并点击确认</label>
      <p>没收到？<a href="#">点击此处重新发送</a></p>
    </div>
    <br>
    <div v-show="active<3">
      <el-button style="margin-top: 12px;" @click="last">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modifymailbox",
    data() {
      return {
        active: 0,
        labelPosition: 'top',
        phoneNumber: '',
        verificationCode: '',
        mailAddr:'',
        verificationCode2:''
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      last() {
        if(this.active > 0) this.active--;
      }
    }
  }
</script>

<style scoped>

</style>
