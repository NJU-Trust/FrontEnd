<template>
  <div id="pie_template">
    <div>
      <!--<p>您选中了{{ monthPie }}</p>-->
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
      this.drawOutcomePie();
      this.drawAdjustOutcomePie();
      this.drawFoodOutcomePie();
    },
    methods: {
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

    },
    props:['monthPie']
  }
</script>

<style scoped>

  #pie_template i{
    color: #409EFF;
  }

</style>
