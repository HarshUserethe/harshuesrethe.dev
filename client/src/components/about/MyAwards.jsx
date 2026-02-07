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
      title: 'Achieved Milestones in the Google Facilitator Program',
      date: 'MAY 2023',
    },
    {
      id: 2,
      title: 'Codebite Runner Up – State Level Web Dev Hackathon',
      date: 'JAN 2023',
    },
    {
      id: 3,
      title: 'Contributed to 5+ open-source projects for Hacktoberfest',
      date: 'OCT 2022',
    },
    {
      id: 4,
      title: 'Earned 15+ Badges in Google Cloud Arcade Games',
      date: 'DEC 2021',
    },
  ];

  return (
    <Box
      className="my-awards-section"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      <Container maxWidth="xl">
        <Box className="awards-container">
          {/* Left Side - Header */}
          <Box className="awards-header">
            <Box className="awards-label">
              <LuSparkle
                color={styles?.mainTheme?.highlightedColor}
                className="sparkle-icon"
              />
              <Typography variant="overline" className="label-text">
                <ShinyText
                  text="AWARDS"
                  disabled={false}
                  speed={1.2}
                  className="shinny-txt"
                  highlightedColor={styles?.mainTheme?.highlightedColor}
                />
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className="awards-title"
              sx={{ color: styles?.mainTheme?.color }}
            >
              Awards &<br />
              Recognition
            </Typography>
          </Box>

          {/* Right Side - Awards List */}
          <Box
            className="awards-list"
            sx={{ borderBottom: styles?.mainTheme?.color }}
          >
            {awards.map((award, index) => (
              <Box
                sx={{
                  color: styles?.mainTheme?.color,
                  borderBottom: `1px solid ${styles?.mainTheme?.color}`,
                }}
                key={award.id}
                className={`award-item ${index !== awards.length - 1 ? 'with-divider' : ''}`}
              >
                <Typography
                  variant="h6"
                  className="award-title"
                  sx={{ color: styles?.mainTheme?.color }}
                >
                  {award.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="award-date"
                  sx={{ color: styles?.mainTheme?.color }}
                >
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
