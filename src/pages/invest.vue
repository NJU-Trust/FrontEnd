<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;background-color: #D9F3FB;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0; margin-top:80px;">
      <div class="col-sm-9 col-md-9">
        <div class="userInput">
          <p>投资金额：</p><input type="number" name="investAmount" />
          <p>项目类型：</p><select>
          <option value="any">不限</option>
          <option value="largeLong">大额长期项目</option>
          <option value="smallShort">小额短期项目</option>
        </select>
          <p>期望归还日期：</p><input type="date" name="investExpectedDate"/>
          <input type="submit" value="确认" style="width:6%"/>
        </div>
      </div>
      <div style="margin-left:75%;margin-right:3%;">
        <div class="userSearch">
          <input type="search"  name="investSearch" placeholder="请输入搜索关键词"/>
          <input type="button" />
        </div>
      </div>
    </div>
    <div style="margin-top:150px;margin-bottom: 100px;margin-left:8%;margin-right:30%;">
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
      </div>
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
      </div>
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
      </div>
    </div>
    <div style="margin-top:150px;margin-bottom:100px;margin-right:3%;margin-left:73%;">
      <div class="searchBorder">
        <h3>筛选您期望的项目</h3>
        <p class="leftFont">项目类型</p><br>
        <form class="col-sm-12 col-md-12">
          <input type="button" value="不限" name="Any" class="searchButton">
          <input type="button" value="小额短期" name="Any" class="searchButton">
          <input type="button" value="大额长期" name="Any" class="searchButton">
        </form><br><br><br>
        <p class="leftFont">项目完成度</p><br>
        <form class="col-sm-12 col-md-12">
          <input type="button" value="不限" name="Any" class="searchButton">
          <input type="button" value="50%以上" name="Any" class="searchButton">
          <input type="button" value="80%以上" name="Any" class="searchButton">
        </form><br><br><br>
        <p class="leftFont">收益率</p><br>
        <form class="col-sm-12 col-md-12">
          <input type="button" value="不限" name="Any" class="searchButton"/>
          <input type="button" value="> 0.5%" name="Any" class="searchButton"/>
          <input type="button" value="> 1.0%" name="Any" class="searchButton"/>
        </form><br><br><br>
        <div>
          <img src="../../static/pic/library.jpg"  alt="您无法查看此图片" class = "picture"/>
        </div>-->
      </div>
    </div>
    <div style="margin-top:150px;margin-bottom: 100px;margin-left:8%;margin-right:30%;">
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
      </div>
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
      </div>
      <div class="col-sm-4 col-md-4">
        <invest-list></invest-list>
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
  export default {
    name: "invest",
    components:{navi, footerBar, rightBar,investList}
  }
</script>

<style scoped>
  .searchBorder{
    text-align: center;
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid #4285F4;
    height:400px;
    margin-right:12%;
  }
  .leftFont{
    float:left;
    margin-left:5%;
  }
  .searchButton{
    width:30%;
    background: white;
    border:2px solid #e4e4e4;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
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
    width:100%;
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
    width:19%;
    margin-top:0%;
    height:100%;
  }
  .userSearch input[type=button]:focus {
    outline:none;
  }
  .userInput{
    margin-top:1%;
    font-size:16px;
    float: left;
    margin-left: 5%;
  }
  .userInput input{
    width:18%;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    font-size: 16px;
  }
  .userInput p{
    display: inline;
    margin-left:1%;
  }
  .userInput input:focus{
    border: 1px solid lightblue;
  }
  .userInput select{
    width:18%;
    height:30px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    font-size: 16px;
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
