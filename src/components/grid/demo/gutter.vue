
<template lang="html">
  <ant-row :gutter="16">
    <ant-col class="gutter-row" :span="6">
      <div class="gutter-box">.ant-col-6</div>
    </ant-col>
    <ant-col class="gutter-row" :span="6">
      <div class="gutter-box">.ant-col-6</div>
    </ant-col>
    <ant-col class="gutter-row" :span="6">
      <div class="gutter-box">.ant-col-6</div>
    </ant-col>
    <ant-col class="gutter-row" :span="6">
      <div class="gutter-box">.ant-col-6</div>
    </ant-col>
  </ant-row>
</template>

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
