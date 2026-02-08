import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/home/Header';
import About from './pages/About';
import MobileMenu from './components/shared/MobileMenu';
import { useMediaQuery, useTheme } from '@mui/material';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  

  return (
    <HelmetProvider>
      <Router>
        <Header />
        {isMobile ? <MobileMenu /> : <></>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
