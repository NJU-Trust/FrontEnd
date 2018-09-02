<template>
  <personalCenter paneltitle="项目信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio1">
              <el-radio-button label="100以下"></el-radio-button>
              <el-radio-button label="100-500"></el-radio-button>
              <el-radio-button label="500-1000"></el-radio-button>
              <el-radio-button label="1000以上"></el-radio-button>
            </el-radio-group>
            <el-input-number style="width:130px;"></el-input-number>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
            <el-select v-model="value_radio2" placeholder="请选择活动区域">
              <el-option label="小额短期投资" value="shanghai"></el-option>
              <el-option label="大额长期投资" value="beijing"></el-option>
            </el-select>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 结束时间&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 借款名称&nbsp&nbsp</b></span>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="font-size: 80px">搜索</el-button>
          </div>
        </div>
        <div>
          <template>
            <el-table
              :data="zz_table"
              style="width: 100%"
              height="500">
              <el-table-column
                fixed
                prop="pro_name"
                label="项目名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="rele_time"
                label="发布时间"
                width="120">
              </el-table-column>
              <el-table-column
                prop="profit_rate"
                label="年利率"
                width="120">
              </el-table-column>
              <el-table-column
                prop="repay_times"
                label="待还期数"
                width="120">
              </el-table-column>
              <el-table-column
                prop="repay_money"
                label="待还本息"
                width="120">
              </el-table-column>
              <el-table-column
                prop="next_repayDay"
                label="下个还款日"
                width="120">
              </el-table-column>
              <el-table-column
                prop="money_repayDay"
                label="还款日应还金额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="information"
                label="项目详情"
                width="120">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second">
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio1">
              <el-radio-button label="100以下"></el-radio-button>
              <el-radio-button label="100-500"></el-radio-button>
              <el-radio-button label="500-1000"></el-radio-button>
              <el-radio-button label="1000以上"></el-radio-button>
            </el-radio-group>
            <el-input-number style="width:130px;"></el-input-number>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
            <el-select v-model="value_radio2" placeholder="请选择活动区域">
              <el-option label="小额短期投资" value="shanghai"></el-option>
              <el-option label="大额长期投资" value="beijing"></el-option>
            </el-select>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 结束时间&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 借款名称&nbsp&nbsp</b></span>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="font-size: 80px">搜索</el-button>
          </div>
        </div>
        <div>
          <template>
            <el-table
              :data="wc_table"
              style="width: 100%"
              height="500">
              <el-table-column
                fixed
                prop="pro_name"
                label="项目名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="money_rent"
                label="借款金额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="profit_rate"
                label="年利率"
                width="120">
              </el-table-column>
              <el-table-column
                prop="time_span"
                label="起止日期"
                width="300">
              </el-table-column>
              <el-table-column
                prop="state"
                label="项目状态"
                width="120">
              </el-table-column>
              <el-table-column
                prop="information"
                label="项目详情"
                width="120">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已发布项目" name="third">
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio1">
              <el-radio-button label="100以下"></el-radio-button>
              <el-radio-button label="100-500"></el-radio-button>
              <el-radio-button label="500-1000"></el-radio-button>
              <el-radio-button label="1000以上"></el-radio-button>
            </el-radio-group>
            <el-input-number style="width:130px;"></el-input-number>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
            <el-select v-model="value_radio2" placeholder="请选择活动区域">
              <el-option label="小额短期投资" value="shanghai"></el-option>
              <el-option label="大额长期投资" value="beijing"></el-option>
            </el-select>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 结束时间&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 借款名称&nbsp&nbsp</b></span>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="font-size: 80px">搜索</el-button>
          </div>
        </div>
        <div>
          <template>
            <el-table
              :data="yfb_table"
              style="width: 100%"
              height="500">
              <el-table-column
                fixed
                prop="pro_name"
                label="项目名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="money_rent"
                label="借款金额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="profit_rate"
                label="年利率"
                width="120">
              </el-table-column>
              <el-table-column
                prop="time_start"
                label="发布日期"
                width="300">
              </el-table-column>
              <el-table-column
                prop="state"
                label="项目状态"
                width="120">
              </el-table-column>
              <el-table-column
                prop="information"
                label="项目详情"
                width="120">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane label="违约记录" name="fourth">
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio1">
              <el-radio-button label="100以下"></el-radio-button>
              <el-radio-button label="100-500"></el-radio-button>
              <el-radio-button label="500-1000"></el-radio-button>
              <el-radio-button label="1000以上"></el-radio-button>
            </el-radio-group>
            <el-input-number style="width:130px;"></el-input-number>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
            <el-select v-model="value_radio2" placeholder="请选择活动区域">
              <el-option label="小额短期投资" value="shanghai"></el-option>
              <el-option label="大额长期投资" value="beijing"></el-option>
            </el-select>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 结束时间&nbsp&nbsp</b></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0" style="width:130px;">
            </el-date-picker>
            <span><b> 借款名称&nbsp&nbsp</b></span>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
            <el-button type="primary" icon="el-icon-search" style="font-size: 80px">搜索</el-button>
          </div>
        </div>
        <div>
          <template>
            <el-table
              :data="wy_table"
              style="width: 100%"
              height="500">
              <el-table-column
                fixed
                prop="pro_name"
                label="项目名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="money_rent"
                label="借款金额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="money_serve"
                label="违约服务费"
                width="120">
              </el-table-column>
              <el-table-column
                prop="time_break"
                label="违约发生日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="day_break"
                label="违约天数"
                width="120">
              </el-table-column>
              <el-table-column
                prop="information_break"
                label="违约详情"
                width="120">
              </el-table-column>
              <el-table-column
                prop="state"
                label="当前状态"
                width="120">
              </el-table-column>
              <el-table-column
                prop="information"
                label="项目详情"
                width="120">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div class="projectPanel">
      <div class="projectPages">

      </div>
      <div id="poj_pagination">
        <div class="block">
          <!--<span class="demonstration">完整功能</span>-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"loaninformation",
    components: {personalCenter},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 2,
        activeName: 'first',
        zz_table: [{
          pro_name: '项目一',
          rele_time: '2018/2/30',
          profit_rate: '5%',
          repay_times: '3',
          repay_money: '2000￥',
          next_repayDay: '2018/2/31',
          money_repayDay:'1000￥',
          information: ' '
        }],
        wc_table: [{
          pro_name: '项目一',
          money_rent: '2000￥',
          profit_rate: '5%',
          time_span: '2017/11/31————2018/2/31',
          state:'已完成',
          information: ' '
        }],
        yfb_table: [{
          pro_name: '项目一',
          money_rent: '2000￥',
          profit_rate: '5%',
          time_start: '2017/11/31————2018/2/31',
          state:'50%',
          information: ' '
        }],
        wy_table: [{
          pro_name: '项目一',
          money_rent: '2000￥',
          money_serve: '10￥',
          time_break: '2018/2/31',
          day_break: '10天',
          information_break: '50%',
          state: '逾期未还',
          information: ' '
        }]
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
    }
  }

</script>

<style scoped>
  #poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .type_choose_btn{
    padding-left: 50px;
    padding-right: 50px;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  #leftOV,#leftFS,#leftSP,#leftBI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }
  #leftLI { color: dodgerblue !important}
</style>
