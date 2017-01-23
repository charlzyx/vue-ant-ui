
<template>
  <div>
    <ant-button @click.native="addTp">添加</ant-button>
    <ant-tabs type="editable-card"
      :on-change="tabChange"
      :on-tab-click="tabClick"
      :on-edit="tabEdit"  >
      <ant-tab-pane :key="tp.xkey" v-for="tp in tps" :tab="tp.tab" :xkey="tp.xkey" >{{tp.content}}</ant-tab-pane>
    </ant-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tps: [
        { tab: '🐔', xkey: 'ji1', 'content': '唧唧复唧唧' },
        { tab: '木兰', xkey: 'ji2', 'content': '木兰当户织' }
      ]
    }
  },
  methods: {
    addTp () {
      let index = +new Date()
      this.tps.push({ tab: `🐔-${index}`, xkey: `tab${index}`, 'content': `唧唧复唧唧${index}` })
    },
    deleteTpByKey (xkey) {
      this.tps = this.tps.filter(tp => tp.xkey !== xkey)
    },
    tabChange (xkey) {
      console.log(`Now ActiveKey:  [${xkey}]`)
    },
    tabClick (xkey) {
      console.log(`[${xkey}] Clicked!`)
    },
    tabEdit (xkey, action) {
      if (!action) this.deleteTpByKey(xkey)
      console.log(`[${xkey}] has been ${action ? 'Added' : 'Deleted'}`)
    }
  }
}
</script>
