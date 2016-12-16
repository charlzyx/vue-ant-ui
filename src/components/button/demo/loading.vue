<template>
  <div>
    <ant-code-box title="加载中状态" :code="code" id="components-button-demo-loading">
      <div slot="instance">
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
      <div slot="description">
        <btn-loading-md></btn-loading-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BtnLoadingMd from './loading.md'

export default {
  components: { BtnLoadingMd },
  data: () => ({
    loading: false,
    iconLoading: false,
    code: `
      <template>
        <div>
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
          <div slot="description">
            <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
          </div>
        </div>
      </template>
      \<script\>
      export default {
        data: () => ({
          loading: false,
          iconLoading: false
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
      \<\/script\>
    `,
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