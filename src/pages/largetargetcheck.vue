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
    <div class="back">
      <leftCheckBar></leftCheckBar>
      <div class="publishmes">
        <h4 style="margin-top:2%">&nbsp;&nbsp;&nbsp;&nbsp<strong>大额标的</strong></h4>
        <hr/><br/>
        <div id="check" class="sheet">
          <el-table
            :data="tableData"
            max-height="370"
            :default-sort = "{prop: 'time', order: 'descending'}"
            style="width:80%;margin-left:5%;">
            <el-table-column
              prop="time"
              label="提交时间"
              align="center"
              sortable
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="标的名称"
              align="center"
              width="300">
            </el-table-column>
            <el-table-column
              prop="state"
              label="当前状态"
              align="center"
              width="150">
              <template slot-scope="scope">
                <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="100%">
              <template slot-scope="scope">
                <i class="el-icon-view"></i>
                <el-button type="text" @click="dialogFormVisible = check(scope.$index)">审核</el-button>
                <el-dialog title="大额标的审核"
                           :lock-scroll="false"
                           :visible.sync="dialogFormVisible">
                  <el-steps :active="active" finfish-status="success">
                    <el-step title="第一部分" description="用户基本信息"></el-step>
                    <el-step title="第二部分" description="项目基本信息"></el-step>
                    <el-step title="第三部分" description="资金去向"></el-step>
                    <el-step title="第四部分" description="关于贷款"></el-step>
                  </el-steps>

                  <br/><br/>
                  <el-form v-show="control.part1"
                           style="margin-left:30%">
                    <el-form-item label="用户名">{{ tableData[tempindex].username}}</el-form-item>
                    <br/>
                    <el-form-item label="风险评级">{{ tableData[tempindex].risk }}</el-form-item>
                    <br/>
                    <el-form-item label="非结构化信息审核情况">{{ tableData[tempindex].userstate }}</el-form-item>
                  </el-form>
                  <el-button style="margin-top: 12px;margin-left:45%;" type="primary" size="mini" v-show="control.part1" @click="next(control)">下一步</el-button>

                  <el-form style="margin-left:30%"
                           v-show="control.part2" >
                    <el-form-item label="项目编号"><span>{{ tableData[tempindex].projectid}}</span></el-form-item>
                    <el-form-item label="项目名称">{{ tableData[tempindex].name }}</el-form-item>
                    <el-form-item label="开始时间">{{ tableData[tempindex].startTime }}</el-form-item>
                    <el-form-item label="结束时间">{{ tableData[tempindex].endTime }}</el-form-item>
                  </el-form>
                  <el-button style="margin-top: 12px;margin-left:35%;"type="primary" size="mini" v-show="control.part2" @click="last(control)">上一步</el-button>
                  <el-button style="margin-top: 12px;margin-left:5%;" type="primary" size="mini"v-show="control.part2" @click="next(control)">下一步</el-button>

                  <el-form   v-show="control.part3"
                             style="margin-left:5%;margin-right:5%">
                    <el-form-item label="资金用途分类"><span>{{ tableData[tempindex].classify}}</span></el-form-item>
                    <el-form-item label="资金用途详述">{{ tableData[tempindex].desc }}</el-form-item>
                    <el-form-item label="凭证">
                      <template >
                        <img v-bind:src=tableData[tempindex].pic alt="user" class="pics"/>
                      </template>
                    </el-form-item>
                  </el-form>
                  <el-button style="margin-top: 12px;margin-left:35%;" type="primary" size="mini"v-show="control.part3"@click="last(control)">上一步</el-button>
                  <el-button style="margin-top: 12px;margin-left:5%;"type="primary" size="mini" v-show="control.part3"@click="next(control)">下一步</el-button>

                  <el-form   v-show="control.part4"
                             style="margin-left:30%">
                    <el-form-item label="拆借金额"><span>{{ tableData[tempindex].money}}</span></el-form-item>
                    <el-form-item label="还款利率">{{ tableData[tempindex].rate }}</el-form-item>
                    <el-form-item label="还款日期">{{ tableData[tempindex].repayDate }}</el-form-item>
                    <el-form-item label="还款方式">{{ tableData[tempindex].returntype }}</el-form-item>
                  </el-form>
                  <el-button style="margin-top: 12px;margin-left:45%;"type="primary" size="mini" v-show="control.part4"@click="last(control)">上一步</el-button>

                  <div slot="footer" class="dialog-footer">
                    <el-button
                      v-show="control.part4" type="primary" @click="dialogFormVisible = send1()">确 定</el-button>
                  </div>
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </div>

    </div>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
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
      check: function(index){
        this.tempindex = index;
        //console.log(index);
        return true;
      },
      last(control){
        console.log(this.active);
        if (this.active === 2){
          this.active = this.active - 1;
          control.part1 = true;
          control.part2 = false;
        }
        else if(this.active === 3){
          this.active = this.active - 1;
          control.part3 = false;
          control.part2 = true;
        }
        else{
          this.active = this.active - 1;
          control.part4 = false;
          control.part3 = true;
        }
      },
      next(control){
        console.log(this.active);
        if(this.active === 1){
          control.part1 = false;
          control.part2 = true;
        }
        else if (this.active === 2){
          control.part2 = false;
          control.part3 = true;
        }
        else if (this.active === 3){
          control.part3 = false;
          control.part4 = true;
        }
        if(this.active++ > 4) {
          this.active = 0;
        }
      },
      send: function (userstate) {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        console.log(userstate);
        this.$confirm('您的用户选择已提交。系统将及时发送问卷至相应用户邮箱。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
          this.$router.push('/UserSpace/CrossCheck');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
        return false;

      },
      send1: function () {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        this.$message({
          message:'提交成功',
          type:'success',
        });
        this.tableData.splice(this.tempindex, 1);
        this.active = 1;
        this.control.part1=true;
        this.control.part2=false;
        this.control.part3=false;
        this.control.part4=false;
        //this.$router.replace('/UserSpace/CrossCheck');
        return false;
      },
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
        dialogFormVisible: false,
        active:1,
        control:{
          part1:true,
          part2:false,
          part3:false,
          part4:false,
        },
        tempindex:0,
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
          name: '考托福',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pic:"../../static/pic/大额1.png",
        }, {
          time:'2018-09-08',
          name: '考托福',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        }, {
          time:'2018-08-13',
          name: '考雅思',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-06',
          name: '报班再战托福',
          state: 2,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-04',
          name: '出国党求支援',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        }, {
          time:'2018-08-31',
          name: '急需雅思报名费',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
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
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    position:absolute;top:222px;
    margin-left: 24%;
  }

  /*表格样式*/
  .sheet{
    //margin-top: 10px;
    margin-left:6%;

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

  div.myspace{
    /*个人中心*/
    text-indent: 4.5%;
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


</style>
