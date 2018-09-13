<template>
<div id="app">
  <!--顶栏 -->
  <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
    <navi style="position: relative"></navi>
  </div>
  <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
    <div class="myspace">
      <h2 class="myspace">闲置市场</h2>
      <p style="color: #777777;">欢迎来这里，让您的闲置创造价值！</p>
    </div>
  </div>

  <!--正文-->
  <el-row>
        <el-col span="6">
          <left-trade-bar></left-trade-bar>
        </el-col>

        <el-col span="18">
          <div class="mesboxborder" >
          <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick">
              <div v-for="i in commData.length" :key="i">
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                    <el-card v-if=commData[i-1].state class="box-card">
                      <el-row >
                        <el-col :span="6">
                          <div class="grid-content bg-purple">
                            <div>
                            <img v-bind:src=commData[i-1].pic class="picbox">
                            <!--<img v-bind:src=commData[i-1].pic style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">-->
                          </div>
                          </div>
                        </el-col>
                        <el-col :span="16" :offset="2">
                          <div class="grid-content bg-purple" style="margin-left:5%;margin-top:5%;">
                            <el-row>
                              <el-col :span="12">
                                <div class="grid-content bg-purple">
                                  <div>
                                    <strong style="font-size: 15px;">物品名称</strong>
                                    <span style="position:relative;left:20px;">{{ commData[i-1].name}}</span>
                                  </div>
                                  <div>
                                    <strong style="font-size: 15px;">物品种类</strong>
                                    <span style="position:relative;left:20px;">{{ commData[i-1].type}}</span>
                                  </div>
                                  <div>
                                    <strong style="font-size: 15px;">目标价格</strong>
                                    <span style="position:relative;left:20px;">{{ commData[i-1].price}}</span>
                                  </div>
                                </div>
                              </el-col>
                              <el-col :span="12">
                                <div>
                                  <strong style="font-size: 15px;">订单编号</strong>
                                  <span style="position:relative;left:20px;">{{ commData[i-1].num}}</span>
                                </div>
                                <div >
                                  <strong style="font-size: 15px;">联系方式</strong>
                                  <span style="position:relative;left:20px;">{{ commData[i-1].contact}}</span>
                                </div>
                              </el-col>
                            </el-row>
                              <div>
                                <strong style="font-size: 15px;">物品描述</strong>
                                <span style="position:relative;left:20px;">{{ commData[i-1].description}}</span>
                              </div>
                            <hr/>
                            <el-row>
                              <el-col :offset="14">
                              <el-button type="success"
                                         round size="small"
                                         @click="dialogFormVisible = true"
                                         style="margin-top:30px;">确认完成</el-button>
                              <el-dialog title="确认完成"
                                         width="40%"
                                         :visible.sync="dialogFormVisible">
                                <el-form :model="form" >
                                  <el-form-item label="对方用户名" :label-width="formLabelWidth">
                                    <el-input v-model="form.name"
                                              style="width:330px;"
                                              auto-complete="off"></el-input>
                                  </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                  <el-button @click="dialogFormVisible=false">取 消</el-button>
                                  <el-button type="primary" @click="dialogFormVisible=done(commData[i-1])">确 定</el-button>
                                </div>
                              </el-dialog>
                              </el-col>
                            </el-row>
                            </div>
                        </el-col>
                      </el-row>
                </el-card>
                    </div>
                  </el-col>
                </el-row>
                <hr/>
              </div>
              <br/>
              <el-row>
                <el-col :offset="8">
              <el-pagination
                background
                layout="prev, pager, next"
                style="position:relative;left: 300px"
                :total="30">
              </el-pagination>
                </el-col>
              </el-row>
            </el-tabs>
            <br/>
          </div>
        </el-col>
      </el-row>
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
  import leftTradeBar from "@/components/leftTradeBar.vue"

  export default {
    name: "tradeGoing",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    data() {
      return {
        commData:[{
          num:'000000',
          type:'鞋服配饰',
          name:'名创优品粉红顽皮帽子',
          description:'名创优品39.9入 带过一次 可小刀',
          price:'35',
          contact:'13323389923',
          pic:"../../static/pic/hat.jpg",
          state: true
        },
          {
            num:'000001',
            type:'化妆洗漱',
            name:'DHC橄榄润唇膏',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'50',
            contact:'123456',
            pic:"../../static/pic/dhc.jpeg",
            state: true
          },
          {
            num:'000002',
            type:'化妆洗漱',
            name:'无印良品卸妆啫喱',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'70',
            contact:'13329048392',
            pic:'../../static/pic/wylp.jpeg',
            state: true
          }
        ],
        dialogFormVisible: false,
        activeName2: 'first',
        form: {
          name: '',
        },
        rules:{
          name:[ {required: true, message: '请输入活动名称', trigger: 'blur'} ]
        },
        formLabelWidth: '120px',
      }
    },
    methods:{
      done: function(vis){
        console.log(vis);
        vis.state=false;
        console.log(vis);
        return false;
      },
    },
    beforeCreate:function(){
      localStorage.route="#trade";
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
  //width:850px;
    margin-right: 10%;
    border-radius: 3px;
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom:5%;
    background:white;
    /*border:1px solid #e4e4e4;*/
    min-height:800px;
    /*box-shadow:*/
      /*0 1px 6px 0 rgba(0,0,0, .12),*/
      /*0 1px 6px 0 rgba(0,0,0, .12);*/
    border-radius: 3px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  /*.textitem{*/
    /*position:relative;*/
    /*left:300px;*/
    /*top:-180px;*/

  /*}*/

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    max-width:250px;
    max-height:200px;
    margin-left:5%;
    width:200px;height:200px;
  }

  /*卡片样式*/
  .box-card {
    //min-height: 250px;
    //min-width:800px;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin-left:3%;
    margin-right:5%;
    padding: 5px;
  }

  /*.box-card {
    width: 800px;
    height: 250px;
  }*/

  .label{
    font-size: 15px;

  }
</style>
