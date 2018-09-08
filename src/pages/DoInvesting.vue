<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>
    <img src="/static/pic/Investing.png" class="img-responsive" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 400px">
    <div class="overview">
      <div class="total" style="position:absolute;left:8%;top:20%;font-size:18px;width:300px;text-align:left;">
        <label>标的编号 {{target_id}}</label>
        <label>剩余时间：{{leftTime}}</label>
        <br/>
        <el-progress :stroke-width="20" :percentage="percentage" ></el-progress>
      </div>
      <div style="border: 1px solid lightgrey;height:120px;width:100%;position:absolute;top:40%;">
        <div style="position:absolute;left:8%;padding:15px 0px 0px 0px;display: flex;text-align: center">
          <div style="padding:0px 40px 0px 0px">
            <span class="keypoint">{{revenueRate}}</span><label>%</label><br/>
            <label>预期年化收益率</label>
          </div>
          <div style="padding:0px 40px 0px 0px">
            <span class="keypoint">{{lifeOfLoan}}</span><br/>
            <label>借款期限</label>
          </div>
          <div style="padding:0px 40px 0px 0px">
            <span class="keypoint">{{totalLoan}}</span><label>元</label><br/>
            <label>总额度</label>
          </div>
          <div class="selfmoney" style="padding: 10px 20px 0px 100px;font-size:20px;display:flex;">
            <div style="padding:0px 30px 0px 0px">
              <label>还需投资：{{leftNeeds}}元</label>
              <br/>
              <label>您的余额为：{{userMoney}}元</label>
            </div>
            <div style="padding:10px 40px 0px 0px">
              <el-input-number v-model="num1" @change="handleChange" :min="1"label="描述文字"></el-input-number>
            </div>
            <div style="padding:10px 40px 0px 0px">
              <el-button type="primary" round>{{DoInvest}}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex;min-height:800px;border: 1px solid lightgrey;">
      <div class="market_out" style="height:100%;width:100%;">
        <el-tabs :tab-position="tabPostion" style="height:100%;">
          <el-tab-pane label="产品概要" style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <p v-html="Abstract"></p>
          </el-tab-pane>
          <el-tab-pane label="借款人信息" style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <doInvestingLoanerInfo></doInvestingLoanerInfo>
          </el-tab-pane>
          <el-tab-pane label="投标记录" style="padding:80px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <el-table
              :data="tableData"
              height="290"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="money"
                label="金额">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import rightBar from '@/components/rightBar.vue';
    import doInvestingLoanerInfo from '@/components/doInvestingLoanerInfo.vue';
    export default {
      name: "DoInvesting",
      components:{navi,rightBar,doInvestingLoanerInfo},
      data(){
        return{
          tableData:[
            {date: '2018-05-03',
            name: '陈文博',
            money: '5000'
            },
            {date: '2018-06-13',
              name: '罗子俊',
              money: '500'
            },
            {date: '2018-08-08',
              name: '付贺然',
              money: '100'
            },
            {date: '2018-08-20',
              name: '吴欣怡',
              money: '400'
            },
            {date: '2018-08-29',
              name: '王刚',
              money: '400'
            },
          ],
          target_id:"723972",
          percentage:80,
          leftTime:"31天9小时50分04秒",
          revenueRate:8.0,
          lifeOfLoan:"2年",
          totalLoan:8000,
          leftNeeds:1600,
          userMoney:1000,
          num1: 100,
          tabPostion:"left",
          DoInvest:"确认投资",
          Abstract:"借款项目简介<br/><br/>" +
            "还款方式：付息还本" +
            "<br/><br/>" +
            "借款用途：托福培训<br/>" +
            "<br/>" +
            "月还本息：180.32<br/><br/>"+
            "到期需还本金：8000<br/><br/>"+
            "说明：在投资期限届满前，投资人不可以转让或赎回<br/><br/>"+
            "信用说明：信用等级排序：AA>A>B>C>D<br/><br/>"

          ,//产品概要
          InvestInfo:"XXXXXXXXXXXX",
        }
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      }
    }
</script>

<style scoped>
  .keypoint{
    font-size:40px;
    color:deepskyblue;
  }
  .market_out{
    word-wrap: break-word;
    word-break: normal;
  }
</style>
<style scoped>
  .market_out >>> .el-tabs__item{
    font-size: 20px;
    padding: 40px 20px 30px 20px;
    width:250px;
    text-align: left;
  }

</style>
<!--<style lang="scss" scoped>

  @import '../scss/element-variables.scss';

</style>-->
<!--
<style>
  .ruzhu-mess .el-form-item__label{
    font-size:16px!important;
  }
  .zhuanye-mess .el-form-item__label,.zhuanye-mess .color-t{
    font-size:16px!important;
    color:#606266;
  }
</style>
<style lang="scss" scoped>

  @import '../../../assets/scss/pages/organizationUserCenter1.scss';

</style>
-->




