<template>
  <div>
    <ant-code-box title="按钮尺寸" :code="code" id="components-button-demo-icon">
      <div slot="instance">
        <ant-button type="primary" size="large">Large</ant-button>
        <ant-button type="primary">Default</ant-button>
        <ant-button type="primary" size="small">Small</ant-button>
      </div>
      <div slot="description">
        <btn-size-md></btn-size-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnSizeMd from './size.md'

export default {
  components: { BtnSizeMd },
  data: () => ({
    code: `
      <ant-button type="primary" size="large">Large</ant-button>
      <ant-button type="primary">Default</ant-button>
      <ant-button type="primary" size="small">Small</ant-button>
    `,
  })
}
</script>