import { Typography, Box, Button } from '@mui/material';
import { LuSparkle, LuCodepen } from 'react-icons/lu';
import React, { useState } from 'react';
import '../../assets/styles/home-styles/Testimonal.css';
import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';
import TestimonialSlider from '../shared/TestimonialSlider';
import ShinyText from '../shared/ShinyText';
import SplitText from '../shared/SplitText';

const Testimonal = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);

  return (
    <>
      {/* SECTION HEADER */}
      <Box
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          padding: '90px',
          paddingTop: '200px',
          display: 'flex',
          justifyContent: 'start',
          gap: 20,
        }}
      >
        {/* first box */}
        <Box sx={{ width: '25%' }}>
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
                text="Testimonials"
                disabled={false}
                speed={1.2}
                className="shinny-txt"
              />
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              color: styles?.mainTheme?.color,
              fontSize: '48px',
              marginTop: '10px',
              fontFamily: 'clash_display',
            }}
          >
            <SplitText
              key="what-other-says"
              text="What others say"
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

          <Typography sx={{ color: '#8c8c9d', marginTop: '5px' }}>
            I've worked with some amazing people over the years, here is what
            they have to say about me.
          </Typography>
        </Box>

        {/* second box */}
        <Box sx={{ width: '55%' }}>
          <TestimonialSlider styles={styles} />
        </Box>
      </Box>
    </>
  );
};

export default Testimonal;
