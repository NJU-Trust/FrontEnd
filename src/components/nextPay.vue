<template>
  <div>
    <div class="table-responsive" style="text-indent: 5px">
      <table class="table table-bordered repaytable">
        <tbody>
        <tr>
          <th id="titleProject" width="180px" rowspan="6">{{paytitle}}</th>
          <th width="200px">项目时间</th>
          <th width="180px">代还期数</th>
          <th width="180px">代还本息</th>
        </tr>
        <tr>
          <td>{{projectTime}}</td>
          <td>{{times}}</td>
          <td>{{interestPlus}}</td>
        </tr>
        <tr>
          <th>近3期</th>
          <th>还款时间</th>
          <th>还款金额</th>
        </tr>
        <tr>
          <td>{{timesA}}</td>
          <td>{{timeA}}</td>
          <td>{{amountA}}</td>
        </tr>
        <tr>
          <td>{{timesB}}</td>
          <td>{{timeB}}</td>
          <td>{{amountB}}</td>
        </tr>
        <tr>
          <td>{{timesC}}</td>
          <td>{{timeC}}</td>
          <td>{{amountC}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nextpay',
    data () {

    },
    props:['paytitle','projectTime','times','interestPlus'
      , 'timesA','timeA','amountA'
      , 'timesB','timeB','amountB'
      , 'timesC','timeC','amountC']

  }
</script>

<style>
  .repaytable tr,th{
    text-align: center;
    font-size: 18px;
  }

  #titleProject{
    text-align: center;
    vertical-align: middle;
    font-size: 22px;
  }

</style>
