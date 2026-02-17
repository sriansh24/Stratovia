import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import WebsiteBuilder from './pages/WebsiteBuilder/WebsiteBuilder';
// import About from './pages/About'
// import Contact from './pages/Contact'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-builder" element={<WebsiteBuilder />} />
      </Routes>
  )
}