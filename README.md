![NEI](/docs/logo.png)

专业的研发团队协作平台。免费使用的线上版本：[https://nei.netease.com](https://nei.netease.com)。

- [部署方式](#部署方式)
- [注意事项](#注意事项)
- [本地开发](#本地开发)
- [文档教程](#文档教程)

## 部署方式

### 部署方式一：Docker 部署

因为有服务依赖，所以需要做容器编排，如果你使用的是 [docker-compose](https://docs.docker.com/compose/)，可以直接通过 `docker-compose up -d` 部署，默认服务运行在本地 `8082` 端口，你也可以加入 [Caddy](https://caddyserver.com/) 或者 [Nginx](https://www.nginx.com/) 编排用于实际生产环境。

### 部署方式二：普通部署

#### 安装服务器软件

- [Node.js](https://nodejs.org/en/) `>=6.9.2`。
> 如果安装完 Node.js 后，没有自动安装 [NPM](https://www.npmjs.com/get-npm)，则需要手动安装。
- [Redis](https://redis.io/) `>=2.8`。
- [MySQL](https://www.mysql.com/) `>=5.7.12`，初始化脚本为 [install.sql](./docs/install.sql)。
- [MongoDB](https://www.mongodb.com/) `>=3.4`。

#### 安装依赖和构建代码
在项目根目录依次执行下述命令，并确保没有错误发生：

- `npm install nej -g`
- `npm install`
- `npm run build`

上述过程一般都是自动化执行的，请结合你们公司的部署平台编写自动化脚本。

> 注意，`npm install` 的速度可能比较慢，可以使用淘宝源，比如 `npm install --registry=https://registry.npm.taobao.org`。

#### 启动应用
**部署前，请确认应用的配置是否都填写正确**，比如数据库的连接配置等。配置文件都放在 `server/config` 目录下面，其中 `develop.js`、`test.js`和`online.js` 分别为`本地环境`、`测试环境`、`线上环境`的配置文件。配置文件中的参数含义应该比较清晰直白，这里就不再展开介绍。然后，运行下述命令可启动应用：

```shell
 npm start
```

默认情况下，应用会运行在 `8082` 端口上，所以如果想将应用绑定到特定域名，一般需要 [Nginx](https://www.nginx.com/) 服务器，[参考配置](./docs/sample.nginx.conf)。

#### 停止应用
```shell
 npm stop
```

## 注意事项
- NEI 没有提供恢复已被删资源的功能，根据实际经验，会存在不小心删除接口、数据模型等情形，一旦发生损失就会很严重。建议给重要的数据库表（比如 `interface`、`datatype`、`parameter`等）添加删除操作的触发器，将删除的数据写入备份数据库，保证在误删除操作时可以找回数据。
- 为了安全，请给所有可以设置密码的软件添加密码，比如 Redis 等。
- 考虑到研发成本，NEI 只兼容 Chrome 浏览器。
- 由于打包工具的限制，NEI 的前端 JavaScript 不支持绝大多数的 ES6 语法，不然会构建失败。
- 部署时很有可能会遇到各种各样的环境问题，最好是让专业的运维人员来操作。
- 如果是可以复现的问题，很可能会被很多人遇到，所以优先推荐在 [issues](https://github.com/x-orpheus/nei/issues) 中进行搜索是否有相同问题。

## 本地开发
NEI 的前端使用的是 [NEJ](https://github.com/genify/nej) 和 [Regularjs](https://github.com/regularjs/regular)，后端使用的是 [Koa 框架](https://koajs.com/)。如果想对项目进行改造，需要学习上述技术。

首次运行需要先安装依赖：

```shell
npm install
```

运行下面的命令可以启动本地开发：

```shell
npm run dev
```

## 文档教程
- [视频教程](https://nei.netease.com/tutorial)
- [使用文档](https://github.com/x-orpheus/nei-toolkit/blob/master/doc/NEI基本概念介绍.md)
