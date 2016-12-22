import Vue from 'vue'
import { getOffsetTop, scrollTo } from '../_util'
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