# Vue Ant UI for Vue 2.0

[ant-design](https://github.com/ant-design/ant-design) `checkout 66f7b05`
- 试图将这个[vue-ant-ui](https://github.com/kokoroX/vue-ant-ui)库升级到Vue2.0支持

2016年12月29日17:08:09
Menu,Dropdown 简单完成,文档,很懒惰, 代码待整理

<!--
[ios中 `position: fixed;` 在 `input` 情况下错位]
```html
<div class="header">
  Header
</div>
<div class="body">
  Body
  <input type="text"
    style="margin-top: 110vh;margin-bottom: 40vh">
</div>
<div class="footer">
  Footer
</div>
```
通常情况下是这么写

```css
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
}
.body{
  padding: 48px 0;
  overflow-y: auto;
}
```
然而在 `ios` 下面,在 `input` 获取焦点,即软键盘弹出时,此时上下滚动屏幕会发现, `fixed` 定位元素的位置就有点混乱了,请使用 `iphone` 浏览器点击 [Demo]() 体验   
这里提供一个较为简单的纯 `css` 解决方案: `.body` 元素也改为 `fixed`, 具体见代码

```css
.body{
  position: fixed;
  top: 48px;
  bottom: 48px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
```-->