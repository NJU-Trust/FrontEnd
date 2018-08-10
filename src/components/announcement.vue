<template>
  <div style="width: 100%;text-align: center">
    <h2>Trust平台公告</h2>
    <div id="announceBox" ref="announceBox">
      <ul id="con1" ref="con1">
        <li><a href="#">1.学会html5 绝对的屌丝逆袭</a><span>2016-06-01</span></li>
        <li><a href="#">2.tab页面切换效果（案例）</a><span>2016-06-01</span></li>
        <li><a href="#">3.圆角水晶按钮制作（案例）</a><span>2016-06-01</span></li>
        <li><a href="#">4.HTML+CSS基础课程(系列)</a><span>2016-06-01</span></li>
        <li><a href="#">5.分页页码制作（案例）</a><span>2016-06-01</span></li>
        <li><a href="#">6.导航条菜单的制作（案例）</a><span>2016-06-01</span></li>
        <li><a href="#">7.信息列表制作(案例)</a><span>2016-06-01</span></li>
        <li><a href="#">8.下拉菜单制作(案例)</a><span>2016-06-01</span></li>
        <li><a href="#">9.如何实现“新手引导”效果</a><span>2016-06-01</span></li>
      </ul>
      <ul id="con2" ref="con2"></ul>
    </div>
    <div style="text-align: left;margin-top:36px;margin-left: 20%">
      <a id="more">查看更多公告</a>
    </div>
  </div>
</template>

<script>

  export default {
      name: "announcement",

      mounted: function () {
        var area = this.$refs.announceBox;
        var con1 = this.$refs.con1;
        var con2 = this.$refs.con2;

        area.scrollTop = 0;
        con2.innerHTML = con1.innerHTML;

        var myScroll = setInterval(() => {
          if(con2.offsetTop - area.scrollTop <= 0) {
            area.scrollTop -= con1.offsetHeight;
          } else {
            area.scrollTop++;
          }
        }, 50);

        $('#announceBox').on("mouseenter" ,function(){
          clearInterval(myScroll);
        });
        $('#announceBox').on("mouseleave", function(){
          myScroll = setInterval(() => {
            if(con2.offsetTop - area.scrollTop <= 0) {
              area.scrollTop -= con1.offsetHeight;
            } else {
              area.scrollTop++;
            }
          }, 50);
        });
      }
  }
</script>

<style scoped>
  h2{
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 3px;
    padding-top: 50px;
  }

  #announceBox {
    height: 400px;
    width: 70%;
    margin-left: 15%;
    margin-top: 50px;
    overflow: hidden;    /* 超出的内容部分要隐藏，免得撑高中间部分 */
  }

  #announceBox ul li {
    height: 24px;
    font-size: 16px;
    padding-top: 50px;
    list-style: none;
  }
  #announceBox ul li a {
    float: left;
    color: #303133;
  }
  #announceBox ul li span {
    float: right;
    color: #999;
  }

  #more{
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    color: lightskyblue;
  }
</style>
