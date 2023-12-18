
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Socials from './pages/Socials'

const App = () => {
  return (
  <main className='bg-slate-300/20 h-full'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<Socials/>} />
        </Routes>
        </Router>
  </main>
  )
}

export default App
