<template>
  <div>
    <ant-code-box title="" :code="basicCode" id="demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>

  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'
export default {
  components: {
    basicDemo,
    basicMd,
  },
  data: () => ({
    basicCode
  })
}
</script>