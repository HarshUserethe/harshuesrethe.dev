import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/home/Header';
import About from './pages/About';
import MobileMenu from './components/shared/MobileMenu';
import { useMediaQuery, useTheme } from '@mui/material';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile)
  
  return (
    <Router>
      <Header />
      {isMobile ? <MobileMenu /> : <></>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default App;
