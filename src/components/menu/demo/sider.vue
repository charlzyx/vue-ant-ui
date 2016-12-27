<template>
 <div>
    <ant-code-box title="内嵌菜单" :code="code" id="components-menu-demo-sider">
      <div slot="instance">
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
      </div>
      <div slot="description">
        <menu-sider-md></menu-sider-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import MenuSiderMd from './sider.md'
export default {
  components: { MenuSiderMd },
  data: () => ({
    code: `
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
    `
  })
}
</script>