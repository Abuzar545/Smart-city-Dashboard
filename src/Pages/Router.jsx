import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Frontend from './frontend/Index'


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