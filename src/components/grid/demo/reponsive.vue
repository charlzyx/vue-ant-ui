<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-reponsive" title="响应式布局" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col xs="2" sm="4" md="6" lg="8">Ant-Col</ant-col>
          <ant-col xs="20" sm="16" md="12" lg="8">Ant-Col</ant-col>
          <ant-col xs="2" sm="4" md="6" lg="8">Ant-Col</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-reponsive-md></grid-reponsive-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridReponsiveMd from './reponsive.md'

export default {
  components: { GridReponsiveMd },
  data: () => ({
    code: `
      <div>
        <ant-row>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
          <ant-col xs="20" sm="16" md="12" lg="8"></ant-col>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
