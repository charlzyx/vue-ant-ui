<template>
  <div>
    <ant-code-box title="按钮类型" :code="code" id="components-button-demo-basic">
      <div slot="instance">
        <ant-button type="primary">Primary</ant-button>
        <ant-button>Default</ant-button>
        <ant-button type="ghost">Ghost</ant-button>
        <ant-button type="dashed">Dashed</ant-button>
      </div>
      <div slot="description">
        <btn-basic-md></btn-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnBasicMd from './basic.md'
export default {
  components: { BtnBasicMd },
  data: () => ({
    code: `
      <ant-button type="primary">Primary</ant-button>
      <ant-button>Default</ant-button>
      <ant-button type="ghost">Ghost</ant-button>
      <ant-button type="dashed">Dashed</ant-button>
    `
  })
}
</script>