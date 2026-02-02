import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import '../../assets/styles/about-styles/aboutus.css';
import AnimatedButton from '../shared/AnimatedButton';

const AboutHero = ({
  imageUrl,
  title = 'A creative developer',
  titleHighlight = 'creative developer',
  subtitle = '& digital designer',
  description = 'I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.',
  circularTagText,
  fontFamily,
  styles

}) => {

  // const createCircularText = (text) => {
  //   const chars = text.split('');
  //   const radius = 45;
  //   const angleStep = 360 / chars.length;

  //   return chars.map((char, i) => {
  //     const angle = i * angleStep - 90;
  //     const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  //     const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

  //     return (
  //       <text
  //         key={i}
  //         x={x}
  //         y={y}
  //         fill="#000"
  //         fontSize={tagFontSize}
  //         fontWeight="600"
  //         textAnchor="middle"
  //         dominantBaseline="middle"
  //         transform={`rotate(${angle + 90}, ${x}, ${y})`}
  //         style={{ fontFamily }}
  //       >
  //         {char}
  //       </text>
  //     );
  //   });
  // };

  const renderTitle = () => {
    const parts = title.split(titleHighlight);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="title-highlight">{titleHighlight}</span>
            )}
          </React.Fragment>
        ))}
        <br />
        {subtitle}
      </>
    );
  };

  return (
   <>

   </>
  );
};

export default AboutHero;
