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
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="已卖出" name="first">
              <div v-for="i in soldData.length" :key="i">
                <div style="margin-top: 20px;margin-left: 20px">
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark">
                        <el-card class="box-card">
                          <el-row >
                            <el-col :span="6">
                              <div class="grid-content bg-purple">
                                <div>
                                  <img v-bind:src=soldData[i-1].pic class="picbox" alt="User_pic">
                                  <!--<img v-bind:src=soldData[i-1].pic style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">-->
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="16"  style="margin-top:2%;margin-left:8%;">
                              <div class="grid-content bg-purple-dark">
                                  <div>
                                    <strong style="font-size: 15px;">物品名称</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].name}}</span>
                                  </div>
                                  <div style="position:relative;top:3px;">
                                    <strong style="font-size: 15px;">订单编号</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].num}}</span>
                                  </div>
                                  <div style="position:relative;top:3px;">
                                    <strong style="font-size: 15px;">物品种类</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].type}}</span>
                                  </div>
                                  <div style="position:relative;top:3px;">
                                    <strong style="font-size: 15px;">联系方式</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].contact}}</span>
                                  </div>
                                  <div style="position:relative;top:3px;">
                                    <strong style="font-size: 15px;">目标价格</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].price}}</span>
                                  </div>
                                  <div style="position:relative;top:3px;">
                                    <strong style="font-size: 15px;">物品描述</strong>
                                    <span style="position:relative;left:20px;">{{soldData[i-1].description}}</span>
                                  </div>

                              </div>
                            </el-col>
                          </el-row>
                        </el-card>

                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="待评价" name="second">
              <div v-for="i in commentData.length" :key="i">
                <div v-show="commentData[i-1].state" style="margin-top: 20px;margin-left: 20px">
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark">
                        <el-card class="box-card">
                          <el-row >
                            <el-col :span="6">
                              <div class="grid-content bg-purple">
                                <div>
                                  <img v-bind:src=commentData[i-1].pic class="picbox" alt="User_pic">
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="16"  style="margin-top:2%;margin-left:8%;">
                              <div class="grid-content bg-purple-dark">
                                <div>
                                  <strong style="font-size: 15px;">物品名称</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].name}}</span>
                                </div>
                                <div style="position:relative;top:3px;">
                                  <strong style="font-size: 15px;">订单编号</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].num}}</span>
                                </div>
                                <div style="position:relative;top:3px;">
                                  <strong style="font-size: 15px;">物品种类</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].type}}</span>
                                </div>
                                <div style="position:relative;top:3px;">
                                  <strong style="font-size: 15px;">联系方式</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].contact}}</span>
                                </div>
                                <div style="position:relative;top:3px;">
                                  <strong style="font-size: 15px;">目标价格</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].price}}</span>
                                </div>
                                <div style="position:relative;top:3px;">
                                  <strong style="font-size: 15px;">物品描述</strong>
                                  <span style="position:relative;left:20px;">{{ commentData[i-1].description}}</span>
                                </div>
                              </div>
                              <hr/>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="6" :offset="16">
                              <el-button type="success"
                                         round size="small"
                                         @click="dialogFormVisible = true">评分</el-button>
                              <el-dialog title="评价"
                                         width="40%"
                                         :visible.sync="dialogFormVisible">
                                <el-form :model="form" >
                                  <el-form-item label="评分" :label-width="formLabelWidth" prop="name">
                                    <el-rate
                                      v-model="value3"
                                      show-text>
                                    </el-rate>
                                  </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                  <el-button @click="dialogFormVisible=false">取 消</el-button>
                                  <el-button type="primary" @click="dialogFormVisible=done(commentData[i-1])">确 定</el-button>
                                </div>
                              </el-dialog>
                            </el-col>
                          </el-row>
                  </el-card>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="已评价" name="third">
              <div v-for="i in commentData.length" :key="i">
                <div v-show="!commentData[i-1].state" style="margin-top: 20px;margin-left: 20px">
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark">
                      <el-card class="box-card">
                        <el-row >
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <img v-bind:src=commentData[i-1].pic   class="picbox" alt="User_pic">
                             <!-- <img v-bind:src=commentData[i-1].pic style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">-->
                            </div>
                          </el-col>
                          <el-col :span="16" style="margin-top:2%;margin-left:8%;">
                            <div class="grid-content bg-purple">
                              <div>
                                <strong style="font-size: 15px;">物品名称</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].name}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <strong style="font-size: 15px;">订单编号</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].num}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <strong style="font-size: 15px;">物品种类</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].type}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <strong style="font-size: 15px;">联系方式</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].contact}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <strong style="font-size: 15px;">目标价格</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].price}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <strong style="font-size: 15px;">物品描述</strong>
                                <span style="position:relative;left:20px;">{{ commentData[i-1].description}}</span>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                      </el-card>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!--<el-pagination-->
          <!--background-->
          <!--layout="prev, pager, next"-->
          <!--style="left:600px;"-->
          <!--:total=soldData.length>-->
        <!--</el-pagination>-->
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
    name: "tradefinished",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    data() {
      return {
        activeName2: 'first',
        soldData:[
          {
            num:'000009',
            type:'化妆洗漱',
            name:'MISSCANDY指甲油',
            description:'因为想买其他色系所以出。。。色号分别为H55，T14，ML03，MC36，J08，G02，G03。',
            price:'30',
            contact:'28382794',
            pic:"../../static/pic/misscandy.jpg",
            state: true
          }
        ],
        commentData:[
          {
            num:'000010',
            type:'化妆洗漱',
            name:'Mac Chili ',
            description:'试色一次，海淘。有一个颜色一样的，用不到。',
            price:'120',
            contact:'18823478398',
            pic:'../../static/pic/chili.jpg',
            state: true
          },
          {
            num:'000011',
            type:'化妆洗漱',
            name:'科颜氏白泥',
            description:'海淘的，不适合自己，用了一次。加上邮费什么的买了两百多，具体不记得了',
            price:'200',
            contact:'19877838909',
            pic:'../../static/pic/kys.jpg',
            state: false
          }
        ],
        dialogFormVisible: false,
        dialogFormVisible: false,
        activeName2: 'first',
        form: {
          name: '',
        },
        rules:{
          name:[ {required: true, message: '请输入活动名称', trigger: 'blur'} ]
        },
        formLabelWidth: '120px',
        value3: null
      }
    },
    methods:{
        handleClick(tab, event) {
          console.log(tab, event);},
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
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom:5%;
    background:white;
    border:1px solid #e4e4e4;
    min-height:800px;
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
    width:200px;
    height:200px;
  }

  /*卡片样式*/
  .box-card{
    min-height: 250px;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin-left:2%;
    margin-right:5%;
    padding: 5px;
  }

  .label{
    font-size: 15px;

  }
</style>
