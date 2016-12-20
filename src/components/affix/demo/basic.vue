<template>
  <div>
    <ant-code-box title="按钮类型" :code="code" id="components-affix-demo-basic">
      <div slot="instance">
        <ant-affix :offset-top="120">
          <ant-button type="primary">距离顶部120px</ant-button>
        </ant-affix>
        <ant-affix :offset-bottom="0">
          <ant-button type="primary">固定在底部</ant-button>
        </ant-affix>
      </div>
      <div slot="description">
        <affix-basic-md></affix-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import AffixBasicMd from './basic.md'
export default {
  components: { AffixBasicMd },
  data: () => ({
    code: `
        <ant-affix :offset-top="120">
          <ant-button type="primary">距离顶部120px</ant-button>
        </ant-affix>
        <ant-affix :offset-bottom="0">
          <ant-button type="primary">固定在底部</ant-button>
        </ant-affix>
    `
  })
}
</script>