<template>
  <personalCenter paneltitle="财务状况">
    <div>
      <div class="chooseButton">
        <el-row>
          <el-button id="income_btn" @click="change_income">收入</el-button>
          <el-button id="outcome_btn" @click="change_outcome">支出</el-button>
          <el-button id="othercome_btn" @click="change_othercome">其他</el-button>
        </el-row>
      </div>
      <hr/>
      <div class="FinDateChoice">
        <div class="block">
          <span class="demonstration">请选择你要查看的时间区间段</span>
          <el-date-picker
            v-model="date_value_choose"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="到"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
      </div>
      <hr/>
      <div class="LevelTwoIndex" id="leveltwocheck">
        <div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium" @change="showIndexs">
              <el-checkbox-button v-for="indexA in indexAs" :label="indexA" :key="indexA" >{{indexA}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>
      <hr/>
      <div class="LevelOneIndex" id="leveloneindex">

        <div class="class_income" id="id_class_income">
          <p style="font-size: 1em;">此处展示{{date_value_choose.toString()}}的收入数据</p>
          <div id="myIncomeOverview">
            <h4><b>您的收入为总额为：<i class="el-icon-menu" style="color: #409EFF"></i>&nbsp 6050 元</b></h4>
          </div>
          <hr/>
          <h4><b>您本月的收入变化</b></h4>
          <div id="myIncomeBar" :style="{width: '800px', height: '300px'}"></div>
        </div>

        <div class="class_outcome" id="id_class_outcome" style="display: none">
          <p style="font-size: 1em">此处展示{{date_value_choose.toString()}}的支出数据</p>
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
          <div id="myOutcomeBar" :style="{width: '800px', height: '300px'}"></div>
          <hr/>
          <h4><b>您本月的支出分布统计图</b></h4>
          <div id="myOutcomePie" :style="{width: '1000px', height: '450px'}"></div>
        </div>

        <div class="class_othercome"id="id_class_othercome" style="display: none">
          <p style="font-size: 3em">此处展示{{date_value_choose.toString()}}的其他数据</p>
        </div>

      </div>
      <hr/>
      <div class="LevelTwoIndex" id="leveltwoindex">
        <p style="font-size: 1em;">此处展示{{checkboxGroup2.toString()}}的二级指标数据</p>
        <p id="checktest" style="font-size: 1em; display: none">此处展示净资产数据</p>
        <div class="LevelTwoPanel">
          <div id="Index_NetWorth">
            <h4><i class="el-icon-info"></i><b>&nbsp&nbsp您的净资产为：&nbsp 6050 元</b></h4>
            <hr/>
          </div>
          <div id="Index_EngelsCoefficient">
            <h4><i class="el-icon-success"></i><b>&nbsp&nbsp您的恩格尔系数为：&nbsp 55%,&nbsp  在同学中处于中等水平</b></h4>
            <hr/>
          </div>
          <div id="Index_RigidRatio">
            <h4><i class="el-icon-goods"></i><b>&nbsp&nbsp您的刚性比率是:&nbsp 60%</b></h4>
            <hr/>
          </div>
          <div id="Index_AssetLiabilityRatio">
            <h4><i class="el-icon-document"></i><b>&nbsp&nbsp您的资产负债率为：&nbsp 25%</b></h4>
            <hr/>
          </div>
          <div id="Index_Solvency">
            <h4><i class="el-icon-tickets"></i><b>&nbsp&nbsp您的偿债能力为：&nbsp 100%</b></h4>
            <hr/>
          </div>
          <div id="Index_Leverage">
            <h4><i class="el-icon-news"></i><b>&nbsp&nbsp您的杠杆比例为：&nbsp 35%</b></h4>
            <hr/>
          </div>
          <div id="Index_MonthConsumptionRatio">
            <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月消费比率为：&nbsp 31.4%</b></h4>
            <hr/>
          </div>
          <div id="Index_MonthlySavingsRatio">
            <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月储蓄比例为：&nbsp 23.9%</b></h4>
            <hr/>
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
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')


  const indexAOptions = ['净资产', '恩格尔系数', '刚性比率', '资产负债率','偿债能力','杠杆比例','月消费比率','月储蓄比例'];

  export default {
  name:"FinancialStanding",
    components: {personalCenter},
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        // value6: '',
        date_value_choose: '',
        checkboxGroup2: [],
        indexAs: indexAOptions
      };
    },
    mounted() {
      this.drawIncomeBar();
      this.drawOutcomeBar();
      this.drawOutcomePie();
      this.showIndexs();
    },
    methods: {
      change_income(){
        document.getElementById("id_class_income").style.display = "inline";
        document.getElementById("id_class_outcome").style.display = "none";
        document.getElementById("id_class_othercome").style.display = "none";
      },
      change_outcome(){
        document.getElementById("id_class_income").style.display = "none";
        document.getElementById("id_class_outcome").style.display = "inline";
        document.getElementById("id_class_othercome").style.display = "none";
      },
      change_othercome(){
        document.getElementById("id_class_income").style.display = "none";
        document.getElementById("id_class_outcome").style.display = "none";
        document.getElementById("id_class_othercome").style.display = "inline";
      },
      showIndexs(){
        // const indexAOptions = ['净资产', '恩格尔系数', '刚性比率', '资产负债率','偿债能力','杠杆比例','月消费比率','月储蓄比例'];
        console.log(this.checkboxGroup2.toString());
        if(this.checkboxGroup2.toString().indexOf("净资产") != -1) {
          document.getElementById("Index_NetWorth").style.display = "inline";
        } else {
          document.getElementById("Index_NetWorth").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("恩格尔系数") != -1) {
          document.getElementById("Index_EngelsCoefficient").style.display = "inline";
        } else {
          document.getElementById("Index_EngelsCoefficient").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("刚性比率") != -1) {
          document.getElementById("Index_RigidRatio").style.display = "inline";
        } else {
          document.getElementById("Index_RigidRatio").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("资产负债率") != -1) {
          document.getElementById("Index_AssetLiabilityRatio").style.display = "inline";
        } else {
          document.getElementById("Index_AssetLiabilityRatio").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("偿债能力") != -1) {
          document.getElementById("Index_Solvency").style.display = "inline";
        } else {
          document.getElementById("Index_Solvency").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("杠杆比例") != -1) {
          document.getElementById("Index_Leverage").style.display = "inline";
        } else {
          document.getElementById("Index_Leverage").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("月消费比率") != -1) {
          document.getElementById("Index_MonthConsumptionRatio").style.display = "inline";
        } else {
          document.getElementById("Index_MonthConsumptionRatio").style.display = "none";
        }

        if(this.checkboxGroup2.toString().indexOf("月储蓄比例") != -1) {
          document.getElementById("Index_MonthlySavingsRatio").style.display = "inline";
        } else {
          document.getElementById("Index_MonthlySavingsRatio").style.display = "none";
        }




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
            data: ["1号", "2号", "3号", "4号", "5号", "6号","7号","8号", "9号", "10号", "11号", "12号", "13号","14号","15号", "16号", "17号", "18号", "19号", "20号","21号","22号", "23号", "24号", "25号", "26号", "27号","28号"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '收入',
            type: 'value'
          },
          series: [{
            name: '收入情况',
            type: 'bar',
            barWidth: '60%',
            data: [5, 20, 36, 10, 40, 20, 80, 5, 20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60]
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
            data: ["1号", "2号", "3号", "4号", "5号", "6号","7号","8号", "9号", "10号", "11号", "12号", "13号","14号","15号", "16号", "17号", "18号", "19号", "20号","21号","22号", "23号", "24号", "25号", "26号", "27号","28号"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60,5, 20, 36, 10, 40, 20, 60, 5]
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


    }
  }


</script>

<style>
  .LevelTwoPanel i{
    color: #409EFF;
  }

</style>
