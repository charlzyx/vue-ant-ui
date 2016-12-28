<template>
  <div>
    <ant-dropdown>
      <a slot="link" href="#" class="ant-dropdown-link" ref="titlelink">
        Hover Me <ant-icon type="down"></ant-icon>
      </a>
      
    </ant-dropdown>
  </div>
</template>
<script>
export default {
  computed:{
    menuWidth () {
      console.log(this.$refs)
      const WIDTH = this.$refs.titlelink 
        ? this.$refs.titlelink.clientWidth + 'px' 
        : 'auto'
      return {
        width: WIDTH
      }
    }
  }
}
</script>