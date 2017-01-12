export default {
  computed: {
    rootHub () {
      return this.$parent.rootHub
    },
    selectedKeys () {
      return this.rootHub.selectedKeys
    },
    openKeys () {
      return this.rootHub.openKeys
    },
    focusSubmenu () {
      return this.rootHub.focusSubmenu
    },
    mode () {
      return this.rootHub.mode
    },
    prefixCls () {
      return this.rootHub.prefixCls || 'ant-menu'
    },
    selected () {
      return this.selectedKeys.indexOf(this.xkey) > -1
    }
  }
}