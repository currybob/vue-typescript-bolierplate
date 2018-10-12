<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{msgNum}}</p>
    <button @click="changeLogin">Click</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class Sample extends Vue {
  @Prop(String) private msg!: string;

  @Prop(Number) private msgNum!: number;

  @Mutation('changeLogin') changeLogin: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
