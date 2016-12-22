<template>
  <div>
    <ant-affix v-if="affix" :offsetTop="offsetTop" :offsetButtom="offsetButtom">
      <div :class="wrapperClass" :style="style">
        <div :class="anchorClass">
          <div :class="`${prefixCls}-ink`">
            <span :class="inkClass" :style="inkStyle"></span>
          </div>
          <slot></slot>
        </div>
      </div>
    </ant-affix>
    <div v-if="!affix" :class="wrapperClass" :style="style">
      <div :class="anchorClass">
        <div :class="`${prefixCls}-ink`">
          <span :class="inkClass" :style="inkStyle"></span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import AnchorBus from './anchorBus'

export default {
  name: 'ant-anchor',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-anchor'
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetButtom: {
      type: Number
    },
    bounds: {
      type: Number,
      default: 5
    },
    className: {
      type: String
    },
    style: null,
    affix: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    wrapperClass () {
      return `${this.prefixCls}-wrapper`
    },
    anchorClass () {
      const { prefixCls } = this
      return {
        [prefixCls]: true,
        fixed: this.affix
      }
    },
    inkClass () {
      const { prefixCls } = this
      return {
        [`${prefixCls}-ink-ball`]: true,
        animated: true,
        visible: AnchorBus.activeAnchor !== '#'
      }
    },
    inkStyle () {
      const activeAnchorElem = AnchorBus.refs[AnchorBus.activeAnchor]
      return AnchorBus.activeAnchor !== '#' && `top:${activeAnchorElem.offsetTop + activeAnchorElem.clientHeight /2 - 4.5}px`
    }
  },
  data: () => ({
    activeAnchor: null,
    bus: AnchorBus
  }),
  methods: {
    handleScroll () {
      const CurrentAnchor = AnchorBus.getCurrentAnchor(this.bounds)
      if (CurrentAnchor) AnchorBus.activeAnchor = CurrentAnchor
    }
  },
  mounted () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>