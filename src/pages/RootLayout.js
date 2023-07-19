import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from '../components/Head'
import AddressBar from '../components/AddressBar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Navbar from '../components/Navbar'

function RootLayout() {
  return (
    
    <div>
      <AddressBar/>
       <Navbar/>
         <Head/>
         <main>
          <Outlet/>
         </main>
         <Footer/>
    <Copyright/>
    </div>
  )
}

export default RootLayout