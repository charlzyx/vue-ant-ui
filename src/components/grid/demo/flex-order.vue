<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-flex-align" title="Flex 排序" :code="code">
      <div slot="instance">
        <ant-row type="flex">
          <ant-col span="6" order="4">1 ant-col-order-4</ant-col>
          <ant-col span="6" order="3">2 ant-col-order-3</ant-col>
          <ant-col span="6" order="2">3 ant-col-order-2</ant-col>
          <ant-col span="6" order="1">4 ant-col-order-1</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-flex-order-md></grid-flex-order-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridFlexOrderMd from './flex-order.md'

export default {
  components: { GridFlexOrderMd },
  data: () => ({
    code: `
      <div>
        <ant-row type="flex">
          <ant-col span="6" order="4">1 ant-col-order-4</ant-col>
          <ant-col span="6" order="3">2 ant-col-order-3</ant-col>
          <ant-col span="6" order="2">3 ant-col-order-2</ant-col>
          <ant-col span="6" order="1">4 ant-col-order-1</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
