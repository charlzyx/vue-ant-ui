<template lang="html">
  <div @click="doCopy($event)">
    <slot></slot>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  props: {
    text: String,
    onCopy: Function
  },
  methods:{
    doCopy (e) {
      copy(this.text)
      this.onCopy && this.onCopy(e)
    }
  }
}
</script>
