
<template>
  <div>
    <ant-dropdown-button type="ghost">
      <span slot="link">Dropdown</span>
      <ant-menu slot="overlay" mode="verital" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="gg">Google Play</ant-menu-item>
        <ant-menu-item xkey="gh">GitHub Page</ant-menu-item>
        <ant-menu-item xkey="bd">Baidu PuTian</ant-menu-item>
      </ant-menu>
    </ant-dropdown-button>
    <ant-dropdown-button disabled>
      <span slot="link">Dropdown</span>
      <ant-menu slot="overlay" mode="verital" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="gg">Google Play</ant-menu-item>
        <ant-menu-item xkey="gh">GitHub Page</ant-menu-item>
        <ant-menu-item xkey="bd">Baidu PuTian</ant-menu-item>
      </ant-menu>
    </ant-dropdown-button>
    <ant-dropdown>
      <ant-button slot="link">
        Button <ant-icon type="down"></ant-icon>
      </ant-button>
      <ant-menu slot="overlay" mode="verital" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="gg">Google Play</ant-menu-item>
        <ant-menu-item xkey="gh">GitHub Page</ant-menu-item>
        <ant-menu-item xkey="bd">Baidu PuTian</ant-menu-item>
      </ant-menu>
    </ant-dropdown>
  </div>
</template>