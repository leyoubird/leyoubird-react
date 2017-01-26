# leyoubird-react

乐游鸟官网2.0版本前端项目，上一版本用在微信公众号上。无架构，无组织。[线上地址(mobile only)](http://www.leyoubird.com)


该版本是乐游鸟2.0的前端项目，它主要针对PC前端的官网首页。

## tech points

- React
- Webpack
- React-redux
- Sass
- Grunt

## how to start?

- 首先您必须安装Node和Npm，详情的安装方法请[看这里](https://nodejs.org/zh-cn/)
- `git clone git@github.com:leyoubird/leyoubird-react.git`
- 进入项目根目录执行`npm install`
- 本地开发请执行`grunt dev` *常用*
- 创建线上版本请执行`grunt build` *常用*

您可以在项目根目录执行`grunt`，grunt会返回所有可用的指令。

**注意，项目的build目录是开发和发布的共用目录，它在调试和开发时，会清空build目录，因此，请您在获取上线版本时，务必重新执行`grunt build`以保证重新打包。**

## others

- url中：/api/*下是请求接口路径。它设置了代理

## About us

乐游鸟是一个专业提供泰国定制旅行的旅游项目供应商，它提供优质的泰国当地旅行资源。

成员：

- [陈晓](https://github.com/Tylerrchen) PM/PO
- [王鸫民](https://github.com/wangdming) BE
- [马驰](https://github.com/echoloyuk) FE

## License

ISC