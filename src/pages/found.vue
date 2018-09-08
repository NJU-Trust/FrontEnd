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

    <!--正文-->
    <div class="back">
      <leftInformationbar></leftInformationbar>
      <div class="mesboxborder">
        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <el-tabs type="border-card">
            <el-tab-pane >
              <span slot="label" style="font-size:19px;"><i class="el-icon-message"></i>&nbsp;&nbsp;最新消息</span>
              <div style="position:relative;top:20px;margin-left:5%;margin-right:5%;">
                <template>
                  <el-carousel :interval="3000" type="card" height="200px">
                    <el-carousel-item v-for="i in 4" :key="i">
                      <div v-if="i === 1">
                        <img src="../../static/pic/testkey.png" style="width:360px;height:180px;margin-top:9px;margin-left:13px;" class="picbox" alt="User_pic">
                      </div>
                      <div v-if="i === 2">
                        <img src="../../static/pic/testusb.png" style="width:360px;height:180px;margin-top:9px;margin-left:13px;" class="picbox" alt="User_pic">
                      </div>
                      <div v-if="i === 3">
                        <img src="../../static/pic/testcard.png" style="width:360px;height:180px;margin-top:9px;margin-left:13px;" class="picbox" alt="User_pic">
                      </div>
                      <div v-if="i === 4">
                        <img src="../../static/pic/testcup.png" style="width:360px;height:180px;margin-top:9px;margin-left:13px;" class="picbox" alt="User_pic">
                      </div>
                      <!--<div class="textitem">
                        <el-tag type="info"
                                :disable-transitions="true">{{ mesdata[i-1].time}}</el-tag>
                        <div>
                          <strong style="font-size: 15px;">物品类别</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                          <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                          <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                        </div>
                        <div style="position:relative;top:3px;">
                          <strong style="font-size: 15px;">发布时间</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                          <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                          <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                        </div>
                        <div style="position:relative;top:3px;width:450px;">
                          <strong style="font-size: 15px;">详细信息</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                        </div>
                      </div>-->
                    </el-carousel-item>
                  </el-carousel>
                </template>
                <div style="margin-left:70%;margin-top:-1%;margin-bottom: 1%;">
                  <span style="font-size:10px;">*点击图片快速查看详细信息</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <hr/>
        </div>

        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <el-tabs type="border-card">
            <el-tab-pane >
              <span slot="label" style="font-size:19px;"><i class="el-icon-search"></i>&nbsp;&nbsp;分类检索</span>
              <template>
                <div style="margin-top: 20px">
                  <span><strong>消息性质</strong></span>
                  <el-checkbox style="margin-left:2%;">失物招领</el-checkbox>
                  <el-checkbox style="margin-left:2%;">寻物启事</el-checkbox>
                  <br/>

                  <span><strong>物品分类</strong></span>
                  <el-checkbox v-for="type in types" :key="type" :label="type" style="margin-left:2%;">{{ type }}</el-checkbox>
                  <br/>

                  <span><strong>常见地点</strong></span>
                  <el-checkbox v-for="loc in locs" :key="loc" :label="loc" style="margin-left:2%;">{{ loc }}</el-checkbox>
                  <hr/>
                </div>
              </template>


              <el-pagination
                background
                layout="prev, pager, next"
                style="position:absolute;left:450px;top:630px;"
                :total="100">
              </el-pagination>
            </el-tab-pane>
          </el-tabs>
          <hr/>
        </div>

        <!--<div style="position:relative;top:20px;margin-left:5%;margin-right:5%;">
          <template>
          <el-carousel :interval="3000" type="card" height="200px">
            <el-carousel-item v-for="i in 4" :key="i">
              <div>
                <img src="../../static/pic/mestest.png" style="width:180px;height:180px;margin-top:9px;margin-left:5px;" class="picbox" alt="User_pic">
              </div>
              <div class="textitem">
                <el-tag type="info"
                        :disable-transitions="true">{{ mesdata[i-1].time}}</el-tag>
                    <div>
                      <strong style="font-size: 15px;">物品类别</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                      <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                      <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;">发布时间</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                      <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                      <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                    </div>
                    <div style="position:relative;top:3px;width:450px;">
                      <strong style="font-size: 15px;">详细信息</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                    </div>
                  </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        </div>
        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <h3 ><strong>分类检索</strong></h3>
          <hr/>
        </div>-->

        <!--<el-dropdown @command="handleCommand" class="select">
          <span class="el-dropdown-link">类别<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">校园卡</el-dropdown-item>
            <el-dropdown-item command="b">钥匙</el-dropdown-item>
            <el-dropdown-item command="c">其他证件</el-dropdown-item>
            <el-dropdown-item command="d" disabled>雨伞</el-dropdown-item>
            <el-dropdown-item command="e" divided>杯子</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->




        <!-- 内容-->
        <!--<div v-for="i in mesdata.length" :key="i">
          <div v-if="mesdata[i-1].mestype === '失物招领'"
               v-show="mesdata[i-1].state">
            <el-card class="box-card">
              <div>
                <img src="../../static/pic/mestest.png" style="width:100px;height:100px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic">
              </div>

              <div class="textitem">
                <div>
                  <strong style="font-size: 15px;">物品类别</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                  <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                  <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                </div>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;">发布时间</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                  <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                  <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                </div>
                <div style="position:relative;top:3px;width:450px;">
                  <strong style="font-size: 15px;">详细信息</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                </div>
              </div>
            </el-card>
            <hr/>
          </div>
        </div>-->

      </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftInformationbar from "@/components/leftInformationbar.vue"

  //const types = ['校园卡', '钥匙', '水杯', '雨伞','其他'];
  export default {
    name: "found",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        types: ['校园卡', '钥匙', '水杯', '雨伞','其他'],
        locs:['四五六食堂','基础实验楼','仙I','仙II','逸夫楼','九食堂','十食堂','操场'],
        checkboxGroup: [],
        value9: [],
        list: [],
        loading: false,
        mesdata:[
          {
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'../../static/pic/mestest.png',
            time:'2018-08-24',
            state:true,
            username:'徐忘',
          },{
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'../../static/pic/mestest.png',
            time:'2018-08-24',
            state:true,
            username:'徐忘',
          },{
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'../../static/pic/mestest.png',
            time:'2018-08-24',
            state:true,
            username:'徐忘',
          },{
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'../../static/pic/mestest.png',
            time:'2018-08-24',
            state:true,
            username:'徐忘',
          },{
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'../../static/pic/mestest.png',
            time:'2018-08-24',
            state:true,
            username:'徐忘',
          },
        ],
        activeName: '1',

      }
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
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    background-color: #D9F3FB;
  //height:100%;
    min-height:1000px;
  //height: 200px;
    padding-bottom: 20px;
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

  /*消息框*/
  .mesboxborder{
    width:950px;
    margin-right: 10%;
    border-radius: 3px;
    position:absolute;top:222px;
    margin-left: 24%;
    background:white;
    border:1px solid #e4e4e4;
    height:800px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    left:200px;
    top:-170px;

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
    height: 300px;
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
    padding: 5px;
    //position:relative;
    //left:100px;
    //top:70px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .select{
    margin-left:10%;
    margin-top:10%
  }

  .el-carousel__item h3{
    color: ghostwhite;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel{
    position:relative;
    top:10px;
    margin-left:5%;
    margin-top:5%;
  }
</style>
