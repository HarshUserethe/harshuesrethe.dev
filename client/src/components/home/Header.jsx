import { Box, IconButton, ListItem } from '@mui/material';
import React, { useEffect } from 'react';
import '../../assets/styles/home-styles/Header.css';
import { LuMoon, LuSun } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
// import { useState } from "react"; // REMOVE useState
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setStyles } from '../../redux/themeSlice'; // Import setStyles if needed
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const location = useLocation();
  const themeValues = useSelector((state) => state.theme);
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const dispatch = useDispatch();
  const notify = () => toast('Feature is currently in testing!');
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 600px)', () => {
      gsap.to(headerRef.current, {
        width: '50%',
        opacity: '90%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=200', // scroll distance
          scrub: 1, // Smoothly animate/catch up with scroll
        },
      });
    });

    return () => mm.revert(); // cleanup matchMedia
  }, [styles]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const mode = themeValues.mode || 'dark';

  // Glassmorphism background color based on theme mode
  const glassBg = mode === 'light' 
    ? 'rgba(247, 249, 250, 0.8)' 
    : 'rgba(11, 11, 15, 0.75)';
  
  const glassBorder = mode === 'light'
    ? '1px solid rgba(0, 0, 0, 0.06)'
    : '1px solid rgba(255, 255, 255, 0.08)';

  const glassShadow = mode === 'light'
    ? '0 10px 30px rgba(0, 0, 0, 0.08)'
    : '0 12px 40px rgba(0, 0, 0, 0.4)';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 30,
      }}
    >
      <Box
        className="nav-container"
        sx={{
          backgroundColor: 'transparent',
          color: styles?.mainTheme?.color,
          zIndex: '99',
          position: 'fixed',
          top: { xs: '20px', sm: '0px' },
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: 'auto', sm: '10dvh' },
          padding: { xs: '0px', sm: '15px' },
        }}
      >
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <Box
          className="nav-inner-container"
          sx={{
            width: { xs: '90%', sm: '85%' },
            maxWidth: { xs: '380px', sm: 'none' },
            height: { xs: '55px', sm: '100%' },
            padding: { xs: '0 24px', sm: '25px' },
            backgroundColor: { xs: glassBg, sm: styles?.mainTheme?.backgroundColor },
            backdropFilter: { xs: 'blur(16px)', sm: 'none' },
            WebkitBackdropFilter: { xs: 'blur(16px)', sm: 'none' },
            border: { xs: glassBorder, sm: 'none' },
            borderRadius: '500px',
            boxShadow: { xs: glassShadow, sm: `1px 2px 8px ${styles?.mainTheme?.headerShadowColor}` },
          }}
          ref={headerRef}
        >
          <Box
            sx={{
              fontSize: 'var(--font-size-large)',
              cursor: 'pointer',
              fontWeight: 'var(--font-weight-medium)',
              color: styles?.mainTheme?.color,
            }}
          >
            HU
          </Box>
          <Box
            className="navigation-container"
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {navItems.map((nav) => (
              <ListItem
                key={nav.name}
                component={Link}
                to={nav.path}
                className="nav-list"
                sx={{
                  color:
                    location.pathname === nav.path
                      ? styles?.activeClass?.activeColor
                      : styles?.activeClass?.nonActiveColor,
                }}
              >
                {location.pathname === nav.path && (
                  <Box className="active"></Box>
                )}
                {nav.name}
              </ListItem>
            ))}
          </Box>
          <IconButton>
            {themeValues.mode === 'light' ? (
              <LuMoon
                onClick={handleThemeToggle}
                className="icons"
                style={{ color: styles?.icon?.color }}
              />
            ) : (
              <LuSun
                onClick={handleThemeToggle}
                className="icons"
                style={{ color: styles?.icon?.color }}
              />
            )}
          </IconButton>

          {/*<IconButton onClick={notify}>
          <LuMoon className="icons" style={{ color: '#fff' }} />
        </IconButton>*/}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
