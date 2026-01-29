import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { LuHouse, LuInfo, LuCode, LuMail } from 'react-icons/lu';
import { useSelector } from 'react-redux';

// Defining navigation items with their paths and required icons
const navItems = [
  { name: 'Home', path: '/', icon: LuHouse },
  { name: 'About', path: '/about', icon: LuInfo },
  { name: 'Projects', path: '/project', icon: LuCode },
  { name: 'Contact', path: '/contact', icon: LuMail },
];

const MobileMenu = () => {
  // useLocation is used to get the current URL pathname
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const styles = useSelector((state) => state.theme.styles);
  console.log(styles?.mainTheme?.mobileMenuLableActive)

  // Update the BottomNavigation value when the route changes
  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);
 

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          height: '8dvh',
        }}
        onChange={(event, newValue) => {
          // on switching between tabs --->
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.name}
            value={item.path}
            icon={<item.icon />}
            component={Link}
            to={item.path}
            sx={{
              // Targeted non-active state
              color: styles?.mainTheme?.mobileMenuLableNonActive,
              '& .MuiBottomNavigationAction-label': {
                color: styles?.mainTheme?.mobileMenuLableNonActive,
                fontSize: '14px',
              },
              '& .MuiSvgIcon-root, & svg': {
                // Targets MUI icons AND raw SVGs
                color: styles?.mainTheme?.mobileMenuLableNonActive,
                fontSize: '22px',
              },

              // Targeted active state
              '&.Mui-selected': {
                color: styles?.mainTheme?.mobileMenuLableActive,
                '& .MuiBottomNavigationAction-label': {
                  color: styles?.mainTheme?.mobileMenuLableActive,
                },
                '& .MuiSvgIcon-root, & svg': {
                  color: styles?.mainTheme?.mobileMenuLableActive,
                  fontSize: '26px',
                },
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileMenu;
