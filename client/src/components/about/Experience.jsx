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
    company: '@Java R&D Private Limited',
    companylink: 'https://www.javarndcorp.com/',
    startDate: 'Oct 2025',
    endDate: 'Present',
    logo: '../../../public/images/companylogo/java-rnd.png',
    color: '#ffffff',
    description:
      'Worked as a Software Engineer building full-stack features using the MERN stack, including migrating legacy frontends to React/Next.js for better SEO and performance. Implemented JWT-based authentication and RBAC with Node.js middleware, managed state using Zustand, and optimized APIs through efficient database queries. Handled MySQL to MongoDB migrations with Sequelize and Mongoose, Dockerized local environments, and deployed applications to AWS EC2.',
  },
  {
    id: 2,
    role: 'Software Developer',
    company: '@Net Legends',
    companylink: 'https://www.netlegends.in/',
    startDate: 'Apr 2024',
    endDate: 'Oct 2025',
    logo: '../../../public/images/companylogo/nl-logo.png',
    color: '#ffffff',
    description:
      'Worked as a Software Developer at Net Legends from Jun 2024 to Oct 2025, building full-stack web applications using React.js and Next.js with server-side rendering to improve performance and SEO. Translated Figma designs into responsive, cross-browser interfaces using Tailwind CSS and Bootstrap, and developed Node.js backend services integrated with MongoDB and MySQL, optimizing queries and aggregations for efficient data flow.',
  },
  {
    id: 3,
    role: 'Product Design Virtual Experience Program',
    company: '@Forage',
    companylink: 'https://www.theforage.com/',
    startDate: 'Sep 2022',
    endDate: 'Oct 2022',
    logo: '../../../public/images/companylogo/forage.png',
    color: '#ffffff',
    description:
      'Worked on AI-powered design tools, creating intuitive interfaces for machine learning applications. Collaborated with AI researchers to translate complex algorithms into user-friendly experiences.',
  },
  {
    id: 4,
    role: 'Google Cloud Fundamentals',
    company: '@Coursera',
    companylink: 'https://www.coursera.org/learn/gcp-fundamentals',
    startDate: 'Aug 2022',
    endDate: 'Sep 2022',
    logo: '../../../public/images/companylogo/google-logo.png',
    color: '#ffffff',
    description:
      'Designed user experiences for Web3 social platform, focusing on simplifying blockchain interactions. Conducted user research and created design systems that increased user engagement by 60%.',
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
          <LuSparkle color={styles?.mainTheme?.highlightedColor} />
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
              highlightedColor={styles?.mainTheme?.highlightedColor}
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
                  sx={{ bgcolor: exp.color, padding: 0.5 }}
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
