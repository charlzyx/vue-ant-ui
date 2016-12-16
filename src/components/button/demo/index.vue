<template>
  <div>
    <btn-basic-demo></btn-basic-demo>
    <btn-size-demo></btn-size-demo>
    <btn-loading-demo></btn-loading-demo>
    <btn-loading-demo></btn-loading-demo>
    <btn-multiple-demo></btn-multiple-demo>
    <btn-icon-demo></btn-icon-demo>
    <btn-disabled-demo></btn-disabled-demo>
    <btn-group-demo></btn-group-demo>
  </div>
</template>
<script>
import BtnBasicDemo from './basic'
import BtnSizeDemo from './size'
import BtnLoadingDemo from './loading'
import BtnMultipleDemo from './multiple'
import BtnIconDemo from './icon'
import BtnDisabledDemo from './disabled'
import BtnGroupDemo from './button-group'

export default {
  components: { 
    BtnBasicDemo,
    BtnSizeDemo, 
    BtnLoadingDemo, 
    BtnMultipleDemo,
    BtnIconDemo,
    BtnDisabledDemo,
    BtnGroupDemo
  }
}
</script>
<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>

