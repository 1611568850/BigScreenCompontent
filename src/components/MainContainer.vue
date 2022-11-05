<template>
  <div class="container">
    <!-- <baidu-map class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler"></baidu-map> -->
    <div class="pieContainer">
      <div class="pieChart" ref="pieChartone"></div>
      <div class="pieChart" ref="pieCharttwo"></div>
      <div class="pieChart" ref="pieChartthree"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import { mapActions, mapState } from 'vuex'
export default {
  name: 'MainContainer',
  data() {
      return {
        // mapOption:{

        // title: {
        //     text: "中国各区案件分布图 ",
        //   },

        //   tooltip: {
        //     trigger: "item",
        //     formatter: "{b}<br/>{c} (p / km2)",
        //   },

        //   visualMap: {
        //     min: 100,
        //     max: 5000,
        //     text: ["高", "低"],
        //     realtime: false,
        //     calculable: true,
        //     inRange: {
        //       color: ["lightskyblue", "yellow", "orangered"],
        //     },
        //   },
          
        //   series: [
        //     {
        //       type: "map",//图标类型
        //       mapType: "中国", // 自定义扩展图表类型
        //       name: "中国各区案件完成数量对比",
        //       label: {
        //         show: true,
        //       },
        //       //用于修改正常显示地图颜色边框等内容
        //         normal: {
        //           borderWidth: 1,
        //           borderColor: "#e1e1e1",
        //           color: "#90c31d",
        //           opacity : 0.8
        //         },
        //         //用于修改鼠标移入时地图颜色边框等内容
        //         emphasis: {
        //           areaColor:"#749f83",//修改移入时地图颜色
        //         }
        //     },
        //   ],
        // }
        center: {lng: 0, lat: 0},
        zoom: 3,
        map: null,
        BMap: null
      };
    },
  mounted(){
    this.getCartoDay().then(()=>{
      this.chartOne()
    }),
    this.getStatusChart().then(()=>{
      this.chartTwo()
      this.chartThree()
    })
  },
  computed:{
    ...mapState({
      CartoDayList: state=> state.home.CartoDayList,
      StatusChartList: state=> state.home.StatusChartList,
    })
  },
  methods:{
    ...mapActions({
      getCartoDay:'getCartoDay',
      getStatusChart:'getStatusChart'
    }),
    handler ({BMap, map}) {
      this.map = map
      this.BMap = BMap
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },

    // 图一
    chartOne(){
      // console.log('dsadasd',this.CartoDayList)
      const pie1 = this.$refs.pieChartone
      var myPie1 = this.$echarts.init(pie1) 
      const option = {
        legend: {
          orient: "vertical",
          icon :'circle',
          left: "right",
          top:'middle',
          data: ["占用", "空闲", "异常"],

        },
        title:{
          text:'120',
          textAlign:'center',
          textStyle:{
            color:'#fff'
          },
          subtext:'总车位',
          subtextStyle:{
            color:'#fff'

          },
          top:'35%',
          left:'38%'
        },
        grid:{
          left:'left'
        },
        series: [{
          right:40,
          radius: ['60%', '70%'],
          type: "pie",
          data: [
            {
              value: this.CartoDayList.occupy,
              name: "占用",
              // label:{
              //   show:false
              // }
            },
            {
              value: this.CartoDayList.unoccupy,
              name: "空闲",
              label:{
                show:false
              }
            },
            {
              value: this.CartoDayList.abnormal,
              name: "异常",
              label:{
                show:false
              }
            }, 
            
          ],
          label:{
            show:false,
            position:'center',
            fontSize:18,
          }
        }]
      }
      myPie1.setOption(option)
    },
    // 图二
    chartTwo(){
      console.log('dsadasd',this.StatusChartList[0])
      const pie1 = this.$refs.pieCharttwo
      var myPie1 = this.$echarts.init(pie1) 
      const option = {
        legend: {
          orient: "vertical",
          icon :'circle',
          left: "right",
          top:'middle',
          data: ["占用", "空闲", "异常"],

        },
        title:{
          textAlign:'center',
          text:'180',
          textStyle:{
            color:'#fff'
          },
          subtext:'男厕',
          subtextStyle:{

            color:'#fff'

          },
          top:'35%',
          left:'38%'
        },
        grid:{
          left:'left'
        },
        series: [{
          right:40,
          radius: ['60%', '70%'],
          type: "pie",
          data: [
            {
              value: this.StatusChartList[0].value,
              name: "占用",
              // label:{
              //   show:false
              // }
            },
            {
              value: this.StatusChartList[1].value,
              name: "空闲",
              label:{
                show:false
              }
            },
            {
              value: '',
              name: "异常",
              label:{
                show:false
              }
            }, 
            
          ],
          label:{
            show:false,
            position:'center',
            fontSize:18,
          }
        }]
      }
      myPie1.setOption(option)
    },
    // 图三
    chartThree(){
      console.log('dsadasd',this.StatusChartList[0])
      const pie1 = this.$refs.pieChartthree
      var myPie1 = this.$echarts.init(pie1) 
      const option = {
        legend: {
          orient: "vertical",
          icon :'circle',
          left: "right",
          top:'middle',
          data: ["占用", "空闲", "异常"],

        },
        title:{
          textAlign:'center',
          text:'180',
          textStyle:{
            color:'#fff'
          },
          subtext:'女厕',
          subtextStyle:{

            color:'#fff'

          },
          top:'35%',
          left:'38%'
        },
        grid:{
          left:'left'
        },
        series: [{
          right:40,
          radius: ['60%', '70%'],
          type: "pie",
          data: [
            {
              value: this.StatusChartList[0].value,
              name: "占用",
              // label:{
              //   show:false
              // }
            },
            {
              value: this.StatusChartList[1].value,
              name: "空闲",
              label:{
                show:false
              }
            },
            {
              value: '',
              name: "异常",
              label:{
                show:false
              }
            }, 
            
          ],
          label:{
            show:false,
            position:'center',
            fontSize:18,
          }
        }]
      }
      myPie1.setOption(option)
    }
  }
}
</script >
<style lang="less" scoped>
  .container{
    position: relative;

    .pieContainer{
      width: 90%;
      height: 150px;
      // background: pink;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: 15px;
      display: flex;
      justify-content: space-around;
      .pieChart{
        width: 30%;
        // background: grey;
      }
    }
  }
</style>
