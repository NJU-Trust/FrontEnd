<template>
  <div id="Investing">
    <navi></navi>
    <img src="/static/pic/Investing.png" class="img-responsive" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 300px">
    <div class="overview">
      <div class="total" style="position:absolute;left:10%;top:20%;">
        <label>标的编号XXXXXXX</label><br/>
        <div class="vue-progress-bar default-theme">
          <div class="vue-progress-bar__tip">
            <span class="vue-progress-bar__tiplabel">{{label}}</span>
            <span class="vue-progress-bar__tiptext">{{text}}</span>
          </div>
          <div class="vue-progress-bar__outer">
            <div class="vue-progress-bar__inner" :style="barStyle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import navi from '@/components/navi.vue';

    export default {
      name: "DoInvesting",
      components:{navi},

      props:{
        label:String,
        text:String,
        height:{
          type: Number,
          default: 0,
          required: true,
          validator: val => val >= 0
        },
        color: {
          type: String,
          default: ''
        },
        percentage:{
          type: Number,
          default: 0,
          required: true,
          validator: val => val >= 0 && val <= 100
        }
      },
      computed:{
        barStyle() {
          const style = {};
          style.width = this.percentage + '%';
          style.height = this.height + 'px';
          style.backgroundColor = this.color;
          return style;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .vue-progress-bar.default-theme{
    .vue-progress-bar__outer {
      background: #eee;
    }
  }

  .vue-progress-bar {
    .vue-progress-bar__tiptext {
      float: right;
    }
  }
</style>
