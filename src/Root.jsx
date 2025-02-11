import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

const Root = () => {
    return (

        <div>
            <div className=''>
            <Navbar></Navbar>
            </div>
            <div className=''>
            
            <Outlet></Outlet>
            
        </div>
        <div className=''>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;