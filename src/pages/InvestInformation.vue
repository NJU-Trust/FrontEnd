<template>
  <personalCenter paneltitle="项目信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <div class="ChooseBar">
          <!--<el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="投资金额">
              <el-input v-model="formInline.money"  style="width: 600px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>
          <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
          <el-input v-model="input" placeholder="请输入内容"></el-input>-->

          <el-form v-model="underway_form">
            <el-form-item label="投资金额">
              <el-radio-group v-model="underway_form.money">
                <el-radio-button label="100以下"></el-radio-button>
                <el-radio-button label="100-500"></el-radio-button>
                <el-radio-button label="500-1000"></el-radio-button>
                <el-radio-button label="1000以上"></el-radio-button>
              </el-radio-group>
              &nbsp&nbsp
              <el-input v-model="underway_form.input1" style="width: 120px"></el-input>
              <span>-</span>
              <el-input v-model="underway_form.input2" style="width: 120px"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-select v-model="underway_form.value_class">
                <el-option
                  v-for="item in underway_form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-button type="primary" icon="el-icon-search" style="margin-left: 20px">一键搜索</el-button>
            </el-form-item>
          </el-form>

          <hr>

        </div>

        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataUnderway"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="loanDate"
                label="项目日期">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                label="投标金额">
              </el-table-column>
              <el-table-column
                prop="deadline_interest"
                label="期限/利率">
              </el-table-column>
              <el-table-column
                prop="repayDateMonth"
                label="每月还贷日">
              </el-table-column>
              <el-table-column
                prop="repayAmountMonth"
                label="每月还款金额">
              </el-table-column>
              <el-table-column
                prop="deadlineDate"
                label="到期还款日期">
              </el-table-column>
              <el-table-column
                prop="deadlineAmount"
                label="到期还款总金额">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column label="查看详情">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="poj_pagination">
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
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second">
        <div class="ChooseBar">
          <el-form v-model="complete_form">
            <el-form-item label="投资金额">
              <el-radio-group v-model="complete_form.money">
                <el-radio-button label="100以下"></el-radio-button>
                <el-radio-button label="100-500"></el-radio-button>
                <el-radio-button label="500-1000"></el-radio-button>
                <el-radio-button label="1000以上"></el-radio-button>
              </el-radio-group>
              &nbsp&nbsp
              <el-input v-model="complete_form.input1" style="width: 120px"></el-input>
              <span>-</span>
              <el-input v-model="complete_form.input2" style="width: 120px"></el-input>
            </el-form-item>

            <el-form-item label="开始时间">
              <el-radio-group v-model="complete_form.date">
                <el-radio-button label="立刻开始"></el-radio-button>
                <el-radio-button label="5天之内"></el-radio-button>
                <el-radio-button label="10天之内"></el-radio-button>
                <el-radio-button label="10天以上"></el-radio-button>
              </el-radio-group>
              &nbsp&nbsp
              <el-date-picker
                v-model="complete_form.date1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>

            <el-form-item label="排序维度">
              <el-checkbox :indeterminate="complete_form.isIndeterminateB" v-model="complete_form.checkAllB" @change="handleCheckAllChangeB">全选</el-checkbox>
              <el-checkbox-group v-model="complete_form.checkboxGroup2" size="medium" @change="handleCheckedCitiesChangeB" style="display: inline-block;margin-left:10px;">
                <el-checkbox-button v-for="indexB in complete_form.indexBs" :label="indexB" :key="indexB" >{{indexB}}</el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-form>


          <span><b>标的种类&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio3">
            <el-radio-button label="日常生活费周转"></el-radio-button>
            <el-radio-button label="体育娱乐活动"></el-radio-button>
            <el-radio-button label="旅游"></el-radio-button>
            <el-radio-button label="游戏影音"></el-radio-button>
            <el-radio-button label="不限"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataDone"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="startEndDate"
                label="筹资起始日期"
                width="160">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                label="可投标金额">
              </el-table-column>
              <el-table-column
                prop="interest"
                label="预计年收益率">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="借款人信用分">
              </el-table-column>
              <el-table-column label="查看详情">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="poj_pagination">
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
      </el-tab-pane>
      <el-tab-pane label="收藏项目" name="third">
        <div class="ChooseBar">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人" style="width: 600px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>
          <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio1">
            <el-radio-button label="100以下"></el-radio-button>
            <el-radio-button label="100-500"></el-radio-button>
            <el-radio-button label="500-1000"></el-radio-button>
            <el-radio-button label="1000以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio2">
            <el-radio-button label="立刻开始"></el-radio-button>
            <el-radio-button label="5天之内"></el-radio-button>
            <el-radio-button label="10天之内"></el-radio-button>
            <el-radio-button label="10天以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>标的种类&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio3">
            <el-radio-button label="日常生活费周转"></el-radio-button>
            <el-radio-button label="体育娱乐活动"></el-radio-button>
            <el-radio-button label="旅游"></el-radio-button>
            <el-radio-button label="游戏影音"></el-radio-button>
            <el-radio-button label="不限"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataFavorite"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="startEndDate"
                label="筹资起始日期"
                width="160">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                label="可投标金额">
              </el-table-column>
              <el-table-column
                prop="interest"
                label="预计年收益率">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="projectIncome"
                label="项目收益率">
              </el-table-column>
              <el-table-column label="查看详情">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="poj_pagination">
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
      </el-tab-pane>
      <el-tab-pane label="坏账记录" name="fourth">
        <div class="ChooseBar">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人" style="width: 600px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>
          <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio1">
            <el-radio-button label="100以下"></el-radio-button>
            <el-radio-button label="100-500"></el-radio-button>
            <el-radio-button label="500-1000"></el-radio-button>
            <el-radio-button label="1000以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio2">
            <el-radio-button label="立刻开始"></el-radio-button>
            <el-radio-button label="5天之内"></el-radio-button>
            <el-radio-button label="10天之内"></el-radio-button>
            <el-radio-button label="10天以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>标的种类&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio3">
            <el-radio-button label="日常生活费周转"></el-radio-button>
            <el-radio-button label="体育娱乐活动"></el-radio-button>
            <el-radio-button label="旅游"></el-radio-button>
            <el-radio-button label="游戏影音"></el-radio-button>
            <el-radio-button label="不限"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataBad"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="badStartDate"
                label="坏账发生日期">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                label="投标金额">
              </el-table-column>
              <el-table-column
                prop="lossAmount"
                label="损失金额">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column label="查看详情">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="poj_pagination">
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
      </el-tab-pane>
    </el-tabs>

  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import investList from "../components/investList";

  const indexBOptions = ['AA','A','B','C','D'];

  export default {
    name:"investinformation",
    components: {investList, personalCenter},
    data() {
      return {
        currentPage1: 1,
        activeName: 'first',

        underway_form:{
          money:'',
          options:[{
            value:'any',
            label:'不限'
          },{
            value:'small_loan',
            label:'小额短期借款'
          },{
            value:'large_loan',
            label:'大额长期借款'
          }],
          value_class:'any',
        },
        complete_form:{
          money:'',
          date:'',
          date1:'',
          checkAllB:false,
          isIndeterminateB:true,
          indexBs: indexBOptions,
          checkboxGroup2: [],
        },



        formInline: {
          user: '',
          region: ''
        },
        value_radio1: '上海',
        value_radio2: '上海',
        value_radio3: '上海',
        tableDataUnderway: [{
          projectName: '我要考托福',
          loanFrom: '王小虎',
          loanDate: '2018/1/1',
          investAmount: '300.00元',
          deadline_interest: '3个月/1.03%',
          repayDateMonth:'每月31日',
          repayAmountMonth:'103',
          deadlineDate:'2018/3/31',
          deadlineAmount:'309元',
          state:'投标成功',
        },{
          projectName: '我要考托福',
          loanFrom: '王小虎',
          loanDate: '2018/1/1',
          investAmount: '300.00元',
          deadline_interest: '3个月/1.03%',
          repayDateMonth:'每月31日',
          repayAmountMonth:'103',
          deadlineDate:'2018/3/31',
          deadlineAmount:'309元',
          state:'投标成功'
        }, {
          projectName: '我要考托福',
          loanFrom: '王小虎',
          loanDate: '2018/1/1',
          investAmount: '300.00元',
          deadline_interest: '3个月/1.03%',
          repayDateMonth:'每月31日',
          repayAmountMonth:'103',
          deadlineDate:'2018/3/31',
          deadlineAmount:'309元',
          state:'投标成功'
        }, {
          projectName: '我要考托福',
          loanFrom: '王小虎',
          loanDate: '2018/1/1',
          investAmount: '300.00元',
          deadline_interest: '3个月/1.03%',
          repayDateMonth:'每月31日',
          repayAmountMonth:'103',
          deadlineDate:'2018/3/31',
          deadlineAmount:'309元',
          state:'投标成功'
        }, ],

        tableDataDone: [{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', credit:'90(AAA)'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', credit:'90(AAA)'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', credit:'90(AAA)'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', credit:'90(AAA)'
        },],

        tableDataFavorite: [{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', projectIncome:'0元'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', projectIncome:'0元'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', projectIncome:'0元'
        },{projectName: '我要考托福', loanFrom: '王小虎', startEndDate: '2018/1/1-2018/3/1',
          investAmount: '300.00元', interest: '1.03%', state:'投标成功', projectIncome:'0元'
        },],

        tableDataBad: [{projectName: '我要考托福', loanFrom: '王小虎', badStartDate: '2018/1/1',
          investAmount: '300.00元', lossAmount: '100元', state:'投标成功'
        },{projectName: '我要考托福', loanFrom: '王小虎', badStartDate: '2018/1/1',
          investAmount: '300.00元', lossAmount: '100元', state:'投标成功'
        },{projectName: '我要考托福', loanFrom: '王小虎', badStartDate: '2018/1/1',
          investAmount: '300.00元', lossAmount: '100元', state:'投标成功'
        },{projectName: '我要考托福', loanFrom: '王小虎', badStartDate: '2018/1/1',
          investAmount: '300.00元', lossAmount: '100元', state:'投标成功'
        },],
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleCheckAllChangeB(val) {
        this.complete_form.checkboxGroup2 = val ? indexBOptions : [];
        this.complete_form.isIndeterminateB = false;
        this.showIndexs();
      },
      handleCheckedCitiesChangeB(value) {
        let checkedCount = value.length;
        this.complete_form.checkAllB = checkedCount === this.complete_form.indexBs.length;
        this.complete_form.isIndeterminateB = checkedCount > 0 && checkedCount < this.complete_form.indexBs.length;
        this.showIndexs();
      },
    }
  }

</script>

<style scoped>
  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .ChooseBar{
    min-height: 150px;
    /*background-color: ghostwhite;*/
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftBI,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftII { color: dodgerblue !important}
</style>
