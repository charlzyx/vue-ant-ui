<template>
  <div>
    <ant-code-box title="基本" :code="basicCode" id="demo-basic">
      <div slot="instance">
        <basic-demo></basic-demo>
      </div>
      <div slot="description">
        <basic-md></basic-md>
      </div>
    </ant-code-box>
    <ant-code-box title="禁用" :code="disabledCode" id="demo-disabled">
      <div slot="instance">
        <disabled-demo></disabled-demo>
      </div>
      <div slot="description">
        <disabled-md></disabled-md>
      </div>
    </ant-code-box>
    <ant-code-box title="图标" :code="iconCode" id="demo-icon">
      <div slot="instance">
        <icon-demo></icon-demo>
      </div>
      <div slot="description">
        <icon-md></icon-md>
      </div>
    </ant-code-box>
    <ant-code-box title="滑动" :code="slideCode" id="demo-slide">
      <div slot="instance">
        <slide-demo></slide-demo>
      </div>
      <div slot="description">
        <slide-md></slide-md>
      </div>
    </ant-code-box>
    <ant-code-box title="附加内容" :code="extraCode" id="demo-extra">
      <div slot="instance">
        <extra-demo></extra-demo>
      </div>
      <div slot="description">
        <extra-md></extra-md>
      </div>
    </ant-code-box>
    <ant-code-box title="迷你型" :code="sizeCode" id="demo-size">
      <div slot="instance">
        <size-demo></size-demo>
      </div>
      <div slot="description">
        <size-md></size-md>
      </div>
    </ant-code-box>
    <ant-code-box title="位置" :code="positionCode" id="demo-position">
      <div slot="instance">
        <position-demo></position-demo>
      </div>
      <div slot="description">
        <position-md></position-md>
      </div>
    </ant-code-box>
    <ant-code-box title="卡片式页签" :code="cardCode" id="demo-card">
      <div slot="instance">
        <card-demo></card-demo>
      </div>
      <div slot="description">
        <card-md></card-md>
      </div>
    </ant-code-box>
    <ant-code-box title="可关闭" :code="editablecardCode" id="demo-editablecard">
      <div slot="instance">
        <editablecard-demo></editablecard-demo>
      </div>
      <div slot="description">
        <editablecard-md></editablecard-md>
      </div>
    </ant-code-box>
    <ant-code-box title="" :code="customaddtriggerCode" id="demo-customaddtrigger">
      <div slot="instance">
        <customaddtrigger-demo></customaddtrigger-demo>
      </div>
      <div slot="description">
        <customaddtrigger-md></customaddtrigger-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import basicDemo from './basic'
import basicCode from '!raw!./basic'
import basicMd from './basic.md'

import disabledDemo from './disabled'
import disabledCode from '!raw!./disabled'
import disabledMd from './disabled.md'

import iconDemo from './icon'
import iconCode from '!raw!./icon'
import iconMd from './icon.md'

import slideDemo from './slide'
import slideCode from '!raw!./slide'
import slideMd from './slide.md'

import extraDemo from './extra'
import extraCode from '!raw!./extra'
import extraMd from './extra.md'

import sizeDemo from './size'
import sizeCode from '!raw!./size'
import sizeMd from './size.md'

import positionDemo from './position'
import positionCode from '!raw!./position'
import positionMd from './position.md'

import cardDemo from './card'
import cardCode from '!raw!./card'
import cardMd from './card.md'

import editablecardDemo from './editable-card'
import editablecardCode from '!raw!./editable-card'
import editablecardMd from './editable-card.md'

import customaddtriggerDemo from './custom-add-trigger'
import customaddtriggerCode from '!raw!./custom-add-trigger'
import customaddtriggerMd from './custom-add-trigger.md'

export default {
  components: {
    basicDemo,
    basicMd,
    disabledDemo,
    disabledMd,
    iconDemo,
    iconMd,
    slideDemo,
    slideMd,
    extraDemo,
    extraMd,
    sizeDemo,
    sizeMd,
    positionDemo,
    positionMd,
    cardDemo,
    cardMd,
    editablecardDemo,
    editablecardMd,
    customaddtriggerDemo,
    customaddtriggerMd,
  },
  data: () => ({
    basicCode,
    disabledCode,
    iconCode,
    slideCode,
    extraCode,
    sizeCode,
    positionCode,
    cardCode,
    editablecardCode,
    customaddtriggerCode
  })
}
</script>