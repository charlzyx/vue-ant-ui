<template>
  <li 
    @mouseenter="_mouseEnter"
    @mouseleave="_mouseLeave"
    :xkey="xkey"
    :class="cls"
    >
    <div :class="titleCls" >
      <slot name="title"></slot>
    </div>
    <ul :class="subCls">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'ant-submenu',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-menu'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    xkey: {
      type: String,
      default: ''
    },
    onTitleClick: Function
  },
  data () {
    return {
      mode: this.$parent.mode,
      active: false,
      selected: false,
      delay: null
    }
  },
  computed: {
    rootHub () {
      return this.$parent.rootHub || null
    },
    cls () {
      const { prefixCls, selected, $parent, active, isOpen } = this
      const submenuCls = `${prefixCls}-submenu`
      return {
        [`${submenuCls}`]: true,
        [`${submenuCls}-${$parent.mode}`]: true,
        [`${submenuCls}-selected`]: selected,
        [`${submenuCls}-open`]: active,
        [`${submenuCls}-active`]: active
      }
    },
    titleCls () {
      return {
        [`${this.prefixCls}-submenu-title`]: true
      }
    },
    subCls () {
      const { prefixCls, $parent, visiable, active } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-vertical`]: true,
        [`${prefixCls}-sub`]: true,
        [`${prefixCls}-hidden`]: !active
      }
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
      }, 300)
    },
    shouldDeselect (path) {
      console.log('oooo', path)
      console.log('iiii', this.xkey)
      this.selected = path.indexOf(this.xkey) > -1
    }
  },
  created (){
    this.rootHub.$on('menu:item-deselect-others', this.shouldDeselect)
  }
}
</script>