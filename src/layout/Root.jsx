import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;