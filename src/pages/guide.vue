<template>
  <div>
    <!--顶栏 -->
    <div clas="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="title">
        <h2 class="title">新手教程</h2>
        <p style="color: #777777;">欢迎来这里，请开始你的学习之旅！</p>
      </div>
    </div>

    <!--右边栏 -->
    <div>
      <right-bar></right-bar>
    </div>

    <!--左边栏-->
    <div>
      
    </div>

    <!--正文-->    
    <div class="main" :style="note">
      <leftGuideBar></leftGuideBar>
      <div>
        
      </div>
      <div>
      

      </div>
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
  import leftGuideBar from '@/components/leftGuideBar.vue';

  export default{
    name: "guide",
    components:{navi,footerBar,rightBar,leftGuideBar},
    data(){
      return{
          note: {
          backgroundImage: "url(" + require("../../static/pic/guideBackground.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // filter:"blur(5px)",
        },
        // treeData: [{
        //   label: '一级 1',
        //   children: [{
        //     label: '二级 1-1'
        //   }]
        // }, {
        //   label: '一级 2',
        //   children: [{
        //     label: '二级 2-1',
        //     children: [{
        //       label: '三级 2-1-1'
        //     }]
        //   }]
        // }],
        // defaultProps: {
        //   children: 'children',
        //   label: 'label'
        // },
        // methods: {
        //   handleNodeClick(data) {
        //   console.log(data);
        //   }
        // }

      }
    }
  }

</script>

<style>
  div.title{
    /*标题设计*/
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
  .title p{
    font-size: 15px;
    color: #505050;
  }
  .main{
    width: 100%;
    min-height:700px;
    height: 200px;
    display:flex;

  }

</style>
