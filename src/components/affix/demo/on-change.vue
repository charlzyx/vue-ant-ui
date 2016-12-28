
<template>
  <ant-affix :on-change="is => this.isAffix = is">
    <ant-button type="primary">当前状态: {{isAffix}}</ant-button>
  </ant-affix>
</template>
<script>
export default {
  data: () => ({
    isAffix: false
  })
}
</script>