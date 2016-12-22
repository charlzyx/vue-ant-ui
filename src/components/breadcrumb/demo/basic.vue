<template>
 <div>
    <ant-code-box title="基本" :code="code" id="components-ant-breadcrumb-demo-basic">
      <div slot="instance">
        <ant-breadcrumb>
          <ant-breadcrumb-item>Home</ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application Center</a></ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application List</a></ant-breadcrumb-item>
          <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
        </ant-breadcrumb>
      </div>
      <div slot="description">
         <breadcrumb-basic-md></breadcrumb-basic-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BreadcrumbBasicMd from './basic.md'
export default {
  components: { BreadcrumbBasicMd },
  data: () => ({
    code: `
      <ant-breadcrumb>
        <ant-breadcrumb-item>Home</ant-breadcrumb-item>
        <ant-breadcrumb-item><a href="">Application Center</a></ant-breadcrumb-item>
        <ant-breadcrumb-item><a href="">Application List</a></ant-breadcrumb-item>
        <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
      </ant-breadcrumb>
    `
  })
}
</script>