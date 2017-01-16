<template>
  <div :class="wrapCls"
        @mouseenter="_mouseenter"
        @mouseleave="_mouseleave">
    <div class="ant-dropdown-link ant-dropdown-trigger"
      @mousemove="_mousemove"
      @click="_linkClick" >
      <slot name="link"></slot>
    </div>
    <transition name="slide-up">
      <div class="ant-dropdown" 
        v-show="visible"
        @mousemove="_mousemove"
        @click="_overlayClick" >
        <slot name="overlay"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
function noop () {}
import { curryingContains } from '../_util'

export default {
  name: 'ant-dropdown',
  props: {
    trigger: {
      validator: curryingContains(['click', 'hover', undefined]),
      default: 'hover'
    },
    onVisibleChange: {
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
    delay: null,
    hoverClose: true
  }),
  computed: {
    wrapCls () {
      const { prefixCls, visible } = this
      return {
        [`${prefixCls}-wrap`]: true,
        [`${prefixCls}-wrap-open`]: visible
      }
    },
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
      this.open = !this.open
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