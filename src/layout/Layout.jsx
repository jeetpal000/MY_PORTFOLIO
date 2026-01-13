import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import CopyrightPage from '../pages/CopyrightPage'
import ContactPage from '../pages/ContactPage'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <ContactPage />
    <CopyrightPage />
    </>
  )
}

export default Layout