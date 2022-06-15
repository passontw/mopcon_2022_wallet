# 2000 Mop Conf

## React Native Cli vs Expo

### React Native Cli

由官方提供的命令列工具

協助工程師快速建立一個起始專案

會包含 `ios` `android` 的原生檔案

### Expo

依據 `workflow` 區分為 `managed` 與 `bare` workflows

#### Managed workflow

類似 `Rails` 和 `Create React App` 

可以使用 `expo-cli` 建立一個 Managed workflow 的 react native 專案

在資料夾內看不到 `ios` 與 `android` 

因為原生部分都被封裝起來

有些部分可以使用設定來做處理

原生部分會被 Expo 託管

表示你無法碰觸到這一塊

僅僅能利用 Expo 提供的相關設定來做修改

設定為 [app.json / app.config.js](https://docs.expo.dev/workflow/configuration/) / [config plugins](https://docs.expo.dev/guides/config-plugins/)

若要使用熱更新 或是推播等等功能需要依循 Expo 來做處理

優點是不太需要碰觸到原生程式碼

缺點則是無法 `客製化` 原生的功能

可以透過 `expo prebuild` 來重新生成 `Bare workflow` 來繼續開發

#### Bare workflow

專案內會包含 `ios` `android` 資料夾 和所有的原生程式碼

也會包含 Expo SDK

相對來說自由度與彈性會高於 `Managed workflow` 

Expo 並沒有完全支援所有的原生 API

遇到需要使用到沒有支援的 API 或是需要自己客製化 原生需求的時候

會推薦使用 Bare workflow

## React 微教學

### 單向資料流

要談到單向資料流之前要先聊一下 Flux 這個設計模式

這是由 `Facebook` 提出的設計概念，它的核心概念是單向資料流

可以透過兩張圖片來解釋

![MVC](https://miro.medium.com/max/780/1*1PuUNCRYbYo8GNwgcniB6w.png)

![Flux](https://miro.medium.com/max/780/1*70lLOYbfnZ9iTP1iMPxjLw.png)

Flux 有四個主要的角色

* Action：規範所有改變資料的動作，讓你可以快速掌握整個 App 的行為。
* Dispatcher：將目前發生的行為，告知給所有已註冊的 Store。
* Store：存放資料和業務邏輯，並且只提供 getter API 讓人取得資料。
* View：根據資料渲染 UI 和傾聽使用者的操作事件。

**Redux 是 Flux 的其中一種實現方式**

### Component

何謂元件？

React 中最基本的單元

元件中也可以包含更小的元件

![Component](https://static.bookstack.cn/projects/reactjs101-zh-tw/Ch03/images/component.png)

每個元件都會有獨立的生命週期

* Mounting - Virtual DOM create an instance in to dom
  * [contructor](https://reactjs.org/docs/react-component.html#constructor)
  * [static getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  * [render](https://reactjs.org/docs/react-component.html#render)
  * [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)
* Updating - instance on changed
  * [static getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  * [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  * [render](https://reactjs.org/docs/react-component.html#render)
  * [getSnapshotBeforeUpdate](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
  * [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate) - **componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.**
* Unmounting - instance will be removed
  * [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)
* Error Handling - instance got some error
  * [static getDerivedStateFromError](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
  * [componentDidCatch](https://reactjs.org/docs/react-component.html#componentdidcatch)

[Virtual DOM](https://reactjs.org/docs/faq-internals.html)

### Props 與 State

#### State

描述元件的狀態

在 class component 中可以使用 [setState](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)

#### Props

在元件中彼此傳遞的資料， 不能被修改的資料


### JSX

而在撰寫 React Component 時我們通常會使用 JSX 的方式來提升程式撰寫效率。

JSX 並非一種全新的語言，而是一種語法糖（[Syntatic Sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)），一種語法類似 [XML](https://zh.wikipedia.org/wiki/XML) 的 ECMAScript 語法擴充

### Class Component and Functional Component

沒有絕對的好或是不好

Class Component 與 Functional Component 都可以實現相同的邏輯

Functional Component + Hook 在邏輯抽離 －       優於 Class Component + [HOC](https://reactjs.org/docs/higher-order-components.html)

但在初始理解與學習過程中

Class Component 更易於理解與學習

#### 以 Hook 實現 state (setState)

##### Class Component Example

##### Functional Component Example
