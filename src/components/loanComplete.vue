<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="项目名称"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="money"
        label="借款金额"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="year_rate"
        label="年利率"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="start_to_end"
        label="起止时间"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="state"
        label="项目状态"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop=""
        label="项目详情"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
    export default {
        name: "loan-complete",
        data(){
          return{
            tableData:[{
              name:'',
              money:0,
              year_rate:'',
              start_to_end:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              start_to_end:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              start_to_end:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              start_to_end:'',
              state:''
            }],
          }//end return
        }
    }
</script>

<style scoped>

</style>
