<template>
  <div class="UserList">
    <adminNavi></adminNavi>
    <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">
    <div class="mytable">
      <div class="base-info" style="padding:50px 0px 0px 70px; font-size:12px;">
        <label>用户名称：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="username" value=""/>
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>用户等级：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="username" value=""/>
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label >电话：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="username" value=""/>
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>邮箱：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="username" value="">
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <button class="sureButton">确认筛选</button>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <table class="usertable">
        <tbody class="usertablebody">
        <tr>
          <th v-for='item in columnList' style="border: 1px solid white;text-align:center;">{{item.text}}</th>
          <th style="border: 1px solid white;text-align:center;">操作</th>
        </tr>
        <tr v-for='item in inforList'>
          <td v-for='it in columnList' style="border: 1px solid white ;text-align:center;">{{item[it.column_name]}}</td>
          <td style="border: 1px solid white ;text-align:center;">
            <router-link to="/userdetail">
              <button class="checkDetailButton">查看</button>
            </router-link>
          </td>
        </tr>
        </tbody>
        <tfoot class="full-width">
        <tr>
          <th></th>
          <th colspan="4"><!--
          <button class="ui button green" v-if="aKey==='1'" @click="doAudit(2, 0)">通过审核</button>
          <button class="ui button green" v-if="aKey==='1'" @click="doAudit(2, -1)">全部通过审核</button>
          <button class="ui button red" v-if="aKey==='1'" @click="doAudit(3, 0)">不通过审核</button>
          <button class="ui button red" v-if="aKey==='1'" @click="doAudit(3, -1)">全部不通过审核</button>
          <button class="ui button small" v-if="aKey==='0'" @click="doAudit(1, 0)">审核</button>
          <button class="ui button small" v-if="aKey==='0'" @click="doAudit(1, -1)">全部审核</button>
          <button class="ui button small" v-if="aKey==='2' || aKey==='3'" @click="doAudit(1, 0)">再次审核</button>
          <button class="ui button small" v-if="aKey==='2' || aKey==='3'" @click="doAudit(1, -1)">全部再次审核</button>
          -->
            <button class="ui button left labeled icon" @click="turnPage(-1)">
              <i class="left arrow icon"></i> Prev
            </button>
            <span>共 {{ totalPage }} 页，当前第 {{ currentPage+1 }} 页</span>
            <button class="ui button right labeled icon" @click="turnPage(1)">
              <i class="right arrow icon"></i> Next
            </button>
            <div class="jtp">
              <span>跳转到第 </span>
              <div class="ui input icon">
                <input type="text" v-model="jPage" @keyup.enter="jumpToPage">
              </div><span> 页</span>
            </div>
          </th>
        </tr>
        </tfoot>
      </table>
    </div>


  </div>



</template>

<script>
  import adminNavi from '@/components/adminNavi.vue';

  export default {
    name: "usermanage",
    components:{adminNavi},
    data () {
      return {
        //users: userStorage.fetch(), // users 数据
        //selectedUsers: [], // 保存选中的 users 数组
        //selectedUser: {}, // 选中 user
        //fKey: '', // 过滤 name 的关键字
        //name: '', // 上一次过滤的 name 关键字，初始化为''
        //aKey: '', // select audit 的关键字
        //audit: '', // 上一次过滤的 audit关键字，初始化为''
        limit: 5, // 每页显示行数
        totalPage: 0, // 总页数
        currentPage: 0, // 当前页
        jPage: 1, // 跳转到某页
        columnList: [{column_name:'username',text:"用户名称"},
          {column_name:'level',text:"用户等级"},
          {column_name:'tel',text:'电话'},
          {column_name:'email',text:'邮箱'}],
        inforList: [{'username': '佳未1',
          'level': '1',
          'tel': '12345678',
          'email': '1@qq.com',},
          {'username': '佳未2',
            'level': '2',
            'tel': '22345678',
            'email': '2@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未3',
            'level': '3',
            'tel': '32345678',
            'email': '3@qq.com',},
          {'username': '佳未10',
            'level': '10',
            'tel': '32345678',
            'email': '10@qq.com',}]
      }
    },
    methods:{
    }
  }
</script>


<style scoped>
  .mytable{
    height: 580px;
    min-width: 400px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:rgba(0,100,200,0.3);
    color: white;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    top: 53px;
    width:100%;
    left: 0%;
    position: absolute;
    letter-spacing: 2px;
  }
  .usertable{
    height: 450px;
    min-width: 400px;
    min-height: 60px;
    padding: 100px 0px;
    line-height: 40px;
    color: white;
    border-collapse: collapse;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:80%;
    left: 10%;
    height: 70%;
    position: absolute;
    letter-spacing: 2px;
  }
  .sureButton,.checkDetailButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 28px;
    padding: 0px 0px;
    line-height: 18px;
    background-color:rgba(0,50,200,0.5);
    color: white;
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 550px;
    width: 10%;
    left: 43%;
    letter-spacing: 2px;
  }


  .status-picker select {
    border-radius: 5px;
    width: 200px;
    float: left;
    height: 37px;
    margin-bottom: -13px;
    border: 1px solid rgba(34, 36, 38, .15);
    padding: 0 10px;
  }

  .jtp {
    margin-top: 10px;
  }

  .jtp .ui.icon.input input {
    padding: 0.5em!important;
    width: 32px;
  }

  .modal .content {
    display: flex!important;
    justify-content: center;
    align-items: center;
  }

</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css" />

