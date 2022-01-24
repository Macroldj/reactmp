React basic template
---
[TOC]

基于现有React技术的工程化封装，为了更加统一标准底层技术的开发相关的app。

# 已添加的组件和功能
```markdown
- [x] 单点登录服务。
- [x] redux 状态管理。
- [x] http 统一的数据处理。
```
# 最佳实践的目录结构
```markdown
-- build                      # webpack配置目录
   |__ webpack.config.base.js # 基础配置
   |__ webpack.config.dev.js  # 开发环境配置 集成webpack-dev-server
   |__ webpack.config.pro.js  # 生产环境配置
   |__ webpack.config.mock.js # mock环境配置
-- mock                       # mock接口目录，mock按照模块划分
   |__ module1
       |__ index.js
   |__ module2
       |__ index.js
-- src                        # 源码目录
   |__ index.js               # 项目入口，注入store, 调用render方法
   |__ App
       |__ index.js           # 应用入口，页面整体布局，处理页面路由
       |__ index.less
   |__ Components
       |__ index.js           # 导出所有组件
       |__ components1        # [组件1]
           |__ index.js       # 组件实现源码文件
           |__ index.less
       |__ components2        # [组件2]
   |__ Pages
       |__ index.js           # 页面通过此文件统一导出（若需要code split，页在此文件完成）
       |__ page1              # [页面1]
           |__ index.js       # 页面具体业务代码
           |__ indes.less
       |__ page2              # [页面2]
   |__ Redux
       |__ index.js           # 导出封装后的所有store
       |__ reduxHelper.js     # redux帮助文件
       |__ request.js         # 封装 Axois，比如所所有的方法进行拦截（inspector）
       |__ module1            # [模块1]store基于具体业务模块来编写，方便多页面调用
           |__ actionTypes.js
           |__ actions.js
           |__ reducers.js
           |__ services.js
       |__ module2            # [模块2]
-- package.json
-- .npmrc
-- .babelrc
-- .eslint
-- .gitignore
-- .editorconfig
```
# 开发环境
```shell
# 1. 运行本地代码
npm start

# 2.构建打包
npm build

# 3. 测试
npm test
```

# 部署环境
```shell
# 1. 构建当前代码
docker-compose build

# 2. 部署镜像
docker-compose up -d --build
```
