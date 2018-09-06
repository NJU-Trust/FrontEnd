<template>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="项目名称"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="year_rate"
        label="年利率"
        align="center"
        width="70"
      >
      </el-table-column>
      <el-table-column
        prop="num"
        label="待还期数"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="principal_and_interest"
        label="待还本息"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="next_return"
        label="下个还款日"
        align="center"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="money"
        label="还款日应还金额"
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
            @click="">点击查看</el-button>
        </template>
      </el-table-column>

    </el-table>
</template>

<script>
    export default {
        name: "loan-underway",
        data(){
          return{
            tableData:[{
              name:'',
              date:'',
              year_rate:'',
              num:0,
              principal_and_interest:0,
              money:0,
            }, {
              name:'',
              date:'',
              year_rate:'',
              num:0,
              principal_and_interest:0,
              money:0,
            }, {
              name:'',
              date:'',
              year_rate:'',
              num:0,
              principal_and_interest:0,
              money:0,
            }, {
              name:'',
              date:'',
              year_rate:'',
              num:0,
              principal_and_interest:0,
              money:0,
            }],
          }
        },
    }
</script>

<style scoped>

</style>
