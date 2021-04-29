# tproject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目说明

## 页面header部分

- 由于在开发时chrome上进行调试，缺少手机顶部时间、电量、信号等内容，所以对这个部分进行了手动绘制。
- 页面在chrome浏览器iPhoneX 61%比例下顶部出现一条白线，将比例调至100%后白线消失。

## 项目实现

### 组件化

通过Vue组件化实现项目。

将项目分为：

- Loading

- PopWindow（弹窗）

  - PopWindow1（汇率券弹窗）
  - PopWindow2（境外券弹窗）

- 主页面

  - Header（包括手动绘制手机顶部模块和展示商店logo，地区图片部分）
  - ModuleTitle（模块名称）
  - CouponOne（超优汇率券）
  - CouponTwo（境外通用券）
  - CouponThree（商店支付券）
  - CouponFour（商户优惠券）
  - Bottom（页面底部）

  - Footer（页面底部固定栏）

    左侧信息可根据点击不同券进行响应。

### 考虑页面内容可配置（mock数据）

通过axios发送ajax请求获取数据，从后端获取数据实现页面可配置。

| 组件                      | 可配置内容                                                   |
| ------------------------- | ------------------------------------------------------------ |
| PopWindow 部分            | 1. 通过获取数据确认弹窗是否显示                              |
| PopWindow1 汇率券弹窗     | 1. 考虑汇率及参考价格可配置                                  |
| PopWindow2 通用券弹窗     | 1. 考虑数字滚动动画最终停留金额可配置，<br>    其余滚动数据根据最终停留金额计算<br>2. 通过获取领取通用券次数配置相应图片 |
| Header 部分               | 1. 考虑品牌logo和地区图片可配置                              |
| ModuleTitle 部分          | 1. 考虑模块名称可配置，便于加入新的模块                      |
| CouponOne（超优汇率券）   | 1. 考虑汇率及市场参考价可配置                                |
| CouponTwo（境外通用券）   | 1. 可获取领取次数并计算待解锁次数<br>2. 可配置券面金额       |
| CouponThree（商店支付券） | 1. 可配置券的名称、金额、有效期、<br>    使用条件、使用范围  |
| CouponFour（商户优惠券）  | 1. 可配置商户名称、券的名称、<br/>    金额（或图片）、有效期、<br/>    使用条件、使用范围 |

### Loading展示

主要页面展示：mock数据，通过axios发送ajax请求获取数据。

通过 v-if 控制在获取到数据前展示Loading页面，获取数据后，Loading页面消失，进入主要页面。

(为使效果更为明显，让loading页面在获取到数据后多停留2s)

