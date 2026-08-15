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
          padding: { xs: '40px 20px', md: '90px' },
          paddingTop: { xs: '100px', md: '200px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'start',
          gap: { xs: 4, md: 20 },
        }}
      >
        {/* first box */}
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <LuSparkle color={styles?.mainTheme?.highlightedColor} />
            <Typography
              sx={{
                color: 'greenyellow',
                fontSize: 'var(--font-size-body)',
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
                highlightedColor={styles?.mainTheme?.highlightedColor}
              />
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              color: styles?.mainTheme?.color,
              fontSize: { xs: 'var(--font-size-h2)', md: 'var(--font-size-h1)' },
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
        <Box sx={{ width: { xs: '100%', md: '55%' } }}>
          <TestimonialSlider styles={styles} />
        </Box>
      </Box>
    </>
  );
};

export default Testimonal;
