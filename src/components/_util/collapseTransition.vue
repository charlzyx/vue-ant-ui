<template>
  <transition name="collapse" 
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave" >
    <slot></slot>
  </transition>
</template>
<script>
import menuMixin from '../menu/menuMixin'

export default {
  mixins: [ menuMixin ],
  methods: {
    enter(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      
      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.style.display = 'block';
      el.style.overflow = 'hidden';
    },

    afterEnter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      
      el.style.display = '';
      el.style.overflow = el.dataset.oldOverflow;
    },

    leave(el) {
      el.style.display = el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    afterLeave(el) {
      if (el.scrollHeight !== 0) {
        setTimeout(() => {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        });
      }
    }
  }
}
</script>