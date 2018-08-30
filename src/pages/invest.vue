<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;background-color: #D9F3FB;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0; margin-top:80px;">
      <div class="col-sm-8 col-md-8">
        <div class="inputBorder">
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
              <p>投资金额：</p><input type="button" value="100以下"/><input type="button" value="100-500"/>
              <input type="button" value="500-1000"/><input type="number" value="1000"/><p>-</p><input type="number" value="2000"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
              <p>开始时间：</p><input type="button" value="立即开始"/><input type="button" value="5天之内"/>
              <input type="button" value="10天之内"/><input type="date"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
              <p style="margin-right:30px;">利率：</p><input type="button" value="（这里待完善）"/><input type="button" value="5天之内"/>
              <input type="button" value="10天之内"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
              <p>还款期限：</p><input type="button" value="10天"/><input type="button" value="30天"/>
              <input type="button" value="60天"/><input type="number" value="90"/><p>天</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
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
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
              <p>标的分类：</p><input type="button" value="日常生活费周转" style="width:230px;"/><input type="button" value="演唱会看比赛看剧音乐会等" style="width:230px;"/>
              <input type="button" value="旅游"/><input type="button" value="游戏娱乐电影音乐" style="width:230px;margin-left:95px;margin-top:5px;"/>
              <input type="button" value="购买电子设备" style="width:230px;"/>
              <input type="button" value="其他购买项如化妆品衣服鞋" style="width:230px;margin-left:95px;margin-top:5px;"/>
              <input type="button" value="小额学习费用" style="width:230px;"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
            <hr style="border:1px solid #e4e4e4;"/>
          </div>
          <div class="col-sm-12 col-md-12">
            <div class="userInput">
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
        <div style="margin-left:9%;width:91%;">
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
        <div class="searchBorder">
          <h3>个性推荐</h3>
          <div class="userInput">
            <p>投资金额：</p>
            <input type="number" value="1000" style="width:30%;"/><p> - </p><input type="number" value="2000" style="width:30%;"/>
          </div><br><br><br>
          <div class="userInput">
            <p style="margin-right:30px;">利率：</p>
            <input type="number" value="1000" style="width:30%;"/><p> - </p><input type="number" value="2000" style="width:30%;"/>
          </div><br><br><br><br>
          <div class="userInput">
            <input type="submit" value="个性推荐" style="width:50%;" onclick="location.href='/recommend'"/>
          </div>
          <div>
            <img src="../../static/pic/library.jpg"  alt="您无法查看此图片" class = "picture" style="margin-top:20px;"/>
          </div>
        </div>
        <div class="investNotice backPic" :style="backPic" style="margin-left:10%;margin-top:100px;">
          <div style="padding-top:46%;">
            <h1 style="font-size:17px;text-align: center;">小贴士</h1>
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
  const indexAOptions = ['标的金额', '开始时间', '利率', '还款期限','用户信用分数'];
  const indexBOptions = ['AA','A','B','C','D'];
  export default {
    name: "invest",
    components:{navi, footerBar, rightBar,investList,ProjectList},
    data(){
      return{
        date_value_choose: '',
        checkboxGroup2: [],
        indexAs: indexAOptions,
        indexBs: indexBOptions,
        checkAll: false,
        isIndeterminate: true,
        checkAllB:false,
        isIndeterminateB:true,
        backPic:{
          backgroundImage:"url(" + require("../../static/pic/notice.png") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"310px auto",
          marginTop:"5px"
        },
        searchBack:{
          backgroundImage:"url(" + require("../../static/pic/search.png") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"27px auto",
          backgroundColor:"white",
        }
      }
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
    }
  }
</script>

<style scoped>
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
    height:400px;
    margin-right:10%;
    margin-top:80px;
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
    margin-left:9%;
    background-color:white;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    height:380px;
    margin-bottom: 20px;
  }
  .userInput{
    margin-top:1%;
    font-size:16px;
    float: left;
    margin-left:5%;
    width:95%;
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
