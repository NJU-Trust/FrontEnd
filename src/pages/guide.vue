<template>
  <!-- <div>
    <div style="position:fixed;width:100%;">
      <navi></navi>
    </div>
    <div style="margin-top:200px">
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <el-main>
      </el-main>
    </div>
    <div style="width:100%;float:bottom;margin-top:200px">
      <footer-bar></footer-bar>
    </div>
  </div> -->
  <div>
    <div style="width: 100%;float: top;">
        <navi></navi>
    </div>
    <el-container>
    
    <el-container>
      <el-aside width="200px">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-container>
        <el-header>
      
        </el-header>
      </el-container>
      <el-main>
        <el-card shadow="always" class="sum_repay">
          <el-row :gutter="2">
            <el-col :span="8" style="width:50%">
              <p>已还本息:<span>{{r_money_done}}</span> 元</p>
              <p>待还项目数:<span>{{r_pro_topay}}</span> 元</p>
              <p>成功借款项目数:<span>{{r_pro_loanDone}}</span> 元</p>
              <p>提前还清项目数:<span>{{r_pro_fore}}</span> 元</p>
            </el-col>
            <el-col :span="16" style="width:50%">
              <p>待还本息:<span>{{r_money_topay}}</span> 元</p>
              <p>发布借款项目数:<span>{{r_pro_rel}}</span> 元</p>
              <p>正常还清项目数:<span>{{r_pro_repayDone}}</span> 元</p>
              <p>历史违约项目数:<span>{{r_pro_break}}</span> 元</p>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
    </el-container>
    <el-footer><footer-bar></footer-bar></el-footer>
  </el-container>
  </div>
  
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';

  export default{
    name: "guide",
    components:{navi,footerBar,rightBar},
    data(){
      return{
        treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        methods: {
          handleNodeClick(data) {
          console.log(data);
          }
        }

      }
    }
  }

</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
