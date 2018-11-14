<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    入口二 > app.vue2
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app2',
  data(){
    return {
      abc:123,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
