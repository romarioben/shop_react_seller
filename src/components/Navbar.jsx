import React from 'react'
import  NavLink  from './NavLink';

function Navbar({currentPage}) {
    // console.log('Current page:',"NavBar", currentPage);
    return (
        <nav id="sidebar" className="sidebar-wrapper">

            <div className="shop-profile">
                <p className="mb-1 fw-bold text-primary">Walmart</p>
                <p className="m-0">Los Angeles, California</p>
            </div>
            

            
            <div className="sidebarMenuScroll">
                <ul className="sidebar-menu">
                    <NavLink ln="/dashboard" classtext="bi bi-pie-chart" text="Dashboard" currentPage={currentPage}/>
                    
                    <NavLink ln="/commandes" classtext="bi bi-command" text="Commandes" currentPage={currentPage}/>
                    <NavLink ln="/products" classtext="bi bi-box-seam" text="Products" currentPage={currentPage}/>
                    <NavLink ln="/profile" classtext="bi bi-person-square" text="Profile" currentPage={currentPage}/>
                    <NavLink ln="/settings" classtext="bi bi-gear" text="Settings" currentPage={currentPage}/>

                </ul>
            </div>
            

        </nav>
                    
    )
}

export default Navbar
