<template>
  <ul 
    :class="cls" 
    :style="style">
    <slot></slot>
  </ul>
</template>
<script>
function noop () {}
import Hub from '../_util/hubPool'
const uid = new Hub()
export default {
  name: 'ant-menu',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-menu'
    },
    theme: {
      default: 'light'
    },
    mode: {
      default: 'vertical'
    },
    selectedKeys: Array,
    defaultSelectedKeys: Array,
    openKeys: Array,
    onOpenChange: {
      type: Function,
      default: noop
    },
    onSelect: Function,
    onDeselect: Function,
    onClick: Function,
    style: String
  },
  computed: {
    cls () {
      const { prefixCls, theme, mode } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-root`]: true,
        [`${prefixCls}-${mode}`]: true,
        [`${prefixCls}-${theme}`]: true
      }
    }
  },
  methods: {
    selectItem (xkey) {
      console.log('xkey', xkey)
    }
  },
  data: () => ({
    uid: null 
  }),
  created () {
    let uid = (new Hub()).uid
    this.rootHub = Hub.getHubByUid(uid)
    this.rootHub.$on('menu-item-selected', this.selectItem)
  },
  beforeDestory () {
    this.rootHub.$off('menu-item-selected', this.selectItem)
  }
}
</script>