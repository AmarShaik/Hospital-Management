import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Patients from './pages/Patients'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import SinglePatient from './pages/SinglePatient'
import SingleDoctor from './pages/SingleDoctor'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<SingleDoctor/>}/>
      <Route path='/patients' element={<Patients/>}/>
      <Route path='/patients/:id' element={<SinglePatient/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
