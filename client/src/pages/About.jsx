import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/home-styles/About.css';
import Overlay from '../components/shared/Overlay';
import { Box, Button, ListItem, Typography } from '@mui/material';
import AboutHero from '../components/about/AboutHero';
import ChipsLoop from '../components/shared/ChipsLoop.jsx';
import Experience from '../components/about/Experience.jsx';
import MyProccess from '../components/about/MyProccess.jsx';
import MyAwards from '../components/about/MyAwards.jsx';
import Footer from '../components/home/Footer.jsx';
import HarshUseretheImage from '../assets/images/harshuseretheimage.png'
const About = () => {
  const styles = useSelector((state) => state.theme.styles);
  const themeValues = useSelector((state) => state.theme);

  const chipLogos = [
    {
      id: 1,
      label: 'React',
      image: '/images/chipsImages/React.js.svg',
    },
    {
      id: 2,
      label: 'Next.js',
      image: '/images/chipsImages/Next.js.svg',
    },
    {
      id: 3,
      label: 'Redux',
      image: '/images/chipsImages/Redux.svg',
    },
    {
      id: 4,
      label: 'Node.js',
      image: '/images/chipsImages/Node.js.svg',
    },
    {
      id: 5,
      label: 'Express.js',
      image: '/images/chipsImages/Express.js.svg',
    },
    {
      id: 6,
      label: 'MySQL',
      image: '/images/chipsImages/MySQL.svg',
    },
    {
      id: 7,
      label: 'MongoDB',
      image: '/images/chipsImages/MongoDB.svg',
    },
    {
      id: 8,
      label: 'PostgreSQL',
      image: '/images/chipsImages/PostgreSQL.svg',
    },
    {
      id: 9,
      label: 'Docker',
      image: '/images/chipsImages/Docker.svg',
    },
    {
      id: 10,
      label: 'Firebase',
      image: '/images/chipsImages/Firebase.svg',
    },
    {
      id: 11,
      label: 'AWS',
      image: '/images/chipsImages/AWS.svg',
    },
    {
      id: 12,
      label: 'GSAP',
      image: '/images/chipsImages/GSAP.svg',
    },
    {
      id: 13,
      label: 'Framer Motion',
      image: '/images/chipsImages/FramerMotion.svg',
    },
    {
      id: 14,
      label: 'Tailwind CSS',
      image: '/images/chipsImages/TailwindCSS.svg',
    },
    {
      id: 15,
      label: 'GIT',
      image: '/images/chipsImages/GIT.svg',
    },
    {
      id: 16,
      label: 'HTML',
      image: '/images/chipsImages/HTML.svg',
    },
    {
      id: 17,
      label: 'CSS',
      image: '/images/chipsImages/CSS.svg',
    },
    {
      id: 18,
      label: 'JavaScript',
      image: '/images/chipsImages/JavaScript.svg',
    },
    {
      id: 19,
      label: 'TypeScript',
      image: '/images/chipsImages/TypeScript.svg',
    },
  ];

  return (
    <>
      <Overlay />
      <Box
        className="main-about"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
        }}
      >
        <AboutHero
          imageUrl={
            HarshUseretheImage
          }
          title={'A creative developer & digital designer'}
          titleHighlight={'creative developer'}
          subtitle={'& digital designer'}
          description={
            'I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.'
          }
          circularTagText={'LETS TALK • LETS TALK • LETS TALK • '}
          fontFamily={"'Poppins', sans-serif"}
          styles={styles}
        />

        <Box className="chip-logo-wrapper">
          <ChipsLoop
            logos={chipLogos}
            speed={100}
            direction="left"
            logoHeight={100}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={styles?.mainTheme?.backgroundColor}
            ariaLabel="Technology partners"
          />
        </Box>
        <Experience />
        <MyProccess />
        <MyAwards />
        <Footer />
      </Box>
    </>
  );
};

export default About;
