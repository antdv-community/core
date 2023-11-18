<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://raw.githubusercontent.com/antdv-community/.github/d30d2a8816e98676d96fcde1d0084a819f67f698/profile/logo.svg">
  </a>
</p>

<h1 align="center">antdv-plugins/core</h1>

<div align="center">

一个扩展AntDesignVue功能的组件库。

</div>

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 Vue 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 应用开发框架和设计工具配套。
- 🌍 数十个国际化语言支持。
- 🎨 基于 CSS-in-JS 的主题定制能力。

## 🖥 兼容环境

- 现代浏览器。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm install @antdv-plugins/core
```

```bash
yarn add @antdv-plugins/core
```

```bash
pnpm add @antdv-plugins/core
```

## 🔨 示例

```jsx
<script setup>
import { ref } from 'vue';
import { ApIconPicker } from '@antdv-plugins/core';

const pickerValue = ref(null)
</script>

<template>
  <div style="width: 50%">
    <ApIconPicker v-model:value="pickerValue" />
  </div>
</template>
```

## ⌨️ 本地开发

你可以克隆到本地开发:

```bash
git clone https://github.com/antdv-community/core.git
cd core
npm install
npm run dev
```

打开浏览器访问 <http://127.0.0.1:4001>。

## 🤝 参与共建

我们非常欢迎任何形式的参与，欢迎提交 [issue](https://github.com/antdv-community/core/issues) 或者提交 [PR](https://github.com/antdv-community/core/pulls)。

### Git 贡献提交规范

#### 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中

感谢以下的贡献者：

<a href="https://github.com/antdv-community/core/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=antdv-community/core&max=100&columns=15" />
</a>

## 👥 社区互助

如果您在使用的过程中碰到问题，可以通过以下途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 GitHub [issue](https://github.com/antdv-community/core/issues) 反馈给我们  
通过 GitHub Discussions 提问时，建议使用 `Q&A` 标签。
