<template>
 <div>
    <ant-code-box title="分隔符" :code="code" id="components-breadcrumb-demo-separator">
      <div slot="instance">
        <ant-breadcrumb separator=">">
          <ant-breadcrumb-item>Home</ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application Center</a></ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application List</a></ant-breadcrumb-item>
          <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
        </ant-breadcrumb>
      </div>
      <div slot="description">
        <breadcrumb-separator-md></breadcrumb-separator-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BreadcrumbSeparatorMd from './separator.md'
export default {
  components: { BreadcrumbSeparatorMd },
  data: () => ({
    code: `
      <ant-breadcrumb separator=">">
        <ant-breadcrumb-item>Home</ant-breadcrumb-item>
        <ant-breadcrumb-item><a href="">Application Center</a></ant-breadcrumb-item>
        <ant-breadcrumb-item><a href="">Application List</a></ant-breadcrumb-item>
        <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
      </ant-breadcrumb>
    `
  })
}
</script>