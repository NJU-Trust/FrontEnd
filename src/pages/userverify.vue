<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace">用户-标的审核</h2>
        <p style="color: #777777;">审核用户非结构化信息，审核各类标的请求</p>
      </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>


    <!--左边栏-->
    <div style="position:relative;top:200px;">
      <leftCheckBar></leftCheckBar>
    </div>

    <!--正文内容 -->
    <div class="back">
      <div id="check" class="sheet" style="position:relative;top:-350px;left:250px">
        <el-table
          :data="tableData5"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <!--这里的_pic变量表示的都是这类项目是否存在的状态。0表示无数据，1表示审核完成，其他表示正在等待审核。因此显示的部分还要增加新的变量-->
                <el-form-item label="证书或证明截图">
                  <div v-if="props.row.certi_pic === 0">
                    <span >无数据</span>
                  </div>
                  <div v-else>
                    <span>{{props.row.certi_pic}}</span>
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.certi_pic === 0">
                 </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.certi_pic === 1">
                    <span >审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.stu_pic === 0">
                  </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.stu_pic === 1">
                    <span >审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.gov_pic === 0">
                  </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.gov_pic === 1">
                    <span >审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.ser_pic === 0">
                  </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.ser_pic === 1">
                    <span >审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.bank_pic === 0">
                  </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.bank_pic === 1">
                    <span style="color:#66CD00">审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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
                    <!-- 否则显示数据库传过来图片-->
                  </div>
                </el-form-item>
                <el-form-item>
                  <!--没有图片选项-->
                  <div v-if="props.row.lib_pic === 0">
                  </div>
                  <!-- 有图片,已经审核过 -->
                  <div v-else-if="props.row.lib_pic === 1">
                    <span style="color:#66CD00">审核通过</span>
                  </div>
                  <!-- 有图片,还没有审核过/首次审核没有通过 -->
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

                <!--审核完成的控制方法：这个按钮用于控制用户状态。
                  初始读取变量的时候，有数据未审核的项目数为x,最终判断合格的项目数Y是否等于X。
                  如果y = x，则审核完成的按钮解禁；
                  如果y != x，则审核完成按钮不解禁。（这样可以防止漏掉审核某一项的情况）-->
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
        </el-table>
      </div>
    </div>

    <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>

  </div>
</template>

<script type="text/javascript">
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import LeftCheckBar from "@/components/leftCheckBar";
  let changenum = 0;
  let count;
  export default {
    name: "userverify",
    components:{LeftCheckBar, navi, footerBar, rightBar},
    methods:{
      test:function(){
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
        tableData5:[{
          username: '小红',
          state: 1,
          desc: '暂无',
          certi_pic: '好多张图片',
          stu_pic:0,
          gov_pic: 1,
          ser_pic:'图片',
          bank_pic:'图片',
          lib_pic: 0,
        }],
        tempData:{
          count:0,
          flag:false,
        },
      }
    },
    created:function(){
      this.test();
    },
    /*watch:{
      change:function(){
        if(change === count){
          flag = false;
          console.log(flag);
        }
      }
    },*/
}
</script>

<style scoped>

  /*白色背景*/
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height: 400px;
    display:flex;
  }

  .sheet{
    margin-top: 200px;
    margin-left:10%;

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
