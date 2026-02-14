import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { LuMail, LuBriefcase, LuMenu, LuX } from 'react-icons/lu';
import '../../assets/styles/dashboard-styles/Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    {
      id: 'direct-contact',
      label: 'Direct Contact',
      icon: <LuMail size={22} />
    },
    {
      id: 'project-query',
      label: 'Project Query',
      icon: <LuBriefcase size={22} />
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleMenuItemClick = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <IconButton 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <LuMenu size={24} />
      </IconButton>

      <Box className={`sidebar ${isMobileOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard</h2>
          <IconButton 
            className="mobile-close-btn"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <LuX size={24} />
          </IconButton>
        </div>

        <List className="sidebar-menu">
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.id}
              className={`sidebar-menu-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              <ListItemIcon className="sidebar-menu-icon">
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                className="sidebar-menu-text"
              />
            </ListItem>
          ))}
        </List>

        <div className="sidebar-footer">
          <p className="sidebar-footer-text">Harsh Userethe | Admin</p>
          <p className="sidebar-footer-version">v1.0</p>
        </div>
      </Box>

      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
};

export default Sidebar;