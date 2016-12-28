<template>
  <div>
    <ant-button-group class="ant-dropdown-button">
      <ant-button>
        <slot name="link"></slot>
      </ant-button><!--
   --><ant-button class="ant-dropdown-trigger">
        <i class="anticon anticon-down"></i>
      </ant-button>
    </ant-button-group>
    <div class="ant-dropdown">
      <slot name="overlay"></slot>
    </div>
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
      default: 'button'
    },
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
    open: false
    // visible: false
  }),
  computed: {
    visible () {
      return this.trigger === 'hover' ? this.hover : this.open
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
<style scoped>
.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child) {
    padding-right: 7px;
}
</style>