# FoxF React

一个基于 Tauri + React 的跨平台应用程序。

## 功能特性

- 🚀 使用 Tauri 2.0 构建，支持桌面端和移动端
- ⚡️ React 18 + TypeScript 开发
- 📱 支持 Android 深度链接
- 🎨 现代化 UI 设计

## 开发环境要求

- Node.js 16+
- Rust 1.70+
- Android Studio (用于 Android 开发)
- Java Development Kit (JDK) 17+

## 快速开始

1. 克隆项目
bash
git clone https://github.com/756066377/FoxF_React.git
cd FoxF_React

2. 安装依赖
bash
安装 Node.js 依赖
npm install
安装 Rust 依赖
cd src-tauri
cargo build

3. 开发运行
bash
开发模式
npm run tauri dev
Android 开发
npm run tauri android dev

## 项目结构
FoxF_React/
├── src/ # React 源代码
│ ├── pages/ # 页面组件
│ ├── styles/ # 样式文件
│ └── components/ # 通用组件
├── src-tauri/ # Tauri 后端代码
│ ├── gen/ # 生成的平台特定代码
│ └── src/ # Rust 源代码
└── public/ # 静态资源

## 构建部署
bash
桌面端构建
npm run tauri build
Android 构建
npm run tauri android build

## 技术栈

- [Tauri](https://tauri.app/) - 跨平台框架
- [React](https://react.dev/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Rust](https://www.rust-lang.org/) - 后端语言

## 贡献指南

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT License](LICENSE)