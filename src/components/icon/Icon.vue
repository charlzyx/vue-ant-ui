<template>
  <i class="anticon" :class="{[`anticon-${type}`]: type, 'anticon-spin': spin}"></i>
</template>

<script>
  export default {
    name: 'ant-icon',
    props: {
      type: {
        type: String
      },
      spin: {
        type: null,
        default: false
      }
    }
  };
</script>
