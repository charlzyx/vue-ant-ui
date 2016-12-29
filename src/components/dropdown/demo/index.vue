<template>
  <div>
    <ant-code-box title="基本" :code="basicCode" id="components-dropdown-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="触发方式" :code="triggerCode" id="components-dropdown-demo-trigger">
      <div slot="instance">
        <trigger-demo></trigger-demo>
      </div>
      <div slot="description">
        <trigger-md></trigger-md>
      </div>
    </ant-code-box>
    <ant-code-box title="带下拉框的按钮" :code="dropdownButtonCode" id="components-dropdown-demo-dropdown-button">
      <div slot="instance">
        <dropdown-button-demo></dropdown-button-demo>
      </div>
      <div slot="description">
        <dropdown-button-md></dropdown-button-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import triggerDemo from './trigger'
import triggerCode from '!raw!./trigger'
import triggerMd from './trigger.md'

import dropdownButtonDemo from './dropdown-button'
import dropdownButtonCode from '!raw!./dropdown-button'
import dropdownButtonMd from './dropdown-button.md'
export default {
  name: 'DropdownDemo',
  components:{
    basicDemo,
    basicMd,
    triggerDemo,
    triggerMd,
    dropdownButtonDemo,
    dropdownButtonMd
  },
  data: () => ({
    basicCode,
    triggerCode,
    dropdownButtonCode
  })
}
</script>