import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/home-styles/About.css';
import Overlay from '../components/shared/Overlay';
import { Box, Button, ListItem, Typography } from '@mui/material';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  const styles = useSelector((state) => state.theme.styles);
  const themeValues = useSelector((state) => state.theme);

  return (
    <>
      <Overlay />
      <Box
        className="main-about"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
        }}
      >
        <AboutHero
         imageUrl = {'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
         title = {'A creative developer & digital designer'}
         titleHighlight = {'creative developer'}
         subtitle = {'& digital designer'}
         description = {'I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.'}
         circularTagText = {'LETS TALK • LETS TALK • LETS TALK • '}
         fontFamily = {"'Poppins', sans-serif"}
         styles={styles}
         />
      </Box>
    </>
  );
};

export default About;
