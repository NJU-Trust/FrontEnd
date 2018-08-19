<template>
    <div id="app">
      <navi></navi>
      <div class="back">
        <div class="sheet">
          <div class="chooseButton">
            <el-row>
              <el-button id="consume_btn" @click="change1" autofocus="true">消费类小额短期</el-button>
              <el-button id="learn_btn" @click="change2">学习培训类大额长期</el-button>
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
              <label>资金用途分类</label><br>
              <el-radio-group v-model="usage_radio">
                <el-radio :label="3">分类一</el-radio>
                <el-radio :label="6">分类二</el-radio>
                <el-radio :label="9">分类三</el-radio>
              </el-radio-group>
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

            <div class="row">
              <label>还款方案</label><br>
              <el-radio-group v-model="usage_radio">
                <el-radio :label="3">方案一</el-radio>
                <el-radio :label="6">方案二</el-radio>
                <el-radio :label="9">方案三</el-radio>
              </el-radio-group>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import navi from '@/components/navi.vue';

    export default {
      name: "loan",
      components:{navi},
      methods:{
        change1(){
          document.getElementById("consume").style.display = "none";
        },
        change2(){
          date1 = '';
          date2 = '';
          date3 = ''
        },
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
          textarea1: ''
        };
      },

    }
</script>

<style scoped>

    /*.body{
      background-color: #5f9ea0;
    }*/
    .back{
      /*background-color: #85d1d1;*/
      width: 100%;
      height: 1500px;
      border: 1px solid black;
    }
    .sheet{
      margin-top: 100px;
      margin-left:25%;
    }
    .chooseButton{
      margin-left: 20%;
    }
    .row{
      width:400px;
      padding: 10px;
    }

</style>
