<template>
  <div>
    <navi></navi>
    <div>
      <right-bar></right-bar>
    </div>

    <el-form>

    </el-form>

    <footerBar></footerBar>
  </div>

</template>

<script>

  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
    export default {
        name: "repay",
        components:{
          navi,footerBar,rightBar
        },
    }
</script>

<style scoped>

</style>
