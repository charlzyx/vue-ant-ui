<template>
  <li :xkey="xkey" 
      :class="cls"
      @mouseEnter="_mouseEnter"
      @mouseLeave="_mouseLeave"
      @click="_click"
      >
    <slot></slot>
  </li>
</template>
<script>
function noop () {}
export default {
  name: 'ant-menu-item',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-menu-item'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    xkey: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    active: false
  }),
  computed: {
    cls () {
      const { prefixCls, active, selected, disabled } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-selected`]: selected,
        [`${prefixCls}-disabled`]: disabled
      }
    },
    rootHub () {
      return this.$parent.rootHub || null
    }
  },
  methods: {
    _click () {
      this.rootHub.$emit('menu-item-selected', this.xkey)
    },
    _mouseEnter () {
      this.active = true
    },
    _mouseLeave () {
      this.active = false
    }
  }
}
</script>