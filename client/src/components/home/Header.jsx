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
    const ctx = gsap.context(() => {
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

    return () => ctx.revert(); // cleanup
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
          // backgroundColor: styles.mainTheme.backgroundColor,
          backgroundColor: 'transparent',
          color: styles?.mainTheme?.color,
          zIndex: '99',
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
            backgroundColor: styles?.mainTheme?.backgroundColor,
            borderRadius: '500px',
            boxShadow: `1px 2px 8px ${styles?.mainTheme?.headerShadowColor}`,
          }}
          ref={headerRef}
        >
          <Box
            sx={{
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: '500',
              color: styles?.mainTheme?.color,
            }}
          >
            HU
          </Box>
          <Box className="navigation-container">
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
