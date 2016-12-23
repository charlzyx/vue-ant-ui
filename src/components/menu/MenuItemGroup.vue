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
    prefixCls: {
      type: String,
      default: "ant-menu-item-group"
    },
    title: String,
    visiable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootHub () {
      return this.$parent.rootHub || null
    },
    cls () {
      return {
        [`${this.prefixCls}`]: true
      }
    },
    titleCls () {
      return {
        [`${this.prefixCls}-title`]: true
      }
    },
    listCls () {
      return {
        [`${this.prefixCls}-list`]: true
      }
    }
  }
}
</script>