<template>
  <div>
    <ant-code-box title="按钮类型" :code="basicCode" id="components-anchor-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="固定" :code="fixedCode" id="components-anchor-demo-fixed">
      <div slot="instance">
        <fixed-demo></fixed-demo>
      </div>
      <div slot="description">
        <fixed-md></fixed-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import fixedDemo from './fixed'
import fixedCode from '!raw!./fixed'
import fixedMd from './fixed.md'

export default {
  name: 'AnchorDemo',
  components: { 
    basicDemo,
    basicMd,
    fixedDemo,
    fixedMd
  },
  data: () => ({
    basicCode,
    fixedCode
  })
}
</script>