import { Box, IconButton, ListItem } from '@mui/material';
import React from 'react';
import '../../assets/styles/header.css';
import { LuMoon, LuSun } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
// import { useState } from "react"; // REMOVE useState
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setStyles } from '../../redux/themeSlice'; // Import setStyles if needed
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const location = useLocation();
  const themeValues = useSelector((state) => state.theme);
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const dispatch = useDispatch();
  const notify = () => toast('Feature is currently in testing!');

   const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        width: "50%",
        backgroundColor: styles.mainTheme.backgroundColor,
        boxShadow:`1px 2px 8px ${styles.mainTheme.headerShadowColor}`,
        opacity:"90%",
        borderRadius: "500px",

        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=200", // scroll distance
          scrub: true,
        },
      });

    
    });

    return () => ctx.revert(); // cleanup
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());

    // Optionally update styles if the logic is in Redux
    dispatch(
      setStyles({
        mainTheme: {
          backgroundColor: themeValues.mode === 'dark' ? '#f6f9fb' : '#0a0b0c', // swapped for post-toggle
          color: themeValues.mode === 'dark' ? '#000' : '#fff',
        },
        activeClass: {
          activeColor: themeValues.mode === 'dark' ? '#000' : '#fff',
          nonActiveColor: themeValues.mode === 'dark' ? 'gray' : '#5d5d68',
        },
        icon: {
          color: themeValues.mode === 'dark' ? '#000' : '#fff',
        },
      })
    );
  };

  return (
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", position:"relative", top:30}}>
      <Box
      className="nav-container"
      
      sx={{
        // backgroundColor: styles.mainTheme.backgroundColor,
        backgroundColor: "transparent",
        color: styles.mainTheme.color,
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
        sx={{ backgroundColor: styles.mainTheme.backgroundColor }}
        ref={headerRef}
      >
        <Box
          sx={{
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: '500',
            color: styles.mainTheme.color,
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
                    ? styles.activeClass.activeColor
                    : styles.activeClass.nonActiveColor,
              }}
            >
              {location.pathname === nav.path && <Box className="active"></Box>}
              {nav.name}
            </ListItem>
          ))}
        </Box>
        {/* <IconButton onClick={notify}>
          {themeValues.mode === "light" ? (
            <LuMoon
              onClick={handleThemeToggle}
              className="icons"
              style={{ color: styles.icon.color }}
            />
          ) : (
            <LuSun
              onClick={handleThemeToggle}
              className="icons"
              style={{ color: styles.icon.color }}
            />
          )}
        </IconButton> */}

        <IconButton onClick={notify}>
          <LuMoon className="icons" style={{ color: '#fff' }} />
        </IconButton>
      </Box>
    </Box>
  </Box>
  );
};

export default Header;
