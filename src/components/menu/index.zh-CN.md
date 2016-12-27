Menu | 导航菜单
---
> category: Components
  cols: 1
  type: Navigation
  title: Menu
  subtitle: 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的范例可以参考：[常用布局](/docs/spec/layout)。
<menu-demo></menu-demo>


## API

### Menu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| theme    | 主题颜色 | String: `light` `dark` | `light` |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | String: `vertical` `horizontal` `inline` | `vertical` |
| selectedKeys | 当前选中的菜单项 key 数组 | Array |      |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | Array |      |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | Array |  |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 |  |      |
| onOpenChange | SubMenu 展开/关闭的回调 | Function(openKeys: string[]) | noop |
| onClick | 点击 menuitem 的回调| Function(selectedKeys: string[]) | noop |
| xstyle | 根节点样式 | String | |
| focusSubmenu| 是否只展开当前父级菜单 | Boolean | false |


### Menu.Item props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | Boolean   |  false  |
| key   | item 的唯一标志 |  String |  |

### Menu.SubMenu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | Boolean   |  false  |
| key | 唯一标志 |  String |  |
| title    | 子菜单项值 | `slot="title"`   |    |

### Menu.ItemGroup props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | `slot="title"` |    |


<script>
import MenuDemo from 'abscomp/menu/demo'
export default {
  components: { MenuDemo }
}
</script>