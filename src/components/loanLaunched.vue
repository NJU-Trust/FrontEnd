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
          prop="launch_date"
          label="发布时间"
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
        name: "loan-launched",
        data(){
          return{
            tableData:[{
              name:'',
              money:0,
              year_rate:'',
              launch_date:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              launch_date:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              launch_date:'',
              state:''
            }, {
              name:'',
              money:0,
              year_rate:'',
              launch_date:'',
              state:''
            }],
          }// end return
        }
    }
</script>

<style scoped>

</style>
