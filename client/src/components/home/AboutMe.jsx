import { Box, Typography } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import '../../assets/styles/home-styles/AboutMe.css';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = ({ styles }) => {
  const textRef = useRef(null);

  const text =
    "Hi, I’m Harsh Userethe, A Software Engineer with 2 years of experience building reliable, user-centric digital products. I focus on quality, clarity, and real-world impact, working both independently and with teams to deliver solutions businesses can trust.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll('.word');

      gsap
        .timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true,
          },
        })
        .to(words, {
          color: styles?.mainTheme?.color,
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
        });
    });

    return () => ctx.revert();
  }, [styles]);

  return (
    <Box
      className="main"
      style={{
        backgroundColor: styles?.mainTheme?.backgroundColor,
        display: 'flex',
        gap: '25px',
        paddingTop: '10%',
        flexDirection: 'column',
      }}
    >
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
            text="  About Me"
            disabled={false}
            speed={1.2}
            className="shinny-txt"
             highlightedColor={styles?.mainTheme?.highlightedColor}
          />
        </Typography>
      </Box>

      <Box sx={{ padding: '24px' }}>
        <Typography
          ref={textRef}
          className="about-text"
          sx={{
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          {text.split(' ').map((word, i) => (
            <span
              key={i}
              className="word"
              style={{
                color: styles?.mainTheme?.color,
                opacity: 0.3,
                marginRight: '6px',
                display: 'inline-block',
              }}
            >
              {word}
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
