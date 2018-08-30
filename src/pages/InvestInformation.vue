<template>
  <personalCenter paneltitle="项目信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <div class="ChooseBar">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人" style="width: 600px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>
          <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio1">
            <el-radio-button label="100以下"></el-radio-button>
            <el-radio-button label="100-500"></el-radio-button>
            <el-radio-button label="500-1000"></el-radio-button>
            <el-radio-button label="1000以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio2">
            <el-radio-button label="立刻开始"></el-radio-button>
            <el-radio-button label="5天之内"></el-radio-button>
            <el-radio-button label="10天之内"></el-radio-button>
            <el-radio-button label="10天以上"></el-radio-button>
          </el-radio-group>
          <br/>
          <span><b>标的种类&nbsp&nbsp&nbsp</b></span>
          <el-radio-group v-model="value_radio3">
            <el-radio-button label="日常生活费周转"></el-radio-button>
            <el-radio-button label="体育娱乐活动"></el-radio-button>
            <el-radio-button label="旅游"></el-radio-button>
            <el-radio-button label="游戏影音"></el-radio-button>
            <el-radio-button label="不限"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="projectPanel">
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
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second">

      </el-tab-pane>
      <el-tab-pane label="收藏项目" name="third">

      </el-tab-pane>
      <el-tab-pane label="坏账记录" name="fourth">

      </el-tab-pane>
    </el-tabs>

  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"investinformation",
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
        activeName: 'first',
        formInline: {
          user: '',
          region: ''
        },
        value_radio1: '上海',
        value_radio2: '上海',
        value_radio3: '上海'

      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
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

  .ChooseBar{
    min-height: 250px;
    /*background-color: ghostwhite;*/
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

</style>
