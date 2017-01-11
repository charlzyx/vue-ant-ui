<template>
  <transition name="collapse" 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
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
    beforeEnter (el) {
      el.style.height = '0';
    },
    enter (el) {
      el.dispaly = 'block'
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    },

    afterEnter (el) {
      el.style.height  = ''
      el.dispaly = ''
      el.style.overflow = ''
    },
    beforeLeave (el) {
      el.dispaly = 'block'
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    },
    leave (el) {
      setTimeout(() => {
        el.style.height = 0;
        el.dispaly = ''
      });
    },
    afterLeave (el) {
      el.style.height  = ''
      el.dispaly = ''
      el.style.overflow = ''
    }
  }
}
</script>