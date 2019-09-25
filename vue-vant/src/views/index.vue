<template>
  <div class="index">
    <div class="list">
      <ul>
        <li>
          <img src="https://cmsqn-staging.infinitus.com.cn/upload/resources/image/2019/09/16/55846.jpg" alt="">
          <p>21世纪海上丝绸之路”的简称，2013年9月和10月由中国国</p>
        </li>
        <li>
          <img src="https://cmsqn-staging.infinitus.com.cn/upload/resources/image/2019/09/16/55851.png" alt="">
          <p>分别提出建设“新丝绸之路经济带”和“21世纪海上丝绸之路”的合作倡议。依靠中国与有关国家既有的双多边机制，借</p>
        </li>
        <li>
          <img src="https://cmsqn-staging.infinitus.com.cn/upload/resources/image/2019/09/16/55845.jpg" alt="">
          <p>分别提出建设“新丝绸之路经济带”和“21世纪海上丝绸之路”的合作倡议。依靠中国与有关国家既有的双多边机制，借</p>
        </li>
        <li>
          <img src="https://cmsqn-staging.infinitus.com.cn/upload/resources/image/2019/09/16/55851.png" alt="">
          <p>分别提出建设“新丝绸之路经济带”和“21世纪海上丝绸之路”的合作倡议。依靠中国与有关国家既有的双多边机制，借</p>
        </li>
      </ul>
    </div>
    <footer-tab cur="1"></footer-tab>
  </div>
</template>
<script>
import footerTab from "../components/footerTab";

export default {
  name:'index',
  components:{
    footerTab
  },
  created() {
    document.title = '会员福利'
  }
}
</script>
<style lang="less" scoped>
.list{
  width: 100%; overflow: hidden; padding-bottom: 47px;
  li{
    padding-bottom: 20px; overflow: hidden;
    img{
      width: 100%;
    }
    p{
      line-height: 20px; height: 40px; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; padding: 0 10px;
    }
  }
}
</style>