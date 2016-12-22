# Vue Ant UI2

进度:
- ### *General*
  - <done><router-link to="/button">Button 按钮</router-link></done>
    - <todo>Menu.Button</todo>
  - <done><router-link to="/icon">Icon 图标</router-link></done>
- ### *Layout*
  - <done><router-link to="/grid">Grid 栅格</router-link></done>
- ### *Navigation*
  - <done><router-link to="/affix">Affix 固钉</router-link></done>
  - <done><router-link to="/anchor">Anchor 锚点</router-link></done>
  - <done><router-link to="/backtop">BackTop 回到顶部</router-link></done>
  - <done><router-link to="/breadcrumb">Breadcrumb 面包屑</router-link></done>
  - <todo>Dropdown 下拉菜单</todo>
  - <todo>Menu 导航菜单</todo>
  - <todo>Pagination 分页</todo>
  - <todo>Steps 步骤条</todo>
  - <todo>Tabs 标签页</todo>
- ### *DataEntry*
  - <todo>AutoComplete 自动完成</todo>
  - <todo>Checkbox 多选框</todo>
  - <todo>Cascader 级联选择</todo>
  - <todo>DatePicker 日期选择框</todo>
  - <todo>Form 表单</todo>
  - <todo>Input 输入框</todo>
  - <todo>InputNumber 数字输入框</todo>
  - <todo>Mention 提及</todo>
  - <todo>Radio 单选框</todo>
  - <todo>Rate 评分</todo>
  - <todo>Select 选择器</todo>
  - <todo>Slider 滑动输入条</todo>
  - <todo>Switch 开关</todo>
  - <todo>TimePicker 时间选择框</todo>
  - <todo>Transfer 穿梭框</todo>
  - <todo>TreeSelect 树选择</todo>
  - <todo>Upload 上传</todo>
- ### *Data Display*
  - <todo>Badge 徽标数</todo>
  - <todo>Card 卡片</todo>
  - <todo>Carousel 走马灯</todo>
  - <todo>Collapse 折叠面板</todo>
  - <todo>Calendar 日历</todo>
  - <todo>Popover 气泡卡片</todo>
  - <todo>Table 表格</todo>
  - <todo>Tag 标签</todo>
  - <todo>Timeline 时间轴</todo>
  - <todo>Tooltip 文字提示</todo>
  - <todo>Tree 树形控件</todo>
- ### *Feedback*
  - <todo>Alert 警告提示</todo>
  - <todo>Message 全局提示</todo>
  - <todo>Modal 对话框</todo>
  - <todo>Notification 通知提醒框</todo>
  - <todo>Popconfirm 气泡确认框</todo>
  - <todo>Progress 进度条</todo>
  - <todo>Spin 加载中</todo>
- ### *Other*
  - <todo>LocaleProvider 国际化</todo>
<script>
export default {
  components: {
    todo: {
      render(h) {
        return h('div', {
          class: 'todo'
        }, this.$slots.default)
      }
    },
    done: {
      render(h) {
        return h('div', {
          class: ['todo', 'done']
        }, this.$slots.default)
      }
    }
  }
}
</script>
<style scoped>
  .todo{
    position: relative;
    padding-left: 20px;
    display: inline-block;
    height: 20px;
  }
  .todo:before{
    display: block;
    content: ' ';
    position: absolute;
    left: 0;
    top: 4px;
    width: 14px;
    height: 14px;
    border: 1px solid #000;
    border-radius: 2px;
    margin-right: 4px;
  }
  .todo.done:after{
    position: absolute;
    display: block;
    content: ' ';
    left: 0;
    top: 6px;
    width: 6px;
    height: 14px;
    border-style: solid;
    border-width: 0 2px 2px 0;
    border-color: #000;
    transform: rotate(45deg) translate3d(0px, -7px , 0)
  }
</style>
