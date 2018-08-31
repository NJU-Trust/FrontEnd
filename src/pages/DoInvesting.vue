<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>
    <img src="/static/pic/Investing.png" class="img-responsive" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 400px">
    <div class="overview">
      <div class="total" style="position:absolute;left:8%;top:20%;font-size:18px;width:300px;text-align:left;">
        <label>标的编号XX</label>
        <label>剩余时间：{{leftTime}}</label>
        <br/>
        <el-progress :stroke-width="20" :percentage="percentage" ></el-progress>
      </div>
      <div style="border: 1px solid lightskyblue;height:120px;width:100%;position:absolute;top:40%;">
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
            <div style="padding:0px 40px 0px 0px">
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
  </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import rightBar from '@/components/rightBar.vue';
    export default {
      name: "DoInvesting",
      components:{navi,rightBar},
      data(){
        return{
          percentage:70,
          leftTime:"1天2小时59分11秒",
          revenueRate:10.0,
          lifeOfLoan:"3个月",
          totalLoan:100000,
          leftNeeds:3000,
          userMoney:100,
          num1: 100,
          DoInvest:"确认投资",
        }
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      }
    }
</script>

<style scope>
  .keypoint{
    font-size:40px;
    color:deepskyblue;
  }
</style>


