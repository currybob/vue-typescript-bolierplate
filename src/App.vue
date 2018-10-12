<template>
  <el-container id="app" direction="vertical">
    <MainNav />
    <router-view/>
    <MainFooter />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MainNav, MainFooter } from '@/components';

@Component({
  components: {
    MainNav,
    MainFooter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}

#app {
  font-family: 'Noto Sans KR', sans-serif;
  height: 100%;
}
</style>
