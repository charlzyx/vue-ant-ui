<template>
  <div>
    <grid-basic-demo></grid-basic-demo>
    <grid-gutter-demo></grid-gutter-demo>
    <grid-offset-demo></grid-offset-demo>
    <grid-sort-demo></grid-sort-demo>
    <grid-flex-demo></grid-flex-demo>
    <grid-flex-align-demo></grid-flex-align-demo>
    <grid-flex-order-demo></grid-flex-order-demo>
    <grid-reponsive-demo></grid-reponsive-demo>
    <grid-reponsive-more-demo></grid-reponsive-more-demo>
  </div>
</template>
<script>
import GridBasicDemo from './basic'
import GridGutterDemo from './gutter'
import GridOffsetDemo from './offset'
import GridSortDemo from './sort'
import GridFlexDemo from './flex'
import GridFlexAlignDemo from './flex-align'
import GridFlexOrderDemo from './flex-order'
import GridReponsiveDemo from './reponsive'
import GridReponsiveMoreDemo from './reponsive-more'
export default {
  components: {
    GridBasicDemo,
    GridGutterDemo,
    GridOffsetDemo,
    GridSortDemo,
    GridFlexDemo,
    GridFlexAlignDemo,
    GridFlexOrderDemo,
    GridReponsiveDemo,
    GridReponsiveMoreDemo
  }
}
</script>