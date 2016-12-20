<!--order: 2
title:
  zh-CN: 滚动容器
  en-US: Container to scroll.

## zh-CN-->

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。
> `target`只能以`id`的方式传入,且只对`offset-top`选项有效
<!--## en-US

Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).

````html
<div class="scoller-container" id="container">
  <div class="blank-holder">
    <ant-affix target-id="container">
      <ant-button type="primary">滚动容器</ant-button>
    </ant-affix>
  </div>
</div>
````-->
