Anchor | 锚点
---
> category: Components
  subtitle: 锚点
  cols: 2
  type: Navigation
  title: Anchor

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。
> 注意:同一个组件中只能有一个实例
## API <span id="API"></span>

### Anchor Props <span id="Anchor-Props"></span>

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| offsetTop    | 距离窗口顶部达到指定偏移量后触发   | Number |    0(px)    |
| offsetBottom | 距离窗口底部达到指定偏移量后触发   | Number |         |
| bounds | 锚点区域边界 | Number | 5(px) |

### Link Props <span id="Link-Props"></span>

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| href    | 锚点链接   | String |         |
| title | 文字内容   | String |         |

<anchor-demo></anchor-demo>
<script>
import AnchorDemo from 'abscomp/anchor/demo'
export default {
  components: { AnchorDemo }
}
</script>