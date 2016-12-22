<template>
  <div>
    <ant-code-box title="固定" :code="code" id="components-anchor-demo-fixed">
      <div slot="instance">
        <ant-anchor :affix="false">
          <ant-anchor-link href="#API" title="API">
            <ant-anchor-link href="#Anchor-Props" title="Anchor Props"></ant-anchor-link>
            <ant-anchor-link href="#Link-Props" title="Link Props"></ant-anchor-link>
          </ant-anchor-link>
          <ant-anchor-link href="#components-anchor-demo-basic" title="Basic demo"></ant-anchor-link>
          <ant-anchor-link href="#components-anchor-demo-fixed" title="Fixed demo"></ant-anchor-link>
        </ant-anchor>
      </div>
      <div slot="description">
        <anchor-fixed-md></anchor-fixed-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import AnchorFixedMd from './fixed.md'
export default {
  components: { AnchorFixedMd },
  data: () => ({
    code: `
      <ant-anchor :affix="false">
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