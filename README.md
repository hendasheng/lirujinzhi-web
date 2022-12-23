# 立入 Web AR 1.0

## 当前配置
* 阿里云云虚拟主机；
* 阿里云 OSS 储存；

## 文件大小
文件大小直接影响加载速度，尽可能缩减文件大小，保持顺畅浏览体验。

当前文件容量：
- 视频（MindAR）：3M/个；
- 动态 3d 文件（Mind AR）：1.1M、623k；
- 静态 3d 文件（ARKit）：757kb；
- 动态 3d 文件（ARKit）：30M；

动态文件（视频/3d）做成无限循环动画是不错的办法，既能缩减文件大小，还能假装一直在动。


## 文件格式
- 图像追踪（MindAR）
  - 视频 -> mp4
  - 3d -> gltf（嵌入贴图）

- ARKit
  - 3d -> USDZ

## 问题
- **2022.12 - 测试**
  - [Mindar.js](https://hiukim.github.io/mind-ar-js-doc/) 测试；
  - iOS 端不允许自动播放视频，通过 [playVideo.js](playVideo.js) 强制开启；
  - [ARKit](https://developer.apple.com/cn/documentation/arkit/) 测试；
  - 3d 文件格式测试

- **2022.12.21**
  - 用 [Glitch](https://glitch.com/) 服务器是最便捷的方式，测试过程中服务器速度稍慢，但还可以接受。今晚变得奇慢无比，已经不能正常访问了；
  - [Github Page](https://pages.github.com/) 也存在访问不稳定的问题；

- **2022.12.22 - 服务器**
  - 切换到阿里云虚拟主机； 
  - 留意 https 协议问题；
  - 阿里云 OSS 储存中视频加载问题：
    - AR 图像追踪时视频黑屏，应该是 OSS 储存视频机制的问题；
    - 视频储存在服务器上，暂时解决视频黑屏的问题；

- **2022.12.22 - 3D 部分的问题**
  - ARKit（3D） 体验最好，但是在 Android 设备上不灵；
  - [Mindar.js](https://hiukim.github.io/mind-ar-js-doc/) 支持全平台，但是不能做真实空间计算，仍然需要目标图像，作为候补选项。
    - 测试中用到 30M、60M 动画文件（gltf），响应速度慢到不行，要注意文件大小，目前用到的动画文件是 1.1M（恰饭）、623k（立花）。