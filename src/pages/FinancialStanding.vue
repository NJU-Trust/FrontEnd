<template>
  <personalCenter paneltitle="财务状况">
    <div>
      <div class="chooseButton">
        <el-row>
          <el-button id="income_btn" @click="change_income" autofocus="true" >收入</el-button>
          <el-button id="outcome_btn" @click="change_outcome">支出</el-button>
          <el-button id="othercome_btn" @click="change_othercome">其他</el-button>
        </el-row>
      </div>
      <hr/>
      <div class="FinDateChoice">
        <div class="block">
          <span class="demonstration">请选择你要查看的时间区间段</span>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="到"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
      </div>
      <hr/>
      <div class="LevelTwoIndex" id="leveltwoindex">
        <div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
              <el-checkbox-button v-for="indexA in indexAs" :label="indexA" :key="indexA">{{indexA}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>
      <hr/>
      <div class="LevelOneIndex" id="leveloneindex">
        <div class="class_income" id="id_class_income">
          <p style="font-size: 3em;">此处展示{{value7.toString()}}的收入数据</p>
        </div>
        <div class="class_outcome" id="id_class_outcome" style="display: none">
          <p style="font-size: 3em">此处展示{{value7.toString()}}的支出数据</p>
        </div>
        <div class="class_othercome"id="id_class_othercome" style="display: none">
          <p style="font-size: 3em">此处展示{{value7.toString()}}的其他数据</p>
        </div>
      </div>
    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  const indexAOptions = ['净资产', '恩格尔系数', '刚性比率', '资产负债率','偿债能力','杠杆比例','月消费比率','月储蓄比例'];

  export default {
  name:"FinancialStanding",
    components: {personalCenter},
    methods:{
      change_income(){
        document.getElementById("id_class_income").style.display = "inline";
        document.getElementById("id_class_outcome").style.display = "none";
        document.getElementById("id_class_othercome").style.display = "none";
      },
      change_outcome(){
        document.getElementById("id_class_income").style.display = "none";
        document.getElementById("id_class_outcome").style.display = "inline";
        document.getElementById("id_class_othercome").style.display = "none";
      },
      change_othercome(){
        document.getElementById("id_class_income").style.display = "none";
        document.getElementById("id_class_outcome").style.display = "none";
        document.getElementById("id_class_othercome").style.display = "inline";
      },
    },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        // value6: '',
        value7: '',
        checkboxGroup2: ['上海'],
        indexAs: indexAOptions
      };
    }
  }


</script>

