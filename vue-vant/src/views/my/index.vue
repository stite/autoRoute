<template>
  <div class="me">
    <div class="me-list">
      <ul>
        <li>
          <span>姓名</span>
          <p>慧慧</p>
        </li>
        <li>
          <span>邮箱</span>
          <p>cxm66888@163.com</p>
        </li>
        <li>
          <span>手机</span>
          <p>15013378107</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name:'me-index',
  created() {
    document.title = '个人资料'
  },
  components:{
  }
}
</script>
<style lang="less" scoped>
.me-list{
  width:100%; background: #fff;
  ul{
    width: 100%; display: flex; flex-direction: column; line-height: 40px; align-items: flex-start;
    li{
      padding: 0 10px; width: 100%; border-bottom: 1px solid #f8f8f8; color: #333; box-sizing: border-box; position: relative; text-align: left; font-size: 16px;
      span{
        width: 60px; float: left;
      }
      p{
        color: #999;
      }
    }
  }
}
</style>