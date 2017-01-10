<template>
  <li :xkey="xkey" 
      :class="cls"
      @mouseenter="active = true"
      @mouseleave="active = false"
      @click="_click"
      :style="levelStyle" >
    <slot></slot>
  </li>
</template>
<script>
function noop () {}
import { updateSelectedKeys } from './menuHelper'
import { getLevel } from '../_util'
import menuMixin from './menuMixin'

export default {
  name: 'ant-menu-item',
  mixins: [ menuMixin ],
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
    mode () {
      return this.rootHub.mode
    },
    selectedKeys () {
      return this.rootHub.selectedKeys
    },
    selected () {
      return this.selectedKeys.indexOf(this.xkey) > -1
    },
    prefixCls () {
      return this.rootHub.prefixCls || 'ant-menu'
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
      const level = getLevel(this, 1)
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