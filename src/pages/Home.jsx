import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}
export default Home
