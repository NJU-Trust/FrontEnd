<template>
  <personalCenter paneltitle="校园表现">
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
    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/radar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  //引入主题
  require('echarts/theme/infographic')


  export default {
    name:"schoolperformance",
    components: {personalCenter},
    mounted() {
      this.drawRadar();
    },
    methods: {
      drawRadar() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myradar'),'infographic')
        // 绘制图表
        myChart.setOption({
          title: {
            text: '校园表现'
          },
          tooltip: {},
          legend: {
            data: ['您的表现', '注册用户平均表现']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '学校', max: 100},
              { name: '学历', max: 100},
              { name: '社交情况', max: 100},
              { name: '获奖情况', max: 100},
              { name: '成绩', max: 100}
            ]
          },
          series: [{
            name: '您的表现 VS 平均表现',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : [80, 76, 65, 89, 77, 66],
                name : '您的表现'
              },
              {
                value : [60, 70, 45, 80, 85, 27],
                name : '注册用户平均表现'
              }
            ]
          }]
        });
      }
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

  div.user_credit{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 250px;
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

<style>
  /*#leftOV,#leftFS,#leftBI,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftSP { color: dodgerblue !important}
</style>
