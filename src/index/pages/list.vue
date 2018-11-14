<template>
  <div>
    <h2>这是index  > list</h2>
    <p @click="jump"> 跳转到product</p>
  </div>
</template>
<style>
  h2{
    color: red;
  }
</style>
<routeMeta>
  {
  title: '延保服务购买协议',
  layout: 'app2'
  }
</routeMeta>
<script>
export default   {
  name: 'list',
  methods: {
   jump(){
     console.log(this);
     this.$router.push({
        path: '/product',
        query: this.query,
    });
   }
  }
}
</script>
