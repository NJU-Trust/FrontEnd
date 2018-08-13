<template>
  <el-carousel :interval="3000" type="card" height="400px" style="text-align: center;margin-top: 50px;width: 76%;margin-left: 12%;margin-bottom: 50px;min-width: 880px">
    <el-carousel-item v-for="item in 10" :key="item" class="is-always-shadow el-card rangeCard">
      <h3>TOP </h3>
      <img class="photo" src="/static/pic/photo.jpg" style="display: inline-block">
      <div style="width: 40%;display: inline-block;text-align: left;margin-top: 12px" class="basic">
        <p><strong>姓名：</strong></p>
        <p style="margin-top: 20px"><strong>性别：</strong></p>
        <p style="margin-top: 20px"><strong>职业：</strong></p>
        <p style="margin-top: 20px"><strong>院校：</strong></p>
        <p style="margin-top: 20px"><strong>简介：</strong></p>
        <el-input class="einput"
          type="textarea"
          :rows="5"
          readonly="readonly"
                  value="1"
        >
        </el-input>
      </div>
      <div style="width: 40%;text-align: left;margin-left: 10%;margin-top: -150px">
        <p style="margin-top: 20px"><strong>总计投入资金：</strong></p>
        <p id="total"></p>
        <p style="margin-top: 20px"><strong>平均利息方案：</strong></p>
        <p id="average"></p>
        <p style="margin-top: 20px"><strong>个人投标信息：</strong></p>
        <p id="method"></p>
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "topRange",
      data: {
        basicInfo: ["100", "200", "300", "400", "500","100", "200", "300", "400", "500"],
      },
        mounted: function () {
        var items=$(".rangeCard");
        var i=0;
        while (i<10) {
          items.eq(i).children('h3').text(items.eq(i).children('h3').text()+(i+1));
          i++;
        }
        var basicInfo;
        i=0;
        this.$axios.get("http://localhost:8000/api/auth/topRange",).then(res => {
          basicInfo=res.data.basic;
          while (i<10){
            var j=0;
            while (j<4) {
              //这一段记得改成二维

              items.eq(i).children('.basic').eq(0).children('p').eq(j).html(items.eq(i).children('.basic').eq(0).children('p').eq(j).html()+basicInfo[j]);
              j++;
            }
            console.log(items.eq(i).find('.einput').eq(0).children().eq(0).val());
            items.eq(i).find('.einput').eq(0).children().eq(0).val(basicInfo[j]);
            i++;
          }
        });

      }
    }
</script>

<style scoped>
  .rangeCard{
  }

  .photo{
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-right: calc(42% - 160px);
    float: left;
    margin-left: 8%;
    margin-top: 10px;
  }

  h3{
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 10px;
    color: lightskyblue;
  }

</style>
