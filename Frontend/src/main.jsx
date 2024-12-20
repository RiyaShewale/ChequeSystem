import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Store/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'


let router=createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element=<Profile/>/> */}
      <Route path='' element={<App/>}>
        {/* <Route path='/' element=<Home/>/> */}
         <Route path='/adminDashboard' element=<AdminDashboard/>/>
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
