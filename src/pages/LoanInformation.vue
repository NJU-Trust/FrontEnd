<template>
  <personalCenter paneltitle="项目信息">
    <div class="projectPanel">
      <div class="chooseButton">
        <el-row style="text-align: center">
          <el-button id="invest_recent_btn" class="type_choose_btn" @click="change_invest_recently" autofocus="true" round>财务</el-button>
          <el-button id="loan_recent_btn"  class="type_choose_btn" @click="change_loan_recently" round>借款</el-button>
        </el-row>
        <hr/>
      </div>
      <div class="projectPages">
        <project-list></project-list><br/>
        <project-list></project-list><br/>
        <project-list></project-list><br/>
        <project-list></project-list><br/>
      </div>
      <div id="poj_pagination">
        <div class="block">
          <!--<span class="demonstration">完整功能</span>-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"loaninformation",
    components: {ProjectList, personalCenter},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 2,
      };
    },
    methods:{
      change_invest_recently(){

      },
      change_loan_recently(){

      }
    }
  }

</script>

<style scoped>
  #poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .type_choose_btn{
    padding-left: 50px;
    padding-right: 50px;
  }

</style>
