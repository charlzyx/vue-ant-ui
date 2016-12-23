<template>
  <div>
    <div class="ant-dropdown-link ant-dropdown-trigger">
      <slot name="link"></slot>
    </div>
    <div class="ant-dropdown">
      <slot name="overlay"></slot>
    </div>
  </div>
</template>
<script>
// trigger?: Array<'click' | 'hover'>;
// overlay: React.ReactNode;
// style?: React.CSSProperties;
// onVisibleChange?: (e: {visible: boolean}) => void;
// visible?: boolean;
// align?: Object;
// getPopupContainer?: () => HTMLElement;
// prefixCls?: string;
export default {
  name: 'ant-dropdown',
  props: {
    trigger: {
      validator: function (val) {
        return ['click', 'hover'].indexOf(val) > -1
      }
    },
    overlay: null, // 应该是没必要
    style: null,
    onVisibleChange: Function,
    visible: Boolean,
    prefixCls: {
      type: String,
      default: 'ant-dropdown'
    }
  }
}
</script>