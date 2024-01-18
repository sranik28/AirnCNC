import React from 'react';
import NavBer from '../components/Shared/navBer/NavBer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBer/>
            <Outlet/>
        </div>
    );
};

export default Root;