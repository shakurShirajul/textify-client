import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Root = () => {
    return (
        <div>
            <h1 className='text-red-100'>Shirajul  Islam</h1>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;