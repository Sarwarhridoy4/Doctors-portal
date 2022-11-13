import React from 'react';
import NavBar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;