<template>
  <div :class="cls">
    <a :class="`${prefixCls}-link-title`"
        @click="scrollTo"
        :href="href"
        :title="typeof title === 'string' ? title : ''"
        :ref="href"
      >
      {{title}}
    </a>
    <slot></slot>
  </div>
</template>
<script>
import AnchorBus from './anchorBus'

export default {
  name: 'ant-anchor-link',
  props: {
    href: {
      type: String,
      default: '#'
    },
    prefixCls: {
      type: String,
      default: 'ant-anchor'
    },
    title: null,
    bounds: {
      type: Number,
      default: 5
    },
    affix: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cls () {
      return {
        [`${this.prefixCls}-link`]: true,
        [`${this.prefixCls}-link-active`]: AnchorBus.activeAnchor === this.href
      }
    }
  },
  methods: {
    scrollTo (e) {
      e.preventDefault()
      AnchorBus.activeAnchor = this.href
      AnchorBus.scrollTo(this.href)
    }
  },
  mounted () {
    AnchorBus.addLink(this.href, this.$refs[this.href])
  }
}
</script>