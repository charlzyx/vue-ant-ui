<template>
  <div>
    <ant-code-box title="按钮类型" :code="basicCode" id="components-affix-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="固态状态改变的回调" :code="onChangeCode" id="components-affix-demo-onchange">
      <div slot="instance">
        <on-change-demo></on-change-demo>
      </div>
      <div slot="description">
        <on-change-md></on-change-md>
      </div>
    </ant-code-box>
    <ant-code-box title="滚动容器" :code="targetCode" id="components-affix-demo-target">
      <div slot="instance">
        <target-demo></target-demo>
      </div>
      <div slot="description">
        <target-md></target-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import onChangeDemo from './on-change'
import onChangeCode from '!raw!./on-change'
import onChangeMd from './on-change.md'

import targetDemo from './target'
import targetCode from '!raw!./target'
import targetMd from './target.md'

export default {
  name: 'AffixDemo',
  components: {
    basicDemo,
    basicMd,
    onChangeDemo,
    onChangeMd,
    targetDemo,
    targetMd
  },
  data: () => ({
    basicCode,
    onChangeCode,
    targetCode
  })
}
</script>