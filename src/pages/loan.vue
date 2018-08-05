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

          <div class="consume" style="margin-top: 20px">
            <div class="row">
              <label for="name">项目名称</label> <el-input id="name" placeholder="请输入名称" clearable></el-input>
            </div>
            <div class="row">
              <label for="money">拆借金额</label><el-input id="money" placeholder="请输入金额" clearable></el-input>
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

        },
        change2(){

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
          date3: ''
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
      height: 800px;
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
