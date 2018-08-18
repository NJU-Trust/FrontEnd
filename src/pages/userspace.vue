<template>
  <personalCenter title="基础信">
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
              <td colspan="3" rowspan="2">中华人民共和国 新疆维吾尔族自治区 吐鲁番盆地 四方市八卦镇</td>
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
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"userspace",
    components: {personalCenter}
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

</style>
