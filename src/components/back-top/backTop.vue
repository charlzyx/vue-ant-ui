<template lang="html">
  <div class="ant-back-top" v-show="visible" @click="backTop">
    <div class="ant-back-top-content" v-if="$slots.default">
      <i class="ant-back-top-icon anticon anticon-to-top"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { getScroll, scrollTo } from '../_util'

export default {
  name: 'ant-back-top',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    visible: false
  }),
  methods: {
    handleScroll() {
      const scrollTop = getScroll(window, true)
      this.visible = scrollTop > this.visibilityHeight
    },
    backTop() {
      scrollTo('#')
      this.onClick()
    }
  },
  mounted: function() {
    document.addEventListener('scroll', this.handleScroll)
    console.log(this.$slots)
  },
  beforeDestroy: function() {
    document.removeEventListener('scroll', this.handleScroll)
  }
};
</script>
