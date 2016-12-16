---
category: Components
subtitle: 警告提示
type: Feedback
title: Alert
---

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
| type       | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`   | String     | `info`    |
| closable   | 默认不显示关闭按钮                                  | Boolean   | 无    |
| closeText  | 自定义关闭按钮                                     | React.Node   | 无    |
| message    | 警告提示内容                                       | React.Node   | 无    |
| description | 警告提示的辅助性文字介绍                            | React.Node   | 无    |
| onClose     | 关闭时触发的回调函数                                | Function   | 无    |
| showIcon   | 是否显示辅助图标                                 | Boolean   | false    |
| banner   | 是否用作顶部公告                                 | Boolean   | false    |

---
<slot></slot>
---
# Hello

`<span>{{sss}}</span>`

> This is test.

- How are you?
- Fine, Thank you, and you?
- I'm fine， too. Thank you.
- 🌚

```javascript
import Vue from 'vue'

Vue.config.debug = true
```

<div>
  {{ model }} test
</div>

<compo>{{ model }}</compo>

<div
  class="abc"
  @click="show = false">
  啊哈哈哈
</div>

```html
<script>
  module.exports = {}
</script>
<script>
  module.exports = {}
</script>
<script>
  module.exports = {}
</script>

<template>
  <div></div>
</template>
```

<style scoped>
  .abc {
    background-color: yellow;
  }
</style>

<style scoped>
  .abc {
    background-color: yellow;
  }
</style>

<div>
</div>

sadfsfs

大家哦哦好啊谁都发生地方上的冯绍峰s

> sahhhh

<compo>{{ model }}</compo>

```html
<compo>{{model }}{{model }}{{model }}{{model }}{{ model }}</compo>
```

{{model}}
<input type="text" v-model="model">
<script>
  export default {
    data () {
      return {
        model: 'abc'
      }
    }
  }
</script>