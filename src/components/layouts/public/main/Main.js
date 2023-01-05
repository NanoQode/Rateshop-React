import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Main = () => {

    return (

        <>
          <Header/>
          
          <Outlet/>
          <Footer/>
        </>
    )
}

export default Main