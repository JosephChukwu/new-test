import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
    return <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/About' element={<About/>} />
        <Route path='Profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
}