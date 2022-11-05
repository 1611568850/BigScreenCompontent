<template>
  <div class="container">
    <div class="StatusContainer">
      <ul class="StatusUl">
        <li class="StatusItem"><img src="@/assets/images/home-gj_03.png" alt=""></li>
        <li class="StatusItem"><img src="@/assets/images/home-gj_07.png" alt=""></li>
        <li class="StatusItem"><img src="@/assets/images/home-gj_05.png" alt=""></li>
        <li class="StatusItem"><img src="@/assets/images/home-gj_09.png" alt=""></li>
      </ul>
    </div>
    
    <div class="weekAlertContainer">
      <TitleContent>周告警事件趋势图</TitleContent>
      <div class="weekAlert" ref="chart1">
      </div>
    </div>
    <div class="passengerFlowContainer">
      <TitleContent>景点客流统计</TitleContent>
      <div class="changeItem" @click="changeIndex()" >
        <button :class="{changeItembg:this.index}">当日</button>
        <button :class="{changeItembg:!this.index}">全年</button>
      </div>
      <div class="passengerFlow" ref="chart2"></div>
    </div>
    <div class="pingxiaoanalysisContainer">
      <TitleContent>游客数量统计</TitleContent>
      <div class="pingxiaoanalysis" ref="chart3"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState , mapGetters ,mapActions, mapMutations} from 'vuex'
import TitleContent from './TitleContent.vue'
export default {
  name: 'LeftContainer',
  data(){
    return {
    }
  },
  components:{
    TitleContent
  },
  mounted(){
    this.getWeekAlert().then(()=>{
      this.initChartOne()
    })
    this.getPassengerFlow().then(()=>{
      this.initChartTwo()
    })
    this.getSalesController({"area":"皇帝像","type":"日"}).then(()=>{
      this.initChartThree()
    })
  },
  methods:{
    changeIndex(){
      this.reciveChangeIndex()
      this.initChartTwo()
    },
    ...mapMutations({
      reciveChangeIndex:'reciveChangeIndex'
    }),
    ...mapActions({
      getWeekAlert:'getWeekAlert',
      getPassengerFlow:'getPassengerFlow',
      getSalesController:'getSalesController'
    }),
    // 第一张表
    initChartOne(){
      // console.log('这是1',this.$refs.chart1)
      // console.log('ssss',this.WeekAlertListName)
      const chartDom = this.$refs.chart1;
      var myChart = this.$echarts.init(chartDom)
      const option = {
        // dataset:{source},
        grid:{
          width:300,
          left:60
        },
        title:{
          text:'12344',
          top:'-10'
        },
        tooltip:{},
        xAxis: [
          {

            data: this.WeekAlertListName,
            type: "category",
            axisLabel:{
              interval:0,
              color:'#fff'
            },
            nameTextStyle:{
              color:"#fff"
            }
          }
        ],

        yAxis: [
          {
            type: "value",
            name:"(次)",
            
            axisLabel:{
              interval:0,
              color:'#fff'
            },
          }
        ],
        series: [
          {
            data: this.WeekAlertListdataParam,
            type: "line",
            
            label:{
              show:true,
              color:'#fff'
            },
            itemStyle:{
              color:'#72bdda'
            }
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 第二章表
    initChartTwo(){
      // console.log('adsads',this.yearPassengerFlowdataParam)
      const chart2 = this.$refs.chart2
      var myChart2 = this.$echarts.init(chart2)
      const option ={
        grid:{
          width:300,
          left:60
        },
        xAxis:{
          type:'category',
          data:this.index?this.dayDataName:this.yearPassengerFlowName,
          axisLabel:{
            interval:0,
            fontSize:10,
            color:'#fff'
          }
        },
        yAxis:{
          type:'value',
          axisLabel:{
              interval:0,
              color:'#fff'
            },
        },
        series:{
          type:"line",
          data:this.index?this.dayDatadataParam:this.yearPassengerFlowdataParam,
          smooth:true,
          
          markPoint:{
            label:{
              color:'#fff'
            },
            data:[
              {
                name:'最大值',
                type:'max',
                itemStyle:{
                  color:'red',
                  
                }
              },
              {
                name:'最大值',
                type:'min',
                itemStyle:{
                  color:'lightgreen',
                  
                },
                
              }
            ]
          }
        }
      }
      myChart2.setOption(option)
    },
    initChartThree(){
      console.log('adsads',this.SalesControllerListName)
      const chart3 = this.$refs.chart3
      var myChart3 = this.$echarts.init(chart3)
      const option ={
        grid:{
          width:300,
          left:60
        },
        xAxis:{
          type:'value',
          axisLabel:{
            interval:0,
            color:'#fff'
          }
        },
        yAxis:{
          type:'category',
          data:this.SalesControllerListName,
          axisLabel:{
              interval:0,
              color:'#fff'
            },
        },
        series:{
          type:"bar",
          data:this.SalesControllerListValue,
          smooth:true,
          
          markPoint:{
            label:{
              color:'#fff'
            },
            data:[
              {
                name:'最大值',
                type:'max',
                itemStyle:{
                  color:'red',
                  
                }
              },
              {
                name:'最大值',
                type:'min',
                itemStyle:{
                  color:'lightgreen',
                  
                },
                
              }
            ]
          }
        }
      }
      myChart3.setOption(option)
    },
  },
  computed:{
    ...mapState({
      WeekAlertList:state=>state.home.WeekAlertList,
      yearPassengerFlow:state=>state.home.yearPassengerFlow,
      dayData:state=>state.home.dayData,
      index:state=>state.home.index
    }),
    ...mapGetters(
      [
        'WeekAlertListName',
        'WeekAlertListdataParam',
        'yearPassengerFlowName',
        'yearPassengerFlowdataParam',
        'dayDataName',
        'dayDatadataParam',
        'SalesControllerListName',
        'SalesControllerListValue'
      ])
  }
  
}
</script >
<style lang="less" scoped>
.container{
  padding-top: 50px;
  box-sizing: border-box;
  padding-left:20px ;
  .StatusContainer{
    .StatusUl{
      width: 100%;
      background: grey;
      display: flex;
      .StatusItem{
        margin-right: 5px;
        // background: blue;
        width: 25%;
        img{
          width: 100%;
        }
      }
    }
  }
  .weekAlertContainer{
    margin-top: 10px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    // background: pink;
    display: flex;
    flex-direction: column;
    .weekAlert{

      width: 100%;
      height: 90%;
      // border: 1px solid violet;
      box-shadow: inset 0 0 50px 5px #72bdda;
      // position: absolute;
      // border: 10px solid #72bdda;
    }
  }
  .passengerFlowContainer{
    margin-top: 10px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    position: relative;
    // background: pink;
    display: flex;
    flex-direction: column;
    .changeItem{
      position: absolute;
      right: 0;
      top: 5px;
      button{
        width: 35px;
        height: 20px;
        white-space: nowrap;
        border-radius: 2px;
        border: none;
      }
      .changeItembg{
        background: skyblue;
      }
    }
    .passengerFlow{

      width: 100%;
      height: 90%;
      // border: 1px solid violet;
      box-shadow: inset 0 0 50px 5px #72bdda;
      // position: absolute;
      // border: 10px solid #72bdda;
    }
  }
  .pingxiaoanalysisContainer{
    margin-top: 10px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    // background: pink;
    display: flex;
    flex-direction: column;
    .pingxiaoanalysis{

      width: 100%;
      height: 90%;
      // border: 1px solid violet;
      box-shadow: inset 0 0 50px 5px #72bdda;
      // position: absolute;
      // border: 10px solid #72bdda;
    }
  }
}
</style>
