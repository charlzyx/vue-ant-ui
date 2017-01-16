
<template>
  <div>
    设置PageSize:
    <ant-button-group :style="{marginBottom: '8px'}">
      <ant-button @click.native="changePageSize(10)">
        10
      </ant-button><ant-button @click.native="changePageSize(20)">
        20
      </ant-button><ant-button @click.native="changePageSize(50)">
        50
      </ant-button><ant-button @click.native="changePageSize(100)">
        100
      </ant-button>
    </ant-button-group>
    <ant-pagination :page-size="pagesize" :default-current="15" :total="500"></ant-pagination>
    当前PageSize: {{pagesize}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      pagesize: 10
    }
  },
  methods: {
    changePageSize (pz) {
      this.pagesize = pz
    }
  }
}
</script>