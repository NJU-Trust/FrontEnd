<template>
  <personalCenter paneltitle="还款">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目信息" name="first">
        <div>基本信息</div>
        <div style="display: flex;padding-top: 20px">

          <el-card class="info1" v-model="info1" shadow="always" :class="info1" align="center">
            <p >发布日期</p>
            <span>{{info1.date1}}</span>
            <br><br><br>
            <p>截止日期</p>
            <span>{{info1.date2}}</span>
            <br><br><br>
            <p>下个还款日</p>
            <span>{{info1.late_date}}</span>
          </el-card>

          <el-card class="main_info" v-model="info2" align="center" shadow="always">
            <div class="content">
              {{info2.name}}
            </div>
            <div class="content">
              距离下次还款日剩余<span>{{info2.days}}</span>天
            </div>
            <div class="content">
              下次应还： <span>{{info2.money}}</span>元
            </div>
          </el-card>

          <el-card shadow="always" class="chart" align="center">
            <div style="margin-top: 20px;font-size: 18px;color: #6a6a6a">
              未还款占比：
            </div>

            <div style="margin-top: 40px;">
              <el-progress type="circle" :percentage="25" width="110"></el-progress>
            </div>
          </el-card>
        </div>
        <hr>
        <div>项目概要</div>
        <div style="display: flex">
          <el-card align="center" shadow="always" style="width: 320px;height: 300px;margin-top: 20px">
            <div class="title">
              资金用途
            </div>

            <div class="usage" style="margin-top: 50px">
              分类：学习/购买学习用品
            </div>
            <div class="usage">
              详述：买了文具和笔
            </div>

          </el-card>

          <el-card align="center" shadow="always" style="width: 450px;margin-left: 50px;margin-top: 20px">
            <div class="title">
              关于贷款
            </div>

          </el-card>

        </div>
      </el-tab-pane>
      <el-tab-pane label="还款分析" name="second">
        <div>还款方式</div>
        <div style="display: flex">
          <div align="center" style="margin-left: 170px;font-size: 25px;line-height: 100px" >
            <div>
              您当前的还款方式是： <span style="color: #409EFF">{{return_scheme.return_way}}</span>
            </div>
            <div>
              还款难度：<i v-for="n in return_scheme.difficulty" class="el-icon-star-on" style="color:#409EFF"></i>
            </div>

          </div>
          <div>

          </div>
        </div>
        <hr>
        <div>
          还款历史
        </div>
      </el-tab-pane>
      <el-tab-pane label="违约情况" name="fifth">
        <div style="font-size: 30px;margin-top: 140px;margin-left: 160px;display: none">
          恭喜您，截止目前，您并未出现违约情况！
        </div>

        <div>
          <div style="font-size: 20px;margin: 20px">
            截止目前，您在本款项目中共产生了 <span style="font-size: 24px;color:#409EFF">2</span> 次违约情况.
          </div>
          <div style="margin-top: 50px">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
             >
              <el-table-column
                prop="ID"
                label=""
                align="center"
                width="80"
                >
              </el-table-column>
              <el-table-column
                prop="return_date"
                label="应还日期"
                width="100"
                align="center">
              </el-table-column>
              <el-table-column
                prop="actual_date"
                label="实际还款日"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column
                prop="return_money"
                label="当前应还金额"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="days"
                label="逾期天数"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="punish_money"
                label="违约金"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="current_state"
                label="当前状态"
                align="center"
              >
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>

    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import InvestList from "../components/investList";
  import ElCard from "element-ui/packages/card/src/main";
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
    name:"repay",
    components: {
      ElCard,
      InvestList, personalCenter},
    data() {
      return {
        info1:{
          date1:'2018-09-02',
          date2:'2018-09-16',
          late_date:'2018-09-07',
        },
        info2:{
          name:'项目名称',
          days:0,
          money:50
        },
        return_scheme:{
          return_way:'等额本金',
          difficulty:4,
        },
        activeName: 'first',
        tableData:[{
          ID:'1',
          return_date:'xxx',
          actual_date:'xxx',
          return_money:'100',
          days:'3',
          punish_money:'10',
          current_state:'结束'
        },{
          ID:'2',
          return_date:'xxx',
          actual_date:'xxx',
          return_money:'200',
          days:'5',
          punish_money:'20',
          current_state:'待办'
      }],
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

      this.drawEngelsLine();
      this.drawRigidLine();
      this.drawLiabilityLine();
      this.drawSolvencyLine();
      this.drawLeverageLine();
      this.drawConsumptionLine();
      this.drawSavingLine();

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

      //柱状图集合
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


      //饼状图集合
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

      //线图集合
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





    }
  }


</script>

<style>

  .info1{
    /*padding-left: 45px;*/
    width: 200px;
    align-content: center;
  }

  .info1 span{
    color: #409EFF;
    font-size: 16px;
  }

  .main_info{
    width:350px;
    margin-left: 50px;
    padding-top: 20px;
  }

  .content{
    font-size: 20px;
    margin-top: 20px;
    font-family: "Adobe Caslon Pro Bold";
    color: #6628b0;
  }

  .content span{
    font-size: 30px;
    color: #409EFF;
  }

  .chart{
    margin-left: 50px;
    width: 170px;
  }

  .title{
    font-size: 22px;
    margin-top: 10px;
    color: #6c9ab7;
    font-family: "Adobe Caslon Pro";
    /*font-weight: bold;*/
  }

  .usage{
    font-size: 18px;
    margin-top: 10px;

  }


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

  #mainpanel { min-height: 500px !important}


</style>
