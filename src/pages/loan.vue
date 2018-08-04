<template>
    <div>
      <navi></navi>
      <div class="back">
        <div class="sheet">
          <div class="chooseButton">
           <!-- <input type="radio" name="choose" value="">消费类小额短期
            <input type="radio" name="choose" value="">学习培训类大额长期-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import navi from '@/components/navi.vue';

    export default {
        name: "loan",
        components:{navi},
    }
</script>

<style scoped>

    /*.body{
      background-color: #5f9ea0;
    }*/
    .back{
      background-color: #85d1d1;
      width: 100%;
      height: 800px;
      border: 1px solid black;
    }

    .sheet{
      margin-top: 100px;
      margin-left:200px;
    }
</style>
