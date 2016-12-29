
<template>
  <div>
    <ant-button type="primary">
      primary
    </ant-button>
    <ant-button type="ghost">
      secondary
    </ant-button>
    <ant-dropdown>
      <ant-button slot="link" type="ghost">
        more <ant-icon type="down"></ant-icon>
      </ant-button>
      <ant-menu slot="overlay" mode="vericatal" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="gg">Google</ant-menu-item>
        <ant-menu-item xkey="bd">Baidu</ant-menu-item>
        <ant-menu-item xkey="bi">Bing</ant-menu-item>
      </ant-menu>
    </ant-dropdown>
  </div>
</template>