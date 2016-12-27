<template>
  <div>
    <menu-horizontal-demo></menu-horizontal-demo>
    <menu-sider-demo></menu-sider-demo>
    <menu-sider-current-demo></menu-sider-current-demo>
    <menu-vertical-demo></menu-vertical-demo>
    <menu-lazy-demo></menu-lazy-demo>
  </div>
</template>
<script>
import MenuHorizontalDemo from './horizontal'
import MenuSiderDemo from './sider'
import MenuSiderCurrentDemo from './sider-current'
import MenuVerticalDemo from './vertical'
import MenuLazyDemo from './lazy.md'
export default {
  name: 'MenuDemo',
  components:{
    MenuHorizontalDemo,
    MenuSiderDemo,
    MenuSiderCurrentDemo,
    MenuVerticalDemo,
    MenuLazyDemo
  }
}
</script>