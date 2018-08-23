<template>
  <div class="UserList">
    <adminNavi></adminNavi>
    <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">
    <div class="mytable">
      <div class="base-info" style="padding:50px 0px 0px 100px; font-size:12px;">
        <label style="font-size: 14px;">输入筛选条件:</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="tableBackground" style="background-color:rgba(173,216,230,0.3);">
      <table class="usertable">
        <tbody class="usertablebody">
        <tr>
          <th></th>
          <th style="border: 1px solid white;text-align:center;">用户名称</th>
          <th style="border: 1px solid white;text-align:center;">用户等级</th>
          <th style="border: 1px solid white;text-align:center;">电话</th>
          <th style="border: 1px solid white;text-align:center;">邮箱</th>
          <th style="border: 1px solid white;text-align:center;">操作</th>
        </tr>
        <tr v-for="user in filteredUsers" @click="showModel" >
          <td class="collapsing">
            <div class="ui toggle slider checkbox" v-if="aKey!==''">
              <input type="checkbox" :value="user" v-model="selectedUsers"> <label></label>
              <!--当按照某一审核要求过滤时显示，其 v-model 指向 selectedUsers 数组，
              用来保存批量操作中选中的 user ，之后可以直接对此数组进行操作，改动会同步到 users-->
            </div>
          </td>
          <td style="border: 1px solid white ;text-align:center;">{{ user.username }}</td>
          <td style="border: 1px solid white ;text-align:center;">{{ user.level }}</td>
          <td style="border: 1px solid white ;text-align:center;">{{ user.tel }}</td>
          <td style="border: 1px solid white ;text-align:center;">{{ user.email }}</td>
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
          <th colspan="4" style="text-align:center;">
            <button class="pageButton" @click="turnPage(-1)">Prev</button>
            <span>共 {{ totalPage }} 页，当前第 {{ currentPage+1 }} 页</span>
            <button class="pageButton" @click="turnPage(1)">Next</button>
            <span>跳转到第</span>
            <input type="text" v-model="jPage" @keyup.enter="jumpToPage" style="width:50px;height:25px;color:black;">
            <span>页</span>
          </th>
        </tr>
        </tfoot>
      </table>
      </div>
    </div>
    <footerBar></footerBar>

  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  var mockUsers = [{username: '佳未1',
    level: '1',
    tel: '12345678',
    email: '1@qq.com',},
    {username: '佳未2',
      level: '2',
      tel: '22345678',
      email: '2@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未9',
      level: '9',
      tel: '32345678',
      email: '9@qq.com',},
    {username: '佳未3',
      level: '3',
      tel: '32345678',
      email: '3@qq.com',},
    {username: '佳未10',
      level: '10',
      tel: '32345678',
      email: '10@qq.com',}];
  var STORAGE_KEY = 'users';
  var userStorage = {
    fetch: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockUsers
    },
    save: function (data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  };

  export default {
    name: "usermanage",
    components:{adminNavi,footerBar},
    data () {
      return {
        users: userStorage.fetch(), // users 数据
        selectedUsers: [], // 保存选中的 users 数组
        selectedUser: {}, // 选中 user
        fKey: '', // 过滤 name 的关键字
        name: '', // 上一次过滤的 name 关键字，初始化为''
        aKey: '', // select audit 的关键字
        audit: '', // 上一次过滤的 audit关键字，初始化为''
        limit: 9, // 每页显示行数
        totalPage: 0, // 总页数
        currentPage: 0, // 当前页
        jPage: 1, // 跳转到某页


      }
    },
    // watch
    watch: {
      users: {
        handler () {
          userStorage.save(this.users)
        },
        deep: true
      }
    },
    // computed properties
    computed: {
      filteredUsers () {
        let fUsers = this.queryFilter('name', this.fKey, this.users)
        fUsers = this.queryFilter('audit', this.aKey, fUsers)
        return this.paginate(fUsers)
      }
    },
    methods: {
      addUser() {
        this.users.push(this.user)
      },
      queryFilter(prop, key, arr) {
        // none query string, return arr
        if (!key) {
          return arr
        }
        // filtering
        arr = arr.filter((user) => {
          if (user[prop].toString().indexOf(key) !== -1) {
            return true
          }
        })
        // if it's a new filter query, research and turn to page one
        if (key !== this[prop]) {
          this.currentPage = 0
          // save last filter query
          this[prop] = key
        }
        return arr
      },

      paginate(arr) {
        // totalPage
        this.totalPage = Math.ceil(arr.length / this.limit)
        let page = this.currentPage
        let curLimit = this.limit
        // 返回指定条数的数组
        arr = arr.slice(curLimit * page, curLimit * (page + 1))
        return arr
      },
      turnPage(num) {
        if (num === 1) {
          if (this.currentPage === this.totalPage - 1) {
            return
          } else {
            this.currentPage++
          }
        } else {
          if (this.currentPage === 0) {
            return
          } else {
            this.currentPage--
          }
        }
      },
      jumpToPage() {
        let jPage = this.jPage - 1
        if (jPage < 0 || jPage > this.totalPage) {
          alert('page out of range')
        } else {
          this.currentPage = jPage
        }
      },

      doAudit(newAudit, user) {
        // user 可指定，为 0 时指选中用户，为 -1 时指全部用户
        let users = []
        if (user === 0) {
          users = this.selectedUsers
        } else if (user === -1) {
          this.filteredUsers.forEach((v) => {
            users.push(v)
          })
        } else {
          users.push(user)
        }
        this.setAuditId(users, newAudit)
      },
      setAuditId(users, aId) {
        users.forEach((user) => {
          user.audit = aId
        })
      },
      showModel(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'td') {
          $('.ui.modal').modal('show')
        }
        let index = $(target.parentNode).index()
        this.selectedUser = this.filteredUsers[index]
      }
    }
  }
</script>


<style scoped>
  .mytable{
    min-width: 400px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:rgba(173,216,230,0.5);
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
  .tableBackground{
    background-color:rgba(173,216,230,0.5);
    min-height: 462px;
  }
  .usertable{
    min-width: 400px;
    padding: 240px 0px;
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
  .sureButton,.checkDetailButton,.pageButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 28px;
    padding: 0px 0px;
    line-height: 18px;
    background-color:rgba(0,100,200,0.8);
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
    color:black;
  }

</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css" />

