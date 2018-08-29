<template>
  <personalCenter paneltitle="校园表现">
    <div id="userinformation">
      <div class="col-xs-12 col-md-12">
        <h4><b class="user_info_title">信用状况</b></h4><hr/>
        <div class="user_credit">
          <div class="table-responsive" style="text-indent: 5px">
            <table class="table table-bordered">
              <caption><b>您的信用评级为：20</b></caption>
              <thead>
              <tr>
                <th>财务信息评级占比</th>
                <th>非财务信息评级占比</th>
                <th>总评</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>70%</td>
                <td>30%</td>
                <td>100%</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
        </div>
        <h4><b class="user_info_title">非结构化信息</b></h4><hr/>
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
                <th>出勤率</th>
                <td>100%</td>
                <th>奖学金情况</th>
                <td>校级</td>
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
                <th colspan="1">水电费及与同学借款的缴纳情况</th>
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

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name:"schoolperformance",
    components: {personalCenter},
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '您近六个月的信用变化' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
          },
          yAxis: {
            name: '信用指标',
            type: 'value'
          },
          series: [{
            name: '信用情况',
            type: 'line',
            data: [5, 20, 36, 10, 40, 20, 60]
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
