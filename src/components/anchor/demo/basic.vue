<template>
  <div>
    <ant-code-box title="按钮类型" :code="code" id="components-anchor-demo-basic">
      <div slot="instance">
        <ant-anchor>
          <ant-anchor-link href="#components-anchor-demo-basic" title="Basic demo"></ant-anchor-link>
          <ant-anchor-link href="#components-anchor-demo-fixed" title="Fixed demo"></ant-anchor-link>
          <ant-anchor-link href="#API" title="API">
            <ant-anchor-link href="#Anchor-Props" title="Anchor Props"></ant-anchor-link>
            <ant-anchor-link href="#Link-Props" title="Link Props"></ant-anchor-link>
          </ant-anchor-link>
        </ant-anchor>
      </div>
      <div slot="description">
        <anchor-basic-md></anchor-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import AnchorBasicMd from './basic.md'
export default {
  components: { AnchorBasicMd },
  data: () => ({
    code: `
      <ant-anchor>
        <ant-anchor-link href="#components-anchor-demo-basic" title="Basic demo"></ant-anchor-link>
        <ant-anchor-link href="#components-anchor-demo-fixed" title="Fixed demo"></ant-anchor-link>
        <ant-anchor-link href="#API" title="API">
          <ant-anchor-link href="#Anchor-Props" title="Anchor Props"></ant-anchor-link>
          <ant-anchor-link href="#Link-Props" title="Link Props"></ant-anchor-link>
        </ant-anchor-link>
      </ant-anchor>
    `
  })
}
</script>