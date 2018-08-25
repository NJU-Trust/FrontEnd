<template>
    <div class="main_panel">
      <div class="top_panel">
        <div>
          <div style="padding-left: 30px">
            还款难度：
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
          </div>
          <div style="padding-left: 50px">
            <span style="font-size: 25px;font-weight:bold;color: #cd5f33;padding-top: 20px;padding-left: 15px">654.44</span>
            <br>
            <span style="color: #acacac;padding-top: -20px">每月还款金额(元)</span>
          </div>
          <div ></div>
        </div>
        <div style="margin-left: 100px">
          贷款金额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold">10000</span>元
          <div style="border: 1px #b7b7b7 solid"></div>
          利息总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">5000</span>元
          <div style="border: 1px #b7b7b7 solid"></div>
          还款总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">15000</span>元
        </div>
      </div>
      <div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          height="250">
          <el-table-column
            prop="id"
            label="期数"
            width="95"
            align="center">
          </el-table-column>
          <el-table-column
            prop="sum"
            label="偿还本息"
            width="95">
          </el-table-column>
          <el-table-column
            prop="principal"
            label="偿还本金"
            width="95">
          </el-table-column>
          <el-table-column
            prop="interest"
            label="偿还利息"
            width="95">
          </el-table-column>
          <el-table-column
            prop="else"
            label="剩余本金"
            >
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "evaluate",
      data() {
        return {
          tableData: [{
            id:'1',
            sum:'',
            principal:'',
            interest:'',
            else:''
          }, {
            id:'2',
            sum:'',
            principal:'',
            interest:'',
            else:''
          }, {
            id:'3',
            sum:'',
            principal:'',
            interest:'',
            else:''
          }, {
            id:'4',
            sum:'',
            principal:'',
            interest:'',
            else:''
          }]
        }
      }
    }
</script>

<style scoped>

  .main_panel{
    width:500px;
    height:400px;
  }

  .top_panel{
    display: flex;
  }

</style>
