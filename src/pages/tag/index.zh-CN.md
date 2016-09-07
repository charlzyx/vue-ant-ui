## Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

<demo></demo>

<script>
import Demo from 'pages/tag/demo'

export default {
  components: {
    Demo
  }
}
</script>

## API

| 参数           | 说明                           | 类型  | 默认值 |
|----------------|-------------------------------|------|--------|
| closable       | 标签是否可以关闭               | boolean    | false  |
| onClose        | 关闭时的回调                   | function(event) | - |
| afterClose     | 关闭动画完成后的回调             | function(event) | - |
| color          | 标签的色彩：`blue` `green` `yellow` `red` | string | - |