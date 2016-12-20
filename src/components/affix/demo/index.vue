<template>
  <div>
    <affix-basic-demo></affix-basic-demo>
    <affix-onchange-demo></affix-onchange-demo>
    <affix-target-demo></affix-target-demo>
  </div>
</template>
<script>
import AffixBasicDemo from './basic'
import AffixOnchangeDemo from './on-change'
import AffixTargetDemo from './target'

export default {
  name: 'AffixDemo',
  components: {
    AffixBasicDemo,
    AffixOnchangeDemo,
    AffixTargetDemo
  }
}
</script>