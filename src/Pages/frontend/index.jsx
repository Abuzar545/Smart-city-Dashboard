import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import EventAdding from './EventAdding'

function Frontend() {
  return (
   <Routes>
    <Route path='/About' element={<About/>}/>
    <Route path='/EventAdding' element={<EventAdding/>}/>
   </Routes>
  )
}

export default Frontend