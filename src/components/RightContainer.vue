<template>
  <div class="container" >
    <div class="EnvironmentalBox">
      <TitleContent>环境监测</TitleContent>
      <div class="Environmental" ref="chart1">
          <li>
            <img src="../assets/images/shidu.png" alt="">
            <span>{{EnviromenList.sd}}%</span>
            <span>当前温度</span>
          </li>
          <li>
            <img src="../assets/images/zaoying.png" alt="">
            <span>{{EnviromenList.zy}}分贝</span>
            <span>当前造影</span>
          </li>
          <li><img src="../assets/images/wendu.png" alt="">
            <span>{{EnviromenList.wd}}℃</span>
            <span>当前温度</span>
          </li>
      </div>
    </div>
    <div class="securityBox">
      <TitleContent>智慧安防</TitleContent>
      <ul class="anfang">
        <li class="item"><span>摄像机数</span><span style="color:blue">10</span></li>
        <li class="item"><span>在线数量</span><span style="color:blue">20</span></li>
        <li class="item"><span>异常</span><span style="color:red">30</span></li>
        <li class="item"><span>安防事件</span><span style="color:red">20</span></li>
      </ul>
      <div class="security" ref="chart1">
        <div class="title">智慧消防</div>
        <table>
          <tr style="color:white">
            <th>  </th>
            <th>消防栓</th>
            <th>感烟</th>
            <th>感温</th>
            <th>其他</th>
          </tr>
          <tr style="color:white">
            <td>总数</td>
            <td>60</td>
            <td>60</td>
            <td>60</td>
            <td>60</td>
          </tr>
          <tr style="color:white">
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr style="color:red">
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
          </tr>
        </table>

      </div>
    </div>
    <div class="overviewBox">
      <TitleContent>能耗监测</TitleContent>
      <div class="overview" ref="chart1">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters, mapState } from 'vuex'
import TitleContent from './TitleContent.vue'
export default {
  name: 'RightContainer',
  components:{
    TitleContent
  },
  mounted(){
    this.GetEnvironmen()
    this.GetEcmHistory().then(()=>{
      this.initChartOne()
    })
  },
  methods:{
    ...mapActions({
      GetEnvironmen:'GetEnvironmen',
      GetEcmHistory:'GetEcmHistory'
    }),
    
    
    initChartOne(){
      // console.log('这是1',this.$refs.chart1)
      console.log('ssss',this.EcmHistoryListTime)
      const chartDom = this.$refs.chart1;
      var myChart = this.$echarts.init(chartDom)
      const option = {
        // dataset:{source},
        grid:{
          width:300,
          top:'35%',
          height:"40%",
          left:60
        },
        title:[
          {
            text:'今日用电 20KW/h',
            left:'10%',
            top:'5%',
            textStyle:{
              fontSize:12,
            },
            padding:[10,25],
            borderWidth:4
          },
          {
            text:'今日用水 10L',
            left:'50%',
            top:'5%',
            textStyle:{
              fontSize:12,
            },
            padding:[10,30],
            borderWidth:4
          },
        ],
        legend:{

        },
        tooltip:{},
        xAxis: [
          {

            data: this.EcmHistoryListTime,
            type: "category",
            // axisLabel:{
            //   interval:0
            // }
          }
        ],

        yAxis: [
          {
            type: "value",
            name:"(次)"
          }
        ],
        series: [
          {
            data: this.EcmHistoryListValue,
            type: "line",
            // label:{
            //   show:true,
            //   color:'#fff'
            // },
            itemStyle:{
              color:'#72bdda'
            },
            markPoint:{
              data:[
                {
                  text:"最小值",
                  type:'min'
                }
              ]
            }
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  computed:{
    ...mapState({
      EnviromenList:state=>state.home.EnviromenList,
    ...mapGetters(['EcmHistoryListTime','EcmHistoryListValue']),
    })
  }
}
</script >
<style lang="less" scoped>
.container{
  .EnvironmentalBox{
    margin-top: 60px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    // background: pink;
    .Environmental{
      width: 100%;
      height: 90%;
      align-items: center;
      justify-content: space-around;
      box-shadow: inset 0 0 50px 5px #72bdda;
      display: flex;
      li{
        width: 30%;
        display: flex;
        // background: red;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
        width: 100%;
          margin-bottom: 10px;
        }
        span{
          color: #fff;
          margin-bottom: 10px;
        }
      }
      }
  }
  .securityBox{
    margin-top: 10px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    // background: pink;
    display: flex;
    flex-direction: column;
    .security{
      width: 100%;
      height: 90%;
      box-shadow: inset 0 0 50px 5px #72bdda;
      display: flex;
      align-items: center;
      .title{
        text-align: center;
        line-height: 20px;
        width: 20px;
        background: #72bdda;
        height: 100px;
        border: 1px solid #fff .5;
      }
      table{
        width: 90%;
        height: 100%;
        text-align: center;
      }
    }
    .anfang{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      .item{
        width: 20%;
        background-color: rgba(126, 236, 255, 0.3) ;
        // opacity: .5;
        color: white;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
      }
    }
    
  }
  .overviewBox{
    margin-top: 10px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    // background: pink;
    display: flex;
    flex-direction: column;
    .overview{
      width: 100%;
      height: 90%;
      box-shadow: inset 0 0 50px 5px #72bdda;

    }
  }
}
</style>
