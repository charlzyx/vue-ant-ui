<template>
  <div>
    <ant-code-box title="基本" :code="basicCode" id="components-ant-breadcrumb-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="分隔符" :code="separatorCode" id="components-breadcrumb-demo-separator">
      <div slot="instance">
        <separator-demo></separator-demo>
      </div>
      <div slot="description">
        <separator-md></separator-md>
      </div>
    </ant-code-box>
    <ant-code-box title="带有图标的" :code="withiconCode" id="components-breadcrumb-demo-withIcon">
      <div slot="instance">
        <withicon-demo></withicon-demo>
      </div>
      <div slot="description">
        <withicon-md></withicon-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import separatorDemo from './separator'
import separatorCode from '!raw!./separator'
import separatorMd from './separator.md'

import withiconDemo from './withicon'
import withiconCode from '!raw!./withicon'
import withiconMd from './withicon.md'

export default {
  name: 'BreadcrumbDemo',
  components: { 
    basicDemo,
    basicMd,
    separatorDemo,
    separatorMd,
    withiconDemo,
    withiconMd
  },
  data: () => ({
    basicCode,
    separatorCode,
    withiconCode,
  })
}
</script>