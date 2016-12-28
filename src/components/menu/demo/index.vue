<template>
  <div>
    <ant-code-box title="顶部导航" :code="horizontalCode" id="components-menu-demo-horizontal">
      <div slot="instance">
        <horizontal-demo></horizontal-demo>
      </div>
      <div slot="description">
        <horizontal-md></horizontal-md>
      </div>
    </ant-code-box>
    <ant-code-box title="内嵌菜单" :code="siderCode" id="components-menu-demo-sider">
      <div slot="instance">
        <sider-demo></sider-demo>
      </div>
      <div slot="description">
        <sider-md></sider-md>
      </div>
    </ant-code-box>
    <ant-code-box title="只展开当前父级菜单" :code="siderCurrentCode" id="components-menu-demo-sider-current">
      <div slot="instance">
        <sider-current-demo></sider-current-demo>
      </div>
      <div slot="description">
        <sider-current-md></sider-current-md>
      </div>
    </ant-code-box>
    <ant-code-box title="垂直菜单" :code="verticalCode" id="components-menu-demo-vertical">
      <div slot="instance">
        <vertical-demo></vertical-demo>
      </div>
      <div slot="description">
        <vertical-md></vertical-md>
      </div>
    </ant-code-box>
    <menu-lazy-demo></menu-lazy-demo>
  </div>
</template>
<script>
import horizontalDemo from './horizontal'
import horizontalCode from '!raw!./horizontal'
import horizontalMd from './horizontal.md'

import siderDemo from './sider'
import siderCode from '!raw!./sider'
import siderMd from './sider.md'

import siderCurrentDemo from './sider-current'
import siderCurrentCode from '!raw!./sider-current'
import siderCurrentMd from './sider-current.md'

import verticalDemo from './vertical'
import verticalCode from '!raw!./vertical'
import verticalMd from './vertical.md'

import MenuLazyDemo from './lazy.md'
export default {
  name: 'MenuDemo',
  components:{
    horizontalDemo,
    horizontalMd,
    siderDemo,
    siderMd,
    siderCurrentDemo,
    siderCurrentMd,
    verticalDemo,
    verticalMd,
    MenuLazyDemo
  },
  data: () => ({
    horizontalCode,
    siderCode,
    siderCurrentCode,
    verticalCode
  })
}
</script>