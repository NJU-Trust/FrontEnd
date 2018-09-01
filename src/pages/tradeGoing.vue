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

  <div class="mesboxborder" style="position:relative;left:80px;top:-350px;">
    <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick" style="position:relative;top:35px;left:90px;width:800px;">
      <div v-for="i in commData.length" :key="i">
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
      </div>
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
  import leftTradeBar from "@/components/leftTradeBar.vue"

  export default {
    name: "tradeGoing",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    data() {
      return {
        commData:[{
          num:'000001',
          type:'其他',
          name:'花',
          description:'好看的花，这里好像会超出卡片耶，这样怎么办呢，需要分一些页面吗？',
          price:'100',
          contact:'28382794',
          pic:'https://picsum.photos/600/300/?image=25',
          state: true
        },
          {
            num:'000002',
            type:'其他',
            name:'花花花',
            description:'卖出去了的花花',
            price:'120',
            contact:'123456',
            pic:'https://picsum.photos/600/300/?image=25',
            state: false
          }
        ],
        dialogFormVisible: false,
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

  .label{
    font-size: 15px;

  }
</style>
