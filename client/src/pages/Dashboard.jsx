import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/dashboard/Sidebar.jsx';
import DirectContact from '../components/dashboard/DirectContact';
import ProjectQuery from '../components/dashboard/ProjectQuery';
import '../assets/styles/dashboard-styles/Dashboard.css';
import { useQuery } from "convex/react";
import { api } from '../../convex/_generated/api.js';

const Dashboard = () => {
  const directContactsData = useQuery(api.apis.get.getCasualContact.get);
  const smartContactsData = useQuery(api.apis.get.getSmartContact.get);
  
  const [activeTab, setActiveTab] = useState('direct-contact');
  const [directContacts, setDirectContacts] = useState([]);
  const [projectQueries, setProjectQueries] = useState([]);

  useEffect(() => {
    // Load data from localStorage or API
    loadData();
  }, []);

  const loadData = () => {
    // Simulate loading data - replace with actual API calls
    const storedDirectContacts = localStorage.getItem('directContacts');
    const storedProjectQueries = localStorage.getItem('projectQueries');

    if (storedDirectContacts) {
      setDirectContacts(JSON.parse(storedDirectContacts));
    } else {
      // Mock data for demonstration
      const mockDirectContacts = [
        {
          id: 1,
          name: 'Sarah Anderson',
          email: 'sarah.anderson@email.com',
          message: 'Hi! I love your portfolio work. Would like to discuss a potential collaboration on a new project.',
          creation_date: '2024-02-14T10:30:00'
        },
        {
          id: 2,
          name: 'Michael Chen',
          email: 'michael.chen@company.com',
          message: 'Interested in your design services for our startup\'s branding.',
          creation_date: '2024-02-13T15:45:00'
        }
      ];
      setDirectContacts(mockDirectContacts);
      localStorage.setItem('directContacts', JSON.stringify(mockDirectContacts));
    }

    if (storedProjectQueries) {
      setProjectQueries(JSON.parse(storedProjectQueries));
    } else {
      // Mock data for demonstration
      const mockProjectQueries = [
        {
          id: 1,
          name: 'Emma Wilson',
          email: 'emma.wilson@tech.com',
          company: 'TechStart Inc.',
          projectType: 'Web Development',
          budget: '$5,000 - $10,000',
          timeline: '2-3 months',
          description: 'We need a complete redesign of our e-commerce platform with modern UI/UX, mobile responsiveness, and integration with our existing backend systems.',
          additionalInfo: 'We prefer React and Material UI for the frontend. Our backend is built with Node.js.',
          creation_date: '2024-02-14T09:15:00',
          status: 'New'
        },
        {
          id: 2,
          name: 'James Rodriguez',
          email: 'j.rodriguez@creative.io',
          company: 'Creative Solutions',
          projectType: 'UI/UX Design',
          budget: '$3,000 - $5,000',
          timeline: '1 month',
          description: 'Looking for a talented designer to create mockups and prototypes for our mobile app focused on productivity.',
          additionalInfo: 'We need both iOS and Android designs. Figma files preferred.',
          creation_date: '2024-02-12T14:20:00',
          status: 'Priority'
        },
        {
          id: 3,
          name: 'Lisa Zhang',
          email: 'lisa@marketingpro.com',
          company: 'Marketing Pro',
          projectType: 'Branding',
          budget: '$2,000 - $3,000',
          timeline: '3 weeks',
          description: 'Need a complete brand identity package including logo, color palette, typography, and brand guidelines.',
          additionalInfo: 'Our target audience is young professionals aged 25-35.',
          creation_date: '2024-02-10T11:00:00',
          status: 'In Progress'
        }
      ];
      setProjectQueries(mockProjectQueries);
      localStorage.setItem('projectQueries', JSON.stringify(mockProjectQueries));
    }
  };

  const handleDeleteDirectContact = (id) => {
    const updatedContacts = directContacts.filter(contact => contact.id !== id);
    setDirectContacts(updatedContacts);
    localStorage.setItem('directContacts', JSON.stringify(updatedContacts));
  };

  const handleDeleteProjectQuery = (id) => {
    const updatedQueries = projectQueries.filter(query => query.id !== id);
    setProjectQueries(updatedQueries);
    localStorage.setItem('projectQueries', JSON.stringify(updatedQueries));
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedQueries = projectQueries.map(query =>
      query.id === id ? { ...query, status: newStatus } : query
    );
    setProjectQueries(updatedQueries);
    localStorage.setItem('projectQueries', JSON.stringify(updatedQueries));
  };
  
 
 
  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Box className="dashboard-content">
        {activeTab === 'direct-contact' && (
          <DirectContact
            contacts={directContactsData}
            onDelete={handleDeleteDirectContact}
          />
        )}
        {activeTab === 'project-query' && (
          <ProjectQuery
            queries={smartContactsData}
            onDelete={handleDeleteProjectQuery}
            onUpdateStatus={handleUpdateStatus}
          />
        )}
      </Box>
    </div>
  );
};

export default Dashboard;