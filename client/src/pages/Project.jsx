import React, { useState } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../components/shared/ShinyText';
import ProjectCard from '../components/project/ProjectCard';
import '../../assets/styles/project-styles/Project.css';
import { useSelector } from 'react-redux';
import SplitText from '../components/shared/SplitText';
import Overlay from '../components/shared/Overlay';
import Footer from '../components/home/Footer';

// Demo project data - simplified structure
const projectsData = [
  {
    id: 1,
    title: 'Flight Information Display System',
    category: 'development',
    date: '2025',
    link: 'https://github.com/HarshUserethe/FIDS--Flight-Information-Display-System',
    image:
      'https://images.unsplash.com/photo-1632494425431-e8b9bc198390?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },

  {
    id: 2,
    title: 'Local Hire',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/LocalHire-Jobs-Portal',
    image:
      'https://plus.unsplash.com/premium_photo-1726797724889-54d3a3649aec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 3,
    title: 'Ward Management',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/Ward-WorkStation',
    image:
      'https://images.unsplash.com/photo-1612416364638-753a3834455c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 4,
    title: 'Amazon Clone',
    category: 'development',
    date: '2022',
    link: 'https://github.com/HarshUserethe/AmazonClone-WebApp',
    image:
      'https://plus.unsplash.com/premium_photo-1691585773465-32085c743608?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 5,
    title: 'CricWWW',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/Cricwww',
    image:
      'https://plus.unsplash.com/premium_photo-1679690884144-1f43b8f3bf41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 6,
    title: 'Farm Rental',
    category: 'design',
    date: '2023',
    link: 'https://github.com/HarshUserethe/Farm-Rental-Website',
    image:
      'https://images.unsplash.com/photo-1706862609885-7771b001daa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 7,
    title: 'Spotify Clone',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/SpotifyClone-NodeJS',
    image:
      'https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 8,
    title: 'Weather Forecast',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/Weather-Forecast-WebApp',
    image:
      'https://as1.ftcdn.net/jpg/13/63/91/54/1000_F_1363915499_egqqAg3CpqsWdmeYIj1KC0QphZfLs2eu.webp', // Replace with your actual image path
  },
  {
    id: 9,
    title: 'Barrel Fashion',
    category: 'design',
    date: '2022',
    link: 'https://github.com/HarshUserethe/BARREL-MensFashion',
    image:
      'https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg', // Replace with your actual image path
  },
  {
    id: 10,
    title: 'Awwwards Inspiration',
    category: 'design',
    date: '2022',
    link: 'https://github.com/HarshUserethe/RocketAir-Clone',
    image:
      'https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg', // Replace with your actual image path
  },
];

const ProjectPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const handleCardHover = (id) => {
    setHoveredId(id);
  };

  const handleCardLeave = () => {
    setHoveredId(null);
  };

  return (
    <>
      <Overlay />
      <Box
        className="project-page"
        sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
      >
        {/* Header Section */}
        <Box className="project-header">
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <LuSparkle color={styles?.mainTheme?.highlightedColor} />
            <Typography
              sx={{
                color: 'greenyellow',
                fontSize: '16px',
                textTransform: 'uppercase',
                fontWeight: 500,
                letterSpacing: '1px',
              }}
            >
              <ShinyText
                text="MY WORK"
                disabled={false}
                speed={1.2}
                className="shinny-txt"
                highlightedColor={styles?.mainTheme?.highlightedColor}
              />
            </Typography>
          </Box>

          <Typography
            className="headline"
            variant="h1"
            sx={{
              fontSize: '72px',
              fontWeight: '500',
              color: styles?.mainTheme?.color,
              width: '70%',
              lineHeight: '72px',
              marginTop: '2%',
              marginBottom: '4%',
              textAlign: 'center',
            }}
          >
            <SplitText
              text="Creating next level digital products"
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

          {/* Filter Buttons */}
          <Box className="filter-buttons">
            <Button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </Button>

            <Button
              className={`filter-btn ${activeFilter === 'development' ? 'active' : ''}`}
              onClick={() => setActiveFilter('development')}
            >
              Dev
            </Button>

            <Button
              className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </Button>
          </Box>
        </Box>

        {/* Projects Grid */}
        <Box className="projects-grid">
          {filteredProjects.map((project) => (
            <Box
              key={project.id}
              className={`prj-wrapper ${
                hoveredId && hoveredId !== project.id ? 'dimmed' : ''
              }`}
            >
              <ProjectCard
                id={project.id}
                project={project}
                styles={styles}
                isHovered={hoveredId === project.id}
                onHover={() => handleCardHover(project.id)}
                onLeave={handleCardLeave}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ProjectPage;
