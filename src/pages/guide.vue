<template>
  <div>
    <navi></navi>
    <img src="../../static/pic/guideBackground.jpg"  style="width:100%;min-height:1150px;opacity:0.3;position: absolute"/>
    <div style="position:relative;display:flex;width:100%;top:100px;">
      <div>
        <el-row>
          <el-col :span="24">
            <el-menu
              style="opacity: 0.7"
              default-active="1-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>关于我们</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="handleClick">平台定位</el-menu-item>
                  <el-menu-item index="1-2" @click="handleClick">团队简介</el-menu-item>
                  <el-menu-item index="1-3" @click="handleClick">合作机构</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>使用指南</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="handleClick">注册账号</el-menu-item>
                  <el-menu-item index="2-2" @click="handleClick">借款须知</el-menu-item>
                  <el-menu-item index="2-3" @click="handleClick">贷款须知</el-menu-item>
                  <el-menu-item index="2-4" @click="handleClick">信息发布</el-menu-item>
                  <el-menu-item index="2-5" @click="handleClick">物品交易</el-menu-item>
                  <el-menu-item index="2-6" @click="handleClick">规则须知</el-menu-item>
                  <el-menu-item index="2-7" @click="handleClick">常见问题</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>安全中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1" @click="handleClick">政策法规</el-menu-item>
                  <el-menu-item index="3-2" @click="handleClick">隐私保护</el-menu-item>
                </el-menu-item-group>

              </el-submenu>

            </el-menu>
          </el-col>
        </el-row>
      </div>
      <table style="margin:0 auto;">
        <tbody>
        <tr><td>
          <ul>
            <el-col :span="12">
              <div class="detail" v-if="item1">
                <div class="content">
                  <label style="font-weight: normal;">
                    平台定位<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust致力于打造基于校园的金融互助平台，给在校大学生提供一个良好的资金交易、生活互助生态圈。在平台中，您可以向同校生申请借款，也可以把每月的盈余生活费拿来发放贷款、收取利息，从而实现资金从盈余方到需求方的流动，也降低了违约风险。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，Trust也给校友带来了回馈母校的机会，通过无利率贷款行为，校友可以帮助在校生解决因学习而产生的大额经济需求，充分展现校友情谊。此外，附加的失物招领、二手交易板块也使得Trust平台更加全面、生动，力求带给您最佳的用户体验。
                  </label>
                </div>
                <div align="center" style="padding:0px 0px 20px 0px;">
                  <img style="border-radius:10%;" src="../../static/pic/nju.jpg">
                </div>
              </div>
              <div class="detail" v-if="item2">
                <div class="content">
                  <label style="font-weight: normal;">
                    团队简介<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;团队
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item3">
                <div class="content">
                  <div style="display: flex">
                    <div style="padding:0px 20px;">
                      <label style="font-weight: normal;">
                        合作机构<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust平台的主要合作机构是工行南大未来广场支行，它是南京大学 - 工商银行金融创新实验室项目的重要组成部分，是工商银行将金融创新科技融入网点建设当中，倾力打造的新型网点。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场富有科技感，采用了工行最先进的智能设备，可以完成 90% 以上的非现金业务。同时引入人脸识别系统，在校师生可以通过手机端“工银 e 校园”注册并预定支行的会议室。
                      </label>
                    </div>
                    <div style="padding:30px 0px 0px 0px;">
                      <img style="width:300px;height: 300px;border-radius:50%;" src="../../static/pic/futurefinance.png"/>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div style="padding:10px 20px;">
                      <img style="width:250px;height: 250px;border-radius:50%;" src="../../static/pic/futureservice.png"/>
                    </div>
                    <div>
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场布局功能多样，内部分为四大区域，即智能服务区、多功能服务区、研讨区和休闲区，不仅是金融服务场所，更能为客户提供交流、展示等多种服务。
                      </label>
                      <br/>
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场作为南京大学“双创 ” 基地，为学生提供了了解银行、实习体验、创新研讨的平台，为其走进社会开展创业创新提供了经验和技能储备。后续还将招募学生参与运营管理。
                      </label>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div style="padding:40px;">
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南大未来广场支行作为南京工行着力打造的创新平台，今后还将逐步完善各类功能，成为真正的“未来银行”。而Trust与未来广场的合作与日常交流，也将是我们平台不断进步的原动力。
                      </label>
                    </div>
                    <div>
                      <img style="width:250px;height: 250px;border-radius:50%;" src="../../static/pic/futuresquare.png"/>
                    </div>
                  </div>


                </div>
              </div>

              <div class="detail" v-if="item9">
                <div class="content">
                  <label style="font-weight: normal">规则须知</label><hr/>
                  <label style="font-weight: normal;font-size: 14px;line-height: 20px;">
                    （1）信用评级<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为大学生金融普惠互助平台，Trust的主要功能是资金借贷。因此，对大学生进行信用画像是至关重要的。
                    在这里，通过初始注册信息，后台会自动计算出您的初始信用分数，并按照分数给您打出相应的初始信用评级（信用评级包括AA/A/B/C/D五级）。需要注意的是，您在平台上的每一次行为都为影响您的信用分数，作为一个动态指标，它将实时监测和反应您的借贷、信息发布等一切活动。
                    信用评级至关重要。首先，它会直接影响您的信用额度。处于不同信用级别的用户拥有不同的借款额度。此外，信用评级也会影响您的借贷行为：信用评级越低，您的借贷风险评级越高，需求被实现的成功率越低。最后，信用评级也会间接影响您在借贷时的利率大小。
                    保持良好的信用，诚信借贷、和谐交流，是trust平台的宗旨所在，也是您拥有尚佳的用户体验的基础。

                  </label>
                  <label style="font-weight: normal;font-size: 14px;line-height: 20px;">
                    （2）关于收费<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小额消费类：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资者：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	本平台进行充值时免费，提现需要收取一定费用。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)	当充值的资金经投资回款后，每提现5000元收取5元<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)	当充值的资金未经投资直接取出，资金在网站的时间大于10天，每提现5000元收取5元，小于等于10天，收取5元+0.05%*提现金额<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	投资服务费：按标的产生的利息收取相应的费用，利息在0~500，收取5%，500~5000收取2%，>5000不收取，此费用在借款人还款之后收取。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、	标的转让费（债权人因特殊原因需要将标的转让时收取一定费用）：债权已持有90天（含）以内，转让服务费率为1%，债权已持有超过90天，转让服务费率为0.5%，转让时收取。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借款者：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	借款管理费：申请标的时收取，费用为金额*天数*0.01%<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	逾期服务费（借款者未按时归还借款所需提交的服务费）：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;逾期服务费=逾期本息总额*对应逾期服务费率*逾期天数；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;逾期服务费率：1-30天为0.1%，31-60天为0.16%，61天及以上为0.2%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借贷双方：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	提前还款违约金：平台不收取费用，费用全部交由投资者<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) 借款方在第4期结息日（含结息日）前提前还款的，提前还款违约金为剩余本金的 1.5%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) 借款方在第4期结息日次日至第8期结息日（含结息日）期间提前还款的，提前还款违约金为剩余本金的 1.0%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c) 借款方在第8期结息日后提前还款的，提前还款违约金为剩余本金的0.5%。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：一般情况下，一月为一期（一般标的是按月计息的）；当用户自定义以日计息的时候，仍以月为单位进行比较，考虑到如果借款期限不足四个月时投资者获得的利息本来就较少，此时提前还款对投资者的利益损害相对较大，因此需采取较高比率的违约金。故在此按月或按天计息不做区分。“剩余本金”是指所有未到期的借款本金（当提前还款日为结息日时，剩余本金不包括当期本金；当提前还款日不为结息日时，剩余本金包括当期本金）。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	逾期还款：费用交由投资者<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罚息金额=逾期本息总额*对应罚息利率*逾期天数；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罚息利率：1-30天为0.05%，31-60天为0.08%，61天及以上为0.1%；<br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习培训类：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、发布学习培训类标的的借款人需要在借款前缴纳一定的保证金作为抵押，待还款成功之后平台自动退还。<br/>

                  </label>
                </div>
              </div>
              <div class="detail" v-if="item10">
                <div class="content">
                  <label style="font-weight: normal;">常见问题</label><hr/>
                  <label style="font-weight: normal;font-size: 16px;line-height: 26px;">
                    1、	问：你们的投资利息是多少？<br/>
                    答：投资利息主要由借款人发布标的时决定，利率范围较大，投资人可自行选择偏好的利率进行投标。
                    <br/>2、	问：投资安不安全？标的安全吗？<br/>
                    答：安全，借款人限制在南京大学在校学生，在注册平台时我们收集了用户的各项详细资料，通过团队的严格审核与调查来核实信息。通过对借款人的信用评级和财务状况的评估之后决定是否有借款资格以及申请的标的是否合理。
                    <br/>3、	问：你们的风控怎么做的？<br/>
                    答：我们有全方位的信用评级及财务状况分析，对借款人的还款能力与意愿进行了评估；此外，我们将资本严格限制在校友圈内，大大降低了坏账的风险。
                    <br/>4、	问：其他平台有不少跑路的现象，你们怎么确保投资安全？<br/>
                    答：我们的借款人都是南京大学在校学生，在向其提供借款前，我们都会要求其提供各项个人的真实信息，在确保资料真实、具有还款能力后才会通过其标的。
                    <br/>5、	问：充值提现要收钱吗？<br/>
                    答：充值免费，提现收费，当充值的资金经投资回款后，提现每5000元收取5元，当充值的资金未经投资直接取出，资金在网站的时间大于10天，提现每5000元收取5元，小于等于10天，收取5元+0.05%*金额。
                    <br/>6、	问：借款人都是真实的吗？借款资料是真实的吗？<br/>
                    答：真实的，借款人都是南京大学在校学生，平台拥有其个人基本信息及财务状况等，只是匿名化机制可以让借款人自由选择信息披露程度。
                    <br/>7、	问：投资人必须是校友吗？<br/>
                    答：是的，小额类标的限于南京大学在校学生进行投资，大额类标的限于已毕业校友进行投资。
                    <br/>8、	问：借款人必须是校友吗？<br/>
                    答：是的。
                    <br/>9、	问：不满标怎么办？<br/>
                    答：在借款截止日，若标的未满标，但达到最低达标率，借款人在借款截止日可将资金取出，系统开始计算利息，到还款截止日前为止；若未达到最低达标率，则借款失败。借款人可重新申请新的标的，可适当调整借款条件（例如提高借款利率）来加速满标。
                    <br/>10、问：什么叫透明标？<br/>
                    答：借款人为了加速满标，愿意将信息披露程度提到最高，公开身份信息进行借款。
                    <br/>11、问：投资后因特殊原因急需撤回资金怎么办？<br/>
                    答：当投资人需要撤资时可以进行债权转让，但是需要缴纳一定的债权转让费且在标的持有期的收益将无法享有。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item11">
                <div class="content">
                  <label style="font-weight: normal;">政策法规</label><hr/>
                  <label style="font-weight: normal;font-size: 18px;line-height: 36px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民间借贷，即自然人之间、自然人与法人之间、自然人与其它组织之间借贷。民间借贷是《民法通则》中一种民事法律行为，是民间资本的一种投资渠道，在当今社会，已经成为民间金融的一种重要的表达形式。《中华人民共和国合同法》从法律上肯定了民间借贷行为的合法性，并从法律层面保护出借人收回借贷资金和利息的权利。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民间借贷的法律责任以民事责任为主，严重者还要追究刑事责任。主要包括：（1）瑕疵担保责任。实践中存在因标的物的瑕疵而致人损害的的事实，因此法律应该对民间借贷的瑕疵担保责任作出规定，可以参照《合同法》和其他国家的制度。有偿的民间借贷，出借人应承担担保责任，对于无偿的，除非明知有瑕疵故意不告知，不承担瑕疵担保责任。（2）违约责任。当事人违法借贷合同约定应承担的责任形式有四种：继续履行、承担违约金、定金责任和赔偿损失。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《中华人民共和国合同法》第二十三章“居间合同”中明确规定，居间人提供贷款合同订立的媒介服务，可依法向委托方收取相应的报酬。最高人民法院《关于人民法院审理借贷案件的若干意见》第6条：“民间借贷的利率可以适当高于银行的利率， 各地人民法院可以根据本地区的实际情况具体掌握，但最高不得超过银行同类贷款利率的四倍，（包含利率本款）。超出此限度的，超出部分的利息不予保护”。因此贷款服务机构的存在和服务费的收取都是符合法律规定并受法律保护的，且民间借贷行为具有合法性，出借人收回借贷资金和利息的权利也受法律保护。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为校园金融互助平台，trust既不吸储，也不放贷，作为一个网络信用管理及借贷服务中介机构，其业务范围和经营活动完全符合相关法律规定。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item12">
                <div class="content">
                  <label style="font-weight: normal;">隐私保护</label><hr/>
                  <label style="font-weight: normal;font-size: 16px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust致力于打造和谐、安全的校园金融互助交易平台，我们有以下措施可以保障您的隐私安全：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）平台提供的金融借贷均严格遵守我国相关法律法规，同时严格保护您的隐私信息，对于您拒绝披露的信息，平台承诺不会予以公开。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）平台具有严格、可靠的安全系统，未经允许的管理员不可获取您的相关信息。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）平台承诺绝不会将您的银行信息、个人隐私以任何方式透露给第三方。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）平台通过先机的加密技术，对您的注册信息、收支情况、交易记录都进行了高强度的加密，保证您在平台的足迹不会被不法分子窃取利用。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，平台仍需提醒您，trust是一个实名认证平台，您在其上进行浏览和交易时，也要有防范意识，时刻注意保护个人隐私。截图注意覆盖个人信息，除特殊情况外，不要轻易透露电话、住址等隐私信息，以防信息窃取造成不必要的损失。<br/>
                  </label>
                </div>
              </div>
            </el-col>
          </ul>
        </td></tr>
        </tbody>
      </table>



    </div>


  </div>
</template>

<script>
  import navi from "@/components/navi";

  export default{
    name: "guide",
    components:{navi},
    data(){
      return{
        item1:true,
        item2:false,
        item3:false,
        item4:false,
        item5:false,
        item6:false,
        item7:false,
        item8:false,
        item9:false,
        item10:false,
        item11:false,
        item12:false,

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(key, keyPath) {
        var index = key.index;
        var rank = parseInt(index[2])
        if(parseInt(index[0])==1){

        }else if(parseInt(index[0])==2){
          rank = rank+3;
        }else{
          rank = rank+10;
        }
        console.log(rank);
        if(rank==1){
          this.item1=true;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==2){
          this.item1=false;
          this.item2=true;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==3){
          this.item1=false;
          this.item2=false;
          this.item3=true;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==4){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=true;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==5){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=true;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==6){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=true;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==7){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=true;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==8){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=true;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==9){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=true;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==10){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=true;
          this.item11=false;
          this.item12=false;
        }else if(rank==11){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=true;
          this.item12=false;
        }else if(rank==12){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=true;
        }

      }
    }
  }

</script>

<style>
  .content{
    padding: 40px;
    font-size: 20px;
    line-height: 40px;
    color:dimgrey;
    font-family: "Adobe 仿宋 Std R";
  }
  .detail{
    width:900px;
    background-color:rgba(255,255,255,0.6);
    border-radius:10%;
  }

</style>
