import React from 'react';
import { MenuList, listMenu } from '../../../models/menu.model';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {

    const menuItems: MenuList[] = listMenu;

    return <nav className="menu">
           {
                menuItems.map((item, index) =>
                    <NavLink
                        activeClassName="active"
                        key={index} 
                        to={item.link}> 
                        <i className="icon-label material-icons">{ item.icon }</i> 
                        { item.label }
                    </NavLink>
                )
           }
    </nav>

};
    
    

export { Menu };    