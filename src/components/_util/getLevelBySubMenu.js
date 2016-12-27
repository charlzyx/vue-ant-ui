export default function getLevelBySubMenu (vm, level) {
  // 通过 SubMenu 来获取层级
  vm._isSubMenu && level++
  if (vm._isMenuRoot) {
    return level
  } else {
    return vm.$parent && getLevelBySubMenu(vm.$parent, level)
  }
}