<template>
  <div class="me">
    <h3 class="e-title">设置手机号</h3>
    <div class="me-list">
      <ul>
        <li>
          <span>手机</span>
          <p><van-field v-model="value" placeholder="请输入用户名" /></p>
        </li>
      </ul>
      <p><van-button type="primary" style="width:90%;">提交</van-button></p>
    </div>
  </div>
</template>
<script>
import { Field,Button } from 'vant';
export default {
  name:'me-set',
  created() {
    document.title = '设置'
  },
  data(){
    return {
      value:''
    }
  },
  components:{
    [Field.name]:Field,
    [Button.name]:Button
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/css/public.less');
.e-title{
  color: @blue; font-size: 16px; line-height: 45px; padding: 0 10px;
}
.me{
  height: 100%; position: absolute; left: 0; bottom: 0; width: 100%;
}
.me-list{
  width:100%; background: #fff;
  ul{
    width: 100%; display: flex; flex-direction: column; align-items: flex-start; border-bottom: 1px solid #dfdfdf;
    li{
      padding: 0 10px; width: 100%; border-bottom: 1px solid #f8f8f8; color: #333; box-sizing: border-box; position: relative; text-align: left; font-size: 16px; display: flex; flex-direction: row; justify-content: space-around; line-height: 35px;
      span{
        width: 60px; line-height: 45px;
      }
      p{
        color: #999; flex-grow: 1;
      }
    }
  }
  > p{
    text-align: center; width: 100%; position: absolute; bottom: 0; padding: 20px 10px 10px 10px;
  }
}
</style>