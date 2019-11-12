import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationCategories } from '../../models/menu.model';

// Style
import './MenuNavigation.scss';

const navigationMenu = () => (
    <nav className="navigation-menu">
        { navigationCategories.map(( item, index ) => 
            <NavLink
                key={index} 
                className="link"
                activeClassName="selected"
                to={item.link}> 
                { item.label } 
            </NavLink>
        )}
    </nav>
)    


export default navigationMenu;