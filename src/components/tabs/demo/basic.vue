
<template>
  <div>
    <button @click="addTp">添加</button>
    <ant-tabs default-active-key="tab3">
      <ant-tab-pane v-for="tp in tps" :tab="tp.tab" :xkey="tp.xkey">{{tp.content}}</ant-tab-pane>
    </ant-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tps: [
        { tab: 'TAB1', xkey: 'tab1', 'content': 'Content-1' },
        { tab: 'TAB2', xkey: 'tab2', 'content': 'Content-2' },
        { tab: 'TAB3', xkey: 'tab3', 'content': 'Content-3' },
        { tab: 'TAB4', xkey: 'tab4', 'content': 'Content-4' },
        { tab: 'TAB5', xkey: 'tab5', 'content': 'Content-5' },
        { tab: 'TAB6', xkey: 'tab6', 'content': 'Content-6' },
        { tab: 'TAB7', xkey: 'tab7', 'content': 'Content-7' },
        { tab: 'TAB8', xkey: 'tab8', 'content': 'Content-8' },
        { tab: 'TAB9', xkey: 'tab9', 'content': 'Content-9' },
        { tab: 'TAB10', xkey: 'tab10', 'content': 'Content-10' },
        { tab: 'TAB11', xkey: 'tab11', 'content': 'Content-11' }
      ]
    }
  },
  methods: {
    addTp () {
      const { tps } = this
      let newtps = [
        { tab: 'TAB01', xkey: 'tab01', 'content': 'Content-01' },
        { tab: 'TAB02', xkey: 'tab02', 'content': 'Content-02' },
        { tab: 'TAB03', xkey: 'tab03', 'content': 'Content-03' },
        { tab: 'TAB04', xkey: 'tab04', 'content': 'Content-04' },
        { tab: 'TAB05', xkey: 'tab05', 'content': 'Content-05' },
        { tab: 'TAB06', xkey: 'tab06', 'content': 'Content-06' },
        { tab: 'TAB07', xkey: 'tab07', 'content': 'Content-07' },
        { tab: 'TAB08', xkey: 'tab08', 'content': 'Content-08' },
        { tab: 'TAB09', xkey: 'tab09', 'content': 'Content-09' },
        { tab: 'TAB010', xkey: 'tab010', 'content': 'Content-010' },
        { tab: 'TAB011', xkey: 'tab011', 'content': 'Content-011' }
      ]
      newtps = tps.concat(newtps)
      this.tps = []
      this.tps = newtps
    }
  }
}
</script>