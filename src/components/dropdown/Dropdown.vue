<template>
  <div>
    <div class="ant-dropdown-link ant-dropdown-trigger"
      @mouseenter="_mouseenter"
      @mouseleave="_mouseleave"
      @click="_click">
      <slot name="link"></slot>
    </div>
    <div class="ant-dropdown" v-show="visible">
      <slot name="overlay"></slot>
    </div>
  </div>
</template>
<script>
function noop () {}
import { curryingContains } from '../_util'

export default {
  name: 'ant-dropdown',
  props: {
    trigger: {
      validator: function (val) {
        return curryingContains(['click', 'hover'], val)
      },
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
    open: false
    // visible: false
  }),
  computed: {
    visible () {
      return true
      // return this.trigger === 'hover' ? this.hover : this.open
    }
  },
  methods: {
    _click () {
      this.open = !this.open
    },
    _mouseenter () {
      this.hover = true
    },
    _mouseleave () {
      this.hover = false
    }
  }
}
</script>