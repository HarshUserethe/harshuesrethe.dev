import React from 'react';
import { Box, Typography } from '@mui/material';
import '../../assets/styles/project-styles/ProjectCard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

const ProjectCard = ({ id, project, isHovered, onHover, onLeave, styles }) => {
  const { image, title } = project;
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleMarginTop = () => {
    if (id % 2 === 0 || isMobile) {
      return '80px';
    }
  };

  const handleNavigate = (project_id) => {
    navigate(`/project/${project_id}`);
  };

  return (
    <>
      <Box
        key={project.id}
        onClick={() => handleNavigate(project.id)}
        sx={{ marginTop: handleMarginTop() }}
        className={`prj-inner project-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <img src={image} alt={title} className="project-card-image" />
      </Box>
      <Box className="project-card-info">
        <Box>
          <Typography
            sx={{
              color: styles?.mainTheme?.color,
              fontSize: 'var(--font-size-large)',
              fontWeight: 'var(--font-weight-regular)',
              textTransform: 'capitalize',
            }}
            variant="h5"
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              color: '#a9a9bd',
              fontSize: 'var(--font-size-small)',
              textTransform: 'capitalize',
            }}
            variant="body1"
          >
            {project.category}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: '#a9a9bd', fontSize: 'var(--font-size-small)' }}
            variant="body1"
          >
            {project.date}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
