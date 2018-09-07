<template>
  <el-tabs v-model="activeParent" @tab-click="handleClick" >
    <div class="Parent">
      <el-tab-pane label="财务分析" name="before">
        <div id="financial_id"><br/>
          <fin-analysis></fin-analysis>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目信息" name="after">
        <div id="loan_id">
          <el-tabs v-model="activeChild" @tab-click="handleClick">
            <el-tab-pane label="正在进行" name="first">
              <loanTopBar></loanTopBar>
              <loanUnderway></loanUnderway>
            </el-tab-pane>
            <el-tab-pane label="完成项目" name="second">
              <loanTopBar></loanTopBar>
              <loanComplete></loanComplete>
            </el-tab-pane>
            <el-tab-pane label="已发布项目" name="third">
              <loanTopBar></loanTopBar>
              <loanLaunched></loanLaunched>
            </el-tab-pane>
            <el-tab-pane label="违约记录" name="fourth">
              <loanTopBar></loanTopBar>
              <loanUnbelievable></loanUnbelievable>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </div>

  </el-tabs>
</template>

<script>
    import FinAnalysis from "./finAnalysis";
    import loanTopBar from "../components/loanTopBar";
    import loanUnderway from "../components/loanUnderway"
    import loanComplete from "../components/loanComplete"
    import loanLaunched from "../components/loanLaunched"
    import loanUnbelievable from "../components/loanUnbelievable"


    export default {
      name: "doInvestingLoanerInfo",
      components: {FinAnalysis,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable},
      data(){
        return{
          activeParent: 'before',
          activeChild:'first',
        }
      },
      mounted() {

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
      }
    }

</script>



<style scoped>
  .Parent >>>.el-tabs__item{
    font-size: 15px;
    width:220px;
  }
</style>
