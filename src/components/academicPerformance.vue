<template>
  <div id="userinformation">
    <el-row :gutter="2">
      <el-col :span="12">
        <div id="myradar" style="width: 400px;height: 410px"></div>
      </el-col>
      <el-col :span="9">
        <br/>
        <br/>
        <br/>
        <br/>
        <p style="font-size: 24px">Trust作为贴心的校园金融助手，将您的在校表现纳入我们的信用评价体系，旨在为您提供全面而精准的服务。</p>
        <p style="font-size: 24px">美好校园生活，Trust伴您成就卓越之旅！</p><br/>
        <!--<img class="img-responsive" src="../../static/pic/perform.png">-->
      </el-col>
    </el-row>
    <div class="user_credit">
      <div class="table-responsive" style="text-indent: 5px">
        <table class="table table-bordered">
          <!--<caption><b>您的非结构化信息如下</b></caption>-->
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">基本情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th width="280px">学校分类</th>
            <td>985</td>
            <th>专业情况</th>
            <td>综合</td>
          </tr>
          <tr>
            <th>受教育情况</th>
            <td>本科</td>
            <th>经济来源</th>
            <td>家庭供给</td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">学习情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>学习成绩</th>
            <td>前20%</td>
            <th>挂科数目</th>
            <td>0</td>
          </tr>
          <tr>
            <th>奖学金情况</th>
            <td colspan="3">校级</td>
          </tr>
          <tr>
            <th>科研竞赛获奖情况</th>
            <td colspan="3">校级</td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">奖惩情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>奖励情况</th>
            <td colspan="3">国家级 省级 市级 校级 院级 技能证书</td>
          </tr>
          <tr>
            <th>违纪或处罚等不良信息</th>
            <td colspan="3">国家级 省级 市级 校级 院级 技能证书</td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">信誉状况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th colspan="1">学费及住宿费缴纳状况</th>
            <td colspan="3">全交</td>
          </tr>
          <tr>
            <th colspan="1">图书馆借阅还书情况</th>
            <td colspan="3">全归还</td>
          </tr>
          <tr>
            <th colspan="1">考试作弊的信息</th>
            <td colspan="3">无作弊记录</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr/>
    <div id="interGraph">
      <div id="myGraph" style="height: 600px;width: 88%;"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "academicPerformance"
    }
</script>

<style scoped>

</style>
