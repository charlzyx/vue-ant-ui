<!--order: 5
title:
  zh-CN: 按钮组合
  en-US: Button Group

## zh-CN-->

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。
<!--
## en-US

Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.

The `size` can be set to `large`, `small` or left unset resulting in a default size.

````html
<div>
  <ant-button-group>
    <ant-button>Cancel</ant-button><!--
    两个按钮中间有空隙是默认 button 元素为 display: inline-block 导致,请自行斟酌合适方案
    -x-><ant-button type="primary">OK</ant-button>
  </ant-button-group>
  <ant-button-group>
    <ant-button disabled>L</ant-button>
    <ant-button disabled>M</ant-button>
    <ant-button disabled>R</ant-button>
  </ant-button-group>
  <ant-button-group>
    <ant-button type="primary">L</ant-button>
    <ant-button>M</ant-button>
    <ant-button type="ghost">M</ant-button>
    <ant-button type="dashed">R</ant-button>
  </ant-button-group>
  <h4>With Icon</h4>
  <ant-button-group>
    <ant-button type="primary">
      <ant-icon type="left"></ant-icon>Go back
    </ant-button>
    <ant-button type="primary">
      Go forward<ant-icon type="right"></ant-icon>
    </ant-button>
  </ant-button-group>
  <ant-button-group>
    <ant-button type="primary" icon="cloud" />
    <ant-button type="primary" icon="cloud-download" />
  </ant-button-group>
  <h4>Size</h4>
  <ant-button-group size="large">
    <ant-button type="ghost">Large</ant-button>
    <ant-button type="ghost">Large</ant-button>
  </ant-button-group>
  <ant-button-group>
    <ant-button type="ghost">Default</ant-button>
    <ant-button type="ghost">Default</ant-button>
  </ant-button-group>
  <ant-button-group size="small">
    <ant-button type="ghost">Small</ant-button>
    <ant-button type="ghost">Small</ant-button>
  </ant-button-group>
</div>
````
-->