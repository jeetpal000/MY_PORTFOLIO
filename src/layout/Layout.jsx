import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Contact from '../components/Contact'
import CopyrightPage from '../pages/CopyrightPage'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Contact />
    <CopyrightPage />
    </>
  )
}

export default Layout