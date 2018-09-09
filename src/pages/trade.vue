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

    <!--左边栏-->
    <div>
      <leftTradeBar></leftTradeBar>
    </div>

    <!--正文-->
    <div class="back">

    <div class="mesboxborder">
      <el-row style="position:relative;top:10px;" >
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="i in commData.length" :key="i">
                <el-card v-if=commData[i-1].state class="box-card">
                  <div>
                    <img v-bind:src=commData[i-1].pic style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">
                  </div>
                  <div class="textitem">
                    <div>
                      <strong style="font-size: 15px;">物品名称</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].name}}</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;">订单编号</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].num}}</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;">物品种类</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].type}}</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;">联系方式</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].contact}}</span>
                    </div>
                    <div style="position:relative;top:3px;width:400px;">
                      <strong style="font-size: 15px;">目标价格</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].price}}</span>
                    </div>
                    <div style="position:relative;top:3px;width:400px;">
                      <strong style="font-size: 15px;">物品描述</strong>
                      <span style="position:relative;left:20px;">{{ commData[i-1].description}}</span>
                    </div>
                    <el-button type="success"
                               round size="small"
                               @click="dialogFormVisible = true"
                               style="position:absolute;left:300px;top:150px;">确认完成</el-button>
                    <el-dialog title="确认完成"
                               width="40%"
                               :visible.sync="dialogFormVisible">
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible=false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible=done(commData[i-1])">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </el-card>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <!-- 搜索 -->

      <div v-for="i in commData.length" :key="i">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '5px' }">
              <img src="https://placekitten.com/380/200" class="image">
              <div style="padding: 14px;">
                <strong style="font-size: 18px;">一只猫猫</strong>
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="详细信息" name="1">
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">种类</strong>
                      <span style="position:relative;left:20px;">其他</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">电话</strong>
                      <span style="position:relative;left:20px;">233333345</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">详细描述</strong>
                    </div>
                    <span style="position:relative;left:0px;right:20px;">非常可爱的喵喵~o( =∩ω∩= )m，召之即来，来之可撸，萌萌萌。</span>
                  </el-collapse-item>

                </el-collapse>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;">目标价格</strong>
                  <span style="position:relative;left:20px;">100元</span>
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="primary" class="button" icon="el-icon-star-off">收藏</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
          </div>
      <el-pagination
        background
        layout="prev, pager, next"
        style="position:absolute;left:450px;top:630px;"
        :total=commData.length>
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
  import leftTradeBar from "@/components/leftTradeBar.vue";

  export default {
    name: "trade",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        //<el-option label="数码零件" value="家居日用"></el-option>
        //<el-option label="影音家电" value="影音家电"></el-option>
        //<el-option label="鞋服配饰" value="运动器材"></el-option>
        //<el-option label="化妆洗漱" value="化妆洗漱"></el-option>
        //<el-option label="图书教材" value="图书教材"></el-option>
        //<el-option label="其他" value="其他"></el-option>
        topData:[{
          num:'000001',
          type:'化妆洗漱',
          name:'DHC橄榄润唇膏',
          description:'日本 大国药妆店购入 全新未拆封',
          price:'70',
          contact:'123456',
          pic:"../../static/pic/dhc.jpeg",
          state: true
        },
          {
            num:'000002',
            type:'化妆洗漱',
            name:'花',
            description:'好看的花',
            price:'120',
            contact:'123456',
            pic:'https://picsum.photos/600/300/?image=25',
            state: true
          },
        ],
        commData:[{
          num:'000001',
          type:'其他',
          name:'花',
          description:'好看的花',
          price:'100',
          contact:'123456',
          pic:'https://picsum.photos/600/300/?image=25',
          state: true
        },
          {
            num:'000002',
            type:'其他',
            name:'花',
            description:'好看的花',
            price:'120',
            contact:'123456',
            pic:'https://picsum.photos/600/300/?image=25',
            state: true
          },
        ],

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
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    min-height:1000px;

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
    height:700px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    left:180px;
    top:-150px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .textitem{
    position:relative;
    left:180px;
    top:-150px;

  }
  .el-carousel__item h3 {
    color: #475669;
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
</style>
