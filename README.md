# 🚀 QuickStart-Vue3

`QuickStart-Vue3` 结合了 `Vue3+Vite2+TypeScript+Pinia` 等 Vue 技术栈，简单轻便，**开箱即用**。

## 特点

- 🚀 基于 `Vue3+Vite2+TypeScript+Pinia`
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

### 常用命令

#### 克隆项目

```shell
$ git clone https://github.com/yesmore/QuickStart-Vue3.git
```

#### 本地调试

```shell
$ cd QuickStart-Vue3

# 安装依赖
$ yarn
# 启动
$ yarn dev
```

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

[MIT]()
