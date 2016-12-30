<template>
  <li :class="cls">
    <div :class="titleCls">
    {{title}}
    </div>
    <ul :class="listCls">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'ant-menu-item-group',
  props: {
    title: String
  },
  computed: {
    rootHub () {
      return this.$parent.rootHub || null
    },
    mode () {
      return this.$parent.mode
    },
    _isItemGrop () {return true},
    prefixCls () {
      const prefix = this.$parent && this.$parent.prefixCls
          ? this.$parent.prefixCls
          : 'ant-menu'
      return prefix
    },
    selectedKeys () {
      return this.$parent.selectedKeys
    },
    cls () {
      return {
        [`${this.prefixCls}-item-group`]: true
      }
    },
    titleCls () {
      return {
        [`${this.prefixCls}-item-group-title`]: true
      }
    },
    listCls () {
      return {
        [`${this.prefixCls}-item-group-list`]: true
      }
    }
  }
}
</script>