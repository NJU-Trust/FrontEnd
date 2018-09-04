<template>
  <div>
    <div>
      <p>您选中了{{ monthPie }}</p>
    </div>
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
</template>


<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')

  export default {
    name: 'finpies',
    data() {
      return{
        selectPie: '支出',
      }
    },
    mounted() {
      this.drawEngelsLine();
      this.drawRigidLine();
      this.drawLiabilityLine();
      this.drawSolvencyLine();
      this.drawLeverageLine();
      this.drawConsumptionLine();
      this.drawSavingLine();
    },
    methods: {
      //线图集合
      drawEngelsLine() {
        // 基于准备好的dom，初始化echarts实例
        let myEngelsLine = echarts.init(document.getElementById('myEngelsLine'))
        // 绘制图表
        myEngelsLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '恩格尔系数',
            type: 'value'
          },
          series: [{
            name: '恩格尔系数',
            type: 'line',
            data: [0.72, 0.52, 0.82, 0.77, 0.40, 0.20, 0.65, 0.52, 0.55, 0.72, 0.38, 0.67 ],
            smooth: true
          }]
        });
      },
      drawRigidLine() {
        // 基于准备好的dom，初始化echarts实例
        let myRigidLine = echarts.init(document.getElementById('myRigidLine'))
        // 绘制图表
        myRigidLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '刚性比率',
            type: 'value'
          },
          series: [{
            name: '刚性比率',
            type: 'line',
            data: [0.72, 0.52, 0.82, 0.65, 0.52, 0.55, 0.77, 0.40, 0.20, 0.72, 0.38, 0.67 ],
            smooth: true
          }]
        });
      },
      drawLiabilityLine() {
        // 基于准备好的dom，初始化echarts实例
        let myLiabilityLine = echarts.init(document.getElementById('myLiabilityLine'))
        // 绘制图表
        myLiabilityLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '负债率',
            type: 'value'
          },
          series: [{
            name: '负债率',
            type: 'line',
            data: [0.02, 0.05, 0.02, 0.07, 0, 0.02, 0.05, 0.02, 0.05, 0.07, 0.03, 0.17 ],
            smooth: true
          }]
        });
      },
      drawSolvencyLine() {
        // 基于准备好的dom，初始化echarts实例
        let mySolvencyLine = echarts.init(document.getElementById('mySolvencyLine'))
        // 绘制图表
        mySolvencyLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '偿债能力',
            type: 'value'
          },
          series: [{
            name: '偿债能力',
            type: 'line',
            data: [0.72, 0.82, 0.82, 0.87, 0.80, 0.82, 0.85, 0.82, 0.75, 0.92, 0.98, 0.87 ],
            smooth: true
          }]
        });
      },
      drawLeverageLine() {
        // 基于准备好的dom，初始化echarts实例
        let myLeverageLine = echarts.init(document.getElementById('myLeverageLine'))
        // 绘制图表
        myLeverageLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '杠杆比率',
            type: 'value'
          },
          series: [{
            name: '杠杆比率',
            type: 'line',
            data: [0.72, 0.52, 0.82, 0.77, 0.40, 0.20, 0.65, 0.52, 0.55, 0.72, 0.38, 0.67 ],
            smooth: true
          }]
        });
      },
      drawConsumptionLine() {
        // 基于准备好的dom，初始化echarts实例
        let myConsumptionLine = echarts.init(document.getElementById('myConsumptionLine'))
        // 绘制图表
        myConsumptionLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '消费比率',
            type: 'value'
          },
          series: [{
            name: '消费比率',
            type: 'line',
            data: [0.72, 0.52, 0.82, 0.52, 0.55, 0.72, 0.38, 0.77, 0.40, 0.20, 0.65, 0.67 ],
            smooth: true
          }]
        });
      },
      drawSavingLine() {
        // 基于准备好的dom，初始化echarts实例
        let mySavingLine = echarts.init(document.getElementById('mySavingLine'))
        // 绘制图表
        mySavingLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
          },
          yAxis: {
            name: '储蓄比率',
            type: 'value'
          },
          series: [{
            name: '储蓄比率',
            type: 'line',
            data: [0.32, 0.22, 0.20, 0.65, 0.52, 0.85, 0.82, 0.77, 0.40, 0.32, 0.38, 0.37 ],
            smooth: true
          }]
        });
      },

    },
    props:['monthPie']
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

  .LoanHighLight {
    font-size: 22px;
  }

  #bar_info i{
    color: #409EFF;
  }

  #line_info i{
    color: #409EFF;
  }

  #pie_info i{
    color: #409EFF;
  }

  #myNextPay b>span{
    font-size: 30px;
    color: #409EFF;
  }

</style>
