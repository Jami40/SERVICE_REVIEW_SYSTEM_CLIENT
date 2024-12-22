import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

const Root = () => {
    return (

        <div>
            <div className='bg-[#E3F2D6] lg:px-12 py-2'>
            <Navbar></Navbar>
            </div>
            <div className='bg-[#272E39]'>
            
            <Outlet></Outlet>
            
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;