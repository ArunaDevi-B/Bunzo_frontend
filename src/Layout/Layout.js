import React from 'react';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
import Router from '../Router/Router';

const Layout = () => {
  return (
    <div>
        <NavBar />
        <Router />
        <Footer />
    </div>
  )
}

export default Layout