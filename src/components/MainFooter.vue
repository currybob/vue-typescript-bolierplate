<template>
  <el-footer>
    footer
  </el-footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class MainFooter extends Vue {
  @Mutation('changeLogin') changeLogin: any;
}
</script>

<style lang="scss">
</style>
