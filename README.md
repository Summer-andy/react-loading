<p align="center">
  <a href="https://github.com/sixiaodong123/react-loading">
    <img width="200" src="https://github.com/sixiaodong123/react-loading/blob/master/logo.png">
  </a>
</p>

<h1 align="center">React-Loading</h1>

<div align="center">

![npm version](https://img.shields.io/npm/v/react-loading) ![](https://img.shields.io/github/license/sixiaodong123/react-loading) ![](https://img.shields.io/npm/dm/react-loadingg)

</div>

### 项目介绍
一个基于 React 的 Loading 组件库。

#### Demo

🎉 [查看 demo](http://139.196.82.33:8080/iframe.html?id=demo--demo)

### 使用教程

#### 🎉 组件安装

```
npm install react-loadingg
```

#### 📦 组件使用

```
import { BoxLoading } from 'react-loadingg'
<BoxLoading />
```

#### 🎉 组件 API

| 组件                 | color | speed | size  | style | 
| -------------------- | ----- | ----- | ----- | ----- | 
| BabelLoading         | ✅    | ✅    | 🚧   | ✅    |
| BlockLoading         | ✅    | 🚧    | 🚧   | ✅    | 
| BoxLoading           | ✅    | ✅    | 🚧   | ✅    | 
| BlockReserveLoading  | ✅    | ✅    | 🚧   | ✅    | 
| CircleLoading        | ✅    | ✅    | 🚧   | ✅    | 
| CircleToBlockLoading | ✅    | 🚧    | 🚧   | ✅    | 
| CommonLoading        | ✅    | 🚧    | 🚧   | ✅    | 
| DisappearedLoading   | ✅    | ✅    | 🚧   | ✅    | 
| LoopCircleLoading    | ✅    | 🚧    | 🚧   | ✅    | 
| NineCellLoading      | ✅    | ✅    | 🚧   | ✅    | 
| TouchBallLoading     | ✅    | ✅    | 🚧   | ✅    | 
| TransverseLoading    | ✅    | 🚧    | 🚧   | ✅    | 
| WaveLoading          | ✅    | 🚧    | 🚧   | ✅    | 
| WaveTopBottomLoading | ✅    | ✅    | 🚧   | ✅    | 
| WindMillLoading      | ✅    | ✅    | 🚧   | ✅    | 
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

#### ❤️ 组件列表

- [x] BlockLoading
- [x] BoxLoading
- [x] BlockReserveLoading
- [x] CircleLoading
- [x] CircleToBlockLoading
- [x] CommonLoading
- [x] DisappearedLoading
- [x] LoopCircleLoading
- [x] NineCellLoading
- [x] TouchBallLoading
- [x] TransverseLoading
- [x] WaveLoading
- [x] WaveTopBottomLoading
- [x] WindMillLoading
- [x] BabelLoading
- [x] JumpCircleLoading
- [x] MeteorRainLoading
- [x] RotateCircleLoading
- [x] StickyBallLoading
- [x] SemipolarLoading
- [x] SolarSystemLoading
- [x] LadderLoading
- [x] HeartBoomLoading
- [x] RollBoxLoading
- [x] RectGraduallyShowLoading
- [ ] 持续开发中...

#### ⌨️ 组件开发

```bash
$ git clone https://github.com/sixiaodong123/react-loading
$ npm run dev
```

访问 [http://localhost:9001/](http://localhost:9001/)

#### 🔨 组件打包

```bash
$ npm run build
```

#### 🎉 组件发布

```bash
$ npm run release
```


#### 🛎 组件开发规范 
- 所有单个```不分离```元素的组件的size分别为large(30px)、default(26px)、small(22px)
- 所有单个```分离```的元素的组件的size分别为large(14px)、default(12px)、small(10px)

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

#### 🎉 FAQ
  ##### 🛎 我只想用一个```BabelLoading```，但似乎我必须 import 整个 react-loadingg:
  ##### 试试[babel-plugin-import](https://github.com/ant-design/babel-plugin-import),或者用下面这种方式来按需加载

  ```
  import BabelLoading from 'react-loadingg/lib/BabelLoading'
  ```
  
  ##### 🛎 组件默认完全居中, 如果你想修改组件的样式,那么组件默认的完全居中的样式会被覆盖。
