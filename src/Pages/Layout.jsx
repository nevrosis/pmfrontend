import React from 'react'
import Header from './Header'
import Nav from './Nav'
// import Content from './Content';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout