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
function activeXkeyPath (vm, path) {
  if (vm.$data._isMenuRoot) {
    let xpath = path
    console.log(xpath)
    return xpath
  } else {
    vm.xkey && path.push(vm.xkey)
    return vm.$parent && activeXkeyPath(vm.$parent, path)
  }
}

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
    }
  },
  data: () => ({
    active: false,
    selected: false
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
      const ACTIVEPATH = activeXkeyPath(this, [])
      this.rootHub.$emit('menu:item-deselect-others', ACTIVEPATH)
      // MenuItem, SubMenu > MenuItem || SubMenu > MenuItem > MenuItem || Menu > MenuItem
      this.rootHub.$emit('menu:item-selected', ACTIVEPATH)
    },
    _mouseEnter () {
      this.active = true
    },
    _mouseLeave () {
      this.active = false
    },
    shouldDeselect (path) {
      this.selected = path.indexOf(this.xkey) > -1
    }
  },
  created (){
    this.rootHub.$on('menu:item-deselect-others', this.shouldDeselect)
  }
}
</script>