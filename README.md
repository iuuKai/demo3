# Vercel External Gateway Monorepo Template

一个基于 Vercel 网关模式的 Monorepo 仓库模板，每个子项目独立部署到不同的 Vercel 实例，通过网关统一入口访问多个前端项目。支持 SSG、SPA、SSR 三种模式。

## 🚀 项目演示

演示地址：待补充

---

## ⚠️ 重要限制声明

> **请在使用前仔细阅读以下限制条件！**

| 限制类型           | 说明                                                             |
| ------------------ | ---------------------------------------------------------------- |
| **部署复杂度高**   | 每个子项目需要独立配置 Vercel 项目，部署步骤较多                 |
| **跨域代理限制**   | 依赖 Vercel rewrites 实现跨域代理，存在 Serverless Function 限制 |
| **仅适合轻量项目** | 个人演示项目、作品集、技术博客、项目原型、学习 Demo              |

### ❌ 不适用场景

- 企业级应用
- 需要频繁添加新项目的场景
- 对部署复杂度敏感的团队
- 高流量网站

### ✅ 适用场景

- 个人作品集展示（多站点聚合）
- 技术博客（Hexo、VuePress 等静态博客）
- 文档站点
- 项目原型演示
- 需要独立部署但统一入口的场景
- SSR 项目（如 Next.js、Nuxt）的多站点管理

---

## ✨ 功能特点

### 核心优势

- **独立部署**：每个子项目独立部署到 Vercel，可单独管理版本和配置
- **统一入口**：通过网关域名统一访问所有子项目
- **灵活模式**：支持 SSG、SPA、SSR 三种部署模式
- **增量部署**：`pnpm-workspace.yaml` 支持 Vercel 构建跳过，更新某个项目不触发全局构建

### 技术特性

- 通过 Vercel rewrites 实现跨域代理
- 每个子项目独立配置 `vercel.json`
- 网关仅负责路由转发，不处理静态资源
- 支持自定义域名和 SSL 证书

---

## 📁 项目结构

```
vercel-external-gateway-monorepo-template/
├── apps/                    # 前端子项目目录
│   ├── express-api/         # Express API 服务器
│   ├── vanilla-spa/         # 原生 JS 单页应用示例
│   ├── vue3-spa/            # Vue 3 单页应用示例
│   ├── react-spa/           # React 单页应用示例
│   ├── webpack-ejs-mpa/     # Webpack + EJS 多页应用示例
│   ├── vuepress-ssg/        # VuePress 文档站点示例
│   ├── vitepress-ssg/       # VitePress 文档站点示例
│   ├── hexo-ssg/            # Hexo 静态博客示例
│   ├── astro-ssg/           # Astro 静态站点示例
│   ├── nuxt4-ssg/           # Nuxt 4 静态站点示例
│   ├── nuxt4-ssr/           # Nuxt 4 SSR 示例
│   ├── next-ssg/            # Next.js 静态站点示例
│   └── next-ssr/            # Next.js SSR 示例
├── gateway/                 # Vercel 网关项目
│   ├── package.json
│   └── vercel.json          # 网关路由配置
├── pnpm-workspace.yaml      # pnpm workspace 配置（用于 Vercel 增量部署）
├── package.json
└── LICENSE
```

---

## 🏗️ 架构说明

### 部署架构

1. **每个子项目**独立创建为 Vercel 项目，部署到各自的域名（如 `gateway-vue3-spa.vercel.app`）
2. **网关项目**部署到主域名（如 `gateway.vercel.app`）
3. **网关**通过 `vercel.json` 的 rewrites 将请求转发到各个子项目

### pnpm-workspace.yaml 的作用

`pnpm-workspace.yaml` 主要用于 **Vercel 增量部署跳过**：

- Vercel 检测到 workspace 配置后，会判断每个子项目目录下的文件是否变更
- 未变更的项目会跳过构建，大幅减少部署时间
- `allowBuilds` 配置用于允许特定原生模块的构建（如 sharp、esbuild 等）

---

## 🛠️ 快速开始

### 环境要求

- Node.js >= 20.x
- pnpm >= 11.x

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/iuuKai/vercel-external-gateway-monorepo-template.git
cd vercel-external-gateway-monorepo-template
```

本地开发时各项目相互独立，只需启动需要的服务：

```bash
# 方式一：使用 pnpm --filter 在根目录操作（推荐）
pnpm --filter express-api dev      # 启动 API 服务
pnpm --filter vue3-spa dev         # 启动 Vue3 子项目
pnpm --filter react-spa dev        # 启动 React 子项目
pnpm --filter next-ssr dev         # 启动 Next.js SSR 项目

# 安装依赖
pnpm --filter vue3-spa install     # 给 Vue3 项目安装依赖
pnpm --filter vue3-spa add axios   # 添加生产依赖
pnpm --filter vue3-spa add -D sass # 添加开发依赖

# 方式二：分别进入各项目目录启动
cd apps/vue3-spa && pnpm dev
cd apps/next-ssr && pnpm dev
```

> 💡 **pnpm --filter 说明**：本项目配置了 `pnpm-workspace.yaml`，pnpm 会识别所有 `apps/` 下的子项目，支持在根目录直接操作任意子项目。

### 部署到 Vercel

#### 步骤 1：部署各子项目

1. 登录 Vercel 控制台
2. 为每个子项目（`apps/xxx`）新建独立的 Vercel 项目
3. 每个项目配置好各自的环境变量和构建命令
4. 记录每个项目的部署域名（如 `gateway-vue3-spa.vercel.app`）

#### 步骤 2：部署网关

1. 在 Vercel 新建网关项目，关联 `gateway/` 目录
2. 在 `gateway/vercel.json` 中配置 rewrites，将路径映射到各子项目：

```json
{
	"rewrites": [
		{
			"source": "/vue3-spa/:path*",
			"destination": "https://gateway-vue3-spa.vercel.app/:path*"
		},
		{
			"source": "/next-ssr/:path*",
			"destination": "https://gateway-next-ssr.vercel.app/:path*"
		}
	]
}
```

3. 部署完成后，所有子项目通过网关域名统一访问

---

## ⚙️ 配置说明

### 子项目 baseURL 配置

每个子项目的 `base` 或 `baseURL` 需与网关的 rewrites 路径匹配：

- 如果网关配置了 `/vue3-spa/:path*` → `https://gateway-vue3-spa.vercel.app/:path*`
- 则 `apps/vue3-spa` 的 base 需配置为 `/vue3-spa/`

### pnpm-workspace.yaml 配置

```yaml
packages:
  - 'gateway'
  - 'apps/*'
allowBuilds:
  '@parcel/watcher': false
  esbuild: false
  hexo-util: false
  sharp: false
```

- `packages`：指定 workspace 包含的目录
- `allowBuilds`：允许特定原生模块的构建，避免 `pnpm approve-builds` 提示

---

## 📖 路由规则

| 路径           | 说明                                 |
| -------------- | ------------------------------------ |
| `/<appName>/*` | 子项目入口（转发到对应 Vercel 实例） |
| `/api/*`       | API 接口路由（转发到 express-api）   |
| `/`            | 网关首页                             |

---

## 💡 优缺点分析

### 优点

- **独立部署**：每个项目独立管理，互不影响
- **灵活模式**：支持 SSG、SPA、SSR 任意组合
- **增量部署**：利用 workspace 实现构建跳过
- **统一入口**：通过网关统一访问，用户体验好

### 缺点

- **部署复杂度高**：每个项目需要单独配置
- **维护成本高**：新增项目需要配置多个地方
- **跨域代理**：依赖 Serverless Function，有冷启动延迟
- **调试困难**：路由问题需要排查多个项目

---

## ⚠️ 注意事项

- 所有子项目必须设置正确的 `baseURL`，否则会出现资源加载失败
- `vercel.json` 的 rewrites 顺序会影响路由匹配，精确规则放在前面
- 跨域请求需要在网关配置中处理
- SSR 项目需要正确配置 Vercel 的 Serverless Function

---

## 📄 License

MIT License

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
