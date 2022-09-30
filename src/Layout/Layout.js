import React from 'react';
import Footer from '../componants/Footer/Footer';
import NavBar from '../componants/navBar/NavBar';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;