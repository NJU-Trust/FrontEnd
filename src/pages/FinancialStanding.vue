<template>
  <personalCenter paneltitle="财务状况">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="财务分析" name="first">
        <div id="financial_id"><br/>
          <div class="chooseButton">
            <el-radio v-model="inoutcome" label="1" id="bar_btn" @change="change_bar" border>数值比较</el-radio>
            <el-radio v-model="inoutcome" label="2" id="line_btn" @change="change_line" border>趋势分析</el-radio>
            <el-radio v-model="inoutcome" label="3" id="pie_btn" @change="change_pie" border>比例分析</el-radio>
          </div><hr/><br/>
          <div class="FinDateChoice">
            <div id="dateDouble">
              <el-row :gutter="2">
                <el-col :span="6">
                  <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                      v-model="mouth_start"
                      type="month"
                      placeholder="请选择起始月份">
                    </el-date-picker>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="block">
                    <span class="demonstration">到&nbsp&nbsp&nbsp&nbsp</span>
                    <el-date-picker
                      v-model="mouth_end"
                      type="month"
                      placeholder="请选择终止月份">
                    </el-date-picker>
                  </div>
                </el-col>
              </el-row>

            </div>
            <div id="dateSingle" style="display: none">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="mouth_single"
                  type="month"
                  placeholder="请选择您要查看的月份">
                </el-date-picker>
              </div>
            </div>
          </div><br/>
          <div id="bar_info" style="display: inline">
            <div>
              <el-row :gutter="20">
                <el-col :span="5">
                  <span>请选择您所要查看的指标</span>
                </el-col>
                <el-col :span="19">
                  <div id="selectBar_id">
                    <el-radio-group v-model="selectBar" size="mini">
                      <el-radio label="收入" v-bind:title="'顾名思义，收入就是收入'"></el-radio>
                      <el-radio label="支出"></el-radio>
                      <el-radio label="刚性支出" v-bind:title="'你问我什么是刚性支出，我也不造啊QAQ'"></el-radio>
                      <el-radio label="可调支出"></el-radio>
                      <el-radio label="投资额结余"></el-radio>
                      <el-radio label="负债"></el-radio>
                      <el-radio label="净资产"></el-radio>
                    </el-radio-group>
                  </div>
                </el-col>
              </el-row>
            </div><!--Bar选择指标-->
            <hr/>
            <div v-show="selectBar=='收入'">
              <div v-if="selectBar=='收入'">
                <h4><b>您这段时间的收入总额为：<i class="el-icon-menu"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myIncomeBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='支出'">
              <div v-if="selectBar=='支出'">
                <h4><b>您这段时间的支出总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myOutcomeBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='刚性支出'">
              <div v-if="selectBar=='刚性支出'">
                <h4><b>您这段时间的刚性支出总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myRigidBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='可调支出'">
              <div v-if="selectBar=='可调支出'">
                <h4><b>您这段时间的可调支出总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myAdjustBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='投资额结余'">
              <div v-if="selectBar=='投资额结余'">
                <h4><b>您这段时间的投资额结余总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myInvestBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='负债'">
              <div v-if="selectBar=='负债'">
                <h4><b>您的负债总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myDebtBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
            <div v-show="selectBar=='净资产'">
              <div v-if="selectBar=='净资产'">
                <h4><b>您的净资产总额为：<i class="el-icon-tickets"></i>&nbsp 6050 元, 每月变化情况如下</b></h4>
              </div>
              <div id="myNetAssetsBar" :style="{width: '400px', height: '300px'}"></div>
            </div>
          </div>
          <div id="line_info" style="display: none">
            <!--恩格尔系数、刚性比率、负债率、偿债能力、杠杆比率、消费比率、储蓄比率-->
            <div>
              <el-row :gutter="20">
                <el-col :span="5">
                  <span>请选择您所要查看的指标</span>
                </el-col>
                <el-col :span="19">
                  <div id="selectLine_id">
                    <el-radio-group v-model="selectLine" size="mini">
                      <el-radio label="恩格尔系数" v-bind:title="'恩格尔系数'"></el-radio>
                      <el-radio label="刚性比率" v-bind:title="''"></el-radio>
                      <el-radio label="负债率" v-bind:title="''"></el-radio>
                      <el-radio label="偿债能力" v-bind:title="''"></el-radio>
                      <el-radio label="杠杆比率" v-bind:title="''"></el-radio>
                      <el-radio label="消费比率" v-bind:title="''"></el-radio>
                      <el-radio label="储蓄比率" v-bind:title="''"></el-radio>
                    </el-radio-group>
                  </div>
                </el-col>
              </el-row>
            </div><!--Line选择指标-->
            <hr>
            <div v-show="selectLine=='恩格尔系数'">
              <div v-if="selectLine=='恩格尔系数'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='刚性比率'">
              <div v-if="selectLine=='刚性比率'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='负债率'">
              <div v-if="selectLine=='负债率'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='偿债能力'">
              <div v-if="selectLine=='偿债能力'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='杠杆比率'">
              <div v-if="selectLine=='杠杆比率'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='消费比率'">
              <div v-if="selectLine=='消费比率'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
            <div v-show="selectLine=='储蓄比率'">
              <div v-if="selectLine=='储蓄比率'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
              </div>
            </div>
          </div>
          <div id="pie_info" style="display: none">
            <div>
              <el-row :gutter="20">
                <el-col :span="5">
                  <span>请选择您所要查看的指标</span>
                </el-col>
                <el-col :span="19">
                  <div id="selectPie_id">
                    <el-radio-group v-model="selectPie" size="mini">
                      <el-radio label="支出" v-bind:title="'支出'"></el-radio>
                      <el-radio label="可调支出" v-bind:title="'可调支出'"></el-radio>
                      <el-radio label="饮食支出" v-bind:title="'饮食支出'"></el-radio>
                    </el-radio-group>
                  </div>
                </el-col>
              </el-row>
            </div><!--Pie选择指标-->
            <hr/>
            <div v-show="selectPie=='支出'">
              <div v-if="selectPie=='支出'">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 1000.50元, 具体分布如下</b></h4>
              </div>
              <br/>
              <div id="myOutcomePie" :style="{width: '900px', height: '450px'}"></div>
            </div>
            <div v-show="selectPie=='可调支出'">
              <div v-if="selectPie=='可调支出'">
                <h4><i class="el-icon-tickets"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 100.10元, 具体分布如下</b></h4>
              </div>
              <br/>
              <div id="myAdjustOutcomePie" :style="{width: '900px', height: '450px'}"></div>
            </div>
            <div v-show="selectPie=='饮食支出'">
              <div v-if="selectPie=='饮食支出'">
                <h4><i class="el-icon-time"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 500.37元, 具体分布如下</b></h4>
              </div>
              <br/>
              <div id="myFoodOutcomePie" :style="{width: '900px', height: '450px'}"></div>
            </div>
          </div>
          <hr/>
          <div class="LevelOneIndex" id="leveloneindex" style="display: none"><!--一级指标，收入&&支出和其他-->
            <div class="class_outcome" id="id_class_outcome" style="display: inline">
              <h4><b>您本月的支出情况</b></h4>
              <div class="table-responsive" style="text-indent: 5px;max-width: 700px">
                <table class="table table-bordered">
                  <!--<caption><b>您的信用评级为：100</b></caption>-->
                  <thead>
                  <tr>
                    <th><i class="el-icon-info" style="color: #409EFF"></i>&nbsp支出总额</th>
                    <th><i class="el-icon-tickets" style="color: #409EFF"></i>&nbsp刚性支出</th>
                    <th><i class="el-icon-sold-out" style="color: #409EFF"></i>&nbsp可调指出的总额</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>70</td>
                    <td>30</td>
                    <td>100</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <hr/>
              <h4><b>您本月的支出变化</b></h4>
              <!--<div id="myOutcomeBar" :style="{width: '400px', height: '300px'}"></div>-->
              <hr/>
              <h4><b>您本月的支出分布统计图</b></h4>
              <h4><b>您本月的可调整支出统计图</b></h4>
              <h4><b>您本月的饮食支出分布统计图</b></h4>
            </div>

            <div class="class_income" id="id_class_income">
              <div id="myIncomeOverview">
                <!--<h4><b>您的收入为总额为：<i class="el-icon-menu" style="color: #409EFF"></i>&nbsp 6050 元</b></h4>-->
              </div>
              <hr/>
              <h4><b>您本月的收入变化</b></h4>
              <!--<div id="myIncomeBar" :style="{width: '400px', height: '300px'}"></div>-->
              <h4><b>您的负债总额为：<i class="el-icon-success" style="color: #409EFF"></i>&nbsp 6632.30 元</b></h4>
              <hr/>
              <h4><b>您本月的蚂蚁花呗情况</b></h4>
              <div id="myAntBar" style="width: 800px; height: 300px; "></div>
              <h4><b>您各项投资金额和收益为</b></h4>
              <div id="myInvestLoanPie" style="width: 800px; height: 300px; "></div>
              <hr/>
            </div>

            <div id="mySurplus">
              <hr>
              <h4><b>您的结余为：<i class="el-icon-success" style="color: #409EFF"></i>&nbsp 3752.30 元</b></h4>
              <hr/>
            </div>
          </div>
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
            <div>
              <h4><b>您目前的还款情况如下</b>(一个假的。暂时不知道这样的表格如何动态构建)</h4>
              <img src="../../static/pic/loanSuggestion.png" style="width: 600px;height: 450px">
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
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import InvestList from "../components/investList";
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

  export default {
    name:"FinancialStanding",
    components: {InvestList, personalCenter},
    data() {
      return {
        activeName: 'first',
        mouth_start: '',
        mouth_end: '',
        mouth_single: '',
        inoutcome: '1',
        selectBar: '收入',
        selectLine:'恩格尔系数',
        selectPie: '支出',
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
      this.drawIncomeBar();
      this.drawOutcomeBar();
      this.drawOutcomePie();
      this.drawAdjustOutcomePie();
      this.drawFoodOutcomePie();
      this.drawAntBar();
      this.drawRigidBar();
      this.drawAdjustBar();
      this.drawInvestBar();
      this.drawDebtBar();
      this.drawNetAssetsBar();
      this.drawK();
      this.drawA();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      change_bar(){
        document.getElementById("bar_info").style.display = "inline";
        document.getElementById("line_info").style.display = "none";
        document.getElementById("pie_info").style.display = "none";

        document.getElementById("dateDouble").style.display = "inline";
        document.getElementById("dateSingle").style.display = "none";
      },
      change_line(){
        document.getElementById("bar_info").style.display = "none";
        document.getElementById("line_info").style.display = "inline";
        document.getElementById("pie_info").style.display = "none";

        document.getElementById("dateDouble").style.display = "inline";
        document.getElementById("dateSingle").style.display = "none";
      },
      change_pie(){
        document.getElementById("bar_info").style.display = "none";
        document.getElementById("line_info").style.display = "none";
        document.getElementById("pie_info").style.display = "inline";

        document.getElementById("dateDouble").style.display = "none";
        document.getElementById("dateSingle").style.display = "inline";
      },

      drawIncomeBar() {
        // 基于准备好的dom，初始化echarts实例
        let myIncomeBar = echarts.init(document.getElementById('myIncomeBar'))
        // 绘制图表
        myIncomeBar.setOption({
          // title: { text: '您本月的收入变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '收入',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '收入情况',
            type: 'bar',
            barWidth: '60%',
            data: [5, 20, 36, 10, 40, 20, 80, 5, 20, 36, 10, 40]
          }]
        });
      },

      drawOutcomeBar() {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomeBar = echarts.init(document.getElementById('myOutcomeBar'))
        // 绘制图表
        myOutcomeBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60, 5]
          }]
        });
      },

      drawRigidBar() {
        // 基于准备好的dom，初始化echarts实例
        let myRigidBar = echarts.init(document.getElementById('myRigidBar'))
        // 绘制图表
        myRigidBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [10, 40, 50, 60, 5, 36, 36, 10, 4, 20, 60, 5]
          }]
        });
      },

      drawAdjustBar() {
        // 基于准备好的dom，初始化echarts实例
        let myAdjustBar = echarts.init(document.getElementById('myAdjustBar'))
        // 绘制图表
        myAdjustBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [10, 40, 20, 60, 5, 70, 36, 10, 40, 20, 60, 5]
          }]
        });
      },

      drawInvestBar() {
        // 基于准备好的dom，初始化echarts实例
        let myInvestBar = echarts.init(document.getElementById('myInvestBar'))
        // 绘制图表
        myInvestBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [10, 40, 20, 10, 40, 20, 60, 5, 70, 36, 60, 5]
          }]
        });
      },

      drawDebtBar() {
        // 基于准备好的dom，初始化echarts实例
        let myDebtBar = echarts.init(document.getElementById('myDebtBar'))
        // 绘制图表
        myDebtBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [70, 36, 10, 40, 10, 40, 20, 60, 5, 20, 60, 5]
          }]
        });
      },

      drawNetAssetsBar() {
        // 基于准备好的dom，初始化echarts实例
        let myNetAssetsBar = echarts.init(document.getElementById('myNetAssetsBar'))
        // 绘制图表
        myNetAssetsBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [70, 36, 10, 40, 20, 60, 5, 10, 40, 20, 60, 5]
          }]
        });
      },



      drawOutcomePie() {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myOutcomePie'))
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['总日常支出','总学习支出','总饮食支出','总出行支出','总娱乐支出']
          },
          series: [
            // {
            //   name:'访问来源',
            //   type:'pie',
            //   selectedMode: 'single',
            //   radius: [0, '30%'],
            //
            //   label: {
            //     normal: {
            //       position: 'inner'
            //     }
            //   },
            //   labelLine: {
            //     normal: {
            //       show: false
            //     }
            //   },
            //   data:[
            //     {value:335, name:'直达', selected:true},
            //     {value:679, name:'营销广告'},
            //     {value:1548, name:'搜索引擎'}
            //   ]
            // },
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data:[
                {value:310, name:'总日常支出'},
                {value:234, name:'总学习支出'},
                {value:135, name:'总饮食支出'},
                {value:666, name:'总出行支出'},
                {value:251, name:'总娱乐支出'},
              ]
            }
          ]
        });
      },

      drawAdjustOutcomePie() {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myAdjustOutcomePie'),'shine')
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['衣物饰品等消费性支出','饮食可调整支出','住宿可调整支出','娱乐爱好可调整支出']
          },
          series: [
            // {
            //   name:'访问来源',
            //   type:'pie',
            //   selectedMode: 'single',
            //   radius: [0, '30%'],
            //
            //   label: {
            //     normal: {
            //       position: 'inner'
            //     }
            //   },
            //   labelLine: {
            //     normal: {
            //       show: false
            //     }
            //   },
            //   data:[
            //     {value:335, name:'直达', selected:true},
            //     {value:679, name:'营销广告'},
            //     {value:1548, name:'搜索引擎'}
            //   ]
            // },
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data:[
                {value:310, name:'衣物饰品等消费性支出'},
                {value:234, name:'饮食可调整支出'},
                {value:135, name:'住宿可调整支出'},
                {value:666, name:'娱乐爱好可调整支出'},
              ]
            }
          ]
        });
      },

      drawFoodOutcomePie() {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myFoodOutcomePie'),'macarons')
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['食堂支出','外卖支出','外出就餐支出','零食水果支出（三餐除外）']
          },
          series: [
            {
              name:'支出条数',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:35, name:'食堂条数'},
                {value:15, name:'外卖单数'},
                {value:7, name:'外出次数'},
                {value:9, name:'零食水果', selected:true}
              ]
            },
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data:[
                {value:652, name:'食堂支出'},
                {value:234, name:'外卖支出'},
                {value:135, name:'外出就餐支出'},
                {value:78, name:'零食水果支出（三餐除外）'},
              ]
            }
          ]
        });
      },

      drawAntBar() {
        // 基于准备好的dom，初始化echarts实例
        let myAntBar = echarts.init(document.getElementById('myAntBar'))
        // 绘制图表
        myAntBar.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['花呗支出', '花呗还款']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis : [
            {
              type : 'value'
            }
          ],
          xAxis : [
            {
              type : 'category',
              axisTick : {show: false},
              data : ["1号", "2号", "3号", "4号", "5号", "6号","7号","8号", "9号", "10号", "11号", "12号", "13号","14号","15号", "16号", "17号", "18号", "19号", "20号","21号","22号", "23号", "24号", "25号", "26号", "27号","28号"]
            }
          ],
          series : [
            {
              color: '#0039b3',
              name:'花呗支出',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true
                }
              },
              data:[20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60,5, 20, 36, 10, 40, 20, 60, 5]
            },
            {
              color: '#97b7fc',
              name:'花呗还款',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'left'
                }
              },
              data:[-5, -20, -36, -10, -40, -20, -80, -5, -20, -36, -10, -40, -20, -60, -5, -20, -36, -10, -40, -20, -60, -5, -20, -36, -10, -40, -20, -60]
            }
          ]
        });
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

<style>
  .LevelTwoPanel i{
    color: #409EFF;
  }

  .LoanPanel {
    margin-left: 20px;
    margin-right: 20px;
  }

  .LoanHighLight {
    font-size: 22px;
  }

  #bar_info i{
    color: #409EFF
  }

  #line_info i{
    color: #409EFF
  }

  #pie_info i{
    color: #409EFF
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

</style>
