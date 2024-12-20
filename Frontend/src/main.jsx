import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Store/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'
import Auth from './components/Auth/Auth.jsx'


let router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<App/>}>
        <Route path='/adminDashboard' element=<AdminDashboard/>/>
        <Route path='/auth/login' element={<Auth flag={0}/>}/>
        <Route path='/auth/register' element={<Auth flag={1}/>}/>
      </Route>
      {/* <Route path='/room/:roomId' element=<Room/>/> */}
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
)
