<template>
  <div>
    <ant-code-box title="按钮类型" :code="basicCode" id="components-button-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="按钮尺寸" :code="sizeCode" id="components-button-demo-icon">
      <div slot="instance">
        <size-demo></size-demo>
      </div>
      <div slot="description">
        <size-md></size-md>
      </div>
    </ant-code-box>
    <ant-code-box title="加载中状态" :code="loadingCode" id="components-button-demo-loading">
      <div slot="instance">
        <loading-demo></loading-demo>
      </div>
      <div slot="description">
        <loading-md></loading-md>
      </div>
    </ant-code-box>
    <ant-code-box title="多个按钮组合" :code="multipleCode" id="components-button-demo-mutiple">
      <div slot="instance">
        <multiple-demo></multiple-demo>
      </div>
      <div slot="description">
        <multiple-md></multiple-md>
      </div>
    </ant-code-box>
    <ant-code-box title="图标按钮" :code="iconCode" id="components-button-demo-icon">
      <div slot="instance">
        <icon-demo></icon-demo>
      </div>
      <div slot="description">
        <icon-md></icon-md>
      </div>
    </ant-code-box>
    <ant-code-box title="不可用状态" :code="disabledCode" id="components-button-demo-disabled">
      <div slot="instance">
        <disabled-demo></disabled-demo>
      </div>
      <div slot="description">
        <disabled-md></disabled-md>
      </div>
    </ant-code-box>
    <ant-code-box title="按钮组合" :code="buttonGroupCode" id="components-button-demo-button-group">
      <div slot="instance">
        <button-group-demo></button-group-demo>
      </div>
      <div slot="description">
        <button-group-md></button-group-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import sizeDemo from './size'
import sizeCode from '!raw!./size'
import sizeMd from './size.md'

import loadingDemo from './loading'
import loadingCode from '!raw!./loading'
import loadingMd from './loading.md'

import multipleDemo from './multiple'
import multipleCode from '!raw!./multiple'
import multipleMd from './multiple.md'

import iconDemo from './icon'
import iconCode from '!raw!./icon'
import iconMd from './icon.md'

import disabledDemo from './disabled'
import disabledCode from '!raw!./disabled'
import disabledMd from './disabled.md'

import buttonGroupDemo from './button-group'
import buttonGroupCode from '!raw!./button-group'
import buttonGroupMd from './button-group.md'

export default {
  name: 'ButtonDemo',
  components: { 
    basicDemo,
    basicMd,
    sizeDemo,
    sizeMd,
    loadingDemo,
    loadingMd,
    multipleDemo,
    multipleMd,
    iconDemo,
    iconMd,
    disabledDemo,
    disabledMd,
    buttonGroupDemo,
    buttonGroupMd
  },
  data: () => ({
    basicCode,
    sizeCode,
    loadingCode,
    multipleCode,
    iconCode,
    disabledCode,
    buttonGroupCode
  })
}
</script>
<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>

