## 技术栈
react + redux + react-router + webpack + ES6/7  + sass + flex

# 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本

npm install


### 编译环境
```
npm run start

访问 http://localhost:3000
```
### 打包发布
```
npm run build

```

# 项目布局

```
.
├── public                                      // 入口文件
│   ├── favicon.ico                             // 图标
│   ├── index.html                              // 入口html文件
├── build                                       // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── assets                                  // 静态资源库
│   │   ├── css                                 // css
│   │   ├── images                              // 图片目录
│   ├── common                                  // 公共目录
│   │   ├── components                          // 公共组件
│   │   ├── api.js                              // fetch配置
│   ├── pages                                   // 组件页面
│   │   ├── router                              // 路由组件配置
│   │   │   └── index.js                        // 路由
│   │   ├── home
│   │   │   └── index.js                        // 首页
│   │   ├── login
│   │   │   └── index.js                        // 登录注册页
│   ├── store                                   // redux状态管理
│   │   ├── index.js                            // store入口文件
│   │   ├── modules                             // store模块
│   │   │   └── index.js                        // 入口
│   │   │   └── common.js                       // 公共状态
│   │   │   └── login.vue                       // 登录注册页
│   └── test
│   ├── index.js                                // 页面入口文件
├── package.json                                // 依赖包
```
