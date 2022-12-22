# 立入 Web AR 1.0

## 当前配置
* 阿里云云虚拟主机；
* 阿里云 OSS 储存；

## 文件大小
文件大小直接影响加载速度，尽可能缩减文件大小，保持顺畅浏览体验。

当前文件容量：
- 视频：3M/个
- 静态 3d 文件：757kb
- 动态 3d 文件：30M

动态文件（视频/3d）做成无限循环动画是不错的办法，既能缩减文件大小，还能假装一直在动。


## 文件格式
- 图像追踪
  - 视频 -> mp4
  - 3d -> gltf(含贴图) *当前未使用*

- ARKit
  - 3d -> USDZ

## 问题
- *2022.12*
  - [Mindar.js](https://hiukim.github.io/mind-ar-js-doc/) 测试；
  - iOS 端不允许自动播放视频，通过 [playVideo.js](playVideo.js) 强制开启；
  - [ARKit](https://developer.apple.com/cn/documentation/arkit/) 测试；
  - 3d 文件格式测试

- *2022.12.21*
  - 用 [Glitch](https://glitch.com/) 服务器是最便捷的方式，测试过程中服务器速度稍慢，但还可以接受。从 22 号晚变得奇慢无比，已经不能正常访问；
  - [Github Page](https://pages.github.com/) 也存在访问不稳定的问题；

- *2022.12.22*
  - 切换到阿里云虚拟主机； 
  - 留意 https 协议问题；
  - 阿里云 OSS 储存中视频加载问题：
    - AR 图像追踪时视频黑屏，应该是 OSS 储存视频机制的问题；
    - 视频储存在服务器上，暂时解决视频黑屏的问题；