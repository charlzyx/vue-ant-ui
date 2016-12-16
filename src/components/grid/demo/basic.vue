<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-basic" title="基础栅格" :code="code" >
      <div slot="instance">
        <ant-row>
          <ant-col span="12">.ant-col-12</ant-col>
          <ant-col span="12">.ant-col-12</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-basic-md></grid-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridBasicMd from './basic.md'

export default {
  components: { GridBasicMd },
  data: () => ({
    code: `
      <div>
        <ant-row>
          <ant-col span="12">.ant-col-12</ant-col>
          <ant-col span="12">.ant-col-12</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
