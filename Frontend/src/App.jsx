import { useState } from 'react'
import './App.css'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
        <Header username={"riya"}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
