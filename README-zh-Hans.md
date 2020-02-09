<p align="center">
  <a href="https://github.com/sixiaodong123/react-loading">
    <img width="200" src="https://github.com/sixiaodong123/react-loading/blob/master/logo.png">
  </a>
</p>

<h1 align="center">一个基于 React 的 Loading 动画组件库</h1>
<div align="center">

[![npm version](https://img.shields.io/npm/v/react-loading)](https://www.npmjs.com/package/react-loadingg) [![](https://img.shields.io/github/license/sixiaodong123/react-loading)](https://github.com/sixiaodong123/react-loading/blob/master/LICENSE) [![](https://img.shields.io/npm/dm/react-loadingg)](https://www.npmjs.com/package/react-loadingg)

[English](https://github.com/sixiaodong123/react-loading) &#124; 简体中文

</div>

## 介绍

`React-Loading`是一个基于 React 的 Loading 动画组件库，拥有许多精致且漂亮的 loading 组件，在你的项目中适当的地方与时刻比如页面局部处于等待异步数据或正在渲染过程时给予加载动效提示，会有效缓解用户的焦虑。本组件库支持按需加载，那么，现在就挑选一个喜欢的 Loading 组件，丰富你的项目吧～

🎉 [查看 demo](http://139.196.82.33:8080/iframe.html?id=demo--demo)

## 快速使用

#### 🛠 安装

```
npm install react-loadingg
```

#### 📦 使用

```
import { BoxLoading } from 'react-loadingg';

<BoxLoading />;
```

## 组件相关

#### 📕 API

| 参数          |  说明        | 类型          | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| color  | 设置颜色，支持16进制与RGB | string  |  '#00adb5' |
| speed  | 设置动画速度  | number(秒)  | - |
| size   | 设置组件大小，可选值为 `small` `default` `large`  | string  |  'default' |
| style  | 设置组件样式  | Object  |  - |

#### 📝 组件列表

| 组件                 | color | speed | size  | style | 
| -------------------- | ----- | ----- | ----- | ----- | 
| BabelLoading         | ✅    | ✅    | ✅   | ✅    |
| BlockLoading         | ✅    | ✅    | ✅   | ✅    | 
| BlockReserveLoading  | ✅    | ✅    | ✅   | ✅    | 
| BoxLoading           | ✅    | ✅    | ✅   | ✅    | 
| CircleLoading        | ✅    | ✅    | ✅   | ✅    | 
| CircleToBlockLoading | ✅    | ✅    | ✅   | ✅    | 
| CommonLoading        | ✅    | ✅    | ✅   | ✅    | 
| DisappearedLoading   | ✅    | ✅    | ✅   | ✅    | 
| LoopCircleLoading    | ✅    | ✅    | ✅   | ✅    | 
| NineCellLoading      | ✅    | ✅    | ✅   | ✅    | 
| TouchBallLoading     | ✅    | ✅    | ✅   | ✅    | 
| TransverseLoading    | ✅    | ✅    | ✅   | ✅    | 
| WaveLoading          | ✅    | ✅    | ✅   | ✅    | 
| WaveTopBottomLoading | ✅    | ✅    | ✅   | ✅    | 
| WindMillLoading      | ✅    | ✅    | ✅   | ✅    | 
| JumpCircleLoading    | ✅    | ✅    | ✅   | ✅    | 
| MeteorRainLoading    | ✅    | ✅    | ✅   | ✅    | 
| RotateCircleLoading  | ✅    | ✅    | ✅   | ✅    | 
| StickyBallLoading    | ✅    | ✅    | ✅   | ✅    | 
| SemipolarLoading     | ✅    | ✅    | ✅   | ✅    | 
| SolarSystemLoading   | ✅    | ✅    | ✅   | ✅    |
| LadderLoading        | ✅    | ✅    | ✅   | ✅    |
| HeartBoomLoading     | ✅    | ✅    | ✅   | ✅    |
| RollBoxLoading       | ✅    | ✅    | ✅   | ✅    |
| RectGraduallyShowLoading   | ✅    | ✅    | ✅   | ✅    |
| PointSpreadLoading   | ✅    | ✅    | ✅   | ✅    |
| ThreeHorseLoading   | ✅    | ✅    | ✅   | ✅    |
| PassThrouthLoading   | ✅    | ✅    | ✅   | ✅    |
| CoffeeLoading   | ✅    | ✅    | ✅   | ✅    |
| BatteryLoading   | ✅    | ✅    | ✅   | ✅    |
| DiamonLoading   | ✅    | ✅    |  🔨  | ✅    |
| EatLoading   | ✅    | ✅    |  🔨  | ✅    |
#### ⌨️ 组件开发

首次运行项目
```bash
$ git clone https://github.com/sixiaodong123/react-loading
$ npm run dev
```

`P.S.`: 若启动不成功，请先安装`yarn`
```bash
npm install -g yarn
```

二次项目运行

```bash
npm run storybook
```

#### 🔨 组件打包

```bash
$ npm run build
```

#### 🎉 组件发布

```bash
$ npm run release
```

#### 🤝 组件提交规范

- perf: 优化相关，比如提升性能、体验
- feat: 新功能(feature)
- fix: 修补 bug
- docs: 文档(documentation)
- style: 格式(不影响代码运行的变动)
- refactor: 重构(即不是新增功能，也不是修改 bug 的代码变动)
- test: 增加测试
- chore: 构建过程或辅助工具的变动
- upgrade: 第三方库升级
- revert: 回滚
- scope: commit 影响的范围, 比如: route, component, utils, build...
- merge: Merge branch ? of ?.

#### ❤️ 组件分支管理

- 模块功能开发(feature/xxx)
- Bug 修改(bug/xxx)

#### FAQ
##### 🛎 我只想用一个```BabelLoading```，但似乎我必须 import 整个 react-loadingg:
##### 试试[react-loading-demand](https://github.com/sixiaodong123/react-loading-demand),或者用下面这种方式来按需加载

```
import BabelLoading from 'react-loadingg/lib/BabelLoading'
```
  
##### 🛎 组件默认完全居中, 如果你想修改组件的样式,那么组件默认的完全居中的样式会被覆盖。
