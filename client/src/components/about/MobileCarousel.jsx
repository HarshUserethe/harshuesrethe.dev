import '../../assets/styles/about-styles/MobileCarousel.css';
import React, { useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { LuChevronDown } from 'react-icons/lu';

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

/* ================= Styled MUI ================= */

const Accordion = styled(MuiAccordion)(() => ({
  borderRadius: '16px',
  marginBottom: '14px',
  overflow: 'hidden',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  flexDirection: 'row',
  padding: '18px 22px',
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    color: '#6cff6c',
    transition: 'transform 0.3s ease',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.Mui-expanded`]: {
    transform: 'rotate(180deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '0 22px 20px',
}));

/* ================= Component ================= */

const MobileCarousel = ({ steps = [], styles }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  if (!steps.length) return null;

  return (
    <Box className="mobile-accordion-wrapper">
      {steps.map((step, index) => {
        const isExpanded = expandedId === step.id;

        return (
          <Accordion
            key={step.id}
            expanded={isExpanded}
            onChange={() => handleToggle(step.id)}
            className="process-accordion"
          >
            <AccordionSummary
              expandIcon={<LuChevronDown size={20} />}
              className="process-summary"
              sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
            >
              <div className="process-left">
                <span
                  className="process-icon"
                  style={{ color: styles?.mainTheme?.highlightedColor }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Typography
                  sx={{ color: styles?.mainTheme?.color }}
                  className="process-title"
                >
                  {step.title}
                </Typography>
              </div>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: styles?.mainTheme?.backgroundColor,
                color: styles?.mainTheme?.epicColor,
              }}
              className="process-details"
            >
              <Typography>{step.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default MobileCarousel;
