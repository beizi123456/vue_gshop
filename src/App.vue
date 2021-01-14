<template>
    <!--
      分为两个部分：
      一：路由
      二：导航
  -->
    <div class="App">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter" />
    </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
    components: {
        FooterGuide
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixins.styl'
.app
    width 100%
    height 100%
    background #f5f5f5
    a
    text-decoration:none
</style>
