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
          prop="service_money"
          label="违约服务费"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="occurrence_date"
          label="违约发生日期"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="days"
          label="违约天数"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="details"
          label="违约详情"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态"
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
        name: "loan-unbelievable"
    }
</script>

<style scoped>

</style>
