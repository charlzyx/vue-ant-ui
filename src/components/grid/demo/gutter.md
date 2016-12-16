<!--
order: 1
title:
  zh-CN: 区块间隔
  en-US: Grid Gutter

## zh-CN-->

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。
<!--
## en-US

You can use the `gutter` property of `Row` as grid spacing, we recommend set it to `(16 + 8n) px`.

````html
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
````

````css
.gutter-example .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00A0E9;
  padding: 5px 0;
}
````-->
