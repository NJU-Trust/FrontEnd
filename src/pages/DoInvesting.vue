<template>
    <div id="app" style="padding:0;background-color: #D9F3FB;">
      <div style="width: 100%;float: top;">
        <navi ></navi>
      </div>

      <div class="back">

        <!-- 返回按钮 -->
        <div class="left">
          <el-button  icon="el-icon-back" v-on:click="backPage()"></el-button>
        </div>


        <div id="sheet" class="sheet" style="display: inline">
          <div class="picSpace">
              <div id="pics" style="">
                <img src="/static/pic/library.png">
              </div>
              <div id="picSlide">

              </div>
          </div>

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
            

            <!-- 日期 -->
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
              <el-button class="successbutton" @click="confirm">立即投资</el-button>
              <el-button class="markbutton">加入收藏</el-button>
            </div><br><br>

            <div id="confirminvest" style="display:none">
              <label style="margin-left : 10px">请选择投资金额</label>
              <el-input v-model="input" placeholder="请输入金额" style="margin-left:10px;width:50%;"></el-input>
              <el-button>确认</el-button>
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
      name: "DoInvesting",
      components:{
        ElCard,
        navi},
      methods:{
        data() {
          return {
            input: ''
          }
        },backPage(){
          //返回查看投资项目界面
          this.$router.go(-1);
        },
        confirm(){
          document.getElementById("confirminvest").style.display = "inline";
        }
      }
    }
</script>

<style scoped>

    .back{
      width: 100%;
      height: 1500px;
      display:flex;
      background-color: lightblue;
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
      margin-top: 100px;
      margin-bottom: 100px;
    }
    .primary_panel{
      float: right;
    }
    .row{
      width:400px;
      padding: 10px;
      margin-left: 20px;
    }
    .successbutton{
      float: left;
      margin-left: 25%;

    }
    .markbutton{
      float: right;
      margin-left: 20%;
    }
    .picture{
      float: left;
    }

</style>