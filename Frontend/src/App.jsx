import { useState } from 'react'
import './App.css'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
