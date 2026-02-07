import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ShinyText from '../shared/ShinyText';
import '../styles/contact-styles/ContactSection.css';
import { useSelector } from 'react-redux';
import SplitText from '../shared/SplitText';
import AnimatedButton from '../shared/AnimatedButton';
import HarshUseretheImage from '../../assets/images/picofme.png'

const ContactSection = () => {
  const styles = useSelector((state) => state.theme.styles);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:your@email.com', label: 'Email' },
    { icon: <FaXTwitter />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  console.log(styles?.mainTheme?.color);

  return (
    <Box
      className="contact-section"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      {/* First Box*/}
      <Box className="contact-first">
        {/* Connect With Me */}
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <LuSparkle color={ styles?.mainTheme?.highlightedColor} size={20} />
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
              text="CONNECT WITH ME"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
               highlightedColor={styles?.mainTheme?.highlightedColor}
            />
          </Typography>
        </Box>
        {/* Main Title of the page */}
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
            text="Let's start the project together"
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

      <Box className="contact-bottom-wrapper">
        {/* Contact Form - BOX-1 */}
        <Box className="form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <Box className="form-group">
              <Typography
                sx={{ color: styles?.mainTheme?.color }}
                className="form-label"
              >
                Full Name
              </Typography>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: styles?.mainTheme?.textFieldBorderColor,
                    },
                    '& input': {
                      color: styles?.mainTheme?.color,
                    },
                  },
                }}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                className="form-input"
                placeholder=""
                variant="outlined"
              />
            </Box>

            <Box className="form-group">
              <Typography
                sx={{ color: styles?.mainTheme?.color }}
                className="form-label"
              >
                Email
              </Typography>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: styles?.mainTheme?.textFieldBorderColor,
                    },
                    '& input': {
                      color: styles?.mainTheme?.color,
                    },
                  },
                }}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                className="form-input"
                placeholder=""
                variant="outlined"
              />
            </Box>

            <Box className="form-group">
              <Typography
                sx={{ color: styles?.mainTheme?.color }}
                className="form-label"
              >
                Message
              </Typography>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: styles?.mainTheme?.textFieldBorderColor,
                    },
                    '& textarea': {
                      color: styles?.mainTheme?.color,  
                    },
                  },
                }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                className="form-input form-textarea"
                placeholder=""
                variant="outlined"
              />
            </Box>

            {/* <Button type="submit" className="submit-btn">
              Submit
            </Button> */}
            <Box sx={{ marginTop: '10px' }}>
              <AnimatedButton
                type="submit"
                color={styles?.mainTheme?.color}
                label={'Submit'}
                hoverLabel={'Submit'}
                btnWidth={'fit-content'}
              />
            </Box>
          </form>
        </Box>

        {/* Contact card BOX-2 */}
        {/* Right Side - Profile Card */}
        <Box className="profiler">
          <Box
            className="profile-card"
            sx={{ backgroundColor: styles?.mainTheme?.profileCardBackground }}
          >
            <Box className="availability-badge">
              {/* Available Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  marginBottom: '32px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #6e6e6eff',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#4ade80',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px #4ade80',
                  }}
                ></div>
                <span
                  style={{
                    fontSize: '14px',
                    color: styles?.mainTheme?.color,
                  }}
                >
                  Available for work
                </span>
              </div>
            </Box>

            <Avatar
              src={HarshUseretheImage}
              alt="Profile"
              className="profile-avatar"
            />

            <Typography className="profile-description">
              My inbox is always open. Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I'll get back to you.
            </Typography>

            <Box className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
