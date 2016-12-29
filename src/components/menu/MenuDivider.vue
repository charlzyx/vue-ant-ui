<template>
  <li :class="cls" ></li>  
</template>
<script>
export default {
  name: 'ant-menu-divider',
  computed:{
    prefixCls () {
      const prefix = this.$parent && this.$parent.prefixCls
          ? this.$parent.prefixCls
          : 'ant-menu'
      return prefix
    },
    cls () {
      return {
        [`${this.prefixCls}-item-divider`]: true
      }
    }
  }
}
</script>
