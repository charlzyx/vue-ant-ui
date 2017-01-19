<template>
  <div :class="cls">
    <div class="ant-tabs-bar" role="tablist" tabindex="0">
      <div class="ant-tabs-nav-container ant-tabs-nav-container-scrolling">
        <template v-if="isOverflow">
          <span class="ant-tabs-tab-prev" 
            :class="{'ant-tabs-tab-btn-disabled': navOffset === 0}" 
            unselectedable
            @click="changePage(-1)">
            <span class="ant-tabs-tab-prev-icon"></span>
          </span>
          <span class="ant-tabs-tab-next" 
            :class="{'ant-tabs-tab-btn-disabled': page.current === page.count}"
            unselectedable
            @click="changePage(1)">
            <span class="ant-tabs-tab-next-icon"></span>
          </span>
        </template>
        <div ref="navwrap" class="ant-tabs-nav-wrap">
          <div class="ant-tabs-nav-scroll">
            <div ref="nav" class="ant-tabs-nav ant-tabs-animated" :style="animatedNavStyle">
              <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" :style="animatedInkBarStyle"></div>
              <div v-for="tab in panes"
                @click="changeActiveKey($event, tab.xkey)"
                :xkey="tab.xkey"
                :class="{'ant-tabs-tab-active': tab.xkey === activeKey}"
                class="ant-tabs-tab"
                :aria-selected="(tab.xkey === activeKey).toString()"
                role="tab"
                aria-disabled="false">
                {{tab.tab}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ant-tabs-content ant-tabs-content-animated" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Hub from '../_util/hubPool'

export default {
  name: 'ant-tabs',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    defaultActiveKey: String,
    onChange: {
      type: Function,
      default: () => {}
    },
    onTabClick: {
      type: Function,
      default: () => {}
    },
    type: {
      type: String,
      default: 'line'
    },
    size: {
      type: String,
      default: 'default'
    },
    tabPosition: {
      type: String,
      default: 'top'
    },
    onEdit: {
      type: Function,
      default: () => {}
    },
    hideAdd: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contentStyle () {
      let { activeKey, panes } = this
      // 添加 index 字段
      if (panes.length === 0) return
      panes = panes.map((item, index) => ({...item, index: index}))
      const currentPane = panes.find(pane => pane.xkey === activeKey)
      return {
        marginLeft: `${ currentPane ? currentPane.index * -100 : 0 * -100 }%`
      }
    },
    cls () {
      const { prefixCls, tabPosition, type } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${tabPosition}`]: true,
        [`${prefixCls}-${type}`]: true
      }
    },
    animatedNavStyle () {
      return {
        transform: `translate3d(${this.navOffset}px, 0px, 0px)`
      }
    },
    animatedInkBarStyle () {
      return {
        display: 'block',
        width: `${this.activeInk.offsetWidth}px`,
        transform: `translate3d(${this.activeInk.offsetLeft}px, 0px, 0px)`
      }
    }
  },
  data () {
    return {
      activeKey: '',
      activeInk: {
        offsetWidth: '',
        offsetLeft: '0'
      },
      navOffset: 0,
      isOverflow: false,
      page: {
        current: 0,
        count: 1,
        navwrapWidth: 1,
        navWidth: 1
      },
      panes: []
    }
  },
  methods: {
    addPanes(item) {
      this.panes.push(item)
      this.$nextTick( _ => {
        this.setPageInfo()
        this.setIsOverflow()
      })
    },
    activeDefaultKey () {
      const { defaultActiveKey, $refs } = this
      const navChildren = $refs.nav.children

      if (!defaultActiveKey && navChildren[1]) navChildren[1].click()
      const activeTab = Array.prototype.find.call(navChildren, child => {
        return child.getAttribute('xkey') === defaultActiveKey
      })
      activeTab ? activeTab.click() : navChildren[1].click()
    },
    changeActiveKey (e, key) {
      const target = e.currentTarget
      this.$set(this, 'activeInk', {
        offsetWidth: target.offsetWidth,
        offsetLeft: target.offsetLeft
      })
      this.adjustNavOffset()
      this.activeKey = key
    },
    adjustNavOffset () {
      const { navwrapWidth } = this.page
      const { navOffset, activeInk } = this
      const activeInkLeft = activeInk.offsetLeft
      const activeInkRight = activeInk.offsetLeft + activeInk.offsetWidth
      if (activeInkLeft + navOffset > 0 && navwrapWidth - navOffset - activeInkRight > 0) return

      this.navOffset = activeInkLeft + navOffset < 0
        ? -activeInkLeft
        : activeInkRight > ( navwrapWidth - navOffset )
          ? navwrapWidth - activeInkRight
          : navOffset
    },
    setPageInfo (newCurrent = false) {
      const KEYS = ['current', 'count', 'navwrapWidth', 'navWidth']
      const { current, count, navwrapWidth, navWidth } = this.page
      let newPage = {
        current: newCurrent || current,
        navwrapWidth: this.$refs.navwrap ? this.$refs.navwrap.offsetWidth : false,
        navWidth: this.$refs.nav ? this.$refs.nav.offsetWidth : false
      }
      newPage.count = newPage
        ? Math.ceil(newPage.navWidth / newPage.navwrapWidth - 1)
        : 1
      KEYS.forEach(key => {
        if (this.page[key] !== newPage[key]) this.page[key] = newPage[key]
      })
    },
    changePage (step) {
      const { current, count, navwrapWidth } = this.page
      const nextPage = current + step

      this.page.current = nextPage > count
        ? count
        : nextPage < 0
          ? 0
          : nextPage
      this.navOffset = this.page.current * (-navwrapWidth)
    },
    setIsOverflow () {
      const navwrapEl = this.$refs.navwrap
      const navEl = this.$refs.nav
      this.isOverflow =  navEl && navwrapEl
        ? navEl.offsetWidth > navwrapEl.offsetWidth
        : false
    }
  },
  mounted () {
    this.$nextTick( _ => {
      this.setPageInfo()
      this.setIsOverflow()
    })
    // this.activeDefaultKey()
  },
  created () {
    this.uid = (new Hub()).uid
    window.addEventListener('resize', this.setPageInfo)
  },
  destroyed () {
    window.removeEventListener('resize', this.setPageInfo)
  }
}
</script>