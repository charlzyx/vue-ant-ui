
<template>
  <div>
    <ant-button type="primary" loading>
      Loading
    </ant-button>
    <ant-button type="primary" size="small" loading>
      Loading
    </ant-button>
    <br />
    <ant-button type="primary" :loading="loading" :on-click="enterLoading">
      Click me!
    </ant-button>
    <ant-button type="primary" icon="poweroff" :loading="iconLoading" :on-click="enterIconLoading">
      Click me!
    </ant-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    iconLoading: false,
  }),
  methods: {
    enterLoading () {
      this.loading = true
    },
    enterIconLoading () {
      this.iconLoading = true
    }
  }
}
</script>