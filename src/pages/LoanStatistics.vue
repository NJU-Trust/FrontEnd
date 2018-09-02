<template>
  <personalCenter paneltitle="融资统计">
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"loanstatistics",
    components: {ProjectList, personalCenter},
  }

</script>

<style>
  #leftOV,#leftFS,#leftSP,#leftLI,#leftBI,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }
  #leftLS { color: dodgerblue !important}
</style>
