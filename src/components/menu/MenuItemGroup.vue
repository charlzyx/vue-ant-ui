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
import menuMixin from './menuMixin'

export default {
  name: 'ant-menu-item-group',
  props: {
    title: String
  },
  mixins: [ menuMixin ],
  computed: {
    _isItemGrop () {return true},
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