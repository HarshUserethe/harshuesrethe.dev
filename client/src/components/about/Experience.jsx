import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Collapse, Link } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';
import { useSelector } from 'react-redux';
import '../../assets/styles/about-styles/Expeience.css';

// Demo data - this will be configurable when connected to database
const experienceData = [
  {
    id: 1,
    role: 'Software Engineer',
    company: '@OneShield Software',
    companylink: 'https://google.com',
    startDate: 'Aug 2022',
    endDate: 'Present',
    logo: 'https://via.placeholder.com/48/4A90E2/FFFFFF?text=OS',
    color: '#4A90E2',
    description:
      'Led development of enterprise insurance solutions, implementing microservices architecture and improving system performance by 40%. Collaborated with cross-functional teams to deliver features for Fortune 500 clients.',
  },
  {
    id: 2,
    role: 'Founder',
    company: '@Design and Code',
    companylink: 'https://google.com',
    startDate: 'Jan 2021',
    endDate: 'Present',
    logo: 'https://via.placeholder.com/48/00D4FF/FFFFFF?text=DC',
    color: '#00D4FF',
    description:
      'Founded a digital agency specializing in web development and UI/UX design. Built and managed a team of designers and developers, delivering 50+ projects for clients across various industries.',
  },
  {
    id: 3,
    role: 'Design Engineer',
    company: '@BlackboxAI',
    companylink: 'https://google.com',
    startDate: 'Feb 2025',
    endDate: 'Mar 2025',
    logo: 'https://via.placeholder.com/48/888888/FFFFFF?text=BB',
    color: '#888888',
    description:
      'Worked on AI-powered design tools, creating intuitive interfaces for machine learning applications. Collaborated with AI researchers to translate complex algorithms into user-friendly experiences.',
  },
  {
    id: 4,
    role: 'UI/UX Designer',
    company: '@Social3',
    companylink: 'https://google.com',
    startDate: 'Aug 2022',
    endDate: 'Sep 2023',
    logo: 'https://via.placeholder.com/48/5B6EFF/FFFFFF?text=S3',
    color: '#5B6EFF',
    description:
      'Designed user experiences for Web3 social platform, focusing on simplifying blockchain interactions. Conducted user research and created design systems that increased user engagement by 60%.',
  },
  {
    id: 5,
    role: 'Frontend Developer',
    company: '@TechCorp',
    companylink: 'https://google.com',
    startDate: 'Jan 2021',
    endDate: 'Jul 2022',
    logo: 'https://via.placeholder.com/48/FF6B6B/FFFFFF?text=TC',
    color: '#FF6B6B',
    description:
      'Developed responsive web applications using React and TypeScript. Optimized application performance and implemented modern UI patterns, reducing load times by 50%.',
  },
  {
    id: 6,
    role: 'Web Developer',
    company: '@StartupLabs',
    companylink: 'https://google.com',
    startDate: 'Jun 2020',
    endDate: 'Dec 2020',
    logo: 'https://via.placeholder.com/48/4ECDC4/FFFFFF?text=SL',
    color: '#4ECDC4',
    description:
      'Built MVPs for early-stage startups, working with various technologies including React, Node.js, and MongoDB. Helped launch 5 successful products from concept to production.',
  },
];

const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const styles = useSelector((state) => state.theme.styles);
  const initialDisplayCount = 4;

  const displayedExperiences = showMore
    ? experienceData
    : experienceData.slice(0, initialDisplayCount);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box
      className="experience-container"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      {/* Left Section */}
      <Box className="experience-left">
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
              text="Work History"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
            />
          </Typography>
        </Box>
        <Typography
          sx={{ color: styles?.mainTheme?.color }}
          className="experience-title"
        >
          Experience
        </Typography>
        <Typography className="experience-description">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box className="experience-right">
        <Box className={`experience-list ${showMore ? 'expanded' : ''}`}>
          {displayedExperiences.map((exp, index) => (
            <Box key={exp.id} className="experience-item-wrapper">
              <Box className="experience-item">
                <Avatar
                  src={exp.logo}
                  className="experience-avatar"
                  sx={{ bgcolor: exp.color }}
                >
                  {exp.company.charAt(1)}
                </Avatar>
                <Box className="experience-details">
                  <Typography
                    className="experience-role"
                    onClick={() => handleToggleExpand(exp.id)}
                    sx={{ cursor: 'pointer', color: styles?.mainTheme?.color }}
                  >
                    {exp.role}
                  </Typography>
                  <Link href={exp.companylink} target="_blank" rel="noopener">
                    <Typography className="experience-company">
                      {exp.company}
                    </Typography>
                  </Link>
                </Box>
                <Typography className="experience-duration">
                  {exp.startDate} — {exp.endDate}
                </Typography>
              </Box>

              <Collapse in={expandedId === exp.id} timeout="auto" unmountOnExit>
                <Box className="experience-description-box">
                  <Typography className="experience-description-text">
                    {exp.description}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>

        {experienceData.length > initialDisplayCount && (
          <Box className="show-more-container">
            <Button
              sx={{ color: styles?.mainTheme?.color }}
              className="show-more-btn"
              onClick={handleShowMore}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Experience;
