<template>
  <personalCenter paneltitle="投资收益">

  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"LoanStatistics",
    components: {ProjectList, personalCenter},
  }

</script>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftBI,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftIE { color: dodgerblue !important}
</style>


