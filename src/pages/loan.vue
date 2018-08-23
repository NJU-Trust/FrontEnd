<template>
    <div id="app">
      <navi></navi>
      <div class="back">
        <div class="left">
          <div class="left_label look_label" @click="change11">
            查看借款情况
          </div>
          <div class="left_label ask_label" @click="change22">
            申请借款
          </div>

        </div>
        <div id="sheet" class="sheet" style="display: none">
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

              <!--<el-button id="consume_btn" @click="change1" autofocus="true">消费类小额短期</el-button>
              <el-button id="learn_btn" @click="change2">学习培训类大额长期</el-button>-->
            </el-row>
          </div>

          <div class="primary_panel" style="margin-top: 20px">
            <div class="row">
              <label for="name">项目名称</label> <el-input id="name" v-model="name" placeholder="请输入名称" clearable></el-input>
            </div>
            <div class="row">
              <label for="money">拆借金额</label><el-input id="money" v-model="money" placeholder="请输入金额" clearable></el-input>
            </div>
            <div class="row">
              <label>开始日期</label><br>
              <el-date-picker
                v-model="date1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="row">
              <label>截止日期</label><br>
              <el-date-picker
                v-model="date2"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="row">
              <label>还款日期</label><br>
              <el-date-picker
                v-model="date3"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>

          <div id="consume" style="margin-top: 20px">

            <div class="row">

              <el-form :inline="true" :model="formInline" class="demo-form-inline">

                <el-form-item label="资金用途分类">
                  <el-select v-model="formInline.region" placeholder="资金用途分类">
                    <el-option label="日常生活周转" value="daily"></el-option>
                    <el-option label="演唱会看比赛看剧音乐会等" value="entertain"></el-option>
                    <el-option label="游戏娱乐电影音乐" value="game"></el-option>
                    <el-option label="旅游" value="travel"></el-option>
                    <el-option label="购买电子产品" value="shop"></el-option>
                    <el-option label="其他购买项如化妆品衣服鞋等等" value="others"></el-option>
                  </el-select>
                </el-form-item>

              </el-form>

            </div>

            <div class="row">
              <label>资金用途详述</label><br>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入内容"
                v-model="textarea1">
              </el-input>
              <el-button type="primary" style="margin-top: 10px">上传<i class="el-icon-upload el-icon--right"></i></el-button>

            </div>

            <div class="row">
              <label>还款方案</label><br>
              <div class="return">
                <div class="return_label">
                  方案一
                </div>
                <div class="return_label">
                  方案二
                </div>
                <div class="return_label">
                  方案三
                </div>
              </div>
            </div>

            <div class="row" style="margin-left: 250px">
              <el-button type="primary" round>提交</el-button>
            </div>

          </div>

          <div id="learn" style="margin-top: 20px;display: none">
            <div class="row">
              <label>项目说明</label><br>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入内容"
                v-model="textarea1">
              </el-input>
              <el-button type="primary" style="margin-top: 10px">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>

            <div class="row" style="margin-left: 250px">
              <el-button type="primary" round>提交</el-button>
            </div>

          </div>
        </div>
        <div id="check" class="sheet">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="已投资数目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="date"
              label="截止日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="action"
              label="操作"
              width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import ElCard from "element-ui/packages/card/src/main";

    export default {
      name: "loan",
      components:{
        ElCard,
        navi},
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
        },
        change22(){
          document.getElementById("sheet").style.display = "inline";
          document.getElementById("check").style.display = "none";
        }
      },

      data(){
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
          },
          date1: '',
          date2: '',
          date3: '',
          usage_radio: 3,
          textarea1: '',
          formInline: {
            user: '',
            region: ''
          },

          tableData: [{
            name: '融资项目一',
            num: '1',
            date: '2018/9/17',
            action:''
          }, {
            name: '融资项目二',
            num: '2',
            date: '2018/9/17',
            action:''
          }, {
            name: '融资项目三',
            num: '3',
            date: '2018/9/17',
            action:''
          }, {
            name: '融资项目四',
            num: '4',
            date: '2018/9/17',
            action:''
          }]
        };
      },

    }
</script>

<style scoped>

    /*.body{
      background-color: #5f9ea0;
    }*/

    .left_label{
      width:200px;
      height:50px;
      /*margin-top: 20px;*/
     /* border: 1px black solid;*/
      text-align:center;
      padding-top: 17px;
      font-size: 16px;
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
      height: 1500px;
      display:flex;
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
      margin-left:30%;
    }
    .chooseButton{
      margin-left: 15%;
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
    .row{
      width:400px;
      padding: 10px;
    }


</style>
