<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-flex" title="Flex 布局" :code="code">
      <div slot="instance">
        <p>子元素居左排列</p>
        <ant-row type="flex" justify="start">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素居中排列</p>
        <ant-row type="flex" justify="center">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素居右排列</p>
        <ant-row type="flex" justify="end">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素等宽排列</p>
        <ant-row type="flex" justify="space-between">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素分散对齐</p>
        <ant-row type="flex" justify="space-around">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-flex-md></grid-flex-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridFlexMd from './flex.md'

export default {
  components: { GridFlexMd },
  data: () => ({
    code: `
      <div>
        <p>子元素居左排列</p>
        <ant-row type="flex" justify="start">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素居中排列</p>
        <ant-row type="flex" justify="center">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素居右排列</p>
        <ant-row type="flex" justify="end">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素等宽排列</p>
        <ant-row type="flex" justify="space-between">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>

        <p>子元素分散对齐</p>
        <ant-row type="flex" justify="space-around">
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
          <ant-col span="4">.ant-col-4</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
