<template>
  <div>
    <ant-code-box title="滚动容器" :code="code" id="components-affix-demo-target">
      <div slot="instance">
        <div id="container">
          <div class="blank-holder">
            <ant-affix target-id="container">
              <ant-button type="primary">滚动容器</ant-button>
            </ant-affix>
          </div>
        </div>
      </div>
      <div slot="description">
        <affix-target-md></affix-target-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import AffixTargetMd from './target.md'
export default {
  components: { AffixTargetMd },
  data: () => ({
    code: `
      <div class="scoller-container" id="container">
        <div class="blank-holder">
          <ant-affix target-id="container">
            <ant-button type="primary">滚动容器</ant-button>
          </ant-affix>
        </div>
      </div>
    `
  })
}
</script>
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