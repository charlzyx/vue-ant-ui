<!--order: 4
title:
  zh-CN: Flex 布局
  en-US: Flex Layout

## zh-CN-->

Flex 布局基础。

使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
<!--
## en-US

Use `row-flex` define` flex` layout, its child elements depending on the value of the `start`,` center`, `end`,` space-between`, `space-around`, which are defined in its parent node layout mode.

````html
<p>子元素居左排列</p>
<ant-row type="flex" justify="start">
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
</ant-row>

<p>子元素居中排列</p>
<ant-row type="flex" justify="center">
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
</ant-row>

<p>子元素居右排列</p>
<ant-row type="flex" justify="end">
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
</ant-row>

<p>子元素等宽排列</p>
<ant-row type="flex" justify="space-between">
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
</ant-row>

<p>子元素分散对齐</p>
<ant-row type="flex" justify="space-around">
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
  <ant-col span="4">.ant-col-4</ant-col>
</ant-row>
````-->
