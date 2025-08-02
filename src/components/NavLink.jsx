import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({ln, classtext, text, currentPage}) {
    // This component renders a navigation link with an icon and text
    // `ln` is the link path, `classtext` is the class for the icon, and `text` is the display text for the link.
    // It uses React Router's Link component for navigation.


    let isActive = currentPage === ln;
    // console.log('Current page:', "NavLink", currentPage, 'isActive:', isActive);
    return (
        <li { ...isActive ? { className: 'active current-page' } : {} }>
            <Link to={ln}>
                <i className={classtext}></i>
                <span className="menu-text">{text}</span>
            </Link>
            
        </li>
    )
}



export default NavLink
