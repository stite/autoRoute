<template>
  <div class="index">
    <div class="banner">
      <img src="../assets/img/banner.jpg" alt="">
    </div>
    <div class="finance-list">
      <ul>
        <li>
          <span class="iconfont icon-lirun"></span>
          利润情况
        </li>
        <li>
          <span class="iconfont icon-pay-taxes" style="color:#da0a25"></span>
          纳税情况
        </li>
        <li>
          <span class="iconfont icon-lirunbiao1" style="color:#cd9221"></span>
          利润情况
        </li>
        <li>
          <span class="iconfont icon-zijin" style="color:#8ada52"></span>
          资金情况
        </li>
        <li>
          <span class="iconfont icon-fuzhai"></span>
          资产负债表情况
        </li>
        <li>
          <span class="iconfont icon-lirunbiao" style="color:#8ada52"></span>
          利润表
        </li>
        <li>
          <span class="iconfont icon-lirunbiao"></span>
          利润表季报
        </li>
      </ul>
    </div>
    <footer-tab cur="2"></footer-tab>
  </div>
</template>
<script>
import footerTab from "../components/footerTab";

export default {
  name:'me',
  created() {
    document.title = '财税状况'
  },
  components:{
    footerTab
  }
}
</script>
<style lang="less" scoped>
@import url('../assets/css/public.less');
.banner{
  width: 100%;
  img{
    width: 100%;
  }
}
.finance-list{
  width: 100%; background: #fff; margin-top: 10px;
  ul{
    width: 100%; display: flex; padding: 10px 0; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;
    li{
      width: 33.333%; flex-direction: column; padding: 10px 0; border-bottom: 1px solid #f8f8f8; display: flex; font-size: 14px; line-height: 35px;
      span{
        font-size: 28px; color: @blue;
      }
    }
    li:last-child{
      border-bottom: none;
    }
  }
}
</style>