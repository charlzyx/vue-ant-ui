
<template>
  <div>
    <div style="margin-bottom: 8px;">
      <p>当前位置: {{ position }}  </p>
      <input type="radio" id="top" value="top" v-model="position">
      <label for="Top">top</label>
      <input type="radio" id="left" value="left" v-model="position">
      <label for="left">left</label>
      <input type="radio" id="right" value="right" v-model="position">
      <label for="right">right</label>
      <input type="radio" id="bottom" value="bottom" v-model="position">
      <label for="bottom">bottom</label>
    </div>
    <ant-tabs :tab-position="position">
      <ant-tab-pane tab="问刘十九" xkey="baijuyi">
        <p>晚来天欲雪,</p>
        <p>能饮一杯无?</p>
      </ant-tab-pane>
      <ant-tab-pane tab="静夜思" xkey="libai">
        <p>举头望明月,</p>
        <p>低头思故乡.</p>
      </ant-tab-pane>
      <ant-tab-pane tab="月夜忆舍弟" xkey="dufu">
        <p>露从今夜白,</p>
        <p>月是故乡明.</p>
      </ant-tab-pane>
    </ant-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      position: 'top'
    }
  }
}
</script>
