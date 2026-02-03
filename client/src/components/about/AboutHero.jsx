import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import '../../assets/styles/about-styles/aboutus.css';
import AnimatedButton from '../shared/AnimatedButton';
import CircularText from '../shared/CircularText';
import SplitText from '../shared/SplitText';

const AboutHero = ({
  imageUrl,
  title,
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
          <Typography
            component="h1"
            className="hero-title"
            sx={{
              fontSize: '72px',
              fontWeight: '500',
              color: styles?.mainTheme?.color,
              width: '100%',
              lineHeight: '72px',
              marginTop: '2%',
              marginBottom: '4%',
              textAlign: 'center',
              fontFamily: 'clash_display',
            }}
          >
            <SplitText
              text={title}
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
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
