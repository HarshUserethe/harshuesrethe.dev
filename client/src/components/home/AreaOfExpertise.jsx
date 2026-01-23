import { Typography, Box, Button } from '@mui/material';
import { LuSparkle, LuCodepen } from 'react-icons/lu';
import React, { useState } from 'react';
import '../../assets/styles/home-styles/AreaOfExpertise.css';
import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';
import ShinyText from '../shared/ShinyText';
import SplitText from '../shared/SplitText';
const AreaOfExpertise = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);
  const [dynamicImage, setDynamicImage] = useState(
    'https://plus.unsplash.com/premium_photo-1696824306557-bf54fc73e2fb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

  const services = [
    {
      id: '01',
      icon: LuCodepen,
      title: 'Development',
      description:
        'Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.',
      pic: 'https://plus.unsplash.com/premium_photo-1696824306557-bf54fc73e2fb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '02',
      icon: LuCodepen,
      title: 'UI/UX Design',
      description:
        'Designing user-centric, modern interfaces that shapes how the audience interacts with the product.',
      pic: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '03',
      icon: LuCodepen,
      title: 'Branding',
      description:
        'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',
      pic: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '04',
      icon: LuCodepen,
      title: 'Graphic Design',
      description:
        'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',
      pic: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const handleServiceCard = (e) => {
    setDynamicImage(e.pic);
  };

  return (
    <>
      {/* SECTION HEADER */}
      <Box
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          padding: '90px',
          paddingTop: '150px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <LuSparkle color="greenyellow" />
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
              text="Speciality"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
            />
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: styles?.mainTheme?.color,
            fontSize: '48px',
            marginTop: '10px',
            fontFamily: 'clash_display',
          }}
        >
          <SplitText
            key="areas-expertise"
            text="Areas of Expertise"
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

        {/* <Typography sx={{ color: "#8c8c9d", marginTop: "5px" }}>
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </Typography> */}
      </Box>

      {/* Content Part */}
      <Box
        className="areaOfExpContentWrapper"
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: styles?.mainTheme?.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          paddingBottom: '100px',
        }}
      >
        <Box
          sx={{
            width: '625px',
            height: '355px',
            backgroundColor: styles?.mainTheme?.backgroundColor,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {services.map((item, index) => (
            <Box
              sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
              key={index}
              onClick={() => handleServiceCard(item)}
            >
              <ServiceCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                id={item.id}
                themeColor={styles?.mainTheme}
              />
            </Box>
          ))}
        </Box>
        <Box
          component="img"
          src={dynamicImage}
          alt="Area of Expertise"
          sx={{
            width: '625px',
            height: '355px',
            backgroundColor: '#0000',
            borderRadius: '25px',
          }}
        />
      </Box>
    </>
  );
};

export default AreaOfExpertise;
