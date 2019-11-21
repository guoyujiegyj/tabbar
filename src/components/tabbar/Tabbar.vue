<!--tabbar组件-->
<template>
  <div class="tabbar_box">
      <slot></slot>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {
   
  }
}
</script>

<style lang='less' scoped>
.tabbar_box{
  display: flex;
  height:49px;
  position:absolute;
  left:0;
  right:0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(#000 ,.2);
}

</style>