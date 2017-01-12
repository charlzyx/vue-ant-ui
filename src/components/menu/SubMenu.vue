<template>
  <li 
    @mouseenter="_mouseEnter"
    @mouseleave="_mouseLeave"
    :xkey="xkey"
    :class="cls" >
    <div :class="titleCls" @click="_titleClick" :style="levelStyle">
      <slot name="title"></slot>
    </div>
    <collapse-transition>
      <ul
        ref="subul"
        :class="subCls"
        v-show="mode === 'inline' ? open : active">
        <slot></slot>
      </ul>
    </collapse-transition>
  </li>
</template>
<script>
import collapseTransition from '../_util/collapseTransition'
import { updateCurrentOpenChain } from './menuHelper'
import { getLevel } from '../_util'
import menuMixin from './menuMixin'

export default {
  name: 'ant-submenu',
  mixins: [ menuMixin ],
  components: {
    collapseTransition
  },
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
        [`${submenuCls}-active`]: mode === 'inline' ? selected : active
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
        [`${prefixCls}-sub`]: true
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