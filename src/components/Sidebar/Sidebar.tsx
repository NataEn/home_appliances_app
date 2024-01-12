import React, { FC } from 'react'
import Navlink, { NavlinkElement } from '../Navlink/Navlink'
import { navlinks } from '../Navbar/const'

const Sidebar: FC = () => {
        return (
            <div className='sidebar'>
            <div className="nav-links">
                {navlinks.map((link: NavlinkElement) => < Navlink key={link.name} name={link.name} path={link.path} value={link.value} icon={link.icon} className='sidebar-link'/>)}
            </div>
    
        </div>)
    
}

export default Sidebar;