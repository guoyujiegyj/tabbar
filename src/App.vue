<template>
  <div id="app">
    <!--tab-bar是组件-->
    <tab-bar>
      <TabbarItem path='/home'>
        <img slot='slot_img' src="./assets/images/home.png" alt="">
        <img slot='slot_img_active' src="./assets/images/home_active.png" alt="">
        <div slot='slot_div'>首页</div>
      </TabbarItem>
      <TabbarItem path='/category'>
        <img slot='slot_img' src="./assets/images/class.png" alt="">
        <img slot='slot_img_active' src="./assets/images/class_active.png" alt="">
        <div slot='slot_div'>分类</div>
      </TabbarItem>
      <TabbarItem path='/cart'>
        <img slot='slot_img' src="./assets/images/shopcart.png" alt="">
        <img slot='slot_img_active' src="./assets/images/shopcart_active.png" alt="">
        <div slot='slot_div'>购物车</div>
      </TabbarItem>
      <TabbarItem path='/mine'>
        <img slot='slot_img' src="./assets/images/mine.png" alt="">
        <img slot='slot_img_active' src="./assets/images/mine_active.png" alt="">
        <div slot='slot_div'>我</div>
      </TabbarItem>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from './components/tabbar/Tabbar.vue'
import TabbarItem from './components/tabbar/TabbarItem.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    TabBar,
    TabbarItem
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
