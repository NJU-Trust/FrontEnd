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

    <!--左边栏-->
    <div style="position:relative;top:200px;">
      <leftCheckBar></leftCheckBar>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--正文内容 -->
    <div class="back">
      <div id="check" class="sheet" style="position:relative;top:-350px;left:250px">
        <el-table
          :data="tableData"
          max-height="350"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="标的名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="state"
            label="当前状态"
            width="300">
            <template slot-scope="scope">
              <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="action"
            label="操作"
            width="300">
            <template slot-scope="scope">
              <router-link to="/targetverify">
                <button class="button" >审核
                </button>
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

    <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
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
          name: '看演唱会',
          state: 1,
          action:''
        }, {
          name: '看漫展',
          state: 2,
          action:''
        }, {
          name: '日产开销',
          state: 2,
          action:''
        },{
          name: '不知道还能写啥',
          state: 1,
          action:''
        },{
          name: '不知道还能写啥+1',
          state: 2,
          action:''
        }, {
          name: '编不下去了',
          state: 1,
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
    height: 200px;
    display:flex;
  }

  /*表格样式*/
  .sheet{
    margin-top: 200px;
    margin-left:10%;

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
