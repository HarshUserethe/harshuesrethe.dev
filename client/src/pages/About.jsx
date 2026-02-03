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
         imageUrl = {'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'}
         title = {'A creative developer'}
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
