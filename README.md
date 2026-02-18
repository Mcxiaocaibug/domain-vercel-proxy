# Domain Vercel Proxy

这是一个基于 Vercel Serverless Function 的高性能反向代理服务，专为解决跨域资源共享 (CORS) 问题和 WebSocket 连接问题而设计。

核心功能是将所有流量（包括 HTTP 和 WebSocket）无缝转发至后端服务：`https://many-tammy-neptunium-95b946c4.koyeb.app`。

## ✨ 特性

-   🚀 **全功能代理**: 使用 `http-proxy-middleware` 实现，支持 HTTP、HTTPS 和 WebSocket 协议。
-   🔓 **CORS 全开**: 自动处理跨域请求头。
-   🚫 **零缓存设计**: 强制禁用缓存 (`Cache-Control: no-store`)，确保动态内容（如探针状态）实时更新。
-   ⚡ **简单易用**: 零配置，一键部署即可使用。

## 🛠️ 使用指南

部署完成后，使用您的 Vercel 域名替换原始 API 地址即可。

**原始请求示例：**

```
GET https://many-tammy-neptunium-95b946c4.koyeb.app/api/v1/resource
```

**代理请求示例：**

```
GET https://your-project.vercel.app/api/v1/resource
```

所有路径参数、查询参数和 WebSocket 连接 (`ws://` / `wss://`) 都会被自动透传。

## ⚙️ 架构说明

本项目不再使用简单的 `vercel.json` 重写规则，而是使用 Vercel Serverless Function (`api/index.js`) 进行流量转发，以获得更好的协议支持和控制能力。

-   **依赖**: `http-proxy-middleware`
-   **入口**: `api/index.js` Handles all requests via `vercel.json` rewrite.

## 📦 部署

您可以直接 Fork 本仓库到您的 GitHub，然后在 Vercel 中导入即可自动部署。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMcxiaocaibug%2Fdomain-vercel-proxy)

## 📝 许可证

MIT License