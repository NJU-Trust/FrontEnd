<template>
    <el-form class="main_panel">
      <div class="top_panel">
        <div>
          <div style="padding-left: 30px">
            还款难度：
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <el-tooltip class="item" effect="dark" content="点击查看借款难度算法" placement="bottom-start">
              <i class="el-icon-question pointer" style="color: #409EFF"></i>
            </el-tooltip>

          </div>
          <div style="padding-left: 50px">
            <span style="font-size: 25px;font-weight:bold;color: #cd5f33;padding-top: 20px;padding-left: 15px">654.44</span>
            <br>
            <span style="color: #acacac;padding-top: -20px">每月还款金额(元)</span>
          </div>
          <div ></div>
        </div>
        <div style="margin-left: 100px">
          贷款金额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold" v-model="scheme">{{scheme.capital}}</span>元
          <div style="border: 1px #b7b7b7 solid"></div>
          利息总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.interest}}</span>元
          <div style="border: 1px #b7b7b7 solid"></div>
          还款总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.sum}}</span>元
        </div>
      </div>
      <div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          height="250">
          <el-table-column
            prop="id"
            label="期数"
            width="95"
            align="center">
          </el-table-column>
          <el-table-column
            prop="sum"
            label="偿还本息"
            width="95">
          </el-table-column>
          <el-table-column
            prop="capital"
            label="偿还本金"
            width="95">
          </el-table-column>
          <el-table-column
            prop="interest"
            label="偿还利息"
            width="95">
          </el-table-column>
          <el-table-column
            prop="else"
            label="剩余本金"
            >
          </el-table-column>
        </el-table>
      </div>
      <div >
        <div style="font-size: 22px;margin-top: 20px">贷款建议:</div>
        <p id="enough" style="color: #31d09f" v-if="enough">根据预测，您足以支付每期还款</p>
        <p id="not_enough" v-if="enough==false">在您的还款期内，根据历史消费记录预测，有X个月（a,b,c,d）应还金额超出当月预测结余，如果选择该方案，请酌情调整这些月份的消费</p>
        <p id="can_change" v-if="change">对于上述需调整的月份，根据您的历史消费数据预测，您额可调整支出分类占比为：衣物饰品a% 饮食b% 住宿c% 娱乐消费d%.您可以根据自身需求调整这些消费</p>
        <p id="cannot_change" v-if="change==false">根据您的历史消费，有X月（a,b,c,d)应还金额还需要其他资金收入，您可以考虑还款期内是否有以下的收入：奖学金、到期理财产品、兼职等，<span style="color: red">如果没有，请酌情调整所选贷款方案</span></p>
      </div>
    </el-form>
</template>

<script>
    export default {
        name: "evaluate",
      props:['scheme'],
      data() {
        return {

          /*scheme:{
            capital:0,
            interest:0,
            sum:0
          },*/

          enough:false,
          change:true,
          tableData: [{
            id:'1',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'2',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'3',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'4',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }]
        }
      }
    }
</script>

<style scoped>

  .main_panel{
    width:500px;
    /*height:600px;*/
  }

  .top_panel{
    display: flex;
  }

  .pointer:hover{
    cursor:pointer;
  }

</style>
