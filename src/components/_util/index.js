export const contains = (() => {
  return Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value);
})();

export const curryingContains = (arr) => (val) => contains(arr, val);

/**
 * 获取滚动高度或者宽度
 * @method getScroll
 * @param  {[type]}  w     [description]
 * @param  {[type]}  isTop       [description]
 * @return {[type]}        [description]
 * $author kokoro
 * date 2016-08-06
 */
// export function getScroll(w, isTop) {
//   let ret = w[`page${isTop ? 'Y' : 'X'}Offset`];
//   const method = `scroll${isTop ? 'Top' : 'Left'}`;
//   if (typeof ret !== 'number') {
//     const d = w.document;
//     // ie6,7,8 standard mode
//     ret = d.documentElement[method];
//     if (typeof ret !== 'number') {
//       // quirks mode
//       ret = d.body[method];
//     }
//   }
//   return ret;
// }

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

/**
 * 获取偏移值
 * @method getOffset
 * @param  {[type]}  element [description]
 * $author kokoro
 * date 2016-08-06
 */
// export function getOffset(element) {
//   const rect = element.getBoundingClientRect();
//   const body = document.body;
//   const clientTop = element.clientTop || body.clientTop || 0;
//   const clientLeft = element.clientLeft || body.clientLeft || 0;
//   const scrollTop = getScroll(window, true);
//   const scrollLeft = getScroll(window);

//   return {
//     top: rect.top + scrollTop - clientTop,
//     left: rect.left + scrollLeft - clientLeft
//   };
// }



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

export function getRequestAnimationFrame() {
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
