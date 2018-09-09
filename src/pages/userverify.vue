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
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;<strong>非结构化信息</strong></h4>
              <hr/><br/>
              <div id="check" class="sheet">
                <!--新版-->
                <template>
                  <el-table
                    :data="tableData6"
                    border
                    style="width: 95.6%">
                    <!--<el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                          <el-form-item label=" ">
                          </el-form-item>
                          <el-form-item
                            label="判定"
                            prop="action">
                            <div id="temp">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('temp')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('temp').innerHTML='审核未通过';">不合格</el-button>
                            </div>
                          </el-form-item>
                          <el-form-item
                            label="判定"
                            prop="action">
                            <div id="temp">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('temp')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('temp').innerHTML='审核未通过';">不合格</el-button>
                            </div>
                          </el-form-item>
                        </el-form>
                      </template>
                    </el-table-column>-->
                    <el-table-column
                      prop="classify"
                      label="条目类别"
                      :filters="[{text: '证书或证明截图', value: '证书或证明截图'}, {text: '教务网截图', value: '教务网截图'},{text:'查找政府公示',value:'查找政府公示'},{text:'学生综合服务平台截图',value:'学生综合服务平台截图'},{text:'银行信息截图',value:'银行信息截图'},{text:'图书馆信息截图',value:'图书馆信息截图'}]"
                      :filter-method="filterHandler"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="条目名称"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="mess"
                      width="200"
                      label="条目信息">
                    </el-table-column>
                    <el-table-column
                      width="200"
                      label="条目证明">
                      <template slot-scope="scope">
                        <img v-bind:src=scope.row.pics alt="pics" style="width:200px;height:200px;"/>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width="100">
                      <template slot-scope="scope">
                        <div v-if="scope.row.state !== '审核通过' && scope.row.state !== '审核未通过'">
                          <el-button
                            size="mini"
                            type="text"
                            @click="qualified(scope.row)">合格</el-button>
                          <el-button
                            size="mini"
                            type="text"
                            @click="unqualified(scope.row)">不合格</el-button>
                        </div>
                        <div v-else>
                          {{ scope.row.state}}
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
                <br/>
                <br/>
                <br/>
                <div>
                  <el-button size="mini"
                             type="primary"
                             style="position:relative;left:700px;"
                             @click="clear()"
                  >审核其他用户
                  </el-button>
                </div>
                <br/>

                <!--旧版-->
                <!--<el-table
                  :data="tableData5"
                  style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="证书或证明截图">
                          <div v-if="props.row.certi_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{props.row.certi_pic}}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.certi_pic === 0">
                         </div>
                          <div v-else-if="props.row.certi_pic === 1">
                            <span >审核通过</span>
                          </div>
                          <div v-else>
                              <div id="demo">
                                <el-button
                              size="mini"
                              type="text"
                              @click="change('demo')">合格</el-button>
                                <el-button
                              size="mini"
                              type="text"
                              onclick="getElementById('demo').innerHTML='审核未通过';">不合格</el-button>
                              </div>
                          </div>
                        </el-form-item>

                        <el-form-item label="教务网信息截图">
                          <div v-if="props.row.stu_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{ props.row.stu_pic }}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.stu_pic === 0">
                          </div>
                          <div v-else-if="props.row.stu_pic === 1">
                            <span >审核通过</span>
                          </div>
                          <div v-else>
                            <div id="demo1">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('demo1')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('demo1').innerHTML='审核未通过'">不合格</el-button>
                            </div>
                          </div>
                        </el-form-item>

                        <el-form-item label="政府公示">
                          <div v-if="props.row.gov_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{ props.row.gov_pic }}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.gov_pic === 0">
                          </div>
                          <div v-else-if="props.row.gov_pic === 1">
                            <span >审核通过</span>
                          </div>
                          <div v-else>
                            <div id="demo2">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('demo2')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('demo2').innerHTML='审核未通过'">不合格</el-button>
                            </div>
                          </div>
                        </el-form-item>

                        <el-form-item label="学习综合服务平台">
                          <div v-if="props.row.ser_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{ props.row.ser_pic }}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.ser_pic === 0">
                          </div>
                          <div v-else-if="props.row.ser_pic === 1">
                            <span >审核通过</span>
                          </div>
                          <div v-else>
                              <div id="demo3">
                                <el-button
                                  size="mini"
                                  type="text"
                                  @click="change('demo3')">合格</el-button>
                                <el-button
                                  size="mini"
                                  type="text"
                                  onclick="getElementById('demo3').innerHTML='审核未通过'">不合格</el-button>
                              </div>
                          </div>
                        </el-form-item>

                        <el-form-item label="银行信用截图">
                          <div v-if="props.row.bank_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{ props.row.bank_pic }}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.bank_pic === 0">
                          </div>
                          <div v-else-if="props.row.bank_pic === 1">
                            <span style="color:#66CD00">审核通过</span>
                          </div>
                          <div v-else>
                            <div id="demo4">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('demo4')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('demo4').innerHTML='审核未通过'">不合格</el-button>
                            </div>
                          </div>
                        </el-form-item>

                        <el-form-item label="图书馆信用截图">
                          <div v-if="props.row.lib_pic === 0">
                            <span >无数据</span>
                          </div>
                          <div v-else>
                            <span>{{ props.row.lib_pic }}</span>
                          </div>
                        </el-form-item>
                        <el-form-item>
                          <div v-if="props.row.lib_pic === 0">
                          </div>
                          <div v-else-if="props.row.lib_pic === 1">
                            <span style="color:#66CD00">审核通过</span>
                          </div>
                          <div v-else>
                            <div id="demo5">
                              <el-button
                                size="mini"
                                type="text"
                                @click="change('demo5')">合格</el-button>
                              <el-button
                                size="mini"
                                type="text"
                                onclick="getElementById('demo5').innerHTML='审核未通过'">不合格</el-button>
                            </div>
                          </div>
                        </el-form-item>

                        <el-form-item label=" ">
                        </el-form-item>

                        <el-form-item
                          prop="action">
                        <template slot-scope="scope">
                          <router-link to="/EnterVerify">
                            <el-button v-show="tempData.flag"
                                       size="mini"
                                       type="success"
                            >审核完成
                            </el-button>
                            <el-button size="mini"
                                       type="primary"
                                       @click="clear()"
                                      >返回
                            </el-button>
                          </router-link>
                        </template>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="用户名"
                    prop="username"
                    width="400">
                  </el-table-column>
                  <el-table-column
                    label="当前状态"
                    prop="state"
                    width="400">
                    <template slot-scope="scope">
                    <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
                  </template>
                  </el-table-column>
                </el-table>-->
              </div>
            </div>
          </div>
      </el-col>
    </el-row>

  <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->

  </div>
</template>

<script type="text/javascript">
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import LeftCheckBar from "@/components/leftCheckBar";
  let changenum = 0;
  let new_changenum = 0;
  let count;
  let new_count;
  let certi = ['每年平均志愿活动时长','学生工作','奖励信息','科研竞赛获奖情况','奖学金'];
  let stu = ['学校分类','所在专业情况','受教育情况','挂科数','学习成绩'];
  let gov = ['是否为失信人员'];
  let ser = ['违纪或治安处罚等不良信息','学费及住宿费缴纳情况','考试作弊'];
  let bank = ['贷款偿还'];
  let lib = ['图书馆借阅还书情况'];
  var certi_list = [],stu_list = [],gov_list=[],ser_list=[],bank_list=[],lib_list=[];
  export default {
    name: "userverify",
    components:{LeftCheckBar, navi, footerBar, rightBar},
    methods:{
      test:function(){
        new_count = this.tableData6.length;
        new_changenum = 0;
        count = 0;
        changenum = 0;
        this.tempData.flag = false;
        let certi_pic = this.tableData5[0].certi_pic;
        if (certi_pic !== 0 && certi_pic !== 1){
          count = count + 1;
        }
        let stu_pic = this.tableData5[0].stu_pic;
        if (stu_pic !== 0 && stu_pic !== 1){
          count = count + 1;
        }
        let gov_pic = this.tableData5[0].gov_pic;
        if (gov_pic !== 0 && gov_pic !== 1){
          count = count + 1;
        }
        let bank_pic = this.tableData5[0].bank_pic;
        if (bank_pic !== 0 && bank_pic !== 1){
          count = count + 1;
        }
        let ser_pic = this.tableData5[0].ser_pic;
        if (ser_pic !== 0 && ser_pic !== 1){
          count = count + 1;
        }
        console.log(count);
        console.log(changenum);

        //分组显示
        var list = this.tableData6;
        console.log(certi);
        for (var i=0;i < list.length;i++){
          var flag = false;
          for(var j = 0;j < certi.length;j++){
            if (list[i].name === certi[j]){
              console.log('可以判断了！');
              certi_list.push(list[i]);
              list[i].classify = '证书或证明截图';
              flag = true;
              break;
            }
          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < gov.length;j++){
              if (list[i].name === gov[j]){
                gov_list.push(list[i]);
                list[i].classify = '查找政府公示';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < ser.length;j++){
              if (list[i].name === ser[j]){
                ser_list.push(list[i]);
                list[i].classify = '学生综合服务平台截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < bank.length;j++){
              if (list[i].name === bank[j]){
                bank_list.push(list[i]);
                list[i].classify = '银行信息截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < stu.length;j++){
              if (list[i].name === stu[j]){
                stu_list.push(list[i]);
                list[i].classify = '教务网截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < lib.length;j++){
              if (list[i].name === lib[j]){
                lib_list.push(list[i]);
                list[i].classify = '图书馆信息截图';
                flag = true;
                break;
              }
            }
          }
        }
      console.log(certi_list);
      },
      change:function(temp){
        changenum = changenum + 1;
        document.getElementById(temp).innerHTML='审核通过';
        console.log(count);
        console.log(changenum);
        if(changenum === count){
          this.tempData.flag = true;
          console.log(this.tempData.flag);
        }
      },
      clear:function(){
        count = 0;
        changenum = 0;
        if(new_count !== new_changenum){
          this.$confirm('当前用户相关信息还没有审核完成，是否跳转?(已完成的数据会保留)', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '您将开始审核其他用户！',
            });
            this.$router.push('/EnterVerify');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '您将继续审核当前用户！'
            });
          });
        }
        else{
          this.$router.push('/EnterVerify');
        }
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      qualified:function(temp){
        new_changenum = new_changenum + 1;
        temp.state = '审核通过';
      },
      unqualified:function(temp){
        new_changenum = new_changenum + 1;
        temp.state = '审核未通过';
      },
  },
    computed:{
      typeList:function(){
        var certi_list = [];
        var list = this.list;
        for (var i=0;i < list.length;i++){
          if (list[i].name in certi){
            certi_list.append(list[i]);
          }
        }
      }
    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: 'info',
          2: 'danger',
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
    data() {
      return {
        tableData5: [{
          username: '小红',
          state: 1,
          desc: '暂无',
          certi_pic: '好多张图片',
          stu_pic: 0,
          gov_pic: 1,
          ser_pic: '图片',
          bank_pic: '图片',
          lib_pic: 0,
        }],
        tempData: {
          count: 0,
          flag: false,
        },
        //状态栏，0表示未审核，1表示已审核，2表示需要审核
        tableData6: [{
          classify: 0,
          name: '每年平均志愿活动时长',
          state: 0,
          mess: '志愿时长超过100小时',
          pics: '../../static/pic/志愿时长.png',
        }, {
          classify: 0,
          name: '所在专业情况',
          state: 1,
          mess: '所在院系：工程管理学院',
          pics: '../../static/pic/所在专业.png',
        }, {
          classify: 0,
          name: '图书馆借阅还书情况',
          state: 1,
          mess: '无逾期未还书情况',
          pics: '../../static/pic/图书借阅.png',
        }, {
          classify: 0,
          name: '学费及住宿费缴纳情况',
          state: 1,
          mess: '正常缴纳，没有逾期情况发生',
          pics: '../../static/pic/费用缴纳.png',
        }],
      }
    },
    created:function(){
      this.test();
    },
}
</script>

<style scoped>
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    background-color: #D9F3FB;
    min-height:700px;
    //margin-top:10%;
    //height: 100%;
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
    //height:550px;
  //width:100%;
    width:950px;
    /*margin-right: 10%;*/
    /*margin-left: 16%;*/
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    position:relative;
    /*top:222px;*/
    /*margin-left: 24%;*/
  }

  .sheet{
    margin-top: 20px;
    margin-left:5%;

  }

  /*边栏样式*/
  .left{
    /*border:1px black solid;*/
    width:200px;
    height: 150px;
    margin-top: 120px;
    padding-top: 20px;
    position: fixed;
  }
  .left_label{
    width:200px;
    height:50px;
    /*margin-top: 20px;*/
    /* border: 1px black solid;*/
    text-align:center;
    padding-top: 17px;
    font-size: 16px;
  }

  /*完成按钮样式*/
  .button_position{
    width:200px;
    padding:20px;
    height:800px;
    margin:10px;
    position: relative;
    top:600px;
    left:1000px;
  }
  .button{
    background-color: #4285F4;
    border: none;
    border-radius: 12px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.6;
   }

  /*图片栏*/
  .pic{
    border:2px  solid  black;
    width:850px;
    padding:20px;
    height:500px;
    margin:10px;
    position: relative;
    top:100px;
    left:100px;
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

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
