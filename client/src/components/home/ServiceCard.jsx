import React, { useState, useEffect } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import { LuChevronDown } from 'react-icons/lu';

// Create a shared state outside the component
let globalExpandedId = null;
let globalSetters = new Set();

const ServiceCard = ({ icon: Icon, title, description, id, themeColor }) => {
  const [expandedId, setExpandedId] = useState(null);

  // Register this component's setter
  useEffect(() => {
    const setter = (newId) => {
      setExpandedId(newId);
    };
    globalSetters.add(setter);

    // Sync with global state
    setExpandedId(globalExpandedId);

    return () => {
      globalSetters.delete(setter);
    };
  }, []);

  const handleToggle = (id) => {
    const newExpandedId = globalExpandedId === id ? null : id;
    globalExpandedId = newExpandedId;

    // Update all ServiceCard instances
    globalSetters.forEach((setter) => setter(newExpandedId));
  };

  const isExpanded = expandedId === id;

  return (
    <Box
      sx={{
        backgroundColor: themeColor?.backgroundColor,
        borderRadius: '8px',
        padding: '20px 60px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: themeColor?.hoverColor,
        },
      }}
    >
      <Box
        onClick={() => handleToggle(id)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Icon size={24} color={themeColor?.color} />
          <Typography
            variant="h6"
            sx={{
              color: themeColor?.color,
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: '#fff',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            padding: '4px',
          }}
        >
          <LuChevronDown size={20} />
        </IconButton>
      </Box>
      <Collapse in={isExpanded}>
        <Typography
          sx={{
            color: '#999',
            fontSize: '14px',
            marginTop: '16px',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default ServiceCard;
