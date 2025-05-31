import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Whislist from '../pages/whislist/Whislist'
import Admin from '../pages/admin/Admin'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whislist' element={<Whislist/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
