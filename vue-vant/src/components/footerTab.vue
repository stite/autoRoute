<template>
  <div class="footer-tab">
    <ul>
      <li @click="jump('index')" :class="cur == '1' ? 'cur'  : ''">
        <span class="iconfont icon-huiyuanfuli"></span>
        会员福利
      </li>
      <li @click="jump('finance')" :class="cur == '2' ? 'cur'  : ''">
        <span class="iconfont icon-lirun"></span>
        财税状况
      </li>
      <li @click="jump('me')" :class="cur == '3' ? 'cur'  : ''">
        <span class="iconfont icon-ziyuan"></span>
        我的
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    cur:{
      type:String,
      default:'1'
    }
  },
  methods:{
    jump(url){
      this.$router.push({
        path:url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url('../assets/css/public.less');
.footer-tab{
  width: 100%; height: 46px; overflow: hidden; position: fixed; left:0; bottom: 0; border-top: 1px solid #dfdfdf; background: #fff;
  ul{
    width: 100%; display: flex; flex-direction: row; justify-content: space-around; line-height: 20px; font-size: 12px; color: #333; padding: 3px 0;
    li{
      display: flex; flex-direction: column;
      span{
        font-size: 18px;
      }
    }
    .cur{
      color: @blue;
    }
  }
}
</style>
