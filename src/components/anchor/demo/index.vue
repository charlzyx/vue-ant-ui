<template>
  <div>
    <anchor-basic-demo></anchor-basic-demo>
    <anchor-fixed-demo></anchor-fixed-demo>
  </div>
</template>
<script>
import AnchorBasicDemo from './basic'
import AnchorFixedDemo from './fixed'
export default {
  name: 'ant-anchor-demo',
  components: { AnchorBasicDemo, AnchorFixedDemo }
}
</script>