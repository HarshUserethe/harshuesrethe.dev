import React from 'react'
import { useSelector } from 'react-redux';
import '../assets/styles/home-styles/About.css';
import Overlay from '../components/shared/Overlay';
import { Box, Button, ListItem, Typography } from '@mui/material';

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



    </Box>
    </>
  )
}

export default About