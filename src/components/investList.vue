<template>
  <div class="investList">
    <div class="type">
      <p class="center">STUDY</p>
    </div>
    <div>
      <p class="month" style="margin-top:5%;">Profit : </p>
      <p class="profit">10.9840%</p>
      <p class="month">/ per year</p>
    </div>
    <div class="itemDescription">
      <p class="itemName">托福补课学费</p>
      <p class="money">￥3 000  </p><p class="moneyName"> / 剩余金额</p>
      <p style="margin-top:5%;">借款总金额：￥8 000</p>
      <p>完成度:</p>
      <div class="progress round-conner">
        <div class="curRate round-conner">
          <p>62.5%</p>
        </div>
        <div style="display:inline;"></div>
      </div>
      <p>借款截止：2018.9.10</p>
      <p>还款日期：2019.9.10</p>
      <p></p>
    </div>
    <div>
      <input type="button" value="Invest now" class="enterInvest"/>
    </div>
  </div>
</template>
<script>
    export default {
      name: "investList"
    }
</script>

<style scoped>
  .progress {
    background: #A6A3A3;
    margin-left:5%;
    margin-right:5%;
  }
  .curRate {
    width: 62.5%;
    background: #4285F4;
    color:white;
  }
  .round-conner {
    height: 18px;
    border-radius: 15px;
  }
  .investList{
    background: white;
    border:1px solid #e4e4e4;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    max-height: 500px;
    text-align: center;
  }
  .investList:hover{
    border:2px solid #7CADDB;
  }
  .itemName{
    color:#616363;
    font-size:20px;
    margin-top:3%;
  }
  .itemDescription {
    color: #7A7A7A;
  }
  .month{
    color:#616363;
    font-size:16px;
    font-weight: 500;
  }
  .profit{
    color:#4285F4;
    font-size:46px;
    font-weight:500;
  }
  .center{
    margin: auto;
    text-align: center;
  }
  .type{
    background: #4285F4;
    max-width:60%;
    color:white;
    margin-left:20%;
    font-size:18px;
    height:25px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .enterInvest{
    border:1px solid #8C8F8F;
    background:white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size:17px;
    color:#8C8F8F;
    width:40%;
    height:30px;
    margin-top:5%;
    margin-bottom:5%;
  }
  .enterInvest:hover{
    border:2px solid #4285F4;
    background: #4285F4;
    color:white;
  }
  .moneyName{
    font-size:16px;
    color:#616363;
    display:inline;
  }
  .money{
    color:#616363;
    font-size:25px;
    display:inline;
  }

</style>
