import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import '../../assets/styles/about-styles/aboutus.css';
import AnimatedButton from '../shared/AnimatedButton';
import CircularText from '../shared/CircularText';
 


const AboutHero = ({
  imageUrl,
  title = 'A creative developer',
  titleHighlight = 'creative developer',
  subtitle = '& digital designer',
  description = 'I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.',
  circularTagText = 'LET’S TALK • LET’S TALK • LET’S TALK •',
  fontFamily,
  styles,
}) => {
  const renderTitle = () => {
    const parts = title.split(titleHighlight);
    return (
      <>
        {parts.map((part, index) => (
          <Box className="title-wrapper" key={index}>
            <span className="title-non-highlight"> {part}</span>
            {index < parts.length - 1 && (
              <span className="title-highlight">{titleHighlight}</span>
            )}
          </Box>
        ))}
        <br />
        <span className="title-non-highlight">{subtitle}</span>
      </>
    );
  };

  return (
    <Box className="about-hero">
      <Box className="hero-grid">
        {/* LEFT IMAGE */}
        <Box className="hero-image-wrapper">
          <img src={imageUrl} alt="Profile" className="hero-image" />

          {/* Circular Tag */}
          
            <CircularText
              text="LET'S*TALK*LET'S*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
           
        </Box>

        {/* RIGHT CONTENT */}
        <Box className="hero-content">
          <Typography component="h1" className="hero-title">
            {renderTitle()}
          </Typography>

          <Typography className="hero-description" sx={{ fontFamily }}>
            {description}
          </Typography>

          {/* Animated button */}
          <Box className="button-wrapper">
            <AnimatedButton
              color={styles?.mainTheme?.color}
              label={'My Resume'}
              hoverLabel={'My Resume'}
              btnWidth={'fit-content'}
              hyperLink={'/about'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHero;
