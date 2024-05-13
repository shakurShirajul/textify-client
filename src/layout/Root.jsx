import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto '>
                <div className='sticky'>
                    <Nav></Nav>
                </div>
                <div className='mt-20 '>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;