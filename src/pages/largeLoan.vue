<template>

  <div>
    <navi></navi>
    <div>
      <right-bar></right-bar>
    </div>

    <el-form class="back">

      <div class="sheet">
        <el-steps :active="active"  style="width: 800px">
          <el-step title="项目信息" icon="el-icon-edit" align-center></el-step>
          <el-step title="资金去向" icon="el-icon-upload" align-center></el-step>
          <el-step title="关于贷款" icon="el-icon-success" align-center></el-step>
        </el-steps>


        <div class="primary_panel" style="margin-top: 20px">

          <el-form ref="form1" :model="form1" label-width="80px" class="primary_info">
            <div class="title">基本信息</div>
            <el-form-item label="项目名称">
              <el-input placeholder="请填写项目名称" v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="开始日期">
              <el-date-picker type="date" placeholder="选择日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="截止日期">
              <el-date-picker type="date" placeholder="选择日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>

            <el-button type="primary" plain @click="next">下一步</el-button>

          </el-form>

          <div id="learn" style="margin-top: 20px;">

            <el-form ref="form4" :model="form4" label-width="100px" class="primary_info">
              <div class="title">项目信息</div>
              <el-form-item label="项目说明">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form4.textarea2">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" style="margin-top: 10px">上传凭证<i class="el-icon-upload el-icon--right"></i></el-button>
              </el-form-item>
            </el-form >

            <el-form ref="form3" :model="form3" label-width="100px" class="primary_info">
              <div class="title">关于贷款</div>
              <el-form-item label="拆借金额">
                <el-tooltip class="item" effect="dark" content="可借额度剩余XXXX元" placement="top-start">
                  <el-input placeholder="请填写拆借金额" v-model="form3.money"></el-input>
                </el-tooltip>
              </el-form-item>
              <el-form-item label="还款日期">
                <el-tooltip class="item" effect="dark" content="大额贷款最长期限为5年，建议范围为[N1,N2]" placement="top-start">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form3.return_date" style="width: 100%;"></el-date-picker>
                </el-tooltip>
              </el-form-item>
              <el-form-item label="基准还款利率">
                <el-tooltip class="item" effect="dark" content="利率上下限为[M1,M2],建议设置为M0" placement="top-start">
                  <el-input v-model="form3.rate"></el-input>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="还款方式">
                <el-collapse v-model="form3.activeName" accordion>

                  <div @click="get_average_capital">
                    <el-collapse-item title="等额本金" name="1" >
                      <div>贷款数总额等分，每月的还款本金额固定，利息越来越少；</div>
                      <div>起初还款压力较大，但是随着时间的推移每月的还款数也越来越少。</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_average_capital_plus_interest">
                    <el-collapse-item title="等额本息" name="2">
                      <div>每月偿还等同数额的贷款；</div>
                      <div>还款期限内压力平分，总利息高于等额本金。</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_one_off">
                    <el-collapse-item title="一次性还本付息" name="3">
                      <div>贷款到期后一次性归还本金和利息；</div>
                      <div>还款期压力大，操作间大，借款人资金调整弹性大，资金利用时间长</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_interest_first">
                    <el-collapse-item title="先息后本" name="4">
                      <div>每月只需支付利息，期末还清本金；</div>
                      <div>资金利用时间长。</div>
                    </el-collapse-item>
                  </div>

                </el-collapse>
              </el-form-item>

              <el-form-item>
                <div v-if="this.form3.activeName==='1'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
                <div v-else-if="this.form3.activeName==='2'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
                <div v-else-if="this.form3.activeName==='3'">
                  C
                </div>
                <div v-else-if="this.form3.activeName==='4'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
              </el-form-item>

              <el-form-item style="padding-left: 140px">
                <el-button type="primary" @click="onSubmit">确定贷款</el-button>
                <el-button @click="clean_form3">清空重写</el-button>
              </el-form-item>


            </el-form>

            <div class="row" style="margin-left: 250px">
              <el-button type="primary" round>提交</el-button>
            </div>

          </div>

        </div>
      </div>



    </el-form>

    <footerBar></footerBar>
  </div>

</template>

<script>

  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import evaluate from '@/components/evaluate.vue';
    export default {
        name: "large-loan",
        components:{
          navi,footerBar,rightBar,evaluate
        },
        beforeCreate:function(){
          localStorage.route = "#loan";
        },
        methods: {
          get_average_capital(num) {
            console.log()
            console.log("等额本金");
            this.scheme.capital = 20000;
            this.scheme.interest = 4000;
            this.scheme.sum = 24000;
          },

          get_average_capital_plus_interest() {
            console.log("等额本息");
            this.scheme.capital = 20000;
            this.scheme.interest = 5000;
            this.scheme.sum = 25000;
          },

          get_one_off() {
            console.log("一次性还本付息")
          },

          get_interest_first() {
            console.log("先息后本")
          },

          next() {
            if (this.active++ > 2) this.active = 0;
          }
        },
      data(){
          return{
            pickerOptions1: {
              disabledDate(time) {
                return time.getTime() > Date.now();
              },
            },
            form1:{
              name: '',
              date1: '',
              date2: '',
            },
            form3:{
              money:'',
              return_date:'',
              rate:'',
              create:false,
              activeName: '',
            },
            form4:{
              textarea2:''
            },
          }
      }
    }
</script>

<style scoped>

  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    /* height: 1700px;*/
    display:flex;
    margin-bottom: 50px;
  }

  .sheet{
    margin-top: 100px;
    margin-left:27%;
  }

  .primary_info{
    width:750px;
    margin-top: 50px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:10px 50px 20px 40px;
  }
  .title{
    font-size: 23px;
    color: #acacac;
    padding-bottom: 20px;
  }

</style>
