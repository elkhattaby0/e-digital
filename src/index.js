import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Layouts/Header';
import Homelayout from './Layouts/Homepage/Homelayout';
import Aboutlayout from './Layouts/About/Aboutlayout';
import Footer from './Layouts/Footer';

export const identify = "E-Digital";

const App = () => {
  return (
    <div className='bg-[#FFFFFF] dark:bg-[#14213D] transition-all duration-300 ease-in-out'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homelayout />} />
          <Route path="/about" element={<Aboutlayout />} />
        </Routes>
      </BrowserRouter>
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
