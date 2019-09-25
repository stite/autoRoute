<template>
  <div class="me">
    <div class="me-banner">
      <img src="../assets/img/banner3.jpg" alt="">
      <!-- <img src="../assets/img/banner2.jpg" alt=""> -->
    </div>
    <div class="me-list">
      <ul>
        <li @click="jump('my/index')">
          <span class="iconfont icon-ziyuan" style="color:#da0a25"></span>
          个人资料
        </li>
        <li @click="jump('my/enterprise')">
          <span class="iconfont icon-qiyexinxi" style="color:#cd9221"></span>
          企业信息
        </li>
        <li @click="jump('service')">
          <span class="iconfont icon-kefu" style="color:#8ada52"></span>
          客服
        </li>
        <li @click="jump('my/set')">
          <span class="iconfont icon-shezhi"></span>
          设置
        </li>
      </ul>
    </div>
    <footer-tab cur="3"></footer-tab>
  </div>
</template>
<script>
import footerTab from "../components/footerTab";
import { Dialog,Button } from 'vant';
export default {
  name:'me',
  components:{
    footerTab,
    [Button.name]: Button,
  },
  created() {
    document.title = '我的'
    
  },
  methods: {
    jump(path){
      if(path == 'service'){
        Dialog.alert({
          title: '电话',
          message: '040-666666'
        }).then(() => {
          // on close
        });
      } else {
        this.$router.push({
          path
        })
      }
    }
  }

}
</script>
<style lang="less" scoped>
.me-banner{
  width: 100%;
  img{
    width: 100%;
  }
}
.me-list{
  width:100%; background: #fff; margin-top: 15px;
  ul{
    width: 100%; display: flex; flex-direction: column; line-height: 40px; align-items: flex-start;
    li{
      padding: 0 10px; width: 100%; box-sizing: border-box; position: relative; text-align: left; font-size: 14px;
      &:after{
        content:''; border-bottom: 1px solid #f5f5f5; position: absolute; left:
        40px; bottom:0px; right: 0;
      }
      span{
        font-size: 20px; padding-right: 10px;
      }
    }
  }
}
</style>