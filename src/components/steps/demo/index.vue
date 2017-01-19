<template>
  <div>
    <ant-code-box title="基本用法" :code="simpleCode" id="components-steps-demo-simple">
      <div slot="instance">
        <simple-demo></simple-demo>
      </div>
      <div slot="description">
        <simple-md></simple-md>
      </div>
    </ant-code-box>
    <ant-code-box title="迷你版" :code="smallsizeCode" id="components-steps-demo-small-size">
      <div slot="instance">
        <smallsize-demo></smallsize-demo>
      </div>
      <div slot="description">
        <smallsize-md></smallsize-md>
      </div>
    </ant-code-box>
    <ant-code-box title="带图标的步骤条" :code="iconCode" id="components-steps-demo-icon">
      <div slot="instance">
        <icon-demo></icon-demo>
      </div>
      <div slot="description">
        <icon-md></icon-md>
      </div>
    </ant-code-box>
    <ant-code-box title="步骤切换" :code="stepnextCode" id="components-steps-demo-step-next">
      <div slot="instance">
        <stepnext-demo></stepnext-demo>
      </div>
      <div slot="description">
        <stepnext-md></stepnext-md>
      </div>
    </ant-code-box>
    <ant-code-box title="竖直方向的步骤条" :code="verticalCode" id="components-steps-demo-vertical">
      <div slot="instance">
        <vertical-demo></vertical-demo>
      </div>
      <div slot="description">
        <vertical-md></vertical-md>
      </div>
    </ant-code-box>
    <ant-code-box title="竖直方向的小型步骤条" :code="verticalsmallCode" id="components-steps-demo-vertical-small">
      <div slot="instance">
        <verticalsmall-demo></verticalsmall-demo>
      </div>
      <div slot="description">
        <verticalsmall-md></verticalsmall-md>
      </div>
    </ant-code-box>
    <ant-code-box title="步骤运行错误" :code="errorCode" id="components-steps-demo-error">
      <div slot="instance">
        <error-demo></error-demo>
      </div>
      <div slot="description">
        <error-md></error-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import simpleDemo from './simple'
import simpleCode from '!raw!./simple'
import simpleMd from './simple.md'

import smallsizeDemo from './small-size'
import smallsizeCode from '!raw!./small-size'
import smallsizeMd from './small-size.md'

import iconDemo from './icon'
import iconCode from '!raw!./icon'
import iconMd from './icon.md'

import stepnextDemo from './step-next'
import stepnextCode from '!raw!./step-next'
import stepnextMd from './step-next.md'

import verticalDemo from './vertical'
import verticalCode from '!raw!./vertical'
import verticalMd from './vertical.md'

import verticalsmallDemo from './vertical-small'
import verticalsmallCode from '!raw!./vertical-small'
import verticalsmallMd from './vertical-small.md'

import errorDemo from './error'
import errorCode from '!raw!./error'
import errorMd from './error.md'

export default {
  components: {
    simpleDemo,
    simpleMd,
    smallsizeDemo,
    smallsizeMd,
    iconDemo,
    iconMd,
    stepnextDemo,
    stepnextMd,
    verticalDemo,
    verticalMd,
    verticalsmallDemo,
    verticalsmallMd,
    errorDemo,
    errorMd
  },
  data: () =>({
    simpleCode,
    smallsizeCode,
    iconCode,
    stepnextCode,
    verticalCode,
    verticalsmallCode,
    errorCode
  })
}
</script>