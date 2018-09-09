<template>
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
        prop="date"
        label="发布时间"
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
        prop="num"
        label="待还期数"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="principal_and_interest"
        label="待还本息(元)"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="next_return"
        label="下个还款日"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="money"
        label="还款日应还金额(元)"
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
</template>

<script>
    export default {
        name: "loan-underway",
        data(){
          return{
            tableData:[{
              name:'托福考试借款项目',
              date:'2018/9/1',
              year_rate:'8%',
              num:9,
              principal_and_interest:2862,
              next_return:'2018/10/1',
              money:318,
            }, {
              name:'CPA考试借款项目',
              date:'2018/6/5',
              year_rate:'8%',
              num:9,
              principal_and_interest:513.33,
              next_return:'2018/10/1',
              money:513.33,
            }, {
              name:'ACCA考试借款项目',
              date:'2018/9/7',
              year_rate:'8%',
              num:12,
              principal_and_interest:3888,
              next_return:'2018/10/7',
              money:324,
            }, ],
          }
        },
    }
</script>

<style scoped>

</style>
