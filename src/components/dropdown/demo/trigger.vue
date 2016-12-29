
<template>
  <div>
    <ant-dropdown trigger="click">
      <a slot="link" class="ant-dropdown-link">
        Click Me <ant-icon type="down"></ant-icon>
      </a>
      <ant-menu slot="overlay" prefix-cls="ant-dropdown-menu">
        <ant-menu-item xkey="bd">
          <a>Baidu</a>
        </ant-menu-item>
        <ant-menu-divider></ant-menu-divider>
        <ant-menu-item disabled xkey="gg">
          <a>Google</a>
        </ant-menu-item>
      </ant-menu>
    </ant-dropdown>
  </div>
</template>