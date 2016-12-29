<template>
  <div class="ant-dropdown-wrap"
        @mouseleave="_mouseleave">
    <ant-button-group class="ant-dropdown-button">
      <ant-button :disabled="disabled" :type="type">
        <slot name="link"></slot>
      </ant-button><!--
  --><ant-button 
        :disabled="disabled"
        class="ant-dropdown-trigger"  
        :type="type" 
        @mouseenter.native="_mouseenter"
        @click.native="_linkClick">
        <i class="anticon anticon-down"></i>
      </ant-button>
    </ant-button-group>
    <transition name="slide-up">
      <div class="ant-dropdown" 
        @mousemove="_mousemove"
        @click="_overlayClick" 
        v-show="visible">
        <slot name="overlay"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
function noop () {}
import { curryingContains } from '../_util'

export default {
  name: 'ant-dropdown-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    trigger: {
      validator: curryingContains(['click', 'hover', undefined]),
      default: 'hover'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onVisibleChange: {
      type: Function,
      default: noop
    },
    onClick: {
      type: Function,
      default: noop
    },
    prefixCls: {
      type: String,
      default: 'ant-dropdown'
    }
  },
  data: () => ({
    hover: false,
    open: false,
    hoverClose: true
    // visible: false
  }),
  computed: {
    visible () {
      // return true
      return this.trigger === 'hover' ? this.hoverClose && this.hover : this.open
    }
  },
  methods: {
    _linkClick () {
      this.open = !this.open
    },
    _overlayClick (e) {
      const { target, currentTarget } = e
      this.hoverClose = !currentTarget.contains(target)
    },
    _mouseenter () {
      clearTimeout(this.delay)
      this.hover = true
      this.hoverClose = true
    },
    _mousemove (e) {
      const { target, currentTarget } = e
      this.hover = currentTarget.contains(target)
    },
    _mouseleave () {
      this.delay = setTimeout(()=> {
        this.hover = false
      }, 233)
    }
  }
}
</script>
<style scoped>
.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child) {
    padding-right: 7px;
}
</style>