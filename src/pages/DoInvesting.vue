<template>
    <div id="app">
      <navi></navi>
      <div class="back">

        <!-- 返回按钮 -->
        <div class="left">
          <div class="left_label" @click="change1">
          <el-button  icon="el-icon-back" v-on:click="backPage()"></el-button>
          </div>
        </div>


        <div id="sheet" class="sheet" style="display: inline">
          <div class="primary_panel" style="margin-top: 20px">
            <!-- 项目名称栏 -->
            <div class="row">
              <label for="ProjectName">项目名称:</label><br>
              <p>投资项目1</p>
            </div>

            <!-- 项目信息 -->
            <div class="row">
              <label for="UserName">来自用户:</label><br>
              <p>用户1</p>
            </div>
            
            <div class="row">
              <label for="Contact">联系方式:</label><br>
              <p>电话:10086</p>
            </div>
            


            <div class="row">
              <!-- 进度条显示 -->
              <label for="money">剩余金额/总金额:</label><p>40 / 50</p>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
            </div>
            

            <!-- 增加剩余XX天 -->
            <div class="row">
              <label>开始日期:</label><br>
              <p>2018/2/30</p>
            </div>
            
            <div class="row">
              <label>截止日期:</label><br>
              <p>2018/2/30</p>
              <p>剩余</p><label for="restDay">2</label><p>天</p>
            </div>
            
            <div class="row">
              <label>还款日期</label><br>
              <p>2018/2/30</p>
            </div>


            <div class="row">
              <label>详细信息</label>
            </div>
            <template id="Inform">
              <el-tabs  class="row" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="项目介绍" name="first">项目介绍</el-tab-pane>
                <el-tab-pane label="相关政策" name="second">相关政策</el-tab-pane>
              </el-tabs>
            </template>
            <br><br><br>

            <div class="row">
              <label>请选择投资金额</label>
            </div>
            <el-input v-model="input" placeholder="请输入金额"></el-input>

            <el-button class="checkbutton" icon="success"> 确认 </el-button>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import ElCard from "element-ui/packages/card/src/main";

    export default {
      name: "DoInvesting",
      components:{
        ElCard,
        navi},
      methods:{
        backPage(){
          //返回查看投资项目界面
          this.$router.go(-1);
        },
        data() {
          return {
            input: ''
          }
        }
      }
    }
</script>

<style scoped>

    /*.body{
      background-color: #5f9ea0;
    }*/

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
      width:200px;
      height: 150px;
      margin-top: 300px;
      margin-left: 50px;
      padding-top: 20px;
      position: fixed;
    }
    .sheet{
      background: #a0c7f5;
      margin-top: 100px;
      margin-bottom: 100px;
      width: 600px;
      margin-left:30%;
    }
    .chooseButton{
      margin-left: 15%;
    }
    .row{
      width:400px;
      padding: 10px;
      margin-left: 20px;
    }
    .checkbutton{
      margin-left: 40%;

    }

</style>