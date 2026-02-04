import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { LuPencilLine, LuLayoutTemplate, LuCode, LuShield, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import '../../assets/styles/about-styles/MyProccess.css';
import ShinyText from '../shared/ShinyText';
import { LuSparkle } from 'react-icons/lu';
import { useSelector } from 'react-redux';
const MyProcess = ({ autoScrollInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
 const styles = useSelector((state) => state.theme.styles);

  const steps = [
    {
      id: '01',
      title: 'Research',
      description: 'Understanding the problem, one step at a time. Deep dive into details.',
      icon: LuLayoutTemplate,
    },
    {
      id: '02',
      title: 'Wireframe',
      description: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
      icon: LuPencilLine,
    },
    {
      id: '03',
      title: 'Design',
      description: 'The most fun part of all - adding pizzaz to the wireframes and bring it to life.',
      icon: LuLayoutTemplate,
    },
    {
      id: '04',
      title: 'Development',
      description: 'The design may be Lunal but it needs to be functional and practical. Development is key.',
      icon: LuCode,
    },
    {
      id: '05',
      title: 'Quality Assurance',
      description: 'Website load times, SEO, optimization, etc., well-tested quality of the site.',
      icon: LuShield,
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, autoScrollInterval);

      return () => clearInterval(interval);
    }
  }, [isHovered, autoScrollInterval, steps.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.process-card')?.offsetWidth || 0;
      const gap = 24; // 24px gap between cards
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? steps.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  return (
    <Box className="my-process-section" sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}>
      <Container maxWidth="xl">
        <Box className="process-header">
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
              text="Steps I follow"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
            />
          </Typography>
        </Box>
          <Typography variant="h2" className="main-title" sx={{color: styles?.mainTheme?.color}}>
            My Design Process
          </Typography>
          <Typography variant="body1" className="subtitle">
            I have worked with some of the most innovative industry leaders to help build their top-notch products.
          </Typography>
        </Box>

        <Box className="carousel-container">
          <IconButton 
            className="nav-button nav-button-left" 
            onClick={handlePrev}
            aria-label="Previous step"
          >
          <LuChevronLeft color={styles?.mainTheme?.color} />
          </IconButton>

          <Box
            ref={scrollContainerRef}
            className="process-cards-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Box
                  sx={{backgroundColor: styles?.mainTheme?.mdpCardBackground}}
                  key={step.id}
                  className={`process-card ${index === currentIndex ? 'active' : ''}`}
                >
                  <Box className="card-content">
                    <Box className="icon-wrapper" sx={{background: styles?.mainTheme?.mdpIconWrapper}}>
                      <IconComponent className="step-icon" />
                    </Box>
                    <Typography variant="h5" className="step-title" sx={{color: styles?.mainTheme?.color}}>
                      {step.id}. {step.title}
                    </Typography>
                    <Typography variant="body2" className="step-description">
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <IconButton 
            className="nav-button nav-button-right" 
            onClick={handleNext}
            aria-label="Next step"
          >
            <LuChevronRight color={styles?.mainTheme?.color}  />
          </IconButton>
        </Box>

        <Box className="progress-indicators">
          {steps.map((_, index) => (
            <Box
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MyProcess;