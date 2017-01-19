<template>
  <div role="tabpanel"
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
    // 从 slot 传值过来
    activeKey: null
  },
  watch: {
    tab () {
      this.$parent.$forceUpdate();
    }
  },
  computed: {
    isActive () {
      return this.$parent.activeKey === this.xkey
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
  mounted() {
    this.$parent.addPanes(this)
  }
}
</script>