# 🚀 QuickStart-Vue3

`QuickStart-Vue3` 结合了 `Vue3+Vite2+TypeScript+Pinia` 等 Vue 技术栈，简单轻便，**开箱即用**。

## 特点

- 🚀 基于 `Vue3+Vite2+TypeScript+Pinia`
- 🔰  配套脚手架工具 [yesmore/QuickStart-Vue3-CLI](https://github.com/yesmore/QuickStart-Vue3-CLI)
- 🌈 支持代码格式化 `ESLint + Prettier`
- 🔥 支持 `Pinia` 状态管理（附 [Pinia 购物车](https://github.com/yesmore/pre-interview/tree/main/practices/vue3/pinia-vue3)案例）
- 🔨 支持 [husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged) 自动化代码规范
- 💘 支持`axios(ts)`（已封装）
- 😎 内置 `SCSS`
- ✨ 依赖 `naive-ui`（可自行更换）



## 快速开始



### 环境准备

- Vscode 编辑器
- Chrome 浏览器
- Nodejs ^12.x & npm/yarn：本地开发环境
- Vue Language Features (Volar) ：Vue3 必备插件
- Vue 3 Snippets：代码提示插件

### 使用 `qsvc` 脚手架快速开始（推荐）

 `QuickStart-Vue3` 配套**轻量**脚手架工具 [QuickStart-Vue3-CLI](https://github.com/yesmore/QuickStart-Vue3-CLI) （以下简称 `qsvc`），可以帮您更加快速启动一个 Vue3 项目，目前 `qsvc` 仅支持该仓库模板使用，后期会考虑增加其他功能，但就现在来说，此 CLI 工具应对 `Vue3+Vite2+TypeScript+Pinia` 技术栈绰绰有余。

#### 1.安装脚手架

```shell
$ npm i -g quickstart-vue3-cli
```

#### 2.创建一个Vue3项目

```shell
$ qsvc create vue3-demo
```

> 执行此步骤后，脚手架会自动拉取 `QuickStart-Vue3` 仓库中main分支代码，并自动安装所需依赖（执行 `yarn` 命令），请确保您安装了yarn工具包（`npm i -g yarn`），安装完成后，项目将自动打开浏览器，并运行在 http://localhost:8000/.

`qsvc`  **可通过终端命令快速创建项目的page、component、store-modules**，详细使用方法请查看 [QuickStart-Vue3-CLI 开发文档](https://github.com/yesmore/QuickStart-Vue3-CLI) 



### 使用手动下载项目

#### 1.克隆项目

```shell
$ git clone https://github.com/yesmore/QuickStart-Vue3.git
```

#### 2.本地调试

```shell
$ cd QuickStart-Vue3

# 安装依赖
$ yarn
# 启动
$ yarn dev
```



## 常用命令

#### 代码格式化

运行以下 `命令 ` 测试下代码检查 `格式化` 效果:

```shell
# eslint 检查
$ yarn lint

# prettier 自动格式化
$ yarn prettier
```

#### 提交代码到本地仓库

执行 `git commit` 操作，会**自动执行代码格式化**：

```shell
$ git add .
$ git commit -m 'test'
```

#### 项目打包

```shell
# 开发环境
$ yarn build:dev

# 生产环境
$ yarn build:pro
```

更多命令请查看：[package.json](https://github.com/yesmore/QuickStart-Vue3/blob/main/package.json)

## 详细配置

关于如何搭建此模板，请查看 [QuickStart](https://github.com/yesmore/QuickStart-Vue3/blob/main/QuickStart.md)。

## License

[GPL](https://github.com/yesmore/QuickStart-Vue3/blob/main/LICENSE)
