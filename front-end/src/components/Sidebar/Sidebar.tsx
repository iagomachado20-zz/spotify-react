import './Siderbar.scss';
import React from 'react';
import Logo from '../Logo/Logo';
import { Menu } from './Menu/Menu';
import { UserArea } from './UserArea/UserArea';

const Sidebar: React.FC = () =>
    <aside className="sidebar">
        <div>
            <Logo width={131} height={40}/>
            <Menu/>
        </div>
        <UserArea/>
    </aside>

export default Sidebar;    