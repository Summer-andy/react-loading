<p align="center">
  <a href="https://github.com/sixiaodong123/react-loading">
    <img width="200" src="https://github.com/sixiaodong123/react-loading/blob/master/logo.png">
  </a>
</p>

<h1 align="center">A React-based Loading animation component library</h1>
<div align="center">

[![npm version](https://img.shields.io/npm/v/react-loading)](https://www.npmjs.com/package/react-loadingg) [![](https://img.shields.io/github/license/sixiaodong123/react-loading)](https://github.com/sixiaodong123/react-loading/blob/master/LICENSE) [![](https://img.shields.io/npm/dm/react-loadingg)](https://www.npmjs.com/package/react-loadingg)

[简体中文](https://github.com/sixiaodong123/react-loading/blob/master/README-zh-Hans.md) &#124; English

</div>



## Introduction

`React-Loading` is a React-based Loading animation component library includes many exquisite and beautiful loading components. It will effectively relieve the user's anxiety when you give loading dynamics tips at the appropriate place and moment in your project. This component library supports on-demand loading, so pick a favorite Loading component now to enrich your project ~


🎉 [check demo](http://139.196.82.33:8080/iframe.html?id=demo--demo)
## Quick Start

#### 🛠 Install

```
npm install react-loadingg
```

#### 📦 Use

```
import { BoxLoading } from 'react-loadingg';

<BoxLoading />;
```

## Components related

#### 📕 API

| Parameter          |  Description        | Type          | Default  |
| ------------ | ------------ | ------------ | ------------ |
| color  | Set color, support hexadecimal and RGB | string  |  '#00adb5' |
| speed  | Set animation speed  | number(s)  | - |
| size   | Set the component size, the optional value is `small` `default` `large`  | string  |  'default' |
| style  | Style the component  | Object  |  - |

#### 📝 Components list

| components           | color | speed | size  | style | 
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
#### ⌨️ Participate in development

Running the project for the first time
```bash
$ git clone https://github.com/sixiaodong123/react-loading
$ npm run dev
```

`P.S.`: If startup fails, please install`yarn`first
```bash
npm install -g yarn
```

Running the project for the second time

```bash
npm run storybook
```

#### 🔨 Component packaging

```bash
$ npm run build
```

#### 🎉 Component release

```bash
$ npm run release
```

#### 🤝 Component submission specifications

- perf: optimization related, such as improving performance and experience
- feat: new feature
- fix: fix bug
- docs: add or change documentation
- style: format (changes that do not affect code execution)
- refactor: refactoring (neither new features nor code changes that modify bugs)
- test: add tests
- chore: changes in the build process or aids
- upgrade: third-party library upgrades
- revert: rollback
- scope: the scope of the commit, such as: route, component, utils, build ...
- merge: Merge branch ? of ?.

#### ❤️ Component branch management

- Module Function Development (feature / xxx)
- Bug fixes (bug / xxx)

#### FAQ
##### 🛎 I just want to use ```BabelLoading```，but it seems that I have to `import` the whole `react-loadingg`:
##### Try[babel-plugin-import](https://github.com/ant-design/babel-plugin-import), or load on demand in the following way
```
import BabelLoading from 'react-loadingg/lib/BabelLoading'
```
  
##### 🛎 The component is completely centered by default. If you want to modify the component's style, the component's default completely centered style will be overwritten.
