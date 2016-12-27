<template>
  <li :xkey="xkey" 
      :class="cls"
      @mouseEnter="_mouseEnter"
      @mouseLeave="_mouseLeave"
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
    prefixCls: {
      type: String,
      default: 'ant-menu-item'
    },
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
    cls () {
      const { prefixCls, active, selected, disabled } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-selected`]: selected,
        [`${prefixCls}-disabled`]: disabled
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
    },
    _mouseEnter () {
      this.active = true
    },
    _mouseLeave () {
      this.active = false
    }
  },
  created (){
  }
}
</script>