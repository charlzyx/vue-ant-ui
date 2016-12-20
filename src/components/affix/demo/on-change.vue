<template>
  <div>
    <ant-code-box title="固态状态改变的回调" :code="code" id="components-affix-demo-onchange">
      <div slot="instance">
        <ant-affix :on-change="is => this.isAffix = is">
          <ant-button type="primary">当前状态: {{isAffix}}</ant-button>
        </ant-affix>
      </div>
      <div slot="description">
        <affix-onchange-md></affix-onchange-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import AffixOnchangeMd from './on-change.md'
export default {
  components: { AffixOnchangeMd },
  data: () => ({
    code: `
      <ant-affix :on-change="is => this.isAffix = is">
        <ant-button type="primary">当前状态: {{isAffix}}</ant-button>
      </ant-affix>
    `,
    isAffix: false
  })
}
</script>