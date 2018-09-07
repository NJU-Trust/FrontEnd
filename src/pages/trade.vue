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
      <!-- 搜索 -->
      <el-button type="primary" icon="el-icon-search" style="position:relative;top:30px;left:750px;">搜索</el-button>
      <el-input  placeholder="请输入想要查询的内容" style="position:relative;top:30px;left:415px;width:250px;"></el-input>

      <div v-for="i in commData.length" :key="i">
              <el-card class="box-card">
                <div>
                  <img v-bind:src=commData[i-1].pic style="width:150px;height:150px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic">
                </div>
                <div class="textitem">
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">订单编号</strong>
                    <span style="position:relative;left:20px;">{{ commData[i-1].num}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">物品名称</strong>
                    <span style="position:relative;left:20px;">{{ commData[i-1].name}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;">物品种类</strong>
                  <span style="position:relative;left:20px;">{{ commData[i-1].type}}</span>
                </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">联系方式</strong>
                    <span style="position:relative;left:20px;">{{ commData[i-1].contact}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">物品描述</strong>
                    <span style="position:relative;left:20px;">{{ commData[i-1].description}}</span>
                  </div>
                  <div style="position:relative;top:3px;width:400px;">
                    <strong style="font-size: 15px;">目标价格</strong>
                    <span style="position:relative;left:20px;">{{ commData[i-1].price}}</span>
                  </div>

                </div>
              </el-card>
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
    width: 780px;
    height: 220px;
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
