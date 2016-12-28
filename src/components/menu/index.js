import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuDivider from './MenuDivider'
import MenuItemGroup from './MenuItemGroup'
import SubMenu from './SubMenu'

Menu.Item = MenuItem
Menu.ItemGroup = MenuItemGroup
Menu.SubMenu = SubMenu
Menu.Divider = MenuDivider
require('./style')
export default Menu