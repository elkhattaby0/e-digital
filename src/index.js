import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Layouts/Header';
import Homelayout from './Layouts/Homepage/Homelayout';
import Aboutlayout from './Layouts/About/Aboutlayout';
import Serviceslayout from './Layouts/Services/Serviceslayout';
import Footer from './Layouts/Footer';
import Newsletter from './Layouts/Homepage/Newsletter';
import Projectslayout from './Layouts/Projects/Projectslayout';
import Technologieslayout from './Layouts/Technologies/Technologieslayout';
import Pricinglayout from './Layouts/Pricing/Pricinglayout';

export const identify = "E-Digital";

const App = () => {
  return (
    <div className='bg-[#FFFFFF] dark:bg-[#14213D] transition-all duration-300 ease-in-out'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homelayout />} />
          <Route path="/about" element={<Aboutlayout />} />
          <Route path="/services" element={<Serviceslayout />} />
          <Route path="/projects" element={<Projectslayout />} />
          <Route path="/tools" element={<Technologieslayout />} />
          <Route path="/pricing" element={<Pricinglayout />} />
        </Routes>
      </BrowserRouter>
      <Newsletter />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
