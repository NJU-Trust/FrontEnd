<template>
  <div class="UserDetail" >
    <adminNavi></adminNavi>
    <div class="userdetail" style="padding:50px;position: absolute;width:100%;min-height:800px;">
      <table style="margin:0 auto;">
        <tbody>
        <tr>
          <td>
            <div class="base-info" style="padding:30px 0px 50px 0px;font-size:14px;">

              <label>用户名称：</label>
              <label>XXXXXXXX</label>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <label>信用评级：</label>
              <label>XXXXXXXX</label>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <label >手机号：</label>
              <label>XXXXXXXX</label>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <label>邮箱：</label>
              <label>XXXXXXX</label>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <label>借款状态：</label>
              <label>XXXXXXX</label>
            </div>
            <div class="details">
              <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="投资详情">
                  <div style="padding:0px 0px 0px 20px;">
                    <investInfoTabs></investInfoTabs>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="借款详情">
                  <el-tabs style="padding:0px 0px 0px 20px;" v-model="activeName" @tab-click="handleClick">
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
                </el-tab-pane>
                <el-tab-pane label="个人财务">
                  <div style="padding:0px 0px 0px 20px;">
                    <fin-standing></fin-standing>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div style="padding:30px;float: right;">
              <router-link to="/usermanage">
                <el-button class="returnButton" circle>返回列表</el-button>
              </router-link>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <br/>
      <br/>




    </div>

  </div>



</template>

<script>
  import loanTopBar from "../components/loanTopBar";
  import loanUnderway from "../components/loanUnderway"
  import loanComplete from "../components/loanComplete"
  import loanLaunched from "../components/loanLaunched"
  import loanUnbelievable from "../components/loanUnbelievable"
  import adminNavi from '@/components/adminNavi.vue';
  import FinStanding from "../components/finStanding";
  import investInfoTabs from "../components/investInfoTabs";

  export default {
    name: "userdetail",
    components:{adminNavi,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable,FinStanding,investInfoTabs},
    data() {
      return {
        currentPage1: 2,
        activeName: 'first',
        tabPosition:"left",
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
    }
  }
</script>


<style scoped>
  .userdetail{
    min-width: 160px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 10px;
    background-color:rgba(173,216,230,0.5);
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 60px;
    position: absolute;
    letter-spacing: 2px;
  }

</style>

<style scoped>
  .details >>> .el-tabs__item{
    font-size: 20px;
    padding: 40px 20px 30px 20px;
    width: 150px;
    height: 100px;
    text-align: center;
  }
  .details{
    background-color:white;
    width: 1100px;
    min-height: 700px;
  }
</style>
