<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-sort" title="布局排序" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col span="18" push="6">.ant-col-18 .ant-col-push-6</ant-col>
          <ant-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-sort-md></grid-sort-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridSortMd from './sort.md'

export default {
  components: { GridSortMd },
  data: () => ({
    code: `
      <div>
        <ant-row>
          <ant-col span="18" push="6">.ant-col-18 .ant-col-push-6</ant-col>
          <ant-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
