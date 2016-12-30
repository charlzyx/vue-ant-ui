function noop () {}

export const contains = (() => {
  return Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value);
})();

export const curryingContains = (arr) => (val) => contains(arr, val);

export function getScroll(target, top){
  if (typeof window === 'undefined') {
    return 0;
  }

  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';
  const isWindow = target === window;

  let ret = isWindow ? target[prop] : target[method];
  // ie6,7,8 standard mode
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
}

function getTargetRect(target) {
  return target !== window ?
    target.getBoundingClientRect() :
    { top: 0, left: 0, bottom: 0 };
}

export function getOffset(element, target) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top +
      scrollTop - clientTop,
    left: elemRect.left - targetRect.left +
      scrollLeft - clientLeft,
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return () => {};
  }
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame;
  }
  const prefix = ['moz', 'ms', 'webkit'].filter(key => `${key}RequestAnimationFrame` in window)[0];
  return prefix
    ? window[`${prefix}RequestAnimationFrame`]
    : callback => setTimeout(callback, 1000 / 60);
}

const reqAnimFrame = getRequestAnimationFrame()
const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return cc / 2 * t * t * t + b
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b
}

export function getOffsetTop (element) {
  if (!element || !element.getClientRects().length) return 0

  const rect = element.getBoundingClientRect();
  if ( rect.width || rect.height ) {
    const docElem = element.ownerDocument && element.ownerDocument.documentElement;
    return  rect.top - docElem.clientTop;
  } else {
    return rect.top;
  }
}

export function scrollTo(href, target = window, callback = noop) {
  const scrollTop = getScroll(target, true)
  let targetScrollTop
  if (href === '#') {
    targetScrollTop = 0
  } else {
    const targetElement = document.getElementById(href.substring(1))
    if (!targetElement) return
    const offsetTop = getOffsetTop(targetElement)
    targetScrollTop = scrollTop + offsetTop
  }
  const startTime = Date.now()
  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450))
    if (time < 450) {
      reqAnimFrame(frameFunc)
    } else {
      callback()
    }
  }
  reqAnimFrame(frameFunc)
  history.pushState(null, '', href)
}

export function getLevel (vm, level) {
  // 通过 SubMenu 来获取层级
  if (vm._isSubMenu || vm._isItemGroup) level++
  // 返回 level 条件为 
  // 根菜单 || 没有父元素(只是为了不报错)
  return vm._isMenuRoot || !vm.$parent
    ? level 
    : getLevel(vm.$parent, level)
}