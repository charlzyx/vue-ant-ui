<template lang="html">
  <div :style="placeholderStyle">
    <div :class="{'ant-affix': affixStyle}" :style="affixStyle" ref="fixed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
function noop () {}
import { getScroll, getOffset } from '../_util';

export default {
  name: 'ant-affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: Number,
    onChange: {
      type: Function,
      default: noop
    },
    targetId: null
  },
  data: () => ({
    scrollEvent: null,
    resizeEvent: null,
    affixStyle: null,
    placeholderStyle: null
  }),
  mounted: function() {
    if (this.targetId) {
      document.getElementById(this.targetId).addEventListener('scroll', this.handleScroll);
      document.getElementById(this.targetId).addEventListener('resize', this.handleScroll);
    } else {
      document.addEventListener('scroll', this.handleScroll);
      document.addEventListener('resize', this.handleScroll);
    }
  },
  beforeDestroy: function() {
    if (this.targetId) {
      document.getElementById(this.targetId).removeEventListener('scroll', this.handleScroll);
      document.getElementById(this.targetId).removeEventListener('resize', this.handleScroll);
    } else {
      document.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('resize', this.handleScroll);
    }
  },
  methods: {
    handleScroll(e) {
      let { targetId, offsetTop, offsetBottom } = this;
      const FINALTARGET = targetId ? e.target : window
      const scrollTop = getScroll(FINALTARGET, true);
      const affixNode = this.$el;
      const fixedNode = this.$refs.fixed;
      const affixRect = fixedNode.getBoundingClientRect();
      const elemOffset = getOffset(affixNode, FINALTARGET);
      const offsetMode = {
        top: typeof offsetTop === 'number',
        bottom: typeof offsetBottom === 'number'
      };
      if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
        this.affixStyle = {
          position: 'fixed',
          top: offsetTop + (targetId ? affixRect.top : 0) + 'px',
          left: elemOffset.left + (targetId ? affixRect.left : 0) + 'px',
          width: affixNode.offsetWidth + 'px'
        };
        this.placeholderStyle = {
          width: affixNode.offsetWidth + 'px',
          height: affixNode.offsetHeight + 'px'
        };
        this.onChange(true);
      } else if (scrollTop < elemOffset.top + fixedNode.offsetHeight + offsetBottom - window.innerHeight && offsetMode.bottom) {
        this.affixStyle = {
          position: 'fixed',
          bottom: offsetBottom + 'px',
          left: elemOffset.left + 'px',
          width: affixNode.offsetWidth + 'px'
        };
        this.placeholderStyle = {
          width: affixNode.offsetWidth + 'px',
          height: affixNode.offsetHeight + 'px'
        };
        this.onChange(true);
      } else {
        this.affixStyle = null;
        this.placeholderStyle = null;
        this.onChange(false);
      }
    }
  }
};
</script>
