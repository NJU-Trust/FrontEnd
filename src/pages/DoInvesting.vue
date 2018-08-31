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
    <div style="display:flex;height:800px;">
      <div class="leftBar" style="border: 1px solid lightskyblue;height:100%;width:30%;">

      </div>
      <div class="production" style="border: 1px solid lightskyblue;height:100%;width:70%;">
        <el-tabs type="border-card">
          <el-tab-pane label="产品概要" style="height:728px;">{{Abstract}}</el-tab-pane>
          <el-tab-pane label="借款人信息" style="height:728px;">{{borrowerInfo}}</el-tab-pane>
          <el-tab-pane label="投标记录" style="height:728px;">投标记录</el-tab-pane>
        </el-tabs>
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
          Abstract:"借款项目简介\n" +
            "● 融资人简介：借款主体：某文化传媒（惠州）有限公司，经营范围为制作、复制、发行：电视剧、动画片，专题、专栏（不含时政新闻类），综艺；设计、代理、制作、发布国内外各类广告；大型活动策划、企业管理咨询；国内贸易。 担保人：吴学长，本科毕业于武汉大学1989级汉语言文学专业，从事传媒行业，是此次借款公司的控股大股东、总经理、法定代表人，年收入80万元。名下主要资产有惠州市惠城区后所街某号房产，市值人民币320万元；惠州市惠城区后所街某号房产，市值人民币650万元；宝马汽车，市值人民币90万元。吴学长任武汉大学校友企业家联谊会泛珠联理事。此次借款有房产作为抵押\n" +
            "\n" +
            "● 资金用途：资金周转\n" +
            "\n" +
            "● 收益说明： 融资总额176,473元。 每月付息：￥ 1,470.61 元",//产品概要
          borrowerInfo:"借款人信息\n" +
            "●性别：男\n" +
            "\n" +
            "●年龄：56\n" +
            "\n" +
            "●是否结婚：已婚\n" +
            "\n" +
            "●工作城市：广东 惠州\n" +
            "\n" +
            "●学历：硕士\n" +
            "\n" +
            "●入学年份：1989-09-01\n" +
            "\n" +
            "●所在行业：媒体/广告\n" +
            "\n" +
            "●个人月收入：50000元以上\n" +
            "\n" +
            "●有无购房： 有\n" +
            "\n" +
            "●有无购车：有",
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


