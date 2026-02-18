# Vercel Proxy for Google Generative AI API

这是一个使用Vercel部署的代理服务，用于访问Google的生成式AI API（Gemini等）。

## 功能特点

- 转发所有请求到 `https://many-tammy-neptunium-95b946c4.koyeb.app`
- 自动添加CORS相关的响应头以支持跨域请求
- 简单轻量，易于部署和维护

## 部署方法

1. Fork本仓库或克隆到本地
2. 使用Vercel CLI部署，或者连接到Vercel平台进行自动部署
3. 部署完成后，使用分配的Vercel域名即可访问API

## 使用方法

部署成功后，只需将原本指向`https://generativelanguage.googleapis.com/`的请求改为指向您的Vercel域名即可。

例如：
```
// 原API地址
https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

// 更改为
https://your-vercel-app.vercel.app/v1beta/models/gemini-pro:generateContent
```

## 配置说明

`vercel.json`文件包含以下配置：

- `rewrites`: 将所有请求重写并转发到 `https://many-tammy-neptunium-95b946c4.koyeb.app`
- `headers`: 添加CORS相关头信息以支持跨域请求

## 注意事项

- 此代理仅转发请求，您仍需要有效的API密钥才能调用Google的API
- 仅用于开发和学习目的，请遵守Google API使用条款
- 个人或企业生产环境建议直接对接官方API

## 许可证

MIT