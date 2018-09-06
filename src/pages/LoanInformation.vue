<template>
  <personalCenter paneltitle="项目信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <infoTopBar></infoTopBar>
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
        <infoTopBar></infoTopBar>
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
        <infoTopBar></infoTopBar>
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
        <infoTopBar></infoTopBar>
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
  import infoTopBar from "../components/infoTopBar";

  export default {
    name:"loaninformation",
    components: {personalCenter,infoTopBar},
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
  /*#leftOV,#leftFS,#leftSP,#leftBI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftLI { color: dodgerblue !important}
</style>
