# 立入 WebAR 0.1

## 使用
根据页面中文本标注：
- **iOS/Android** - 支持的系统；
- **图像追踪** - 扫描目标图像，显示相应视频、3D 内容；
- **将 3D 内容渲染到摄像头中** - 无需目标图像，直接将 3D 内容渲染到摄像头中；

## 视频、3D 文件
- 主要用到**视频、3D** 两种文件，文件大小直接影响加载速度，尽可能缩减文件大小，保持顺畅浏览体验。
- **3D 动态文件**尽量做成无限循环动画，既能缩减文件大小，还能假装一直在动。
- 文件格式：
  - **图像追踪**
    - 视频：MP4
    - 3D 文件： gltf（嵌入贴图）
  - **将 3D 内容渲染到摄像头中**
    - USDZ（通过苹果官方的 AR 创作工具 [Reality Converter](https://developer.apple.com/cn/augmented-reality/tools/) 转换）

当前文件：
- 视频（MindAR）：3M/个；
- 动态 3d 文件（Mind AR）：1.1M、623k；
- 静态 3d 文件（ARKit）：757kb；
- 动态 3d 文件（ARKit）：30M；

## 引用库
- [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/) - 2D、3D
  - 浏览器运行，全平台支持；
  - 所有 AR 内容需要图像追踪（扫描目标图像，显示相应内容）；
  - **内容文件格式：**
    - 目标文件：[.mind](https://hiukim.github.io/mind-ar-js-doc/tools/compile)
    - 视频：MP4
    - 3D 文件： gltf（嵌入贴图）
      - [3D模型格式说明](https://threejs.org/docs/#manual/zh/introduction/Loading-3D-models)
- [ARKit 快速查看](https://developer.apple.com/cn/documentation/arkit/previewing_a_model_with_ar_quick_look/) - 3D
  - 浏览器运行，调用 iOS 设备摄像头和运动功能，仅支持 iOS 11.0+ 设备；
  - 不需要图像追踪，通过摄像头计算空间位置显示 3D 内容；
  - **内容文件格式：**
     - USDZ（通过苹果官方的 AR 创作工具 [Reality Converter](https://developer.apple.com/cn/augmented-reality/tools/) 转换）
     *[ARKit 不支持的功能](https://github.com/google/usd_from_gltf)*

- [Device.js](https://github.com/matthewhudson/current-device) - 检测设备操作系统； 

## 运行配置
* 阿里云云虚拟主机；
* 阿里云 OSS 储存；

## 优化
- **2022.12 - 测试**
  - [Mindar.js](https://hiukim.github.io/mind-ar-js-doc/) 测试；
  - iOS 端不允许自动播放视频，通过 [playVideo.js](playVideo.js) 强制开启；
  - [ARKit](https://developer.apple.com/cn/documentation/arkit/) 测试；
  - 3d 文件格式测试；

- **2022.12.21**
  -  [Glitch](https://glitch.com/) 、[Github Page](https://pages.github.com/)  访问速度不稳定。

- **2022.12.22 - 服务器**
  - 切换到阿里云虚拟主机； 
  - 留意 https 协议问题；
  - 阿里云 OSS 储存中视频加载问题：
    - AR 图像追踪时视频黑屏，应该是 OSS 储存视频机制的问题；
    - 视频储存在服务器上，暂时解决视频黑屏的问题；

- **2022.12.22 - 3D 部分的问题**
  - ARKit（3D） 体验最好，但是在 Android 设备上不灵；
  - MindAR 支持全平台，但是不能做真实空间计算，仍然需要目标图像，作为候补选项。
    - 测试中用到 30M、60M 动画文件（gltf），响应速度慢到不行，要注意文件大小，目前用到的动画文件是 1.1M（恰饭）、623k（立花）。

- **2022.12.26 - 系统适配（桌面、Android、iOS）**
  - [checkDevice.js](checkDevice.js) 检测设备，根据设备展示不同内容。
    - 桌面端关闭 AR 入口，增加顶部提示；
    - Android 关闭 ARKit 入口；
    - iOS 啥都行，不用管；