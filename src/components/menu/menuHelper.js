export function updateCurrentOpenChain (vm, path) {
  if (vm._isMenuRoot) {
    return path
  } else {
    vm._isSubMenu && vm.xkey && path.push(vm.xkey)
    return vm.$parent && updateCurrentOpenChain(vm.$parent, path)
  }
}

export function updateSelectedKeys (vm, path) {
  if (vm._isMenuRoot) {
    return path
  } else {
    vm.xkey && path.push(vm.xkey)
    return vm.$parent && updateSelectedKeys(vm.$parent, path)
  }
}