import Vue from 'vue'
import { getScroll, getRequestAnimationFrame } from '../_util'
function noop () {}

const reqAnimFrame = getRequestAnimationFrame()
const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return cc / 2 * t * t * t + b
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b
}

function getOffsetTop (element) {
  if (!element || !element.getClientRects().length) return 0

  const rect = element.getBoundingClientRect();
  if ( rect.width || rect.height ) {
    const docElem = element.ownerDocument && element.ownerDocument.documentElement;
    return  rect.top - docElem.clientTop;
  } else {
    return rect.top;
  }
}

function scrollTo(href, target = window, callback = noop) {
  const scrollTop = getScroll(target, true)
  const targetElement = document.getElementById(href.substring(1))
  if (!targetElement) return
  const offsetTop = getOffsetTop(targetElement)
  const targetScrollTop = scrollTop + offsetTop
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

const AnchorBus = new Vue({
  data: () => ({
    links: [],
    refs: {},
    activeAnchor: '#'
  }),
  methods: {
    addLink (link, ref) {
      if (this.links.indexOf(link) === -1) {
        this.links.push(link)
        this.refs[link] = ref
      }
    },
    scrollTo (href) {
      scrollTo(href)
    },
    getCurrentAnchor(bounds = 5) {
      let activeAnchor = ''
      if (typeof document === 'undefined') {
        return activeAnchor
      }

      const linksPositions = this.links
        .map(section => {
          const target = document.getElementById(section.substring(1))
          if (target && getOffsetTop(target) < bounds) {
            const top = getOffsetTop(target)
            if (top <= bounds) {
              return {
                section,
                top,
                bottom: top + target.clientHeight
              }
            }
          }
          return null
        })
        .filter(section => section !== null)

      if (linksPositions.length) {
        const maxSection = linksPositions.reduce((prev, curr) => curr.top > prev.top ? curr : prev)
        return maxSection.section
      }
      return ''
    }
  }
})
export default AnchorBus