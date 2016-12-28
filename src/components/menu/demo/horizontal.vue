
<template>
  <ant-menu mode="horizontal" 
    :on-click="logSelectedKeys"
    :on-open-change="logOpenKeys">
    <ant-menu-item xkey="mail">
      <ant-icon type="mail"></ant-icon>
      Navigation One
    </ant-menu-item>
    <ant-menu-item xkey="app" disabled>
      <ant-icon type="appstore"></ant-icon>
      Navigation Two
    </ant-menu-item>
    <ant-submenu xkey="sub1">
      <span slot="title"><ant-icon type='setting'></ant-icon>Navigation Three - Submenu</span>
      <ant-menu-item-group title="Item 1">
        <ant-menu-item xkey="setting:1">Option 1</ant-menu-item>
        <ant-menu-item xkey="setting:2">Option 2</ant-menu-item>
      </ant-menu-item-group>
      <ant-menu-item-group title="Item 1">
        <ant-menu-item xkey="setting:3">Option 3</ant-menu-item>
        <ant-menu-item xkey="setting:4">Option 4</ant-menu-item>
      </ant-menu-item-group>
    </ant-submenu>
    <ant-menu-item xkey="alipay">
      <a href="https://ant.design" target="_blank">Navigation Four - Link</a>
    </ant-menu-item>
  </ant-menu>
</template>
<script>
export default {
  name:'ant-menu-horizontal-demo',
  methods: {
    logSelectedKeys (keys) {
      console.log('selectedKeys', keys)
    },
    logOpenKeys (keys) {
      console.log('openKeys', keys)
    }
  }
}
</script>