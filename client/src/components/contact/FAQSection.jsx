import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import ShinyText from '../../components/shared/ShinyText';
import '../styles/contact-styles/FAQSection.css';
import SplitText from '../shared/SplitText';
import { useSelector } from 'react-redux';
const faqData = [
  {
    id: 1,
    question: 'What is your current role?',
    answer:
      'I take all kinds of development and designing related projects. Which includes UI/UX designing, frontend development, graphic designing.',
  },
  {
    id: 2,
    question: 'How much does it cost for a high performing website?',
    answer:
      'The cost varies depending on the complexity and requirements of the project. A basic website starts from $500, while more complex applications can range from $2000-$10000+.',
  },
  {
    id: 3,
    question: 'How long will the work take from start to finish?',
    answer:
      'Project timelines depend on scope and complexity. A simple website takes 2-3 weeks, while larger projects may take 2-3 months. I provide detailed timelines after understanding your requirements.',
  },
  {
    id: 4,
    question: 'Are you available to join as full time?',
    answer:
      'I’m currently focused on freelance and contract work, but I’m open to full-time opportunities for the right role. I’m happy to discuss what you’re looking for and see if it’s a good fit.',
  },
];

const FAQSection = () => {
  const styles = useSelector((state) => state.theme.styles);
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      className="faq-section"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      <Box className="faq-container">
        {/* Left Side - Title */}
        <Box className="faq-left">
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <LuSparkle color={styles?.mainTheme?.highlightedColor} size={20} />
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
                text="FAQS"
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
              text="Have questions?"
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
        </Box>

        {/* Right Side - Accordions */}
        <Box className="faq-right">
          {faqData.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${faq.id}`}
              onChange={handleChange(`panel${faq.id}`)}
              className="faq-accordion"
              disableGutters
              elevation={0}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${faq.id}` ? (
                    <IoChevronUp
                      sx={{ color: styles?.mainTheme?.color }}
                      className="accordion-icon"
                    />
                  ) : (
                    <IoChevronDown
                      sx={{ color: styles?.mainTheme?.color }}
                      className="accordion-icon"
                    />
                  )
                }
                className="faq-accordion-summary"
              >
                <Box className="faq-question-wrapper">
                  <Typography
                    sx={{ color: styles?.mainTheme?.color }}
                    className="faq-number"
                  >
                    {String(index + 1).padStart(2, '0')}.
                  </Typography>
                  <Typography
                    sx={{ color: styles?.mainTheme?.color }}
                    className="faq-question"
                  >
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails className="faq-accordion-details">
                <Typography className="faq-answer">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;
