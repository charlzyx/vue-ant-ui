<template>
  <div>
    <ant-code-box title="基本" :code="basicCode" id="components-back-top-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="自定义样式" :code="customCode" id="components-back-top-demo-custom">
      <div slot="instance">
        <custom-demo></custom-demo>
      </div>
      <div slot="description">
        <custom-md></custom-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import customDemo from './custom'
import customCode from '!raw!./custom'
import customMd from './custom.md'

export default {
  name: 'BackTopDmeo',
  components: { 
    basicDemo,
    basicMd,
    customDemo,
    customMd
  },
  data: () => ({
    basicCode,
    customCode
  })
}
</script>