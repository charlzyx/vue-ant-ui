<template>
  <div>
    <ant-code-box title="图标按钮" :code="code" id="components-button-demo-icon">
      <div slot="instance">
        <ant-button type="primary" shape="circle" icon="search"></ant-button>
        <ant-button type="primary" icon="search">搜索</ant-button>
        <br />
        <ant-button type="ghost" shape="circle-outline" icon="search"></ant-button>
        <ant-button type="ghost" icon="search">Search</ant-button>
      </div>
      <div slot="description">
        <btn-icon-md></btn-icon-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnIconMd from './icon.md'

export default {
  components: { BtnIconMd },
  data: () => ({
    code: `
      <ant-button type="primary">Primary</ant-button>
      <ant-button>Default</ant-button>
      <ant-button type="ghost">Ghost</ant-button>
      <ant-button type="dashed">Dashed</ant-button>
    `,
  })
}
</script>