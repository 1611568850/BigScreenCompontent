<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App',
  mounted() {
    //窗口尺寸改变
    window.onresize = () => {
      return (() => {
        // this.$forceUpdate();//强制更新数据
        this.$router.go(0);
      })();
    };
  },
  methods: {},
  destroyed() {
    // 销毁
    window.onresize = null;
  },
}
</script>
<style lang="less"  >
*{
    ::-webkit-scrollbar {
       /*隐藏滚轮*/
       display: none;
    }
}

</style>