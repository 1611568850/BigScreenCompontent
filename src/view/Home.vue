<template>
  <div class="HomeContainer" ref="Map">
    <baidu-map ref="Map1" class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler"></baidu-map>
    <header class="headTitleContainer">
      <p class="HeaderTitle">黄帝故里数字孪生运营服务平台</p>
    </header>
    <main class="mainContainer">
      <LeftContainer class="LeftContainer"></LeftContainer>
      <MainContainer class="MainContainer"></MainContainer>
      <RightContainer class="RightContainer"></RightContainer>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftContainer from '@/components/LeftContainer.vue'
import MainContainer from '@/components/MainContainer.vue'
import RightContainer from '@/components/RightContainer.vue'


export default {
  name: 'HomePage',
  components:{
    LeftContainer,
    MainContainer,
    RightContainer
  },  
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      map: null,
      BMap: null
    }
	},
  mounted() {
  },
  methods:{
    handler ({BMap, map}) {
      this.map = map
      this.BMap = BMap
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
      this.map.setMapStyleV2({
        styleId:'04f03e83520fc61c6af7e3f6f0272561'
      })
      // 创建点标记
      var marker1 = new BMap.Marker(new BMap.Point(116.404, 39.925));
      var marker2 = new BMap.Marker(new BMap.Point(116.404, 39.915));
      var marker3 = new BMap.Marker(new BMap.Point(116.395, 39.935));
      var marker4 = new BMap.Marker(new BMap.Point(116.415, 39.931));
      var marker5 = new BMap.Marker(new BMap.Point(116.415, 39.911));
      var marker6 = new BMap.Marker(new BMap.Point(116.415, 39.901));
      // 在地图上添加点标记
      map.addOverlay(marker1);
      map.addOverlay(marker2);
      map.addOverlay(marker3);
      map.addOverlay(marker4);
      map.addOverlay(marker5);
      map.addOverlay(marker6);
    },
    
  }
}
</script >

<style lang="less" scoped>
.bm-view{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
.HomeContainer{
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  
  .headTitleContainer{
    position: absolute;
    height: 80px;
    width: 100%;
    z-index: 1;
    background-image: url(../assets/images/top_title.png);
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    background-position: center;
    .HeaderTitle{
      font-size: 35px;
      line-height: 80px;
      letter-spacing: 5px;
      color: #72bdda;
    }
  }
  .mainContainer{
    width: 100%;
    height: 100%;
    // background: pink;
    display: flex;
    .LeftContainer{
      width: 25%;
      height: 100%;
      // background: green;
    }
    .MainContainer{
      width: 50%;
      height: 100%;
      // background: skyblue;

    }
    .RightContainer{
      width: 25%;
      height: 100%;
      // background: yellowgreen;
    }
  }
}
</style>
