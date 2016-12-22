<template>
 <div>
    <ant-code-box title="带有图标的" :code="code" id="components-breadcrumb-demo-withIcon">
      <div slot="instance">
        <ant-breadcrumb>
          <ant-breadcrumb-item href="">
            <ant-icon type="home"></ant-icon>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item href="">
            <ant-icon type="user"></ant-icon>
            <span>Application List</span>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item>
            Application
          </ant-breadcrumb-item>
        </ant-breadcrumb>
      </div>
      <div slot="description">
        <breadcrumb-with-icon-md></breadcrumb-with-icon-md>
      </div>
    </ant-code-box>
  </div>
</template>
<script>
import BreadcrumbWithIconMd from './withIcon.md'
export default {
  components: { BreadcrumbWithIconMd },
  data: () => ({
    code: `
      <ant-breadcrumb>
        <ant-breadcrumb-item href="">
          <ant-icon type="home"></ant-icon>
        </ant-breadcrumb-item>
        <ant-breadcrumb-item href="">
          <ant-icon type="user"></ant-icon>
          <span>Application List</span>
        </ant-breadcrumb-item>
        <ant-breadcrumb-item>
          Application
        </ant-breadcrumb-item>
      </ant-breadcrumb>
    `
  })
}
</script>