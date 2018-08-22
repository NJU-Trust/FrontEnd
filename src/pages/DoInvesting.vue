<template>
    <div id="app">
      <navi></navi>
      <div class="back">

        //返回按钮
        <div class="left">
          <div class="left_label" @click="change1">
          <button id="backPage" v-on:click="backPage()">返回</button>
          </div>
        </div>

        <div id="sheet" class="sheet" style="display: none">
          <div class="primary_panel" style="margin-top: 20px">
            //项目名称栏
            <div class="row">
              <label for="name">项目名称</label> <el-input id="name" v-model="name" placeholder="请输入名称" clearable></el-input>
            </div>
            
            <div class="row">
              <label for="money">拆借金额</label><el-input id="money" v-model="money" placeholder="请输入金额" clearable></el-input>
            </div>
            
            <div class="row">
              <label>开始日期</label><br>
            </div>
            
            <div class="row">
              <label>截止日期</label><br>
            </div>
            
            <div class="row">
              <label>还款日期</label><br>
            </div>
          </div>

        //短期投资  
          <div id="consume" style="margin-top: 20px">
            <div class="row">
              <label>资金用途详述</label><br>
            </div>

            <div class="row" style="margin-left: 250px">
              <el-button type="primary" round>提交</el-button>
            </div>

          </div>

        //学习类长期投资    
          <div id="learn" style="margin-top: 20px;display: none">
            <div class="row">
              <label>项目说明</label><br>
            </div>

            <div class="row" style="margin-left: 250px">
              <el-button type="primary" round>提交</el-button>
            </div>

          </div>
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
        backPage(){
          //返回查看投资项目界面
          this.$router.go(-1);
        },
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
      border: 1px black solid;
      text-align:center;
      padding-top: 17px;
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
      color: black;
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
      /*background-color: #85d1d1;*/
      width: 100%;
      height: 1500px;
      display:flex;
    }
    .left{
      border:1px black solid;
      width:200px;
      height: 150px;
      margin-top: 100px;
      padding-top: 20px;
      position: fixed;
    }
    .sheet{
      margin-top: 100px;
      margin-left:25%;
    }
    .chooseButton{
      margin-left: 15%;
    }
    .row{
      width:400px;
      padding: 10px;
    }

</style>