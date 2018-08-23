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
      <div class="pre">
        <a href=""><i class="fa fa-chevron-right fa-4x" style="color:white;position: absolute;padding: 100px 10px"></i></a>
      </div>
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
    </table>
    </div>
<!--
    <div class="pager-wrapper" v-if="pageNum < 6">
      <div v-for="(item, index) in pages" class="item" :class='{active : active === (index + 1)}' @click="changePage(item)">
        {{item}}
      </div>
    </div>
    <div v-else>
      <div class="pager-wrapper" v-if="active < 4">
        <div v-for="(item, index) in pages" class="item" :class='{active : active === (index + 1)}' @click="changePage(item)">
          {{item}}
        </div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
      </div>
      <div class="pager-wrapper" v-else-if="active < (pageNum - 2)">
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :class='{active : active === item}' @click="changePage(item)">
          {{item}}
        </div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
      </div>
      <div class="pager-wrapper" v-else>
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :class='{active : active === item}' @click="changePage(item)">
          {{item}}
        </div>
      </div>
    </div>
-->


  </div>



</template>

<script>
  import adminNavi from '@/components/adminNavi.vue';

  export default {
    name: "usermanage",
    components:{adminNavi},
    data () {
      return {
        limit: 9, // 每页显示行数
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
    /*
    props: {
      pageNum: {
        type: Number,
        default: 10
      },
      activeIndex: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        pages: [],
        active: 1
      }
    },
    watch: {
      active (val) {
        this.init()
      }
    },
    created () {
      this.active = this.activeIndex
      this.init()
    },
    methods: {
      init () {
        if (this.pageNum < 6) {
          let pages = []
          for (let i = 1; i < (this.pageNum + 1); i++) {
            pages.push(i)
          }
          this.pages = pages
        } else {
          if (this.active < 4) {
            let pages = [1, 2, 3]
            this.pages = pages
            console.log(this.pages)
          } else if (this.active < (this.pageNum - 2)) {
            let pages = [this.active - 1, this.active, this.active + 1]
            this.pages = pages
          } else {
            let pages = [this.pageNum - 2, this.pageNum - 1, this.pageNum]
            this.pages = pages
          }
        }
      },
      changePage (item) {
        this.active = item
        this.$emit('changePage', item)
      },
      start () {
        this.active = 1
        this.$emit('changePage', this.active)
      },
      end () {
        this.active = this.pageNum
        this.$emit('changePage', this.active)
      },
      prev () {
        if (this.active === 1) return
        this.active--
        this.$emit('changePage', this.active)
      },
      next () {
        if (this.active === this.pageNum) return
        this.active++
        this.$emit('changePage', this.active)
      }
    }*/
  }
</script>


<style scoped>
  .mytable{
    height: 580px;
    min-width: 400px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:rgba(0,50,200,0.3);
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


  .pager-wrapper{
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item{
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 16px;
    padding: 4px 20px;
    border: 1px solid #d7d7d7;
    margin-left: 16px;
    cursor: pointer;
    color: #a5a5a5;
  }
  .active{
    background: #a5a5a5;
    color: #fff;
    border: 1px solid #a5a5a5;
  }
  .point{
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    margin-left: 16px;
    letter-spacing: 3px;
    color: #a5a5a5;
  }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css" />
