<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-reponsive" title="响应式布局" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Ant-Col</ant-col>
          <ant-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Ant-Col</ant-col>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Ant-Col</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-reponsive-more-md></grid-reponsive-more-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridReponsiveMoreMd from './reponsive-more.md'

export default {
  components: { GridReponsiveMoreMd },
  data: () => ({
    code: `
      <div>
        <ant-row>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
