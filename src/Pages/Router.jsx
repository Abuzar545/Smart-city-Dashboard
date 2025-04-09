import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Frontend from '/Final Year Project/Smart-city-Dashboard/src/Pages/frontend/Index.jsx'


const Routers = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/*' element={<Frontend/>}/>

    </Routes>
    
    </>
  )
}

export default Routers