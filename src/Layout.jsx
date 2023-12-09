import React from 'react';
import Navbar from './Pages/home/Navbar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>

        <Navbar></Navbar>
        <Outlet></Outlet>
            
        </>
    );
}

export default Layout;