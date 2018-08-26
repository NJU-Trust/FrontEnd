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
    <!--
    <div class="back">
      <div class="button_position">
        <router-link to="/EnterVerify">
          <button class="button">审核完成</button>
        </router-link>
      </div>
      <div class="pic">
        <h1>(截图)</h1>
        <button class="button" style="opacity:1;padding:10px 25px;">合格</button>
        <button class="button" style="opacity:1;padding:10px 25px;">不合格</button>
      </div>
    </div>
    -->
    <div class="back">
      <div id="check" class="sheet" style="position:relative;top:-350px;left:250px">
        <el-table
          :data="tableData5"
          max-height="350"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="">
                  <!--<span>{{ props.row.username }}</span>-->
                </el-form-item>
                <el-form-item label="">
                  <!--<span>{{ props.row.state }}</span>-->
                </el-form-item>

                <el-form-item label="证书或证明截图">
                  <span >{{ props.row.rate }}</span>
                </el-form-item>
                <el-form-item >
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="教务网信息截图">
                  <span>{{ props.row.money }}</span>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="政府公示">
                  <span>{{ props.row.startTime }}</span>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="学习综合服务平台">
                  <span>{{ props.row.endTime }}</span>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="银行信用截图">
                  <span>{{ props.row.grade }}</span>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="图书馆信用截图">
                  <span>{{ props.row.returntype }}</span>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                </el-form-item>

                <el-form-item label="">
                </el-form-item>

                <el-form-item
                  prop="action"
                  label="审核结果">
                  <el-button
                    size="mini"
                    type="primary"
                    disabled
                    @click="handleDelete(scope.$index, scope.row)">审核完成</el-button>
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

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import LeftCheckBar from "@/components/leftCheckBar";
  export default {
    name: "userverify",
    components:{LeftCheckBar, navi, footerBar, rightBar},
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
          money:'暂无',
          endTime:'暂无',
          grade:'暂无',
          desc: '暂无',
          returntype: '暂无',
          rate: '暂无',
          startTime: '暂无',
        }, {
          username: '小蓝',
          state: 2,
          money:4000,
          endTime:'2018-12-25',
          grade:'AA',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          returntype: '等额本息',
          rate: '19%',
          startTime: '2018-8-25',
        }, {
          username: '小黄',
          state: 1,
          money:3000,
          endTime:'2018-12-25',
          grade:'B',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          returntype: '等额本息',
          rate: '14.8%',
          startTime: '2018-8-25',
        },{
          username: '小绿',
          state: 1,
          money:3000,
          endTime:'2018-12-25',
          grade:'B',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          returntype: '等额本息',
          rate: '14.8%',
          startTime: '2018-8-25',
        },{
          username: '小白',
          state: 2,
          money:3000,
          endTime:'2018-12-25',
          grade:'B',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          returntype: '等额本息',
          rate: '14.8%',
          startTime: '2018-8-25',
        }, {
          username: '小黑',
          state: 1,
          money:5000,
          endTime:'2018-12-25',
          grade:'D',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          returntype: '等额本息',
          rate: '17.1%',
          startTime: '2018-8-25',
        }]
      }
    }
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
