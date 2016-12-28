<template>
  <li :class="cls" :key="xkey" @click="_click">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'ant-dropdown-menu-item',
  porps: {
    xkey: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
        active: false
      }
  },
  computed:{
    cls () {
      return {
        'ant-dropdown-menu-item': true,
        'ant-dropdown-menu-item-active': this.active
      }
    }
  }
  methods: {
    _click () {
      this.$parent.itemClick && this.$parent.itemClick(this.xkey)
    }
  }
}
</script>