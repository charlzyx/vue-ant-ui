<template>
  <div>
    <ant-code-box title="基本" :code="basicCode" id="components-pagination-demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="更多" :code="moreCode" id="components-pagination-demo-more">
      <div slot="instance">
        <more-demo></more-demo>
      </div>
      <div slot="description">
        <more-md></more-md>
      </div>
    </ant-code-box>
    <ant-code-box title="改变" :code="changerCode" id="components-pagination-demo-changer">
      <div slot="instance">
        <changer-demo></changer-demo>
      </div>
      <div slot="description">
        <changer-md></changer-md>
      </div>
    </ant-code-box>
    <ant-code-box title="" :code="jumpCode" id="components-pagination-demo-jump">
      <div slot="instance">
        <jump-demo></jump-demo>
      </div>
      <div slot="description">
        <jump-md></jump-md>
      </div>
    </ant-code-box>
    <ant-code-box title="" :code="miniCode" id="components-pagination-demo-mini">
      <div slot="instance">
        <mini-demo></mini-demo>
      </div>
      <div slot="description">
        <mini-md></mini-md>
      </div>
    </ant-code-box>
    <ant-code-box title="简洁" :code="simpleCode" id="components-pagination-demo-simple">
      <div slot="instance">
        <simple-demo></simple-demo>
      </div>
      <div slot="description">
        <simple-md></simple-md>
      </div>
</ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import moreDemo from './more'
import moreCode from '!raw!./more'
import moreMd from './more.md'

import changerDemo from './changer'
import changerCode from '!raw!./changer'
import changerMd from './changer.md'

import jumpDemo from './jump'
import jumpCode from '!raw!./jump'
import jumpMd from './jump.md'

import miniDemo from './mini'
import miniCode from '!raw!./mini'
import miniMd from './mini.md'

import simpleDemo from './simple'
import simpleCode from '!raw!./simple'
import simpleMd from './simple.md'

export default {
  components: {
    basicDemo,
    basicMd,
    moreDemo,
    moreMd,
    changerDemo,
    changerMd,
    jumpDemo,
    jumpMd,
    miniDemo,
    miniMd,
    simpleDemo,
    simpleMd,
  },
  data: () => ({
    basicCode,
    moreCode,
    changerCode,
    jumpCode,
    miniCode,
    simpleCode
  })
}
</script>