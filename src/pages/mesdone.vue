<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">Lost && Found -- 已经完成</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--左边栏-->
    <div>
      <leftInformationbar></leftInformationbar>
    </div>

    <!--正文-->
    <div class="mesboxborder" style="position:relative;left:80px;top:-350px;">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" style="position:relative;top:35px;left:90px;width:800px;">
        <el-tab-pane label="失物招领" name="first">
          <div v-for="i in mesdata.length" :key="i">
            <!--<span>{{ i }}</span>
            <span>{{ mesdata[i-1].mestype }}</span>-->
            <div v-if="mesdata[i-1].mestype === '失物招领'">
              <el-card class="box-card">
                <div>
                  <img src="../../static/pic/mestest.png" style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">
                </div>
                <div class="textitem">
                  <div>
                    <strong style="font-size: 15px;">物品类别</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">物品名称</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].name}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">联系方式</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                  </div>
                  <div style="position:relative;top:3px;width:400px;">
                    <strong style="font-size: 15px;">详细信息</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                  </div>
                  <hr/>
                  <div style="position:relative;width:400px;">
                    <strong style="font-size: 15px;">对方用户名</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].username}}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <strong style="font-size: 15px;">完成日期</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].date}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="寻物启事" name="second">
          <div v-for="i in mesdata.length" :key="i">
            <!--<span>{{ i }}</span>
            <span>{{ mesdata[i-1].mestype }}</span>-->
            <div v-if="mesdata[i-1].mestype === '寻物启事'">
              <el-card class="box-card">
                <div>
                  <img src="../../static/pic/mestest.png" style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">
                </div>
                <div class="textitem">
                  <div>
                    <strong style="font-size: 15px;">物品类别</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">物品名称</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].name}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">联系方式</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                  </div>
                  <div style="position:relative;top:3px;width:400px;">
                    <strong style="font-size: 15px;">详细信息</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                  </div>
                  <hr/>
                  <div style="position:relative;width:400px;">
                    <strong style="font-size: 15px;">对方用户名</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].username}}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <strong style="font-size: 15px;">完成日期</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].date}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>

        </el-tab-pane>
      </el-tabs>
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
    name: "mesunderway",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        activeName2: 'first',
        mesdata:[
          {
            mestype:'失物招领',
            itemtype:'校园卡',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！可是到底是多少呢，我也不知道，也许应该在输入的时候限制一下？',
            pic:'传上来的图片',
            username:'小红',
            date:'2018-8-31',
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！可是到底是多少呢，我也不知道，也许应该在输入的时候限制一下？',
            pic:'传上来的图片',
            username:'小黄',
            date:'2018-8-31',
          }
        ],

      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  }
</script>

<style scoped>
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

  /*消息框*/
  .mesboxborder{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:550px;
    width:1000px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .textitem{
    position:relative;
    left:300px;
    top:-180px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    width: 800px;
    height: 250px;
  }

</style>
