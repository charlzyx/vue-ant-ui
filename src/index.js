// es6 polyfill
import 'core-js/fn/array/find-index'

// ----tool
import CodeBox from './components/__site/CodeBox.vue'
// General
import Button from './components/button';
import Icon from './components/icon'
// Layout
import { Col, Row } from './components/grid'
// Navigation
import Affix from './components/affix'
import Anchor from './components/anchor'
import BackTop from './components/back-top'
import Breadcrumb from './components/breadcrumb'
import Dropdown from './components/dropdown'
import Menu from './components/menu'
// import { Select, Option, OptionGroup } from './components/select';

const ANTUI = {
    CodeBox,
    Button,
    ButtonGroup: Button.Group,
    Icon,
    Col,
    Row,
    Affix,
    Anchor,
    AnchorLink: Anchor.Link,
    BackTop,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Menu,
    MenuItem: Menu.Item,
    MenuItemGroup: Menu.ItemGroup,
    MenuDivider: Menu.Divider,
    Submenu: Menu.SubMenu,
    Dropdown,
    DropdownButton: Dropdown.Button
    // TimelineItem: Timeline.Item,
};

const install = function (Vue) {
    Object.keys(ANTUI).forEach((key) => {
        const antKey = "Ant" + key
        console.log(antKey, key)
        Vue.component(antKey, ANTUI[key])
    });

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Notice = Notice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
require('./style')
module.exports = Object.assign(ANTUI, {install});
