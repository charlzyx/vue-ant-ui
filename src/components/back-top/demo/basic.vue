<template>
  <div>
    <ant-code-box title="基本" :code="code" id="components-back-top-demo-basic">
      <div slot="instance">
        <div>
          Scroll down to see the bottom-right gray button.
          <ant-back-top></ant-back-top>
        </div>
      </div>
      <div slot="description">
        <back-top-basic-md></back-top-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BackTopBasicMd from './basic.md'
export default {
  components: { BackTopBasicMd },
  data: () => ({
    code: `
      <ant-back-top></ant-back-top>
    `
  })
}
</script>