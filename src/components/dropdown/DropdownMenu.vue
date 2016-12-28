<template>
  <ul :class="cls">
    <slot></slot>
  </ul>
</template>
<script>
function noop () {}
export default {
  name: 'ant-dropdown-menu',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-dropdown-menu'
    },
    theme: {
      default: 'light'
    },
    itemClick: {
      type: Function,
      default: noop
    }
  },
  computed: {
    cls () {
      const { prefixCls, theme } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-root`]: true,
        [`${prefixCls}-vertical`]: true,
        [`${prefixCls}-theme`]: true
      }
    }
  }
}
</script>