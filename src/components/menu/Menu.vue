<template>
  <ul 
    :class="cls" 
    :style="xstyle">
    <slot></slot>
  </ul>
</template>
<script>
function noop () {}
import Hub from '../_util/hubPool'
import { curryingContains } from '../_util'

export default {
  name: 'ant-menu',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-menu'
    },
    theme: {
      validator (val) {
        return curryingContains(['light', 'dark'], val)
      },
      default: 'light'
    },
    mode: {
      validator (val) {
        return curryingContains(['horizontal', 'vertical'], val)
      },
      default: 'vertical'
    },
    focusSubmenu: {
      type: Boolean,
      default: false
    },
    defaultSelectedKeys: {
      type: Array,
      default () { return []}
    },
    defaultOpenKeys: {
      type: Array,
      default () { return []}
    },
    onOpenChange: {
      type: Function,
      default: noop
    },
    onClick: {
      type: Function,
      default: noop
    },
    xstyle: {
      default: ''
    }
  },
  computed: {
    cls () {
      const { prefixCls, theme, mode } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-root`]: true,
        [`${prefixCls}-${mode}`]: true,
        [`${prefixCls}-${theme}`]: true,
      }
    },
    _isMenuRoot () {return true},
    rootHub () {
      const {
        uid,
        selectedKeys,
        openKeys,
        prefixCls,
        mode,
        focusSubmenu,
        defaultSelectedKeys,
        defaultOpenKeys
      } = this
      const rootHub = Hub.getHubByUid(uid)

      rootHub.selectedKeys = selectedKeys
      rootHub.openKeys = openKeys
      rootHub.prefixCls = prefixCls 
      rootHub.mode = mode 
      rootHub.focusSubmenu = focusSubmenu 
      rootHub.defaultSelectedKeys = defaultSelectedKeys 
      rootHub.defaultOpenKeys = defaultOpenKeys 
      
      return rootHub
    }
  },
  methods: {
    updateSelectedKeys (newkeys) {
      this.$set(this, 'selectedKeys', newkeys)
      console.log('selectedKeys', this.selectedKeys)
      this.onClick(JSON.parse(JSON.stringify(newkeys)))
    },
    updateOpenKeys (newkeys) {
      this.$set(this, 'openKeys', newkeys)
      console.log('openKeys', this.openKeys)
      this.onOpenChange(JSON.parse(JSON.stringify(newkeys)))
    }
  },
  data () {
    return {
      uid: null,
      selectedKeys: this.defaultSelectedKeys,
      openKeys: this.defaultOpenKeys
    }
  },
  created () {
    this.uid = (new Hub()).uid
    this.rootHub.$on('menu:update-selected-keys', this.updateSelectedKeys)
    this.rootHub.$on('menu:update-open-keys', this.updateOpenKeys)
  },
  beforeDestory () {
    this.rootHub.$off('menu:update-selected-keys', this.updateSelectedKeys)
    this.rootHub.$off('menu:update-open-keys', this.updateOpenKeys)
  }
}
</script>