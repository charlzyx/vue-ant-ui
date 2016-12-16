# Icon | 图标

> category: Components
  subtitle: 图标
  type: General
  title: Icon
  toc: false

语义化的矢量图形。

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

使用 `<ant-icon></ant-icon>` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<ant-icon type="link"></ant-icon>
```

最终会渲染为：

```html
<i class="anticon anticon-${type}"></i>
```

## 本地部署

图标组件使用 [iconfont.cn](http://iconfont.cn)，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)。


## Props

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| type | 图标类型 | string | - |
| spin | 是否有旋转动画 | boolean | false |

## 图标列表

> 点击图标复制代码。

### 方向性图标

<ul class="anticons-list">
  <copyable-icon v-for="icon in icons.direction" :type="icon"></copyable-icon>
</ul>

### 提示建议性图标

<ul class="anticons-list">
  <copyable-icon v-for="icon in icons.suggestion" :type="icon"></copyable-icon>
</ul>

### 网站通用图标

<ul class="anticons-list">
  <copyable-icon v-for="icon in icons.other" :type="icon"></copyable-icon>
</ul>

<script>
import CopyableIcon from 'abscomp/icon/CopyableIcon.vue'
export default {
  data: () => ({
    icons: {
      direction: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o'],
      suggestion: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle'],
      other: ['lock', 'unlock', 'android', 'apple', 'apple-o', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'addfile', 'addfolder', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'windows-o', 'ie', 'chrome', 'home', 'loading', 'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select', 'switcher', 'rocket']
    }
  }),
  components: {
    CopyableIcon
  }
}
</script>

<style>
.markdown .icons {
  width: 100%;
}
ul.anticons-list {
  margin: 40px 0;
  list-style: none;
  overflow: hidden;
}
ul.anticons-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #555;
  transition: all 0.2s ease;
  position: relative;
  margin: 3px 0;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 0 0 0;
}
ul.anticons-list li:hover {
  background-color: #eaf8fe;
}
ul.anticons-list li.copied:hover {
  color: rgba(255,255,255,0.2);
}
ul.anticons-list li:after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "Copied!";
  text-align: center;
  line-height: 110px;
  color: #108ee9;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
}
ul.anticons-list li.copied:after {
  opacity: 1;
  top: -10px;
}
.anticon {
  font-size: 24px;
  margin: 12px 0 16px;
  transition: all .3s;
}
ul.anticons-list li:hover .anticon {
  transform: scale(1.4);
}
.anticon-class {
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: "Lucida Console", Consolas;
  white-space: nowrap;
}
</style>
