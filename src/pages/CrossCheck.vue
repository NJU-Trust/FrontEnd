<template>
  <personalCenter paneltitle="关系验证">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="我的网络" name="first" >
        <div v-if="userstate === 0" >
          <br/><br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 您已经完成关系网络检验，您的关系检验总评分是：
            <span class="grade">{{ grade }}&nbsp;分</span>
          </h3>
        </div>
        <div v-else-if="userstate === 1" >
          <br/>
          <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            您的关系检验尚未完成。请您选择三名用户（同时平台将挑选七名与您同专业的用户）发放关系检验问卷，以进一步验证您的信用状况。</p>
          <br/><br/>
          <el-form :inline="true"
                   :rules="rules"
                   :model="formInline"
                   class="userbox" >
            <el-form-item label="用户一" prop="depart">
              <el-select v-model="formInline.opt1"
                         filterable
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user1" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="用户二" prop="depart">
              <el-select v-model="formInline.opt2"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user2" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="用户三" prop="depart">
              <el-select v-model="formInline.opt3"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user3" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
              <el-button type="primary" @click="send(userstate)" style="position:relative;left:200px;">提交</el-button>
              <!--<el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的用户选择已提交。</span>
                <br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统将及时发送问卷至相应用户邮箱。</span>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = send(userstate)">确 定</el-button>
                </span>
              </el-dialog>-->

            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="userstate === 2">
          <br/><br/>
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;您的问卷已发送至用户邮箱中，相关用户正在填写。 进度：
            <span class="grade">{{ done }}</span>&nbsp;/&nbsp;10
          </h3>
        </div>
        <div v-else-if="userstate === 3">
          <br/>
          <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您选择的以下用户未在指定时间内填写问卷，请重新选择用户进行填写。</p>
          <template>
            <el-table
              :data="delaylist"
              style="width: 60%;left:200px;">
              <el-table-column
                prop="depart"
                label="院系"
                width="180">
              </el-table-column>
              <el-table-column
                prop="num"
                label="学号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
            </el-table>
          </template>
          <br/><br/>
          <el-form :inline="true"
                   :rules="rules"
                   :model="formInline"
                   class="userbox" >
            <el-form-item label="用户一" prop="depart">
              <el-select v-model="formInline.opt1"
                         filterable
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user1" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item v-if="delaylist.length >= 2" label="用户二" prop="depart">
              <el-select v-model="formInline.opt2"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="delaylist.length >= 2" label="" prop="num">
              <el-input v-model="formInline.user2" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item v-if="delaylist.length > 2" label="用户三" prop="depart">
              <el-select v-model="formInline.opt3"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="delaylist.length > 2" label="" prop="num">
              <el-input v-model="formInline.user3" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
              <el-button type="primary" @click="send(userstate)" style="position:relative;left:200px;">提交</el-button>
              <!--<el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的用户选择已提交。</span>
                <br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统将及时发送问卷至相应用户邮箱。</span>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = send(userstate)">确 定</el-button>
                </span>
              </el-dialog>-->

            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待填问卷" name="second">
        <div class="AluUsrInstruction"  style="display: inline;margin-top: 10px;margin-bottom: 10px">
          <h3 style="text-indent: 0px">待填问卷</h3>
        </div>
        <template>
          <el-table
            :data="pendingQuestion"
            max-height="300"
            style="width: 640px;position:relative;left:120px;">
            <el-table-column
              prop="type"
              label="问卷类型"
              :filters="[{text:'用户选择',value:'用户选择'},{text:'系统随机',value:'系统随机'}]"
              :filter-method="filterHandler"
              width="180">
            </el-table-column>
            <el-table-column
              prop="depart"
              label="院系"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="学号"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">点击填写</el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
        <br/><br/>
        <div class="AluUsrInstruction"  style="display: inline;margin-top: 10px;margin-bottom: 10px">
          <h3 style="text-indent: 0px">过期问卷</h3>
        </div>
        <template>
          <el-table
            :data="delayQuestion"
            max-height="300"
            style="width: 640px;position:relative;left:120px;">
            <el-table-column
              prop="type"
              label="问卷类型"
              :filters="[{text:'用户选择',value:'用户选择'},{text:'系统随机',value:'系统随机'}]"
              :filter-method="filterHandler"
              width="180">
            </el-table-column>
            <el-table-column
              prop="depart"
              label="院系"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="学号"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">点击删除</el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
        <br/><br/>


      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  let tempchange = true;

  export default {
    name:"crosscheck",
    components: {personalCenter},
    data(){
      return{
        dialogVisible: false,
        activeName: 'first',
        formInline:{
          user1:'',
          user2:'',
          user3:'',
          opt1:'',
          opt2:'',
          opt3:'',
        },
        rules:{
          depart:[{required:true,message:'请选择用户院系',trigger: 'blur'}],
          num:[{required:true,message:'请填写用户学号',trigger: 'blur'}],
        },
        userstate:3,          //这里有四种状态：0 已完成、1 未完成、2 还待填写、3 等待时间过长还没填完
        grade:90,             //总评分
        done:3,
        pendingQuestion:[
          {type:'用户选择',depart:'工程管理学院',num:161270000},
          {type:'用户选择',depart:'计算机科学与技术系',num:161220000},
          {type:'系统随机',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'计算机科学与技术系',num:161220000},
        ],
        delayQuestion:[
          {type:'用户选择',depart:'工程管理学院',num:161270000},
          {type:'用户选择',depart:'计算机科学与技术系',num:161220000},
          {type:'系统随机',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'计算机科学与技术系',num:161220000},
        ],

        delaylist:[
          {depart:'计算机科学与技术系',num:161220000,name:'小明'},
          {depart:'工程管理学院',num:161270000,name:'小红'},
        ],
        departmentoptions:[{
          value: '选项1',
          label: '计算机科学与技术系'
        }, {
          value: '选项2',
          label: '工程管理学院'
        }, {
          value: '选项3',
          label: '软件学院'
        }, {
          value: '选项4',
          label: '文学院'
        }, {
          value: '选项5',
          label: '环境学院'
        },{
          value: '选项6',
          label: '历史学院'
        },{
          value: '选项7',
          label: '法学院'
        },{
          value: '选项8',
          label: '哲学系'
        },{
          value: '选项9',
          label: '新闻传播学院'
        },{
          value: '选项10',
          label: '政府管理学院'
        },{
          value: '选项11',
          label: '信息管理学院'
        },{
          value: '选项12',
          label: '社会学院'
        },{
          value: '选项13',
          label: '商学院'
        },{
          value: '选项14',
          label: '外国语学院'
        },{
          value: '选项15',
          label: '数学系'
        },{
          value: '选项16',
          label: '物理学院'
        },{
          value: '选项17',
          label: '化学化工学院'
        },{
          value: '选项18',
          label: '生命科学学院'
        },
          {
            value: '选项19',
            label: '地球科学与工程学院'
          },
          {
            value: '选项20',
            label: '地理与海洋科学学院'
          },{
            value: '选项21',
            label: '大气科学学院'
          },
          {
            value: '选项22',
            label: '电子科学与工程学院'
          },{
            value: '选项23',
            label: '现代工程与应用科学学院'
          },{
            value: '选项24',
            label: '天文与空间科学学院'
          },{
            value: '选项25',
            label: '医学院'
          },{
            value: '选项26',
            label: '匡亚明学院'
          },{
            value: '选项27',
            label: '海外教育学院'
          },{
            value: '选项28',
            label: '建筑与城市规划学院'
          },{
            value: '选项29',
            label: '人工智能学院'
          },
          ],
      }
    },

    methods: {
      send: function (userstate) {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        console.log(userstate);
        this.$confirm('您的用户选择已提交。系统将及时发送问卷至相应用户邮箱。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
          this.$router.push('/UserSpace/CrossCheck');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
        return false;

      },
      handleClick(tab, event) {
        this.$router.push('/UserSpace/CrossCheck');
        console.log(tab, event);
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    }
  }

</script>

<style scoped>


</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftBI{ color: #777777 !important; }*/
  #leftCC { color: dodgerblue !important}

  .grade{
    font-size:50px;
    color:#409eff !important;
  }

  .userbox{
    position:relative;
    left:180px;
  }
</style>
