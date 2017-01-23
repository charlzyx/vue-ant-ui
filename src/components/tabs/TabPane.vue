<template>
  <div role="tabpanel"
    v-if="shouldExist"
    :class="cls"
    :xkey="xkey"
    :aria-hidden="(!isActive).toString()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ant-tabpane',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs-tabpane'
    },
    contentStyle: Object,
    tab: String,
    xkey: String,
    disabled: {
      type: Boolean,
      default: false
    },
    iconHTML: String,
    icon: String
  },
  computed: {
    isActive () {
      return this.$parent.activeKey === this.xkey
    },
    shouldExist () {
      const { xkey, $parent } = this
      return $parent.panes.find(item => item.xkey === this.xkey)
    },
    cls () {
      const { prefixCls, isActive } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-inactive`]: !isActive,
        [`${prefixCls}-active`]: isActive
      }
    }
  },
  watch: {
    tab () { // tab 标题
      this.$parent.$forceUpdate();
    }
  },
  mounted() {
    this.$parent.addPanes(this)
  }
}
</script>