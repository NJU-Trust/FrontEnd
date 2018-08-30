<template>
  <personalCenter paneltitle="账户总览">

    <div id="user_welcome">
      <el-row :gutter="20" id="welcome_top">
        <el-col :span="14">
          <div class="grid-content bg-purple wel_left">
            <br>
            <p class="wel_words">您好，</p>
            <p class="wel_words wel_texts">欢迎进入个人中心</p>
            <br/>
            <p> 最近回款时间：无</p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple wel_right">
            <el-row>
              <el-button type="primary" plain class="wel_right_btn">充值</el-button>
              <el-button type="primary" plain class="wel_right_btn">提现</el-button>
              <br/><hr/>
            </el-row>
            <div class="wel_right_text">
              <p>账户总额</p>
              <p><b style="font-size: 28px">0</b> 元</p>
              <p>可用余额：0元</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <div style="margin-left: 10px; margin-right: 10px">
        <el-row :gutter="10" id="welcome_down">
          <el-col :span="6">
            <div class="grid-content bg-purple " style="text-align: center">
              <br/>
              <p style="font-size: 18px">总额构成</p>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple "></div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>可用余额</p>
              <p><b style="font-size: 28px">0</b></p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>冻结金额</p>
              <p><b style="font-size: 28px">0</b></p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>待回收本金</p>
              <p><b style="font-size: 28px">0</b></p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>待回收利息</p>
              <p><b style="font-size: 28px">0</b></p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ">
              <p>招标中投资</p>
              <p><b style="font-size: 28px">0</b></p>
            </div>
          </el-col>

        </el-row>
      </div>

    </div>

    <div id="user_overview">
      <h4><b>账户总览</b></h4>
      <br/>
      <el-row :gutter="36">
        <el-col :span="12">
          <el-card shadow="always" class="mycard card_A">
            <p>总投资</p>
            <span>130000</span> 元
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always" class="mycard card_B">
            <el-row :gutter="2">
              <el-col :span="8">
                <el-progress type="circle" :percentage="25" width="81"></el-progress>
              </el-col>
              <el-col :span="16">
                <p>待收回本金<span> 1600.00</span> 元</p>
                <p>已收回 25%</p>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <br/>
      <el-row :gutter="36">
        <el-col :span="12">
          <el-card shadow="always" class="mycard card_A">
            <p>累积总收益</p>
            <span>5566.27</span> 元
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always" class="mycard card_B">
            <el-row :gutter="2">
              <el-col :span="8">
                <el-progress type="circle" :percentage="37" width="81"></el-progress>
              </el-col>
              <el-col :span="16">
                <p>待收回利息<span> 375.40</span> 元</p>
                <p>已收回 37%</p>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <br/>
      <el-row :gutter="36">
        <el-col :span="6">
          <el-card shadow="always" class="mycard card_B">
            <p>冻结金额</p>
            <span>0</span> 元
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always" class="mycard card_B">
            <p>投标次数</p>
            <span>0</span> 次
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always" class="mycard card_B">
            <p>待回收金额</p>
            <span>0</span> 元
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always" class="mycard card_B">
            <p>信用评级
              <el-popover
                placement="top"
                title="评级规则"
                width="200"
                trigger="hover"
                content="财务信息评级占比	70%,非财务信息评级占比	30%">
                <i class="el-icon-question" slot="reference" style="font-size: 14px"></i>
              </el-popover>
            </p>
            <span>76</span> 分
          </el-card>
        </el-col>
      </el-row>
    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"userspace",
    components: {personalCenter},
    mounted() {

    },
    methods: {

    }
  }

</script>

<style scoped>

  .mycard{
    padding-left: 10px;
  }

  .mycard span{
    font-size: 24px;
  }

  .card_A {
    background-image: url("../../static/pic/card2.jpg");
    /*width: 249px;*/
    height: 120px;
    color: ghostwhite;

  }

  .card_B {
    /*background-image: url("../../static/pic/card2.jpg");*/
    /*width: 249px;*/
    height: 120px;
    color: #333333;
  }


  .bg-purple {
    /*background: ghostwhite;*/
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .wel_words{
    font-size: 36px;
    color: dodgerblue;
  }

  .wel_texts{
    color: black;
  }

  .wel_right{
    text-align: right;
  }

  .wel_right_btn{
    color: #333333;
    font-size: 28px;
    background: white;
    padding-left: 50px;
    padding-right: 50px;
    border: 1px solid #333333;
  }

  .wel_right_text{
    font-size: 16px;
  }

  #welcome_down{
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    padding-top: 12px;
  }

  .ov-plus{
    color: #333333;
    font-size: 16px;
  }

  .ov-content{
    color: #333333;
  }



</style>

