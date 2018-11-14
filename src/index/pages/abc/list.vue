<template>
  <div>
    <h2>这是index  > list</h2>
    <p @click="jump"> 跳转到product</p>
  </div>
</template>
<style lang="less">
  h2{
    color: red;
  }
</style>
<script>
export default {
  name: 'list',
  methods: {
   jump(){
     console.log(789);
     this.$router.push({
        path: '/product',
        query: this.query,
    });
   }
  }
}
</script>
