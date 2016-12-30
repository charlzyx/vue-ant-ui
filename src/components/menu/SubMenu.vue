<template>
  <li 
    @mouseenter="_mouseEnter"
    @mouseleave="_mouseLeave"
    :xkey="xkey"
    :class="cls"
    >
    <div :class="titleCls" @click="_titleClick" :style="levelStyle">
      <slot name="title"></slot>
    </div>
    <transition :name="mode === 'inline' ? 'max-height' : 'fade'">
      <ul class="ant-motion-collapse ant-motion-collapse-active"
        ref="subul"
        :class="subCls"
        v-show="mode === 'inline' ? open : active">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>
<script>
function updateCurrentOpenChain (vm, path) {
  if (vm._isMenuRoot) {
    return path
  } else {
    vm._isSubMenu && vm.xkey && path.push(vm.xkey)
    return vm.$parent && updateCurrentOpenChain(vm.$parent, path)
  }
}

import { getLevel } from '../_util'

export default {
  name: 'ant-submenu',
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
    },
    onTitleClick: Function
  },
  data () {
    return {
      active: false,
      delay: null,
    }
  },
  computed: {
    _isSubMenu () {return true},
    rootHub () {
      return this.$parent.rootHub || null
    },
    selectedKeys () {
      return this.$parent.selectedKeys
    },
    openKeys () {
      return this.$parent.openKeys
    },
    focusSubmenu () {
      return this.$parent.focusSubmenu
    },
    mode () {
      return this.$parent.mode
    },
    prefixCls () {
      const prefix = this.$parent && this.$parent.prefixCls
          ? this.$parent.prefixCls
          : 'ant-menu'
      return prefix
    },
    selected () {
      return this.selectedKeys.indexOf(this.xkey) > -1
    },
    open () {
      const { openKeys, xkey } = this
      return openKeys.indexOf(xkey) > -1
    },
    cls () {
      const { prefixCls, selected, mode, active, open } = this
      const submenuCls = `${prefixCls}-submenu`
      return {
        [`${submenuCls}`]: true,
        [`${submenuCls}-${mode}`]: true,
        [`${submenuCls}-selected`]: selected,
        [`${submenuCls}-open`]: open || active,
        [`${submenuCls}-active`]: active
      }
    },
    titleCls () {
      return {
        [`${this.prefixCls}-submenu-title`]: true
      }
    },
    subCls () {
      const { prefixCls, mode, open, active } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${mode}`]: true,
        [`${prefixCls}-sub`]: true,
        // [`${prefixCls}-hidden`]: mode === 'inline' ? !open : !active
      }
    },
    levelStyle () {
      const level = getLevel(this, 0)
      return this.mode === 'inline' 
        ? `padding-left: ${this.inlineIndent * level}px` 
        : null
    }
  },
  methods: {
    _mouseEnter () {
      clearTimeout(this.delay)
      this.active = true
    },
    _mouseLeave () {
      this.delay = setTimeout(() => {
        this.active = false
      }, 233)
    },
    _titleClick () {
      const { mode, open, openKeys, xkey, focusSubmenu } = this
      // 只在 'inline' 模式下生效
      if (mode === 'inline') {
        let newOpenKeys
        newOpenKeys = open
                      ? openKeys.map(key => key === xkey ? true : key)
                                .filter(key => key !== true)
                      : focusSubmenu
                        ? updateCurrentOpenChain(this, [])
                        : openKeys.push(xkey) && openKeys
        this.rootHub.$emit('menu:update-open-keys', newOpenKeys)
      }
    },
    shouldClose () {
      this.active = this.mode === 'inline'
    }
  },
  created () {
    this.rootHub.$on('menu:update-selected-keys', this.shouldClose)
  },
  beforeDestory () {
    this.rootHub.$off('menu:update-selected-keys', this.shouldClose)
  }
}
</script>
<style>
.xfade-leave-active,
.xfade-enter-active{
  transition: all 1s;
}
.xfade-enter,
.xfade-leave-active{
  background: #cba;
}
.xfade-leave,
.xfade-enter-active{
  background: #cab;
}
</style>