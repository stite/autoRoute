<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
@import url('./assets/css/reset.less');
html,body{
  background: #f8f8f8;
  height: 100%; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  font-size: 12px;
  line-height: 25px;
}

</style>
