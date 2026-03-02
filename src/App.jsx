import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import Help from './pages/Help/Help';
import Pricing from './pages/Pricing/Pricing';
import StratoviaAiro from './pages/StratoviaAiro/StratoviaAiro';
import WebsiteBuilder from './pages/WebsiteBuilder/WebsiteBuilder';
// import About from './pages/About'
// import Contact from './pages/Contact'

export default function App() {
  return (
      <Routes>
        {/* =============== Nav Links =============== */}
        <Route path="/" element={<Navigate to="/stratovia/home" />} />
        <Route path="/stratovia/home" element={<Home />} />
        <Route path="/stratovia/blog" element={<Blog />} />
        <Route path="/stratovia/contact-us" element={<ContactUs />} />
        <Route path="/stratovia/help" element={<Help />} />
        <Route path="/stratovia/pricing" element={<Pricing />} />
        <Route path="/stratovia/stratovia-airo" element={<StratoviaAiro />} />

        {/* =============== Inner Page Links =============== */}
        <Route path="/stratovia/website-builder" element={<WebsiteBuilder />} />
      </Routes>
  )
}