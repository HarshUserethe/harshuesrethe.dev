import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../assets/styles/aboutme.css';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';

const AboutMe = ({ styles }) => {
  console.log(styles);
  return (
    <Box
      className="main"
      style={{
        backgroundColor: styles?.mainTheme?.backgroundColor,
        display: 'flex',
        gap: '25px',
        paddingTop: '10%',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <LuSparkle color="greenyellow" />
        <Typography
          sx={{
            color: 'greenyellow',
            fontSize: '16px',
            textTransform: 'uppercase',
          }}
          variant="h3"
          color="initial"
        >
          <ShinyText
            text="  About Me"
            disabled={false}
            speed={1.2}
            className="shinny-txt"
          />
        </Typography>
      </Box>

      <Box sx={{ padding: '24px' }}>
        <Typography
          className="about-text"
          sx={{ color: styles?.mainTheme?.color, textAlign: 'center' }}
        >
          I'm Harsh Userethe, with over 5+ years of experience in design and
          development, with a strong focus on producing high-quality and
          impactful digital experiences. I have worked with some of the most
          innovative industry leaders to help build their top-notch products.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
