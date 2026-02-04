import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';
import '../../assets/styles/about-styles/MyAwards.css';
import { useSelector } from 'react-redux';
const MyAwards = () => {
 
  const styles = useSelector((state) => state.theme.styles);
  const awards = [
    {
      id: 1,
      title: 'Star Performer of the Year',
      date: 'MAY 2021',
    },
    {
      id: 2,
      title: 'Best Beginner Hack',
      date: 'APR 2021',
    },
    {
      id: 3,
      title: 'Sketch Webpage Contest Winner',
      date: 'NOV 2020',
    },
    {
      id: 4,
      title: 'Best Space App Winner',
      date: 'SEP 2021',
    },
  ];

  return (
    <Box className="my-awards-section" sx={{backgroundColor: styles?.mainTheme?.backgroundColor}}>
      <Container maxWidth="xl">
        <Box className="awards-container">
          {/* Left Side - Header */}
          <Box className="awards-header">
            <Box className="awards-label">
              <LuSparkle className="sparkle-icon" />
              <Typography variant="overline" className="label-text">
                <ShinyText
                  text="AWARDS"
                  disabled={false}
                  speed={1.2}
                  className="shinny-txt"
                />
              </Typography>
            </Box>
            <Typography variant="h2" className="awards-title" sx={{color: styles?.mainTheme?.color}}>
              Awards &<br />Recognition
            </Typography>
          </Box>

          {/* Right Side - Awards List */}
          <Box className="awards-list" sx={{borderBottom: styles?.mainTheme?.color}}>
            {awards.map((award, index) => (
              <Box
                sx={{color: styles?.mainTheme?.color,  borderBottom: `1px solid ${styles?.mainTheme?.color}`, }}
                key={award.id}
                className={`award-item ${index !== awards.length - 1 ? 'with-divider' : ''}`}
              >
                <Typography variant="h6" className="award-title" sx={{color: styles?.mainTheme?.color}}>
                  {award.title}
                </Typography>
                <Typography variant="body2" className="award-date" sx={{color: styles?.mainTheme?.color}}>
                  {award.date}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAwards;