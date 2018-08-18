<template>
  <div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>

    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace">个人中心</h2>
        <p style="color: #777777;">在此处，你可以查看个人财务统计和收藏情况，并进行信用验证</p>
      </div>
    </div>

    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative; background-color: #D9F3FB">
      <div class="container-fluid">
        <div class="row">
          <div style="height: 50px">
            <!--纯粹占个位置。。-->
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3">
            <left-user-bar></left-user-bar>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-9" id ="mainbody" >
            <div class="panel-group">
              <div class="panel panel-default" id="mainpanel">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    基本信息
                  </h4>
                </div>
                <div>
                  <div class="panel-body">
                    <div class="row placeholders">
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
                        <img src="pic/user.jpg" width="200" height="200" class="img-responsive" alt="User_pic">
                        <h4>UserName</h4>
                        <span class="text-muted">Advanced Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
  import navi from "../components/navi";
  import leftUserBar from "../components/leftUserBar";
  import FooterBar from "../components/footerBar";
  export default {
    name:"userspace",
    components: {FooterBar, leftUserBar, navi}
  }
</script>

<style scoped>

  /*----------各个主模块样式-------------*/
  /*body{*/
    /*background-color: #D9F3FB;*/
  /*}*/

  #mainbody{
    background-color: #D9F3FB;/*和body的颜色保持相同（遇到了一些坑，用这个方法解决了一下）*/
    margin: 0;
    border: 0;
  }

  #mainbody .panel-group{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    margin-right: 5.2%;

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

  #mainpanel .panel-heading
  {
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    height: 50px;
  }

  #mainpanel .panel-title
  {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #48576a;
    background: white;
    padding-left: 5px;
    padding-top: 5px;
    position: relative;
  }

</style>
