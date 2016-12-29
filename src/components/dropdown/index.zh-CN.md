Dropdown | 向下弹出的列表
---
> category: Components
  subtitle: 下拉菜单
  type: Navigation
  title: Dropdown

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
<dropdown-demo></dropdown-demo>

## API

属性如下

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| trigger     | 触发下拉的行为   | ['click'] or ['hover'] | ['hover']        |
| link        | `<slot name="link">` | `<slot></slot>` | -|
| overlay        | 菜单 `<slot name="overlay">` | <router-link to="/menu">Menu</router-link>| -|
| onVisibleChange  | 菜单显示状态改变时调用，参数为 { visible } | Function | - |

菜单可由 `antd.Menu` 取得，可设置 `onSelect` 回调，菜单还包括菜单项 `antd.Menu.Item`，分割线 `antd.Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。

### Dropdown.Button

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| type        | 按钮类型，和 <router-link to="/button">Button</router-link> 一致 | String | 'default' |
| onClick     | 点击左侧按钮的回调，和 <router-link to="/button">Button</router-link> 一致 | Function   | - |
| trigger     | 触发下拉的行为   | ['click'] or ['hover'] | ['hover']        |
| link        | `<slot name="link">` | `<slot></slot>` | -|
| overlay        | 菜单 `<slot name="overlay">` | <router-link to="/menu">Menu</router-link>| -|
| onVisibleChange  | 菜单显示状态改变时调用，参数为 { visible } | Function | - |

<script>
import DropdownDemo from 'abscomp/dropdown/demo/index'
export default {
  components: { DropdownDemo }
}
</script>