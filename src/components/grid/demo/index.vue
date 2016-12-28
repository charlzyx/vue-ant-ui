<template>
  <div>
    <ant-code-box id="components-grid-demo-basic" title="基础栅格" :code="basicCode" >
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-gutter" title="区块间隔" :code="gutterCode">
      <div class="gutter-example" slot="instance">
        <gutter-demo></gutter-demo>
      </div>
      <div slot="description">
        <gutter-md></gutter-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-offset" title="左右偏移" :code="offsetCode">
      <div slot="instance">
        <offset-demo></offset-demo>
      </div>
      <div slot="description">
        <offset-md></offset-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-sort" title="布局排序" :code="sortCode">
      <div slot="instance">
        <sort-demo></sort-demo>
      </div>
      <div slot="description">
        <sort-md></sort-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-flex" title="Flex 布局" :code="flexCode">
      <div slot="instance">
        <flex-demo></flex-demo>
      </div>
      <div slot="description">
        <flex-md></flex-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-flex-align" title="Flex 对齐" :code="flexAlignCode">
      <div slot="instance">
        <flex-align-demo></flex-align-demo>
      </div>
      <div slot="description">
        <flex-align-md></flex-align-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-flex-align" title="Flex 排序" :code="flexOrderCode">
      <div slot="instance">
        <flex-order-demo></flex-order-demo>
      </div>
      <div slot="description">
        <flex-order-md></flex-order-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-reponsive" title="响应式布局" :code="reponsiveCode">
      <div slot="instance">
        <reponsive-demo></reponsive-demo>
      </div>
      <div slot="description">
        <reponsive-md></reponsive-md>
      </div>
    </ant-code-box>
    <ant-code-box id="components-grid-demo-reponsive" title="响应式布局" :code="reponsiveMoreCode">
      <div slot="instance">
        <reponsive-more-demo></reponsive-more-demo>
      </div>
      <div slot="description">
        <reponsive-more-md></reponsive-more-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>

import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import gutterDemo from './gutter'
import gutterCode from '!raw!./gutter'
import gutterMd from './gutter.md'

import offsetDemo from './offset'
import offsetCode from '!raw!./offset'
import offsetMd from './offset.md'

import sortDemo from './sort'
import sortCode from '!raw!./sort'
import sortMd from './sort.md'

import flexDemo from './flex'
import flexCode from '!raw!./flex'
import flexMd from './flex.md'

import flexAlignDemo from './flex-align'
import flexAlignCode from '!raw!./flex-align'
import flexAlignMd from './flex-align.md'

import flexOrderDemo from './flex-order'
import flexOrderCode from '!raw!./flex-order'
import flexOrderMd from './flex-order.md'

import reponsiveDemo from './reponsive'
import reponsiveCode from '!raw!./reponsive'
import reponsiveMd from './reponsive.md'

import reponsiveMoreDemo from './reponsive-more'
import reponsiveMoreCode from '!raw!./reponsive-more'
import reponsiveMoreMd from './reponsive-more.md'
export default {
  name: 'GridDemo',
  components: {
    basicDemo,
    basicMd,
    gutterDemo,
    gutterMd,
    offsetDemo,
    offsetMd,
    sortDemo,
    sortMd,
    flexDemo,
    flexMd,
    flexAlignDemo,
    flexAlignMd,
    flexOrderDemo,
    flexOrderMd,
    reponsiveDemo,
    reponsiveMd,
    reponsiveMoreDemo,
    reponsiveMoreMd
  },
  data: () => ({
    basicCode,
    gutterCode,
    offsetCode,
    sortCode,
    flexCode,
    flexAlignCode,
    flexOrderCode,
    reponsiveCode,
    reponsiveMoreCode 
  })
}
</script>