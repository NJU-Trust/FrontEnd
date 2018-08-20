<template id="mylist">
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
      <!--
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户等级&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      -->
      <tr>
        <th v-for='item in columnList' style="border: 1px solid white;text-align:center;">{{item.column_name}}</th>
      </tr>
      <tr v-for='item in inforList'>
        <td v-for='it in columnList' style="border: 1px solid white ;text-align:center;">{{item[it.column_name]}}</td>
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
        columnList: [{column_name:'       用户名称       '},
          {column_name:'       用户等级       '},
          {column_name:'       电话       '},
          {column_name:'       邮箱       '}],
        inforList: [{'       用户名称       ': '佳未1',
          '       用户等级       ': '1',
          '       电话       ': '12345678',
          '       邮箱       ': '1@qq.com',},
          {'       用户名称       ': '佳未2',
            '       用户等级       ': '2',
            '       电话       ': '22345678',
            '       邮箱       ': '2@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未3',
            '       用户等级       ': '3',
            '       电话       ': '32345678',
            '       邮箱       ': '3@qq.com',},
          {'       用户名称       ': '佳未10',
            '       用户等级       ': '10',
            '       电话       ': '32345678',
            '       邮箱       ': '10@qq.com',}]
      }
    },
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
  .UserList{
    height: 550px;
    min-width: 160px;
    min-height: 60px;
    padding: 0px 0px;
    line-height: 1px;
    background-color:rgba(0,50,200,0.3);
    color: white;
    border: none;
    font-size: 30px;
    font-family: "Microsoft YaHei UI";
    top: 0px;
    position: absolute;
    letter-spacing: 2px;
  }
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
    height: 400px;
    min-width: 400px;
    min-height: 60px;
    padding: 100px 0px;
    line-height: 2px;
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
  .sureButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 30px;
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
