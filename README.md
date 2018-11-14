# vue-3.0

## 初始化项目
```
npm install
```

### 编译及开发
```
npm run serve
```

### 打包生产
```
npm run build
```

### 查询修复语法错误
```
npm run lint
```

## 目录结构
```
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico             //  url地址栏图标
│   ├── index.html              //  所有模块公共页面入口
│   └── js                      //  webpack新增loader及修改vue打包配置文件存放
│       ├── layout.js
│       └── loader.js
├── src
│   ├── about                   // 模块一
│   │   ├── assets                // 模块的图片、js、css等静态资源
│   │   ├── components            // 模块组件
│   │   ├── index.js              // 入口js
│   │   ├── layouts               // 模块的布局页，（原vue的App.vue）在不同的路由可设置不同的布局页
│   │   ├── pages                 // 模块的页面，路由指向这里，根据页面名称生成自动路由
│   │   └── router                // 路由入口，自动根据pages目录生成路由（不需要改动）
│   ├── index                   // 模块二
│   │   ├── assets
│   │   ├── components
│   │   ├── index.js
│   │   ├── layouts
│   │   ├── pages
│   │   └── router
│   └── product                 // 模块三
│       ├── assets
│       ├── components
│       ├── index.js
│       ├── layouts
│       ├── pages
│       └── router
└── vue.config.js              // vue开发、编辑、打包、配置选项
```

## 自动路由
参考nuxtjs，提供编译时分析pages目录中的vue文件自动生成路由功能，具体请参考 [https://zh.nuxtjs.org/guide/routing]（https://zh.nuxtjs.org/guide/routing)

所以你只需要往pages目录中添加相应的vue页面即可，路由会按照规则自动产生，建议pages中按照功能再划分目录

## 多布局管理
一个项目可能存在多个布局，比如登录页和主页面的布局就不一样，为了解决SPA应用的多布局问题，建议采用layouts目录写入多个布局，注意布局组件需要命名，并且在你的视图组件中

通过如下片段设置路由的布局等信息
```
<!-- layout/app2.vue -->
<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    入口二 > app.vue2
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app2',
}
</script>
```
```
<!-- pages/list.vue -->
export default   {
  name: 'list',
  meta:{
    title: '延保服务购买协议',
    layout: 'app2'
  }
}
```
meta的laoyout布局名称需要和layouts目录中组件的name一致

## 环境变量

* development 模式用于 vue-cli-service serve
* production 模式用于 vue-cli-service build

### 客户端使用

```
console.log(process.env)
```

##

