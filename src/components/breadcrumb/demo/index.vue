<template>
  <div>
    <breadcrumb-basic-demo></breadcrumb-basic-demo>
    <breadcrumb-separator-demo></breadcrumb-separator-demo>
    <breadcrumb-with-icon-demo></breadcrumb-with-icon-demo>
  </div>
</template>
<script>
import BreadcrumbBasicDemo from './basic'
import BreadcrumbSeparatorDemo from './separator'
import BreadcrumbWithIconDemo from './withIcon'
export default {
  name: 'ant-breadcrumb-demo',
  components: { BreadcrumbBasicDemo, BreadcrumbSeparatorDemo, BreadcrumbWithIconDemo }
}
</script>