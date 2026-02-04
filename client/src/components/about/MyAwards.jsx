import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';
import '../../assets/styles/about-styles/MyAwards.css';

const MyAwards = () => {
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
    <Box className="my-awards-section">
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
            <Typography variant="h2" className="awards-title">
              Awards &<br />Recognition
            </Typography>
          </Box>

          {/* Right Side - Awards List */}
          <Box className="awards-list">
            {awards.map((award, index) => (
              <Box
                key={award.id}
                className={`award-item ${index !== awards.length - 1 ? 'with-divider' : ''}`}
              >
                <Typography variant="h6" className="award-title">
                  {award.title}
                </Typography>
                <Typography variant="body2" className="award-date">
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