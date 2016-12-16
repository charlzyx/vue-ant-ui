<template lang="html">
  <div>
    <ant-code-box id="components-grid-demo-gutter" title="区块间隔" :code="code">
      <div class="gutter-example" slot="instance">
        <ant-row :gutter="16">
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
        </ant-row>
      </div>
      <div slot="description">
        <grid-gutter-md></grid-gutter-md>
      </div>
    </ant-code-box>
  </div>
</template>

<script>
import GridGutterMd from './gutter.md'

export default {
  components: { GridGutterMd },
  data: () => ({
    code: `
      <div class="gutter-example" slot="instance">
        <ant-row :gutter="16">
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>

<style>
.gutter-example .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00A0E9;
  padding: 5px 0;
}
</style>
