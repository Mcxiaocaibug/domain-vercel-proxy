# Domain Vercel Proxy

这是一个基于 Vercel 的轻量级反向代理服务，专为解决跨域资源共享 (CORS) 问题和提供稳定的 API 访问入口而设计。

核心功能是将所有流量无缝转发至后端服务：`https://many-tammy-neptunium-95b946c4.koyeb.app`。

## ✨ 特性

-   🚀 **高性能代理**: 利用 Vercel 的全球边缘网络进行请求分发。
-   🔓 **CORS 全开**: 自动处理跨域请求头，允许任意源访问 API。
-   🚫 **零缓存设计**: 强制禁用缓存 (`Cache-Control: no-store`)，确保获取的数据永远是最新的。
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

所有路径参数和查询参数都会被透传。

## ⚙️ 配置说明

核心配置位于 `vercel.json` 文件中：

-   **Rewrites**: 所有请求 (`/(.*)`) 都会被重写并转发到目标后端。
-   **Headers**:
    -   `Access-Control-Allow-Origin: *`
    -   `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate` (防止动态内容被缓存)

## 📦 部署

您可以直接 Fork 本仓库到您的 GitHub，然后在 Vercel 中导入即可自动部署。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMcxiaocaibug%2Fdomain-vercel-proxy)

## 📝 许可证

MIT License