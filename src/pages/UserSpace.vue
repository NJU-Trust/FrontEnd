<template>
  <personalCenter paneltitle="基础信息">
    <div id="userinformation">
      <div class="col-xs-12 col-md-12">
        <h4><b class="user_info_title">个人资料</b><span style="font-size: smaller;"><a href="#">[编辑]</a></span></h4><hr/>
        <div class="col-xs-12 col-sm-9 placeholder">
          <div class="user_info">
            <div class="table-responsive">
              <table class="table" style="border: 0px solid transparent">
                <tbody>
                <tr>
                  <th>用户名</th>
                  <td>UserName</td>
                </tr>
                <tr>
                  <th>性别</th>
                  <td>男</td>
                </tr>
                <tr>
                  <th>年龄</th>
                  <td>18</td>
                </tr>
                <tr>
                  <th>账户等级</th>
                  <td>高级账号</td>
                </tr>
                <tr>
                  <th>手机号</th>
                  <td>12345678910</td>
                </tr>
                <tr>
                  <th>邮箱</th>
                  <td>123456789@126.com</td>
                </tr>
                <tr>
                  <th>注册时间</th>
                  <td>2018/7/27</td>
                </tr>
                <tr>
                  <th>学号</th>
                  <td>161220001</td>
                </tr>
                <tr>
                  <th>年级</th>
                  <td>大二</td>
                </tr>
                <tr>
                  <th>专业</th>
                  <td>临床医学</td>
                </tr>
                <tr>
                  <th>支付宝账号</th>
                  <td>123456789@126.com</td>
                </tr>
                <tr>
                  <th>现居地</th>
                  <td colspan="3" rowspan="2">江苏省南京市栖霞区仙林大道163号</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3 placeholder">
          <img src="/static/pic/photo.jpg" width="200" height="200" class="img-responsive" alt="User_pic">
          <h4>UserName</h4>
          <span class="text-muted">Advanced Account</span>
        </div>
      </div>
    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"userspace",
    components: {personalCenter},
    mounted() {

    },
    methods: {

    }
  }

</script>

<style scoped>

  /*----------用户信息查看-------------*/
  div.user_info{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 550px;
  }

  .user_info .table>tbody>tr>td{
    border:0px;
  }

  .user_info .table>tbody>tr>th{
    border:0px;
    min-width: 110px;
  }

  .user_credit caption>b{
    color: #333333;
    font-size: large;
  }

  .user_info_title{
    color: #505050;
  }

</style>
