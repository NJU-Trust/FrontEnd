<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;background-color: #D9F3FB;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="margin-top:80px;">
      <div class="inputBorder">
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio1">
              <el-radio-button label="500以下" ></el-radio-button>
              <el-radio-button label="500-1000"></el-radio-button>
              <el-radio-button label="1000以上"></el-radio-button>
            </el-radio-group>
            <input type="number" class="selectInput" value="2000"/>
            <p style="display: inline;margin-left:10px; margin-right:10px;">-</p>
            <input type="number" class="selectInput" value="3000"/>
            <div style="display: inline-block;margin-left:30px;"></div>
            <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio2">
              <el-radio-button label="立即开始"></el-radio-button>
              <el-radio-button label="10天之内"></el-radio-button>
            </el-radio-group>
            <input type="date" class="selectInput" style="width:115px;"/>
            <p style="display: inline;margin-left:10px;margin-right:10px;">-</p>
            <input type="date" class="selectInput" style="width:115px;"/>
          </div>
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>利率&nbsp&nbsp&nbsp</b></span>
            <div style="display: inline-block;margin-left:23px;"></div>
            <el-radio-group v-model="value_radio3">
              <el-radio-button label="1%以下"></el-radio-button>
              <el-radio-button label="1%-2%"></el-radio-button>
              <el-radio-button label="2%以上"></el-radio-button>
            </el-radio-group>
            <input type="number" class="selectInput" value="2.5"/>
            <p style="display: inline;margin-left:10px; margin-right:10px;">-</p>
            <input type="number" class="selectInput" value="3"/>
            <p style="display: inline;margin-left:10px;">%</p>
            <div style="display: inline-block;margin-left:35px;"></div>
            <span><b>还款期限&nbsp&nbsp&nbsp</b></span>
            <el-radio-group v-model="value_radio4">
              <el-radio-button label="10天"></el-radio-button>
              <el-radio-button label="30天"></el-radio-button>
              <el-radio-button label="60天"></el-radio-button>
            </el-radio-group>
            <input type="number" class="selectInput" value="90"/>
            <p style="display: inline;margin-left:10px; margin-right:10px;">-</p>
            <input type="number" class="selectInput" value="100"/>
            <p style="display: inline;margin-left:10px; margin-right:10px;">天</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="userInput">
            <p>用户信用评级：</p>
            <div class="sort">
              <div>
                <div>
                  <el-checkbox :indeterminate="isIndeterminateB" v-model="checkAllB" @change="handleCheckAllChangeB">全选</el-checkbox>
                  <el-checkbox-group v-model="checkboxGroup2" size="medium" @change="handleCheckedCitiesChangeB" style="display: inline-block;margin-left:10px;">
                    <el-checkbox-button v-for="indexB in indexBs" :label="indexB" :key="indexB" >{{indexB}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="userInput" style="margin-left:30px;">
            <p>项目风险评级：</p>
            <div class="sort">
              <div>
                <div>
                  <el-checkbox :indeterminate="isIndeterminateC" v-model="checkAllC" @change="handleCheckAllChangeC">全选</el-checkbox>
                  <el-checkbox-group v-model="checkboxGroup2" size="medium" @change="handleCheckedCitiesChangeC" style="display: inline-block;margin-left:10px;">
                    <el-checkbox-button v-for="indexC in indexCs" :label="indexC" :key="indexC" >{{indexC}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12">
          <div style="margin-top:1%;margin-left:1%;">
            <span><b>标的分类&nbsp&nbsp&nbsp</b></span>
            <el-dropdown class="dropdown">
              <span class="el-dropdown-link">
                购 物<i class="el-icon-arrow-down el-icon--left"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>鞋帽服饰</el-dropdown-item>
                <el-dropdown-item>生活用品</el-dropdown-item>
                <el-dropdown-item>护肤美妆</el-dropdown-item>
                <el-dropdown-item>游戏动漫</el-dropdown-item>
                <el-dropdown-item>电子产品</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="dropdown" style="background-color:#36A1F9;">
              <span class="el-dropdown-link">
                学 习<i class="el-icon-arrow-down el-icon--left"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>学习用品</el-dropdown-item>
                <el-dropdown-item>书籍报刊</el-dropdown-item>
                <el-dropdown-item>培训考证</el-dropdown-item>
                <el-dropdown-item>校际交换</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="dropdown" style="background-color:#0E8FFA;">
              <span class="el-dropdown-link">
                娱 乐<i class="el-icon-arrow-down el-icon--left"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>聚餐轰趴</el-dropdown-item>
                <el-dropdown-item>运动健身</el-dropdown-item>
                <el-dropdown-item>观看演出</el-dropdown-item>
                <el-dropdown-item>外出旅游</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="dropdown" style="background-color:#0B7AD6;">
              <span class="el-dropdown-link">
                医 疗<i class="el-icon-arrow-down el-icon--left"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>诊断治疗</el-dropdown-item>
                <el-dropdown-item>保健养生</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="col-sm-12 col-md-12">
          <hr style="border:1px solid #e4e4e4;"/>
        </div>
        <div class="col-sm-12 col-md-12">
          <div class="userInput" style="margin-top:1%;">
            <p>排序维度：</p>
            <div class="sort">
              <div>
                <div>
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="checkboxGroup2" size="medium" @change="handleCheckedCitiesChange" style="display: inline-block;margin-left:10px;">
                    <el-checkbox-button v-for="indexA in indexAs" :label="indexA" :key="indexA" >{{indexA}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;">
      <div class="col-sm-8 col-md-8">
        <div style="margin-left:9%;width:91%;">
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
          <invest-list></invest-list><br/>
        </div>
      </div>
      <div class="col-xs-4 col-md-4">
        <div class="userSearch">
          <input type="search"  name="investSearch" placeholder="请输入搜索关键词"/>
          <input type="button" class="searchButton searchBack" :style="searchBack"/>
        </div>
        <div class="searchBorder" style="margin-top:80px;">
          <h3>个性推荐</h3>
          <div class="userInput">
            <p>投资金额：</p>
            <input type="number" value="1000" style="width:30%;"/>
          </div><br><br><br>
          <div class="userInput">
            <p style="margin-right:30px;">利率：</p>
            <input type="number" value="1000" style="width:30%;"/>
          </div><br><br><br><br>
          <div class="userInput">
            <input type="submit" value="个性推荐" style="width:50%;" onclick="location.href='/recommend'"/>
          </div>
          <div>
            <img src="../../static/pic/library.jpg"  alt="您无法查看此图片" class = "picture" style="margin-top:20px;"/>
          </div>
        </div>
        <div class="searchBorder">
          <h3>标的比较</h3>
          <div class="userInput">
            <p>请输入需要比较的标的编号：</p><br><br>
            <p>A: </p><input type="number" value="0000" style="width:100px;"/>
            <p>B: </p><input type="number" value="0100" style="width:100px;"/><br><br>
            <div id="myradar" style="width: 350px;height: 380px"></div>
          </div>
        </div>
        <div class="investNotice backPic" :style="backPic" style="margin-left:10%;margin-top:300px;">
          <div style="padding-top:36%;">
            <h1 style="font-size:19px;text-align: center;">小贴士</h1>
            <p style="padding-left:22%;padding-right:15%;">利息计算从发放金额的时间开始，并不是按满标的时间算，所以早投早收益哦~</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12" style="padding:0">
      <div class="center">
        <ul class="pagination model">
          <li><a href="#" class="prev">&laquo</a></li>
          <li><a href="#" class="active">1</a></li>
          <li> <a href="#">2</a></li>
          <li> <a href="#">3</a></li>
          <li> <a href="#">4</a></li>
          <li> <a href="#">5</a></li>
          <li> <a href="#">6</a></li>
          <li> <a href="#">7</a></li>
          <li> <a href="#">8</a></li>
          <li> <a href="#">9</a></li>
          <li><a href="#" class="next">&raquo;</a></li>
        </ul><br>
      </div>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import investList from '@/components/investList.vue'
  import ProjectList from "../components/projectList";
  import personalCenter from "../components/personalCenter";
  const indexAOptions = ['标的金额', '开始时间', '利率', '还款期限','用户信用分数'];
  const indexBOptions = ['AA','A','B','C','D'];
  const indexCOptions = ['AA ','A ','B ','C ','D '];
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/radar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  //引入主题
  require('echarts/theme/infographic')
  export default {
    name: "invest",
    components:{navi, footerBar, rightBar,investList,ProjectList},
    mounted() {
      this.drawRadar();
    },
    data(){
      return{
        date_value_choose: '',
        checkboxGroup2: [],
        indexAs: indexAOptions,
        indexBs: indexBOptions,
        indexCs:indexCOptions,
        checkAll: false,
        isIndeterminate: true,
        checkAllB:false,
        isIndeterminateB:true,
        checkAllC:false,
        isIndeterminateC:true,
        backPic:{
          backgroundImage:"url(" + require("../../static/pic/notice.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"310px auto",
          marginTop:"5px"
        },
        searchBack:{
          backgroundImage:"url(" + require("../../static/pic/search.png") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"27px auto",
          backgroundColor:"white",
        },
        value_radio1: '上海',
        value_radio2: '上海',
        value_radio3: '上海',
        value_radio4: '上海',
      };
    },
    methods:{
      handleCheckAllChange(val) {
        this.checkboxGroup2 = val ? indexAOptions : [];
        this.isIndeterminate = false;
        this.showIndexs();
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.indexAs.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.indexAs.length;
        this.showIndexs();
      },
      handleCheckAllChangeB(val) {
        this.checkboxGroup2 = val ? indexBOptions : [];
        this.isIndeterminateB = false;
        this.showIndexs();
      },
      handleCheckedCitiesChangeB(value) {
        let checkedCount = value.length;
        this.checkAllB = checkedCount === this.indexBs.length;
        this.isIndeterminateB = checkedCount > 0 && checkedCount < this.indexBs.length;
        this.showIndexs();
      },
      handleCheckAllChangeC(val) {
        this.checkboxGroup2 = val ? indexCOptions : [];
        this.isIndeterminateC = false;
        this.showIndexs();
      },
      handleCheckedCitiesChangeC(value) {
        let checkedCount = value.length;
        this.checkAllC = checkedCount === this.indexCs.length;
        this.isIndeterminateC = checkedCount > 0 && checkedCount < this.indexCs.length;
        this.showIndexs();
      },
      drawRadar() {
        let myChart = echarts.init(document.getElementById('myradar'),'infographic')
        myChart.setOption({
          title: {
            text: '比较'
          },
          tooltip: {},
          legend: {
            data: ['A', 'B']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5],
              }
            },
            indicator: [
              { name: '金额', max: 100},
              { name: '期限', max: 100},
              { name: '成功借款次数', max: 100},
              { name: '信用等级', max: 100},
              { name: '利率', max: 100}
            ]
          },
          series: [{
            name: '两个标的比较',
            type: 'radar',
            data : [
              {
                value : [80, 76, 65, 89, 77, 66],
                name : 'A'
              },
              {
                value : [60, 70, 45, 80, 85, 27],
                name : 'B'
              }
            ]
          }]
        });
      },
    }
  }
</script>

<style scoped>
  .selectInput{
    display: inline;
    width:80px;
    height:40px;
    border:1px solid #DCDEE0;
    color:#B6B7B8;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;
  }
  .dropdown{
    border:1px solid transparent;
    width:80px;
    height:25px;
    text-align: center;
    margin-left:20px;
    background-color: #59B1F9;
    color:white;
  }
  .recommend{
    font-size:14px;
    float: left;
    margin-left:5%;
    width:95%;
  }
  .recommend input[type=number]{
    width:30%;
  }
  .sort{
    display: inline-block;
  }
  .investNotice{
    height:310px;
    width:310px;
  }
  .searchBorder{
    text-align: center;
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid #4285F4;
    height:500px;
    margin-right:10%;
    margin-top:30px;
  }
  .searchButton{
    width:30%;
    background: white;
    border:2px solid #e4e4e4;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top:5px;
  }
  .picture{
    height:150px;
    width:100%;
  }
  .userSearch{
    border:2px solid lightblue;
    display: inline;
    float:right;
    margin-right:12%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    margin-top:5%;
    height:32px;
    width:85%;
    background: white;
  }
  .userSearch input {
    margin-top:1%;
    border-style: none;
  }
  .userSearch input[type=search] {
    margin-left:4%;
    display: inline;
    width:76%;
  }
  .userSearch input[type=search]:focus{
    outline:none;
  }
  .userSearch input[type=button] {
    float: right;
    display: inline;
    width:13%;
    margin-top:0%;
    height:100%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .userSearch input[type=button]:focus {
    outline:none;
  }
  .inputBorder{
    border: 1px solid #DEDDDD;
    margin-left:5%;
    margin-right:5%;
    background-color:white;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    height:330px;
    margin-bottom: 20px;
  }
  .userInput{
    margin-top:2%;
    font-size:14px;
    font-weight: 900;
    float: left;
    width:95%;
    margin-left:1%;
  }
  .userInput input{
    width:10%;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    font-size: 16px;
    margin-left:3%;
    color:#B9B8B8;
  }
  .userInput p{
    display: inline;
    margin-left:1%;
  }
  .userInput input:focus{
    border: 1px solid lightblue;
  }
  .userInput input[type=date]{
    width:24%;
  }
  .userInput select{
    width:18%;
    height:30px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    font-size: 16px;
  }
  .userInput input[type=button]{
    width:14%;
    margin-left:1%;
    background-color:#E8F2FA;
    border:1px solid #e4e4e4;
    color:#B9B8B8;
  }
  .userInput input[type=button]:hover{
    background-color:#409EFF;
    color:white;
  }
  .userInput input[type=submit]{
    background: #4285F4;
    border-color: #4285F4;
    color:white;

  }
  .pagination {
    margin-top:50px;
    margin-left:25%;
    list-style: none;
    display: inline-block;
    padding: 0;
  }
  .pagination li {
    display: inline;
    text-align: center;
  }
  .pagination a {
    display: block;
    font-size: 14px;
    text-decoration: none;
    padding: 5px 12px;
    color: #4285F4;
    border: 1px solid transparent;
    line-height: 1.5;
  }
  .pagination a.active {
    cursor: default;
  }
  .pagination a:active {
    outline: none;
  }
</style>
