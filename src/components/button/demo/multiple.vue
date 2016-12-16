<template>
  <div>
    <ant-code-box title="多个按钮组合" :code="code" id="components-button-demo-mutiple">
      <div slot="instance">
        <ant-button type="primary">
          -Todo-
        </ant-button>
      </div>
      <div slot="description">
        <btn-mutiple-md></btn-mutiple-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnMutipleMd from './multiple.md'

export default {
  components: { BtnMutipleMd },
  data: () => ({
    code: `
      Waiting... Menu component
    `,
  })
}
</script>