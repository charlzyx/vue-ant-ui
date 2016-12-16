<template>
  <div>
    <ant-code-box title="不可用状态" :code="code" id="components-button-demo-disabled">
      <div slot="instance">
        <ant-button type="primary">Primary</ant-button>
        <ant-button type="primary" disabled>Primary(disabled)</ant-button>
        <br />
        <ant-button>Default</ant-button>
        <ant-button disabled>Default(disabled)</ant-button>
        <br />
        <ant-button type="ghost">Ghost</ant-button>
        <ant-button type="ghost" disabled>Ghost(disabled)</ant-button>
        <br />
        <ant-button type="dashed">Dashed</ant-button>
        <ant-button type="dashed" disabled>Dashed(disabled)</ant-button>
      </div>
      <div slot="description">
        <btn-disabled-md></btn-disabled-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnDisabledMd from './disabled.md'

export default {
  components: { BtnDisabledMd },
  data: () => ({
    code: `
      <ant-button type="primary">Primary</ant-button>
      <ant-button type="primary" disabled>Primary(disabled)</ant-button>
      <br />
      <ant-button>Default</ant-button>
      <ant-button disabled>Default(disabled)</ant-button>
      <br />
      <ant-button type="ghost">Ghost</ant-button>
      <ant-button type="ghost" disabled>Ghost(disabled)</ant-button>
      <br />
      <ant-button type="dashed">Dashed</ant-button>
      <ant-button type="dashed" disabled>Dashed(disabled)</ant-button>
    `,
  })
}
</script>