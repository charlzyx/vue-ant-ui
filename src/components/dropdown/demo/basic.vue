
<template>
  <div>
    <ant-dropdown>
      <a slot="link" class="ant-dropdown-link">
        Hover Me <ant-icon type="down"></ant-icon>
      </a>
      <ant-menu slot="overlay" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="gg">
          <a>Google</a>
        </ant-menu-item>
        <ant-menu-item xkey="bd">
          <a>Baidu</a>
        </ant-menu-item>
        <ant-submenu xkey="ggfamily">
          <span slot="title">Google Family</span>
          <ant-menu-item xkey="g1">
            <a>Gmail</a>
          </ant-menu-item>
          <ant-menu-item xkey="g2">
            <a>Play</a>
          </ant-menu-item>
        </ant-submenu>
      </ant-menu>
    </ant-dropdown>
  </div>
</template>