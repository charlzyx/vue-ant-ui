<template>
  <div>
    <ant-code-box title="按钮组合" :code="code" id="components-button-demo-button-group">
      <div slot="instance">
        <h4>Basic</h4>
        <ant-button-group>
          <ant-button>Cancel</ant-button><ant-button type="primary">OK</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button disabled>L</ant-button><ant-button disabled>M</ant-button><ant-button disabled>R</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="primary">L</ant-button><ant-button>M</ant-button><ant-button type="ghost">M</ant-button><ant-button type="dashed">R</ant-button>
        </ant-button-group>
        <h4>With Icon</h4>
        <ant-button-group>
          <ant-button type="primary">
            <ant-icon type="left"></ant-icon>Go back
          </ant-button><!--
        --><ant-button type="primary">
            Go forward<ant-icon type="right"></ant-icon>
          </ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="primary" icon="cloud" /><ant-button type="primary" icon="cloud-download" />
        </ant-button-group>
        <h4>Size</h4>
        <ant-button-group size="large">
          <ant-button type="ghost">Large</ant-button><ant-button type="ghost">Large</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="ghost">Default</ant-button><ant-button type="ghost">Default</ant-button>
        </ant-button-group>
        <ant-button-group size="small">
          <ant-button type="ghost">Small</ant-button><ant-button type="ghost">Small</ant-button>
        </ant-button-group>
      </div>
      <div slot="description">
        <btn-group-md></btn-group-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnGroupMd from './button-group.md'

export default {
  components: { BtnGroupMd },
  data: () => ({
    code: `
      <div>
        <ant-button-group>
          <ant-button>Cancel</ant-button><!--
          两个按钮中间有空隙是默认 button 元素为 display: inline-block 导致,请自行斟酌合适方案
          --><ant-button type="primary">OK</ant-button>
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
    `
  })
}
</script>