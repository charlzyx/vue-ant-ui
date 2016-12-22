<template>
  <div>
    <back-top-basic-demo></back-top-basic-demo>
    <back-top-custom-demo></back-top-custom-demo>
  </div>
</template>
<script>
import BackTopBasicDemo from './basic'
import BackTopCustomDemo from './custom'
export default {
  name: 'BackTopDmeo',
  components: { 
    BackTopBasicDemo,
    BackTopCustomDemo
  }
}
</script>