<template>
  <ul @mouseenter="active = true"
      @mouseleave="active = false" 
      @click="open = true">
  </ul>
</template>
<script>
export default {
  name: 'ant-dropdown-menu-submenu',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-dropdown-menu-submenu'
    }
  },
  data: () => ({
    active: false,
    open: false
  }),
  methods: {
  }
}
</script>