<template>
  <div>
    <h2>这是index  > product</h2>
    <p @click="jump"> 跳转到list</p>
  </div>
</template>
<style>
  h2{
    color: green;
  }
</style>
<script>
export default {
  name: 'list',
  methods: {
   jump(){
     this.$router.push({
        path: '/list',
        query: {list:1},
    });
    console.log(this);
   }
  }
}
</script>
