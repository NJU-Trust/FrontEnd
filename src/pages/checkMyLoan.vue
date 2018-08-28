<template>

</template>
<div id="check" style="margin-top: 100px;">
  <div class="choose">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="项目金额">
        <el-input v-model="formInline.money" style="width: 120px;"></el-input>
      </el-form-item>
      <el-form-item label="项目类型" >
        <el-select v-model="formInline.category">
          <el-option label="不限" value="any"></el-option>
          <el-option label="消费类小额短期" value="consume"></el-option>
          <el-option label="学习培训类大额长期" value="learn"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="还款日期" >
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.return_date" style="width: 140px;"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!--<div class="title">筛选条件</div>-->
  </div>

  <div>
    <checkList></checkList>
  </div>
</div>
<script>
    export default {
        name: "check-my-loan",

        data(){
          return {
            formInline:{
              money:'',
              category:'any',
              return_date:''
            }
          }
      }
    }
</script>

<style scoped>

  .choose{
    display: flex;
    /* border: 1px black solid;*/
    margin-left: 30%;
    width:1000px;
  }

</style>
