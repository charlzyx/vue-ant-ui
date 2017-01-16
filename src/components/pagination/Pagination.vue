<template>
  <ul :class="cls" unselectable="unselectable">
      <span :class="`${prefixCls}-total-text`">
        <slot name="showTotal"></slot>
      </span>
      <li title="上一页" :class="[`${prefixCls}-prev`, {[`${prefixCls}-disabled`]: current < 2}]" @click="jumpTo(current - 1)"><a></a></li>

      <template v-if="simple">
        <li title="1/5" :class="`${prefixCls}-simple-pager`" >
          <input type="text" :value="simpleCurrent" @keydown.enter="simpleGoto">
            <span class="ant-pagination-slash">／</span>{{pageCount}}
          </li> 
      </template>
      <template v-else>
        <li title="第一页" :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === 1}]" v-show="pageCount" @click="jumpTo(1)"><a>1</a></li>

        <transition name="move">
          <li :title="`向前 ${padding} 页`" :class="[`${prefixCls}-jump-prev`]" v-show="preArrowShow" @click="jumpTo(current - padding)"><a></a></li>
        </transition>

        <li :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === page}]" v-for="page in pages" @click="jumpTo(page)"><a>{{page}}</a></li></li>

        <transition name="move">
          <li :title="`向后 ${padding} 页`" :class="[`${prefixCls}-jump-next`]" v-show="nextArrowShow" @click="jumpTo(current + padding)"><a></a></li>
        </transition>

        <li :title="`最后一页: ${pageCount}`" :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === pageCount}]" v-show="pageCount > 1 && current <= pageCount" @click="jumpTo(pageCount)"><a>{{pageCount}}</a></li>
      </template>

      <li title="下一页" :class="[`${prefixCls}-next`, {[`${prefixCls}-disabled`]: current >= pageCount}]" @click="jumpTo(current + 1)"><a></a></li>
      <div class="ant-pagination-options" v-show="showQuickJumper">
        <div class="ant-pagination-options-quick-jumper">
          跳转到
          <input v-model="gotoPage" type="number" @keydown.enter="goTo">
        </div>
      </div>
    <!-- todo select -->
  </ul>
</template>

<script>
export default {
  name: 'ant-pagination',
  props: {
    /**
    * 当前页码
    * @type {Number}
    */
    defaultCurrent: {
      type: Number,
      default: 1
    },
    /**
    * 数据总条数
    * @default 0
    * @type {Object}
    */
    total: {
      type: Number,
      default: 0
    },
    /**
    * 每页条数
    * @default 0
    * @type {Object}
    */
    pageSize: {
      type: Number,
      default: 10
    },
    /**
    * 页码改变时触发回调
    * @default noop
    * @type {Function}
    */
    onChange: {
      type: Function,
      default: () => {}
    },
    /**
    * 是否可以改变pageSize
    * @type {Object}
    */
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    /**
    * pageSize 变化的回调
    * @default noop
    * @type {Object}
    */
    onShowSizeChange: {
      type: Function,
      default: () => {}
    },
    /**
    * 是否可以快速跳转至某页
    * @default false
    * @type {Object}
    */
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    /**
    * 分页尺寸 [small]时是小分页
    * @type {Object}
    */
    size: {
      type: String,
      default: ''
    },
    /**
    * 当添加该属性时，显示为简单分页
    * @type {Boolean}
    */
    simple: {
      type: Boolean,
      default: false
    },
    /**
    * 分内页class前缀
    * @default 'pagination'
    * @type {String}
    */
    prefixCls: {
      type: String,
      default: 'ant-pagination'
    },
    /**
    * 当前页两边页码数
    * @type {Object}
    */
    padding: {
      type: Number,
      default: 2
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    },
    preArrowShow () {
      return (this.current - this.padding) > 2
    },
    nextArrowShow () {
      return (this.current + this.padding) < (this.pageCount - 1)
    },
    cls () {
      const { prefixCls, size, simple } = this
      return {
        [`${prefixCls}`]: true,
        ['mini']: size === 'small',
        [`${prefixCls}-simple`]: simple
      }
    }
  },
  data() {
    return {
      inputPage: '',
      pages: [],
      current: this.defaultCurrent || 1,
      gotoPage: '',
      simpleCurrent: this.defaultCurrent || 1
    }
  },
  created() {
    this.updatePages()
  },
  watch: {
    current (newVal) {
      this.simpleCurrent = newVal
      this.updatePages()
    },
    pageCount () {
      this.updatePages()
    },
    pageSize (newVal, oldVal) {
      if (newVal > this.pageCount) {
        this.current = 1
      }
      this.updatePages()
      this.onShowSizeChange && this.onShowSizeChange(newVal, oldVal)
    }
  },
  methods: {
    updatePages () {
      const { current, padding, pageCount } = this
      let i
      let pages = []
      for (i = current - padding; i <= current + padding; i++) {
        // 跳过 [1]
        if (i < 2) continue
        if (i >= pageCount) break
        pages.push(i)
      }
      this.pages = pages
    },
    jumpTo (page) {
      if (typeof page !== 'number') page = parseInt(page, 10)
      if (page < 1 || page > this.pageCount || page === this.current) return false
      this.onChange && this.onChange(page)
      this.current = page
    },
    goTo () {
      const { gotoPage, pageCount, jumpTo } = this
      if (gotoPage > pageCount || gotoPage < 1) return
      jumpTo(gotoPage)
    },
    simpleGoto () {
      const { gotoPage, pageCount, jumpTo } = this
      if (gotoPage > pageCount || gotoPage < 1) return
      this.current = this.simpleCurrent
      jumpTo(gotoPage)
    }
  }
}
</script>
