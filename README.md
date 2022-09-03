# 云创采购 SAAS 管理平台

## 安装步骤

node 版本需要高于 12.0

```
cd ccreate-new-procurement-cloud-web    // 进入项目目录
npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:8080
npm run dev

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

## 目录结构

#### ├── README.md

#### ├── index.html

#### ├── package.json

#### ├── public #静态文件

#### ├── src

#### │ ├── App.vue #根组件

#### │ ├── api #接口

#### │ ├── assets #资源

#### │ ├── components #组件

#### │ ├── layout #页面布局

#### │ ├── locales #国际化配置

#### │ ├── main.js #项目入口

#### │ ├── permission.js #权限处理，导航守卫

#### │ ├── plugins #插件，包含指令，UI 库等

#### │ ├── router #路由

#### │ ├── store #数据仓库

#### │ ├── utils #工具函数

#### │ └── views #页面

#### │ └── ├── purchase #采购

#### │ └── ├── market #销售

#### │ └── ├── company #公司

#### │ └── ├── shoppingMall #商城

#### │ └── ├── moduleManagement #模块管理

#### │ └──└── ├── fuctionModule #功能模块

#### │ └──└── ├── solutionManagement #解决方案

#### │ └──└── ├── dataDict #数据字典

#### │ └── ├── systemManagement #系统管理

#### │ └──└── ├── organizationalStructure #组织架构

#### │ └──└── ├── roleManagement #角色管理

#### ├── vite.config.ts #vite 项目配置

————————————————

## mitt 插件使用

1、前言：由于 Vue3.x 中删除了 off，因此不能借助于一个单独的 Vue 实例来实现全局事件的发布和订阅与取消订阅（也就是跨组件通讯）。 2、概述：mitt 是一个三方库，npm 安装：npm install -D mitt 3、使用：我们以同样使用插件的方式将 mitt 集成到 Vue 中。 4、mitt 对象： all（Map 对象）：包含了所有订阅的事件名称，及对应的处理方法数组。 emit（方法）：触发事件，参数为（事件名（方法名），携带的参数），当- 前携带的参数只能为一个，不能为多个。 on（方法）：创建事件订阅，参数为（事件名，处理方法）。 off（方法）：取消事件订阅，参数为（事件名，处理方法）。

123