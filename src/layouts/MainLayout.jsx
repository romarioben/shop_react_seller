import React from 'react'
import Navbar from '../components/Navbar';
import AppHeader from '../components/AppHeader';

function MainLayout({currentPage}) {
    // console.log('Current page:',"MainLay", currentPage);
    // This component serves as the main layout for the application, including the Navbar.
    return (
        <>
        <AppHeader />
        <Navbar currentPage={currentPage} />
        </>
    )
}

export default MainLayout
