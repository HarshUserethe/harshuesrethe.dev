import React from 'react';

import '../assets/styles/home.css';
import { Box, Button, ListItem, Typography } from '@mui/material';
import { LuArrowUpRight, LuHand } from 'react-icons/lu';
import LogoLoop from '../components/shared/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { useSelector } from 'react-redux';
import AboutMe from '../components/home/AboutMe';
import MyProjects from '../components/home/MyProjects';
import AreaOfExpertise from '../components/home/AreaOfExpertise';
import ChipsLoop from '../components/shared/ChipsLoop';
import Testimonal from '../components/home/Testimonal';
import Footer from '../components/home/Footer';
import SplitText from '../components/shared/SplitText';
import Overlay from '../components/shared/Overlay';

const Home = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);

  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    {
      node: <SiTypescript />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
    {
      node: <SiTailwindcss />,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com',
    },
  ];

  // Alternative with image sources
  const imageLogos = [
    {
      text: 'Designing',
      src: '',
      alt: 'Designing',
      href: 'https://company1.com',
    },
    { text: 'Graphics', src: '', alt: 'UI/UX', href: 'https://company2.com' },
    { text: 'Backend', src: '', alt: 'System', href: 'https://company3.com' },
  ];

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

  const buttonClass =
    'knowme-button' +
    ' ' +
    (themeValues.mode === 'light' ? 'light-mode' : 'dark-mode');

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };



  return (
    <>
      <Overlay />
      <Box
        className="main"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box className="inner-wrapper">
          <Typography
            variant="h1"
            sx={{
              fontSize: '16px',
              color: styles?.mainTheme?.color,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LuHand
              className="hand-wave"
              size={20}
              style={{ color: '#b5fe6c' }}
            />{' '}
            Hey! It's me Harsh,
          </Typography>
          {/* <Typography
            className="headline"
            variant="h1"
            sx={{
              fontSize: '72px',
              fontWeight: '500 !important',
              color: styles?.mainTheme?.color,
              width: '80%',
              lineHeight: '72px',
              marginTop: '2%',
              marginBottom: '4%',
            }}
          >
            Crafting{' '}
            <span style={{ color: '#b5fe6c' }}>purpose driven experiences</span>{' '}
            that inspire & engage.
            
          </Typography> */}
          <Typography
            className="headline"
            variant="h1"
            sx={{
              fontSize: '72px',
              fontWeight: '500',
              color: styles?.mainTheme?.color,
              width: '80%',
              lineHeight: '72px',
              marginTop: '2%',
              marginBottom: '4%',
              textAlign: 'center',
            }}
          >
            <SplitText
              text="Crafting purpose driven experiences that inspire & engage."
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

        <Box
          className="mobile-bottom"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            className="mobile-bottom-inner"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '15px',
            }}
          >
            {/* LINK PAGE */}
            <Box
              sx={{ color: '#8c8c9d', display: 'flex' }}
              className="all-links"
            >
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.linkedin.com/in/harshuserethe/')
                }
              >
                LinkedIn <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://github.com/HarshUserethe')
                }
              >
                GitHub <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.behance.net/harshuserethe')
                }
              >
                Benance <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.credly.com/users/harsh-userethe')
                }
              >
                Credly <LuArrowUpRight size={20} />
              </ListItem>
            </Box>

            {/* SHORT SLOGAN */}
            <Box
              className="short-slogan-box"
              sx={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: '16px', color: '#8c8c9d' }}
              >
                I work with brands globally to build pixel-perfect, engaging,
                and accessible digital experiences that drive results and
                achieve business goals.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={buttonClass}
              >
                Know Me Better
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Logos Animation Container */}
        <Box
          className="emp-space-divider"
          style={{
            backgroundColor: styles?.mainTheme?.backgroundColor,
            borderColor: themeValues.mode === 'light' ? '#dfdfdf' : '#262626',
          }}
        ></Box>
      </Box>
      <LogoLoop
        logos={imageLogos}
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
      <AboutMe styles={styles} />
      <MyProjects />
      <AreaOfExpertise />
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
      <Testimonal />
      <Footer />
    </>
  );
};

export default Home;
