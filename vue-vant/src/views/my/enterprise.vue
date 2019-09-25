<template>
  <div class="me">
    <h3 class="e-title">基本信息</h3>
    <div class="me-list">
      <dl>
        <dt>企业演示账号</dt>
        <dd>企业名称</dd>
      </dl>
      <dl>
        <dt>张小龙</dt>
        <dd>法人</dd>
      </dl>
      <dl>
        <dt>一般纳税人</dt>
        <dd>（国税）纳税人认定类型</dd>
      </dl>
      <dl>
        <dt>广东省，广州省，天河区</dt>
        <dd>公司地址</dd>
      </dl>
      <dl>
        <dt>15013378107</dt>
        <dd>电话</dd>
      </dl>
      <dl>
        <dt>工商银行</dt>
        <dd>开户银行</dd>
      </dl>
      <dl>
        <dt>42827192358273127394727293</dt>
        <dd>银行卡号</dd>
      </dl>
    </div>
  </div>
</template>
<script>

export default {
  name:'me-enterprise',
  created() {
    document.title = '企业信息'
  },
  components:{
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/css/public.less');

.e-title{
  color: @blue; font-size: 16px; line-height: 45px; padding: 0 10px;
}
.me-list{
  width:100%; background: #fff;
  dl{
    padding: 10px; border-bottom: 1px solid #dfdfdf; line-height: 28px;
    dt{
      font-size: 16px; color: #333; font-weight: 500;
    }
    dd{
      font-size: 12px; color: #666;
    }
  }
}
</style>