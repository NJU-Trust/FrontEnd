<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="财务分析" name="first">
      <div id="financial_id"><br/>
        <fin-analysis></fin-analysis>
      </div>
    </el-tab-pane>
    <el-tab-pane label="财务建议" name="second">
      <div id="loan_id">
        <h3><b>消费修正建议</b></h3><hr/>
        <div class="LoanPanel">
          <div>
            <!--<p>距离最终还款还有<b class="LoanHighLight"> 60 </b>天</p>-->
            <!--<p v-if=" valueX<1 ">-->
            <!--在您的还款期内，根据历史消费记录预测，可知扣去现有负债后结余占用率为：{{ valueX }}-->
            <!--</p>-->
            <!--<p v-if=" (valueY>0)&&(valueZ==0)">-->
            <!--在您的还款期内，根据历史消费记录预测，可知扣去现有负债和预测结余后还需还款M-K(N)+Q元。如无兼职、奖学金、相关理财收入等额外收入，可调支出占用率为：Y，建议您酌情调整下图中占比较大的前几项。-->
            <!--</p>-->
            <!--<p>-->
            <!--在您的还款期内，根据历史消费记录预测，可知扣去负债、预测结余和所有可调支出后，还需还款M-K(N)+Q元，建议您酌情考虑兼职、奖学金、相关理财收入等额外收入。-->
            <!--</p>-->
          </div><!--历史版本修正建议-->
          <div id="myNextPay">
            <h4><b><i class="el-icon-warning" style="color: #409EFF"></i>&nbsp&nbsp距离下次还款还需 <span>25</span> 天, 下次还需还款 <span>300</span> 元</b></h4>
            <!--<nextpay paytitle="托福考试借款项目" project-time="2017.9.1-2018.11.1" times="7" interest-plus="2100" times-a="8" time-a="2018.5.1" amount-a="300" times-b="9"  time-b="2018.6.1" amount-b="300" times-c="10" time-c="2018.7.1" amount-c="300"></nextpay>-->
            <!--<nextpay paytitle="CPA考试借款项目" project-time="2017.9.1-2018.11.1" times="7" interest-plus="2100" times-a="8" time-a="2018.5.1" amount-a="300" times-b="9"  time-b="2018.6.1" amount-b="300" times-c="10" time-c="2018.7.1" amount-c="300"></nextpay>-->
            <nextpay
              v-for="item in NextpayList"
              v-bind:paylist="item"
              v-bind:key="item.paytitle"
            ></nextpay>
            <!--<img src="../../static/pic/loanSuggestion.png" style="width: 600px;height: 450px">-->
            <hr/>
          </div><!--更新版本修正建议-->
        </div>
        <div class="LoanPanel">
          <div class="LevelTwoIndex" id="leveltwoindex">
            <div class="LevelTwoPanel">
              <el-row :gutter="2">
                <el-col :span="12">
                  <h4><i class="el-icon-success"></i><b>&nbsp&nbsp您的结余为：&nbsp 3752.30 元</b></h4><hr/>
                  <div id="Index_NetWorth">
                    <h4><i class="el-icon-info"></i><b>&nbsp&nbsp您的净资产为：&nbsp 6050 元</b></h4><hr/>
                  </div>
                  <div id="Index_EngelsCoefficient">
                    <h4><i class="el-icon-success"></i><b>&nbsp&nbsp您的恩格尔系数为：&nbsp 55%,&nbsp&nbsp在同学中处于中等水平</b></h4><hr/>
                  </div>
                  <div id="Index_RigidRatio">
                    <h4><i class="el-icon-goods"></i><b>&nbsp&nbsp您的刚性比率是:&nbsp 60%,&nbsp&nbsp当前可支配收入较多</b></h4><hr/>
                  </div>
                  <div id="Index_AssetLiabilityRatio">
                    <h4><i class="el-icon-document"></i><b>&nbsp&nbsp您的资产负债率为：&nbsp 25%</b></h4>
                  </div>
                </el-col>
                <el-col :span="12">
                  <h4><i class="el-icon-info"></i><b>&nbsp&nbsp您的负债总额为：&nbsp 6632.30 元</b></h4><hr/>
                  <div id="Index_Solvency">
                    <h4><i class="el-icon-tickets"></i><b>&nbsp&nbsp您的偿债能力为：&nbsp 100%</b></h4><hr/>
                  </div>
                  <div id="Index_Leverage">
                    <h4><i class="el-icon-news"></i><b>&nbsp&nbsp您的杠杆比例为：&nbsp 35%</b></h4><hr/>
                  </div>
                  <div id="Index_MonthConsumptionRatio">
                    <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月消费比率为：&nbsp 31.4%，在同学中处于中等水平</b></h4>
                    <hr/>
                  </div>
                  <div id="Index_MonthlySavingsRatio">
                    <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月储蓄比例为：&nbsp 23.9%</b></h4>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <hr/>
          <div id="forecast_lines">
            <el-row :gutter="2">
              <el-col :span="12">
                <div id="ForecastK" :style="{width: '400px', height: '300px'}"></div>
              </el-col>
              <el-col :span="12">
                <div id="ForecastA" :style="{width: '400px', height: '300px'}"></div>
              </el-col>
            </el-row>
            <hr/>
          </div>
        </div>
        <div class="LoanPanel">
          <p>在您借款成功后第n个月内，根据历史消费记录预测，可知结余占用率、可调支出占用率、需要的额外收入金额如下：</p>
          <div style="width: 640px" id="loanTable">
            <template>
              <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%">
                <el-table-column
                  prop="month"
                  label="月份"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="valX"
                  label="结余占用率X"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="valY"
                  label="可调支出占用率Y"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="valZ"
                  label="额外收入金额Z"
                  width="180">
                </el-table-column>
              </el-table>
            </template>
            <br/>
          </div>
          <p>因此，在第1、3、7...个月内，建议您酌情调整下图中占比较大的前几项；在第2、3、7...个月内，建议您酌情考虑兼职、奖学金、相关理财收入等额外收入。</p>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import InvestList from "../components/investList";
  import Nextpay from "../components/nextPay";
  import FinAnalysis from "./finAnalysis";
  // import FinCharts from  "../../static/js/FinCharts";
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')



  const indexAOptions = ['净资产', '恩格尔系数', '刚性比率', '资产负债率','偿债能力','杠杆比例','月消费比率','月储蓄比例'];

  // <nextpay paytitle="托福考试借款项目" project-time="2017.9.1-2018.11.1" times="7" interest-plus="2100" times-a="8" time-a="2018.5.1" amount-a="300" times-b="9"  time-b="2018.6.1" amount-b="300" times-c="10" time-c="2018.7.1" amount-c="300"></nextpay>

  export default {
    name:"FinStanding",
    components: {FinAnalysis, Nextpay, InvestList, personalCenter},
    data() {
      return {
        NextpayList: [
          { paytitle : "托福考试借款项目", projectTime :"2017.9.1-2018.11.1", times:"7", interestPlus:"2100", timesA:"8", timeA:"2018.5.1", amountA:"300", timesB:"9",  timeB:"2018.6.1", amountB:"300", timesC:"10", timeC:"2018.7.1", amountC:"300" },
          { paytitle : "CPA考试借款项目", projectTime :"2017.9.1-2018.11.1", times:"7", interestPlus:"2100", timesA:"8", timeA:"2018.5.1", amountA:"300", timesB:"9",  timeB:"2018.6.1", amountB:"300", timesC:"10", timeC:"2018.7.1", amountC:"300" },
          { paytitle : "ACCA考试借款项目", projectTime :"2017.9.1-2018.11.1", times:"7", interestPlus:"2100", timesA:"8", timeA:"2018.5.1", amountA:"300", timesB:"9",  timeB:"2018.6.1", amountB:"300", timesC:"10", timeCS:"2018.7.1", amountC:"300" },
        ],
        activeName: 'first',
        tableData: [{
          month: '1',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '2',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '3',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '4',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '5',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '6',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '7',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '8',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '9',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '10',
          valX: '17%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '11',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }, {
          month: '12',
          valX: '15%',
          valY: '16%',
          valZ: '27%'
        }
        ],
        valueX: '0.5',
        valueY: '0.7',
        valueZ: '0',
        checkboxGroup2: [],
        indexAs: indexAOptions,
        checkAll: false,
        isIndeterminate: true
      };
    },
    mounted() {
      this.drawK();
      this.drawA();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      drawK() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('ForecastK'))
        // 绘制图表
        myChart.setOption({
          title: { text: '预测的您第n个月时的结余K(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
          },
          yAxis: {
            name: '结余K(n)',
            type: 'value'
          },
          series: [{
            name: '结余',
            type: 'line',
            data: [5, 20, 36, 10, 40,60],
            smooth: true
          }]
        });
      },
      drawA() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('ForecastA'))
        // 绘制图表
        myChart.setOption({
          title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
          },
          yAxis: {
            name: '可调整支出A(n)',
            type: 'value'
          },
          series: [{
            name: '可调整支出',
            type: 'line',
            data: [5, 20, 69, 77, 40, 20],
            smooth: true
          }]
        });
      },


    }
  }


</script>

<style scoped>
  .LevelTwoPanel i{
    color: #409EFF;
  }

  .LoanPanel {
    margin-left: 20px;
    margin-right: 20px;
  }


  #myNextPay b>span{
    font-size: 30px;
    color: #409EFF;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

  /*#leftOV,#leftSP,#leftBI,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftFS{ color: dodgerblue !important}

</style>
