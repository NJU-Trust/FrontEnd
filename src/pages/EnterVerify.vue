<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace">审核模块</h2>
        <p style="color: #777777;">审核用户非结构化信息，审核各类标的请求</p>
      </div>
    </div>

    <!--正文内容 -->
    <el-row :gutter="20" class="back" >
      <el-col :span="5">
        <div class="grid-content bg-purple" style="margin-top:13%;">
          <leftCheckBar></leftCheckBar>
        </div>
      </el-col>
      <el-col :span="8" >
        <div class="grid-content bg-purple" style="margin-top:7.6%;margin-left:8%;">
          <div class="publishmes" >
            <h4 style="margin-top:2%">&nbsp;&nbsp;&nbsp;&nbsp;<strong>非结构化信息</strong></h4>
            <hr/><br/>
            <!--<h3 style="margin-top: 10px;margin-left: 30px">用户选择</h3>-->
            <div id="check" class="sheet" >
              <el-table
                :data="tableData"
                max-height="350"
                :default-sort = "{prop: 'time', order: 'descending'}"
                style="width: 85%">
                <el-table-column
                  prop="time"
                  label="提交时间"
                  sortable
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="用户名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="当前状态"
                  width="150">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="action"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <router-link to="/userverify">
                      <i class="el-icon-view"></i>
                      <el-button  type="text">审核
                      </el-button>
                    </router-link>
                    <!--
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>


  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import LeftCheckBar from "../components/leftCheckBar";

  export default {
    name: "EnterVerify",
    components:{LeftCheckBar, navi, footerBar, rightBar},
    methods:{

    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: '',
          2: 'warning',
        }
        return statusMap[status]
      },
      filterTag(value, row) {
        return row.state === value;
      },
      // 状态显示转换
      formatStata(status) {
        const statusMap = {
          1: '待审核',
          2: '初审未通过',
        }
        return statusMap[status]
      }
    },
    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        date1: '',
        date2: '',
        date3: '',
        usage_radio: 3,
        textarea1: '',
        formInline: {
          user: '',
          region: ''
        },

        tableData: [{
          time:'2018-08-06',
          name: '马俊豪',
          state: 1,
          action:''
        }, {
          time:'2018-08-13',
          name: '彦志',
          state: 1,
          action:''
        }, {
          time:'2018-08-24',
          name: '付闫博',
          state: 1,
          action:''
        },{
          time:'2018-09-08',
          name: '刘美璇',
          state: 2,
          action:''
        }]
      };
    },

  }
</script>

<style scoped>

  /*白色背景*/
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    background-color: #D9F3FB;
    min-height:700px;
  //height: 200px;
    display:flex;
  }

  div.myspace{
    /*个人中心*/
    text-indent:6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .myspace p{
    font-size: 15px;
    color: #505050;
  }
  .publishmes{
    background:white;
    border:1px solid #e4e4e4;
  //border-top:5px solid dodgerblue;
    height:550px;
  //width:100%;
    width:950px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    position:relative;
  }

  /*表格样式*/
  .sheet{
    //margin-top: 5%;
    margin-left:13%;

  }

  /*按钮样式*/
  .button{
    background-color: #4285F4;
    border: none;
    border-radius: 12px;
    color: white;
    padding: 5px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
   }


</style>
