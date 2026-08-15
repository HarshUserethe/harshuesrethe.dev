import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { LuHouse, LuInfo, LuCode, LuMail } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';

// Defining navigation items with their paths and required icons
const navItems = [
  { name: 'Home', path: '/', icon: LuHouse },
  { name: 'About', path: '/about', icon: LuInfo },
  { name: 'Projects', path: '/project', icon: LuCode },
  { name: 'Contact', path: '/contact', icon: LuMail },
];

const MobileMenu = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const styles = useSelector((state) => state.theme?.styles);
  const mode = useSelector((state) => state.theme?.mode) || 'dark';

  // Update the active menu item when the route changes
  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const activeColor = styles?.mainTheme?.mobileMenuLableActive || '#7c6ef7';
  const nonActiveColor = styles?.mainTheme?.mobileMenuLableNonActive || '#888899';
  const menuBg = styles?.mainTheme?.backgroundColor || '#0b0b0f';

  // Glassmorphic background color based on theme mode
  const glassBg = mode === 'light' 
    ? 'rgba(247, 249, 250, 0.8)' 
    : 'rgba(11, 11, 15, 0.75)';
  
  const glassBorder = mode === 'light'
    ? '1px solid rgba(0, 0, 0, 0.06)'
    : '1px solid rgba(255, 255, 255, 0.08)';

  const glassShadow = mode === 'light'
    ? '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)'
    : '0 12px 40px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(255, 255, 255, 0.02)';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '380px',
        height: '55px',
        zIndex: 1000,
        display: { xs: 'flex', sm: 'none' }, // Only show on mobile
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: glassBg,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: glassBorder,
          borderRadius: '28px',
          boxShadow: glassShadow,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {navItems.map((item) => {
          const isActive = value === item.path || (item.path !== '/' && value.startsWith(item.path));

          return (
            <Box
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: '100%',
                textDecoration: 'none',
                gap: '3px',
                color: isActive ? activeColor : nonActiveColor,
                transition: 'color 0.3s ease',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* Sliding Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="activeMobileTabPill"
                  style={{
                    position: 'absolute',
                    inset: '6px 8px',
                    borderRadius: '24px',
                    backgroundColor: activeColor,
                    opacity: 0.12,
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}

              {/* Icon Container with subtle scale on active */}
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1.0,
                  y: isActive ? -1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <item.icon size={20} />
              </motion.div>

              {/* Text Label */}
              <Box
                component="span"
                sx={{
                  fontSize: '10px',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.02em',
                }}
              >
                {item.name}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MobileMenu;
