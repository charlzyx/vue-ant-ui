<!--order: 1
title:
  zh-CN: 内嵌菜单
  en-US: Vertical menu with inline children

## zh-CN-->

垂直菜单，子菜单内嵌在菜单区域。
<!--
## en-US

Vertical menu with inline submenus.

````jsx
<ant-menu mode="inline" 
  xstyle="width: 240px" 
  :default-open-keys="['sub1', 'sub4']"
  :default-selected-keys="['1']">
  <ant-submenu xkey="sub1">
    <span slot="title"><ant-icon type='mail'></ant-icon>Navigation One</span>
    <ant-menu-item-group title="Item 1">
      <ant-menu-item xkey="1">Option 1</ant-menu-item>
      <ant-menu-item xkey="2">Option 2</ant-menu-item>
    </ant-menu-item-group>
    <ant-menu-item-group title="Item 2">
      <ant-menu-item xkey="3">Option 3</ant-menu-item>
      <ant-menu-item xkey="4">Option 4</ant-menu-item>
    </ant-menu-item-group>
  </ant-submenu>
  <ant-submenu xkey="sub2">
    <span slot="title"><ant-icon type='appstore'></ant-icon>Navigation Two</span>
    <ant-menu-item xkey="5">Option 5</ant-menu-item>
    <ant-menu-item xkey="6">Option 6</ant-menu-item>
    <ant-submenu xkey="sub3">
      <span slot="title">Submenu</span>
      <ant-menu-item xkey="7">Option 7</ant-menu-item>
      <ant-menu-item xkey="8">Option 8</ant-menu-item>
    </ant-submenu>
  </ant-submenu>
  <ant-submenu  xkey="sub4">
    <span slot="title"><ant-icon type='setting'></ant-icon>Navigation Three</span>
    <ant-menu-item xkey="9">Option 9</ant-menu-item>
    <ant-menu-item xkey="10">Option 10</ant-menu-item>
    <ant-menu-item xkey="11">Option 11</ant-menu-item>
    <ant-menu-item xkey="12">Option 12</ant-menu-item>
  </ant-submenu>
</ant-menu>
````-->
