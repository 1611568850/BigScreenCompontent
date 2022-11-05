<template>
  <div class="Titlecontainer">
    <div class="blockitem"></div>
    <slot class="leftTit"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TitleContent'
}
</script >
<style lang="less" scoped>
  .Titlecontainer{
    width: 400px;
    height: 30px;
    margin-bottom: 10px;
    line-height: 30px;
    background: linear-gradient(to right,#72bdda,transparent);
    // background: #000;
    padding-left: 20px;
    display: flex;
    color: #fff;
    align-items: center;
    .blockitem{
      width: 10px;
      height: 20px;
      background: #fff;
      margin-right: 10px;
    }
  }
</style>
