<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布平台 -- 失物招领</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--左边栏-->
    <div>
      <leftInformationbar></leftInformationbar>
    </div>

    <!--正文-->
    <div class="back">
      <div class="mesboxborder" style="position:relative;left:80px;top:-350px;">
        <!--图标分隔 -->
        <el-breadcrumb separator-class="el-icon-arrow-right" style="position:relative;top:60px;left:60px;">
          <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 16px;">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/notice' }" style="font-size: 16px;">发布</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/notice/found' }" style="font-size: 16px;">失物招领</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
        <el-button type="primary" icon="el-icon-search" style="position:relative;top:30px;left:750px;">搜索</el-button>
        <el-input  placeholder="请输入想要查询的内容" style="position:relative;top:30px;left:415px;width:250px;"></el-input>
        <!--<template >
          <el-select
            v-model="value9"
            style="position:relative;left:650px;top:30px;"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div style="position:relative;left:820px;color:#00BFFF;">搜索</div>
        </template>-->
        <!-- 内容-->
        <div v-for="i in mesdata.length" :key="i">
          <!--<span>{{ i }}</span>
          <span>{{ mesdata[i-1].mestype }}</span>-->
          <div v-if="mesdata[i-1].mestype === '失物招领'"
               v-show="mesdata[i-1].state">
            <el-card class="box-card">
              <div>
                <img src="../../static/pic/mestest.png" style="width:100px;height:100px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic">
              </div>
              <!-- 写成表格的形式 -->

              <div class="textitem">
                <div>
                  <strong style="font-size: 15px;">物品类别</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                </div>
                <div style="position:relative;top:-23px;left:200px;">
                  <strong style="font-size: 15px;">物品名称</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].name}}</span>
                </div>
                <div style="position:relative;top:-20px;">
                  <strong style="font-size: 15px;">联系方式</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                </div>
                <div style="position:relative;top:-20px;width:450px;">
                  <strong style="font-size: 15px;">详细信息</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                </div>
              </div>
            </el-card>
            <hr/>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          style="position:absolute;left:450px;top:630px;"
          :total="100">
        </el-pagination>

      </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
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
  import leftInformationbar from "@/components/leftInformationbar.vue"

  export default {
    name: "found",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        mesdata:[
          {
            mestype:'失物招领',
            itemtype:'校园卡',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！可是到底是多少呢，我也不知道，也许应该在输入的时候限制一下？',
            pic:'传上来的图片',
            state:true,
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！',
            pic:'../../static/pic/mestest.png',
            state:true,
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。',
            pic:'传上来的图片',
            state:true,
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！可是到底是多少呢，我也不知道，也许应该在输入的时候限制一下？',
            pic:'传上来的图片',
            state:true,
          },
        ],
        activeName: '1',

      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      test:function(){
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },
    created:function(){
      this.test();
    },

  }
</script>

<style scoped>
  /*白色背景*/
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height: 300px;
    display:flex;
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

  .mesboxborder{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:700px;
    width:1000px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    left:180px;
    top:-110px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    width: 780px;
    height: 130px;
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
    padding: 5px;
    position:relative;
    left:100px;
    top:70px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }


</style>
