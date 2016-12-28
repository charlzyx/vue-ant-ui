<template>
  <div id="container">
    <div class="blank-holder">
      <ant-affix target-id="container">
        <ant-button type="primary">滚动容器</ant-button>
      </ant-affix>
    </div>
  </div>
</template>
<style scoped>
#container{
  height: 200px;
  overflow-y: auto;
}
.blank-holder{
  padding-top: 300px;
  height: 600px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>