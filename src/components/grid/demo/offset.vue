<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-offset" title="左右偏移" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8" offset="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-offset-md></grid-offset-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridOffsetMd from './offset.md'

export default {
  components: { GridOffsetMd },
  data: () => ({
    code: `
      <div>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8" offset="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
