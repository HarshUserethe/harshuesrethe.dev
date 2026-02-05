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
    title: 'Aora - Mobile App',
    category: 'development',
    date: '2023',
    image:
      'https://images.unsplash.com/photo-1632494425431-e8b9bc198390?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 2,
    title: 'Code Editor',
    category: 'design',
     date: '2023',
    image:
      'https://plus.unsplash.com/premium_photo-1726797724889-54d3a3649aec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'development',
     date: '2023',
    image:
      'https://images.unsplash.com/photo-1612416364638-753a3834455c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    category: 'design',
     date: '2023',
    image:
      'https://plus.unsplash.com/premium_photo-1691585773465-32085c743608?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image path
  },
  {
    id: 5,
    title: 'Social Media App',
    category: 'development',
     date: '2023',
    image: '/images/project5.jpg', // Replace with your actual image path
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'design',
     date: '2023',
    image: '/images/project6.jpg', // Replace with your actual image path
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

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCardHover = (id) => {
    setHoveredId(id);
  };

  const handleCardLeave = () => {
    setHoveredId(null);
  };

  return (
   <>
    <Overlay />
    <Box className="project-page" sx={{backgroundColor: styles?.mainTheme?.backgroundColor}}>
      {/* Header Section */}
      <Box className="project-header">
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <LuSparkle color="greenyellow" />
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
            Live
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
