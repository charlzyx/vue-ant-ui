<template>
  <div>
    <ant-code-box title="自定义样式" :code="code" id="components-back-top-demo-custom">
      <div slot="instance">
        Scroll down to see the bottom-right <strong style="color: rgb(87, 197, 247);"> blue </strong> button.
        <ant-back-top style="bottom: 100px;">
          <div class="ant-back-top-inner">UP</div>
        </ant-back-top>
      </div>
      <div slot="description">
        <back-top-custom-md></back-top-custom-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BackTopCustomMd from './custom.md'
export default {
  components: { BackTopCustomMd },
  data: () => ({
    code: `
      <template>
        <ant-back-top style="bottom: 100px;">
          <div class="ant-back-top-inner">UP</div>
        </ant-back-top>
      </template>
      <style scoped>
      .ant-back-top-inner {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: #57c5f7;
        color: #fff;
        text-align: center;
        font-size: 20px;
      }
      </style>
    `
  })
}
</script>
<style scoped>
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #57c5f7;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>