<template id="mylist">
  <div class="UserList">
    <img src="/static/pic/background1.png" class="img-responsive" alt="Cinque Terre" style="top: 0;z-index: -1;">

    <div class="pager-wrapper" v-if="pageNum < 6">
      <div v-for="(item, index) in pages" class="item" :class='{active : active === (index + 1)}' @click="changePage(item)">
        {{item.text}}
      </div>
    </div>
    <div v-else>
      <div class="pager-wrapper" v-if="active < 4">
        <div v-for="(item, index) in pages" class="item" :class='{active : active === (index + 1)}' @click="changePage(item)">
          {{item.text}}
        </div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
      </div>
      <div class="pager-wrapper" v-else-if="active < (pageNum - 2)">
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :class='{active : active === item}' @click="changePage(item)">
          {{item.text}}
        </div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
      </div>
      <div class="pager-wrapper" v-else>
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :class='{active : active === item}' @click="changePage(item)">
          {{item.text}}
        </div>
      </div>
    </div>



  </div>



</template>

<script>
  export default {
    name: "usermanage",
    props: {
      pageNum: {
        type: Number,
        default: 10
      },
      activeIndex: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        pages: [],
        active: 1
      }
    },
    watch: {
      active (val) {
        this.init()
      }
    },
    created () {
      this.active = this.activeIndex
      this.init()
    },
    methods: {
      init () {
        if (this.pageNum < 6) {
          let pages = []
          for (let i = 1; i < (this.pageNum + 1); i++) {
            pages.push(i)
          }
          this.pages = pages
        } else {
          if (this.active < 4) {
            let pages = [1, 2, 3]
            this.pages = pages
            console.log(this.pages)
          } else if (this.active < (this.pageNum - 2)) {
            let pages = [this.active - 1, this.active, this.active + 1]
            this.pages = pages
          } else {
            let pages = [this.pageNum - 2, this.pageNum - 1, this.pageNum]
            this.pages = pages
          }
        }
      },
      changePage (item) {
        this.active = item
        this.$emit('changePage', item)
      },
      start () {
        this.active = 1
        this.$emit('changePage', this.active)
      },
      end () {
        this.active = this.pageNum
        this.$emit('changePage', this.active)
      },
      prev () {
        if (this.active === 1) return
        this.active--
        this.$emit('changePage', this.active)
      },
      next () {
        if (this.active === this.pageNum) return
        this.active++
        this.$emit('changePage', this.active)
      }
    }
  }
</script>


<style scoped>
  .UserList{
    height: 550px;
    min-width: 160px;
    min-height: 60px;
    padding: 0px 0px;
    line-height: 10px;
    background-color:rgba(0,50,200,0.3);
    color: white;
    border: none;
    font-size: 30px;
    font-family: "Microsoft YaHei UI";
    top: 0px;
    position: absolute;
    letter-spacing: 2px;
  }


  .pager-wrapper{
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item{
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 16px;
    padding: 4px 20px;
    border: 1px solid #d7d7d7;
    margin-left: 16px;
    cursor: pointer;
    color: #a5a5a5;
  }
  .active{
    background: #a5a5a5;
    color: #fff;
    border: 1px solid #a5a5a5;
  }
  .point{
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    margin-left: 16px;
    letter-spacing: 3px;
    color: #a5a5a5;
  }
</style>
