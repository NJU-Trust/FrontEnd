<template>
    <div id="app">
      <navi></navi>
      <div>
        <right-bar></right-bar>
      </div>
      <el-form class="back">
        <div class="left">
          <div id="look_tab" class="left_label look_label" @click="change11">
            我的借款情况
          </div>
          <div id="ask_tab" class="left_label ask_label" @click="change22">
            申请借款
          </div>

        </div>
        <div id="sheet" class="sheet">
          <div class="chooseButton">
            <el-row>

              <div class="choose_panel">
                <div id="con_tab" class="choose_label consume_label" @click="change1">
                  消费类小额短期
                </div>

                <div id="learn_tab" class="choose_label learn_label" @click="change2">
                  学习培训类大额长期
                </div>
              </div>
            </el-row>
          </div>

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

            </el-form>

            </div>


          <div id="consume" style="margin-top: 20px">

            <el-form ref="form2" :model="form2" label-width="100px" class="primary_info">
              <div class="title">资金去向</div>
              <el-form-item label="资金用途分类">
                <el-select v-model="form2.region" placeholder="资金用途分类">
                  <el-option label="日常生活周转" value="daily"></el-option>
                  <el-option label="演唱会看比赛看剧音乐会等" value="entertain"></el-option>
                  <el-option label="游戏娱乐电影音乐" value="game"></el-option>
                  <el-option label="旅游" value="travel"></el-option>
                  <el-option label="购买电子产品" value="shop"></el-option>
                  <el-option label="其他购买项如化妆品衣服鞋等等" value="others"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="资金用途详述">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form2.textarea1">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" style="margin-top: 10px">上传凭证<i class="el-icon-upload el-icon--right"></i></el-button>
              </el-form-item>
            </el-form>

            <el-form ref="form3" :model="form3" label-width="100px" class="primary_info">
              <div class="title">关于贷款</div>
              <el-form-item label="拆借金额">
                <el-tooltip class="item" effect="dark" content="可借额度剩余XXXX元" placement="top-start">
                  <el-input placeholder="请填写拆借金额" v-model="form3.money"></el-input>
                </el-tooltip>
              </el-form-item>
              <el-form-item label="还款日期">
                <el-tooltip class="item" effect="dark" content="小额贷款最长期限为1年，建议范围为[N1,N2]" placement="top-start">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form3.return_date" style="width: 100%;"></el-date-picker>
                </el-tooltip>
              </el-form-item>
              <el-form-item label="设置还款利率">
                <el-tooltip class="item" effect="dark" content="利率上下限为[M1,M2],建议设置为M0" placement="top-start">
                  <el-input placeholder="请设置还款利率" v-model="form3.rate"></el-input>
                </el-tooltip>
              </el-form-item>

              <el-form-item label="还款方式">
                <el-collapse v-model="form3.activeName" accordion>

                  <div @click="get_average_capital(1)">
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

          </div>

          <div id="learn" style="margin-top: 20px;display: none">

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

      </el-form>
      <footerBar style="float: bottom"></footerBar>
    </div>
  <!--<footerBar style="float: bottom"></footerBar>-->
</template>

<script>
    import navi from '@/components/navi.vue';
    import ElCard from "element-ui/packages/card/src/main";
    import footerBar from '@/components/footerBar.vue';
    import rightBar from '@/components/rightBar.vue';
    import evaluate from '@/components/evaluate.vue';
    import checkList from '@/components/checkList.vue';

    export default {
      name: "loan",
      components:{
        ElCard,
        navi,
        footerBar,
        rightBar,
        evaluate,
        checkList
      },
      beforeCreate:function(){
        localStorage.route = "#loan";
      },
      methods:{
        change1(){
          document.getElementById("learn").style.display = "none";
          document.getElementById("consume").style.display = "inline";

          document.getElementById("con_tab").style.backgroundColor = "lightskyblue";
          document.getElementById("con_tab").style.color = "black";
          document.getElementById("learn_tab").style.color = "white";
          document.getElementById("learn_tab").style.backgroundColor = "rgba(17, 17, 17, 0.17)";
        },
        change2(){
          document.getElementById("consume").style.display = "none";
          document.getElementById("learn").style.display = "inline";

          document.getElementById("con_tab").style.backgroundColor = "rgba(17, 17, 17, 0.17)";
          document.getElementById("con_tab").style.color = "white";
          document.getElementById("learn_tab").style.color = "black";
          document.getElementById("learn_tab").style.backgroundColor = "lightskyblue";
        },
        change11(){
          document.getElementById("sheet").style.display = "none";
          document.getElementById("check").style.display = "inline";

          document.getElementById("ask_tab").style.backgroundColor = "rgba(17, 17, 17, 0.17)";
          /*document.getElementById("con_tab").style.color = "white";
          document.getElementById("learn_tab").style.color = "black";*/
          document.getElementById("look_tab").style.backgroundColor = "lightskyblue";
        },
        change22(){
          document.getElementById("sheet").style.display = "inline";
          document.getElementById("check").style.display = "none";

          document.getElementById("look_tab").style.backgroundColor = "rgba(17, 17, 17, 0.17)";
          /*document.getElementById("con_tab").style.color = "white";
          document.getElementById("learn_tab").style.color = "black";*/
          document.getElementById("ask_tab").style.backgroundColor = "lightskyblue";
        },
        onSubmit(){
          console.log("确认贷款："+this.form3.activeName);
        },
        clean_form3(){
          this.form3.activeName = '';
        },

        get_average_capital(num){
          console.log()
          console.log("等额本金");
          this.scheme.capital = 20000;
          this.scheme.interest = 4000;
          this.scheme.sum = 24000;
        },

        get_average_capital_plus_interest(){
          console.log("等额本息");
          this.scheme.capital = 20000;
          this.scheme.interest = 5000;
          this.scheme.sum = 25000;
        },

        get_one_off(){
          console.log("一次性还本付息")
        },

        get_interest_first(){
          console.log("先息后本")
        }

      },

      data(){
        return {
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
          form2: {
            user: '',
            region: '',
            textarea1:''
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

          scheme:{
            capital:0,
            interest:0,
            sum:0,
          },
          capital:0,


          usage_radio: 3,
          textarea2:'',

          tableData: [{
            name: '融资项目一',
            num: '1',
            date: '2018/9/17',
            process:'200/1000',
            action:''
          }, {
            name: '融资项目二',
            num: '2',
            date: '2018/9/17',
            process:'200/1000',
            action:''
          }, {
            name: '融资项目三',
            num: '3',
            date: '2018/9/17',
            process:'200/1000',
            action:''
          }, {
            name: '融资项目四',
            num: '4',
            date: '2018/9/17',
            process:'200/1000',
            action:''
          }],
          /*formInline:{
            money:'',
            category:'any',
            return_date:''
          }*/
        };
      },

    }
</script>

<style scoped>

    .left_label{
      width:200px;
      height:50px;
      /*margin-top: 20px;*/
     /* border: 1px black solid;*/
      text-align:center;
      padding-top: 15px;
      font-size: 16px;
    }

    .left_label:hover{
      box-shadow: 2px 4px 6px #6a6a6a;
      /*color: black;*/
    }

    .look_label{
      background-color: lightskyblue;
      opacity:0.5;
    }

    .ask_label{
      background-color: rgba(17, 17, 17, 0.17);
      opacity:0.5;
    }

    .choose_panel{
      display: flex;
    }

    .choose_label{
      width:200px;
      height:50px;
      /*border: 1px black solid;*/
      margin-left: 20px;
      text-align:center;
      padding-top: 17px;
    }

    .choose_label:hover{
      box-shadow: 2px 4px 6px #6a6a6a;
      /*color: black;*/
    }

    .consume_label{
      color: black;
      background-color: lightskyblue;
      opacity:0.5;
    }

    .learn_label{
      color: white;
      background-color: rgba(17, 17, 17, 0.17);
      opacity:0.5;
    }
    .back{
      /*background-color: rgba(173,216,230,0.5);*/
      width: 100%;
     /* height: 1700px;*/
      display:flex;
      margin-bottom: 50px;
    }
    .left{
      /*border:1px black solid;*/
      width:200px;
      height: 150px;
      margin-top: 120px;
      padding-top: 20px;
      position: fixed;
    }
    .sheet{
      margin-top: 100px;
      margin-left:27%;
    }
    .chooseButton{
      margin-left: 20%;
    }
    .return{
      display: flex;
      /*border:1px black solid;*/
      width: 500px;
      height: 200px;
    }
    .return_label{
      width:100px;
      height: 150px;
      border: 1px black solid;
      margin-right:40px;
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

    /*.choose{
      display: flex;
     !* border: 1px black solid;*!
      margin-left: 30%;
      width:1000px;
    }*/
    .row{
      width:400px;
      padding: 10px;
    }


</style>
