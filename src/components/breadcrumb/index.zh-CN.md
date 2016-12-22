Breadcrumb | 面包屑
---
> category: Components
  subtitle: 面包屑
  type: Navigation
  title: Breadcrumb

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## API

| 参数      | 说明                              | 类型              |  可选值 | 默认值 |
|-----------|-----------------------------------|-----------------|---------|--------|
| separator | 分隔符自定义                      | String            |         | '/'    |
| href      | `item`上`href`值,会被渲染为`a`标签 | String            |         |        |

<breadcrumb-demo></breadcrumb-demo>

<script>
import BreadcrumbDemo from 'abscomp/breadcrumb/demo'
export default {
  components: { BreadcrumbDemo }
}
</script>