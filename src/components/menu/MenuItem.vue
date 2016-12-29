<template>
  <li :xkey="xkey" 
      :class="cls"
      @mouseenter="active = true"
      @mouseleave="active = false"
      @click="_click"
      :style="levelStyle"
      >
    <slot></slot>
  </li>
</template>
<script>
function noop () {}
function updateSelectedKeys (vm, path) {
  if (vm._isMenuRoot) {
    return path
  } else {
    vm.xkey && path.push(vm.xkey)
    return vm.$parent && updateSelectedKeys(vm.$parent, path)
  }
}
import getLevelBySubMenu from '../_util/getLevelBySubMenu'

export default {
  name: 'ant-menu-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    xkey: {
      type: String,
      default: ''
    },
    inlineIndent: {
      type: Number,
      default: 24
    }
  },
  data: () => ({
    active: false
  }),
  computed: {
    rootHub () {
      return this.$parent.rootHub || null
    },
    mode () {
      return this.$parent.mode
    },
    selectedKeys () {
      return this.$parent.selectedKeys
    },
    selected () {
      return this.selectedKeys.indexOf(this.xkey) > -1
    },
    prefixCls () {
      const prefix = this.$parent && this.$parent.prefixCls
          ? this.$parent.prefixCls
          : 'ant-menu'
      return prefix
    },
    cls () {
      const { prefixCls, active, selected, disabled } = this
      const prefix = prefixCls + '-item'
      return {
        [`${prefix}`]: true,
        [`${prefix}-active`]: active,
        [`${prefix}-selected`]: selected,
        [`${prefix}-disabled`]: disabled
      }
    },
    levelStyle () {
      const level = getLevelBySubMenu(this, 1)
      return this.mode === 'inline' 
        ? `padding-left: ${this.inlineIndent * level}px` 
        : null
    }
  },
  methods: {
    _click () {
      if (this.disabled) return
      const NEWSELECTEDKEYS = updateSelectedKeys(this, [])
      // MenuItem, SubMenu > MenuItem || SubMenu > MenuItem > MenuItem || Menu > MenuItem
      this.rootHub.$emit('menu:update-selected-keys', NEWSELECTEDKEYS)
    }
  },
  created (){
  }
}
</script>