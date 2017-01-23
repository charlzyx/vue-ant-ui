<template>
  <div :class="cls">
    <div class="ant-tabs-bar" role="tablist" tabindex="0">
      <div style="float: right">
        <div class="ant-tabs-extra-content">
          <slot name="exContent"></slot>
        </div>
      </div>
      <div class="ant-tabs-nav-container" :class="{'ant-tabs-nav-container-scrolling': !isVertical}">
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
              <div v-for="pane in tabs"
                @click="tabClick($event, pane.xkey)"
                :xkey="pane.xkey"
                :class="{
                  'ant-tabs-tab-active': pane.xkey === activeKey,
                  'ant-tabs-tab-disabled': pane.disabled }"
                class="ant-tabs-tab"
                :aria-selected="(pane.xkey === activeKey).toString()"
                role="tab"
                :aria-disabled="pane.disabled">
                <i :class="`anticon anticon-${pane.icon}`" v-if="pane.icon"></i>
                <span v-if="!pane.icon && pane.iconHTML" v-html="pane.iconHTML"></span>
                {{pane.tab}}
                <i class="anticon anticon-close" @click="deletePaneByKey(pane.xkey)" v-show="type === 'editable-card' && pane.xkey === activeKey"></i>
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
    }
  },
  computed: {
    isVertical () {
      return this.tabPosition === 'left' || this.tabPosition === 'right'
    },
    tabs () {
      return this.panes.map(item => {
        return {
          xkey: item.xkey,
          tab: item.tab,
          disabled: item.disabled,
          icon: item.icon,
          iconHTML: item.iconHTML
        }
      })
    },
    contentStyle () {
      let { isVertical, activeKey, panes } = this
      // 添加 index 字段
      if (panes.length === 0) return
      panes = panes.map((item, index) => ({...item, index: index}))
      const currentPane = panes.find(pane => pane.xkey === activeKey)
      let style = isVertical
        ? ''
        : {marginLeft: `${ currentPane ? currentPane.index * -100 : 0 * -100 }%`}
      return style
    },
    cls () {
      const { prefixCls, tabPosition, type, size } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${tabPosition}`]: true,
        [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
        [`${prefixCls}-${type}`]: true,
        [`${prefixCls}-card`]: type.indexOf('card') > -1,
        [`${prefixCls}-mini`]: size === 'small'
      }
    },
    animatedNavStyle () {
      return {
        transform: `translate3d(${this.navOffset}px, 0px, 0px)`
      }
    },
    animatedInkBarStyle () {
      const { isVertical, activeInk } = this
      let style = { display: 'block' }
      if (isVertical) {
        style.height = `${activeInk.offsetHeight}px`
        style.transform = `translate3d(0px, ${activeInk.offsetTop}px, 0px)`
      } else {
        style.width = `${activeInk.offsetWidth}px`
        style.transform = `translate3d(${activeInk.offsetLeft}px, 0px, 0px)`
      }
      return style
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
      this.reCalcuTabs()
      this.onEdit(item.xkey, true)
    },
    deletePaneByKey (xkey) {
      const { panes } = this
      console.log('before', this.panes.map(item => item.xkey))
      const NEWPANES = panes.filter(item => item.xkey !== xkey)
      this.panes = [...NEWPANES]
      console.log(this.panes.map(item => item.xkey))
      this.reCalcuTabs()
      this.onEdit(xkey, false)
    },
    activeDefaultKey () {
      const { defaultActiveKey, $refs, changeActiveKey } = this
      const navChildren = $refs.nav.children
      // 第[0]个为 ink-bar
      const firstTab = navChildren[1]
      if (!defaultActiveKey && firstTab) changeActiveKey(firstTab, firstTab.getAttribute('xkey'))

      const activeTab = Array.prototype.find
        .call(navChildren, child => child.getAttribute('xkey') === defaultActiveKey)
      activeTab && changeActiveKey(activeTab, activeTab.getAttribute('xkey'))
    },
    tabClick (e, key) {
      this.onTabClick(key)
      const target = e.currentTarget
      if (this.activeKey === key) return
      this.changeActiveKey(target, key)
    },
    changeActiveKey (el, key) {
      const { onChange, adjustNavOffset, activeKey } = this
      this.$set(this, 'activeInk', {
        offsetWidth: el.offsetWidth,
        offsetHeight: el.offsetHeight,
        offsetLeft: el.offsetLeft,
        offsetTop: el.offsetTop
      })
      adjustNavOffset()
      onChange(key)
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
    reCalcuTabs () {
      this.$nextTick( _ => {
        this.setPageInfo()
        this.setIsOverflow()
      })
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
    setIsOverflow () {
      const navwrapEl = this.$refs.navwrap
      const navEl = this.$refs.nav
      this.isOverflow =  navEl && navwrapEl
        ? navEl.offsetWidth > navwrapEl.offsetWidth
        : false
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
    }
  },
  mounted () {
    this.reCalcuTabs()
    this.$nextTick( _ => {
      this.activeDefaultKey()
    })
  },
  created () {
    window.addEventListener('resize', this.reCalcuTabs)
  },
  destroyed () {
    window.removeEventListener('resize', this.reCalcuTabs)
  }
}
</script>