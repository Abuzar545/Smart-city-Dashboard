import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import EventAdding from './EventAdding'
import Dashboard from '../Dashboard'

function Frontend() {
  return (
   <Routes>
    <Route path='/About' element={<About/>}/>
    <Route path='/EventAdding' element={<EventAdding/>}/>
    <Route path='/*' element={<Dashboard/>}/>
   </Routes>
  )
}

export default Frontend