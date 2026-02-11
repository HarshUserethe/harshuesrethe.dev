import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Chip,
  LinearProgress,
  Alert,
  CircularProgress,
  Paper,
  IconButton,
} from '@mui/material';
import {
  LuMessagesSquare,
  LuRocket,
  LuSparkle,
  LuWrench,
} from 'react-icons/lu';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaTimesCircle,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ShinyText from '../shared/ShinyText';
import '../styles/contact-styles/SmartContact.css';
import { useSelector } from 'react-redux';
import SplitText from '../shared/SplitText';
import AnimatedButton from '../shared/AnimatedButton';
import HarshUseretheImage from '../../assets/images/picofmine.webp';
import Warning from '../shared/Warning';

const SmartContact = () => {
  const styles = useSelector((state) => state.theme.styles);

  // Multi-step form state
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form data - consolidated state object
  const [formData, setFormData] = useState({
    // Step 1: Type of request
    requestType: '',
    // Step 2: Project category
    projectCategory: '',
    // Step 3: Timeline
    timeline: '',
    // Step 4: Budget
    budget: '',
    // Step 5: Project details
    projectTitle: '',
    projectDescription: '',
    fullName: '',
    email: '',
    // Step 6: File upload
    uploadedFiles: [],
  });

  // Step configuration
  const steps = [
    'Type',
    'Category',
    'Timeline',
    'Budget',
    'Info',
    'Attachments',
  ];

  // Form options
  const requestTypes = [
    {
      value: 'feature',
      label: 'New Feature',
      icon: <LuSparkle color={styles.mainTheme.epicColor} />,
      gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
    },
    {
      value: 'bug',
      label: 'Bug Fix',
      icon: <LuWrench color={styles.mainTheme.epicColor} />,
      gradient: 'linear-gradient(135deg, #FF512F, #DD2476)',
    },
    {
      value: 'project',
      label: 'Full Project',
      icon: <LuRocket color={styles.mainTheme.epicColor} />,
      gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    },
    {
      value: 'consultation',
      label: 'Consultation',
      icon: <LuMessagesSquare color={styles.mainTheme.epicColor} />,
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    },
  ];

  const projectCategories = [
    { value: 'web', label: 'Web Dev.', icon: '🌐' },
    { value: 'mobile', label: 'Mobile App', icon: '📱' },
    { value: 'backend', label: 'Backend/API', icon: '⚙️' },
    { value: 'fullstack', label: 'Full Stack', icon: '💻' },
    { value: 'uiux', label: 'UI/UX Design', icon: '🎨' },
    { value: 'other', label: 'Other', icon: '📦' },
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)', icon: '⚡' },
    { value: 'short', label: 'Short (2-4 weeks)', icon: '🏃' },
    { value: 'medium', label: 'Medium (1-3 months)', icon: '📅' },
    { value: 'long', label: 'Long (3+ months)', icon: '🗓️' },
    { value: 'flexible', label: 'Flexible', icon: '🤝' },
  ];

  const budgetRanges = [
    { value: 'small', label: '$500 - $2,000', icon: '💵' },
    { value: 'medium', label: '$2,000 - $5,000', icon: '💰' },
    { value: 'large', label: '$5,000 - $10,000', icon: '💎' },
    { value: 'enterprise', label: '$10,000+', icon: '🏆' },
    { value: 'discuss', label: "Let's Discuss", icon: '💬' },
  ];

  // Handle form field changes
  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  // Handle file upload (UI only)
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileData = files.map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + ' KB',
      type: file.type,
    }));
    setFormData({
      ...formData,
      uploadedFiles: [...formData.uploadedFiles, ...fileData],
    });
  };

  // Remove uploaded file
  const removeFile = (index) => {
    const updatedFiles = formData.uploadedFiles.filter((_, i) => i !== index);
    setFormData({ ...formData, uploadedFiles: updatedFiles });
  };

  // Validation logic for each step
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0: // Request Type
        if (!formData.requestType) {
          newErrors.requestType = 'Please select a request type';
        }
        break;
      case 1: // Project Category
        if (!formData.projectCategory) {
          newErrors.projectCategory = 'Please select a project category';
        }
        break;
      case 2: // Timeline
        if (!formData.timeline) {
          newErrors.timeline = 'Please select a timeline';
        }
        break;
      case 3: // Budget
        if (!formData.budget) {
          newErrors.budget = 'Please select a budget range';
        }
        break;
      case 4: // Project Details
        if (!formData.fullName.trim()) {
          newErrors.fullName = 'Full name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.projectTitle.trim()) {
          newErrors.projectTitle = 'Project title is required';
        }
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = 'Project description is required';
        } else if (formData.projectDescription.trim().length < 20) {
          newErrors.projectDescription =
            'Description must be at least 20 characters';
        }
        break;
      case 5: // Attachments (optional, no validation)
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigate to next step
  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigate to previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Validate all steps before submission
    let allValid = true;
    for (let i = 0; i < steps.length - 1; i++) {
      if (!validateStep(i)) {
        allValid = false;
        setActiveStep(i);
        break;
      }
    }

    if (!allValid) return;

    // Simulate API call
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      requestType: '',
      projectCategory: '',
      timeline: '',
      budget: '',
      projectTitle: '',
      projectDescription: '',
      fullName: '',
      email: '',
      uploadedFiles: [],
    });
    setActiveStep(0);
    setIsSubmitted(false);
    setErrors({});
  };

  // Render different step content
  const renderStepContent = (step) => {
    switch (step) {
      case 0: // Request Type
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              What type of request do you have?
            </Typography>
            <FormControl
              component="fieldset"
              fullWidth
              error={!!errors.requestType}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: '16px',
                }}
              >
                {requestTypes.map((option) => (
                  <Paper
                    key={option.value}
                    onClick={() => {
                      setFormData({ ...formData, requestType: option.value });
                      setErrors({ ...errors, requestType: '' });
                    }}
                    sx={{
                      background: '#2d2d2dc8',
                      borderRadius: '10px',
                      padding: '20px',
                      cursor: 'pointer',
                      border:
                        formData.requestType === option.value
                          ? `2px solid ${styles?.mainTheme?.highlightedColor}`
                          : `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                      backgroundColor:
                        formData.requestType === option.value
                          ? 'rgba(173, 255, 47, 0.05)'
                          : styles?.mainTheme?.profileCardBackground,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '32px', marginBottom: '8px' }}>
                      {option.icon}
                    </Typography>
                    <Typography
                      sx={{
                        color: styles?.mainTheme?.color,
                        fontWeight: 500,
                        fontSize: '16px',
                      }}
                    >
                      {option.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
              {errors.requestType && (
                <Alert severity="error" sx={{ marginTop: '16px' }}>
                  {errors.requestType}
                </Alert>
              )}
            </FormControl>
          </Box>
        );

      case 1: // Project Category
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              Which category best describes your project?
            </Typography>
            <FormControl
              component="fieldset"
              fullWidth
              error={!!errors.projectCategory}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr',
                  },
                  gap: '16px',
                }}
              >
                {projectCategories.map((option) => (
                  <Paper
                    key={option.value}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        projectCategory: option.value,
                      });
                      setErrors({ ...errors, projectCategory: '' });
                    }}
                    sx={{
                      background: 'rgba(0, 0, 0, 0.87)',
                      borderRadius: '10px',
                      padding: '20px',
                      cursor: 'pointer',
                      border:
                        formData.projectCategory === option.value
                          ? `2px solid ${styles?.mainTheme?.highlightedColor}`
                          : `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                      backgroundColor:
                        formData.projectCategory === option.value
                          ? 'rgba(173, 255, 47, 0.05)'
                          : styles?.mainTheme?.profileCardBackground,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '32px', marginBottom: '8px' }}>
                      {option.icon}
                    </Typography>
                    <Typography
                      sx={{
                        color: styles?.mainTheme?.color,
                        fontWeight: 500,
                        fontSize: '14px',
                      }}
                    >
                      {option.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
              {errors.projectCategory && (
                <Alert severity="error" sx={{ marginTop: '16px' }}>
                  {errors.projectCategory}
                </Alert>
              )}
            </FormControl>
          </Box>
        );

      case 2: // Timeline
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              What's your preferred timeline?
            </Typography>
            <FormControl
              component="fieldset"
              fullWidth
              error={!!errors.timeline}
            >
              <RadioGroup
                value={formData.timeline}
                onChange={handleChange('timeline')}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  {timelines.map((option) => (
                    <Paper
                      key={option.value}
                      sx={{
                        background: '#2d2d2dc8',
                        borderRadius: '10px',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        border:
                          formData.timeline === option.value
                            ? `2px solid ${styles?.mainTheme?.highlightedColor}`
                            : `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                        backgroundColor:
                          formData.timeline === option.value
                            ? 'rgba(173, 255, 47, 0.05)'
                            : styles?.mainTheme?.profileCardBackground,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: styles?.mainTheme?.highlightedColor,
                        },
                      }}
                      onClick={() => {
                        setFormData({ ...formData, timeline: option.value });
                        setErrors({ ...errors, timeline: '' });
                      }}
                    >
                      <FormControlLabel
                        value={option.value}
                        control={
                          <Radio
                            sx={{
                              color: styles?.mainTheme?.textFieldBorderColor,
                              '&.Mui-checked': {
                                color: styles?.mainTheme?.highlightedColor,
                              },
                            }}
                          />
                        }
                        label={
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontSize: '20px' }}>
                              {option.icon}
                            </span>
                            <Typography
                              sx={{ color: styles?.mainTheme?.color }}
                            >
                              {option.label}
                            </Typography>
                          </Box>
                        }
                        sx={{ margin: 0, width: '100%' }}
                      />
                    </Paper>
                  ))}
                </Box>
              </RadioGroup>
              {errors.timeline && (
                <Alert severity="error" sx={{ marginTop: '16px' }}>
                  {errors.timeline}
                </Alert>
              )}
            </FormControl>
          </Box>
        );

      case 3: // Budget
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              What's your budget range?
            </Typography>
            <FormControl component="fieldset" fullWidth error={!!errors.budget}>
              <RadioGroup
                value={formData.budget}
                onChange={handleChange('budget')}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  {budgetRanges.map((option) => (
                    <Paper
                      key={option.value}
                      sx={{
                        background: '#2d2d2dc8',
                        borderRadius: '10px',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        border:
                          formData.budget === option.value
                            ? `2px solid ${styles?.mainTheme?.highlightedColor}`
                            : `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                        backgroundColor:
                          formData.budget === option.value
                            ? 'rgba(173, 255, 47, 0.05)'
                            : styles?.mainTheme?.profileCardBackground,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: styles?.mainTheme?.highlightedColor,
                        },
                      }}
                      onClick={() => {
                        setFormData({ ...formData, budget: option.value });
                        setErrors({ ...errors, budget: '' });
                      }}
                    >
                      <FormControlLabel
                        value={option.value}
                        control={
                          <Radio
                            sx={{
                              color: styles?.mainTheme?.textFieldBorderColor,
                              '&.Mui-checked': {
                                color: styles?.mainTheme?.highlightedColor,
                              },
                            }}
                          />
                        }
                        label={
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontSize: '20px' }}>
                              {option.icon}
                            </span>
                            <Typography
                              sx={{ color: styles?.mainTheme?.color }}
                            >
                              {option.label}
                            </Typography>
                          </Box>
                        }
                        sx={{ margin: 0, width: '100%' }}
                      />
                    </Paper>
                  ))}
                </Box>
              </RadioGroup>
              {errors.budget && (
                <Alert severity="error" sx={{ marginTop: '16px' }}>
                  {errors.budget}
                </Alert>
              )}
            </FormControl>
          </Box>
        );

      case 4: // Project Details
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              Tell me about your project
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Full Name */}
              <Box>
                <Typography
                  sx={{
                    color: styles?.mainTheme?.color,
                    marginBottom: '8px',
                    fontSize: '14px',
                  }}
                >
                  Full Name *
                </Typography>
                <TextField
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                  fullWidth
                  placeholder="John Doe"
                  variant="outlined"
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: styles?.mainTheme?.textFieldBorderColor,
                      },
                      '&:hover fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '& input': {
                        color: styles?.mainTheme?.color,
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: '#f44336',
                    },
                  }}
                />
              </Box>

              {/* Email */}
              <Box>
                <Typography
                  sx={{
                    color: styles?.mainTheme?.color,
                    marginBottom: '8px',
                    fontSize: '14px',
                  }}
                >
                  Email *
                </Typography>
                <TextField
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  fullWidth
                  placeholder="john@example.com"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: styles?.mainTheme?.textFieldBorderColor,
                      },
                      '&:hover fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '& input': {
                        color: styles?.mainTheme?.color,
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: '#f44336',
                    },
                  }}
                />
              </Box>

              {/* Project Title */}
              <Box>
                <Typography
                  sx={{
                    color: styles?.mainTheme?.color,
                    marginBottom: '8px',
                    fontSize: '14px',
                  }}
                >
                  Project Title *
                </Typography>
                <TextField
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange('projectTitle')}
                  fullWidth
                  placeholder="E-commerce Platform Redesign"
                  variant="outlined"
                  error={!!errors.projectTitle}
                  helperText={errors.projectTitle}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: styles?.mainTheme?.textFieldBorderColor,
                      },
                      '&:hover fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '& input': {
                        color: styles?.mainTheme?.color,
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: '#f44336',
                    },
                  }}
                />
              </Box>

              {/* Project Description */}
              <Box>
                <Typography
                  sx={{
                    color: styles?.mainTheme?.color,
                    marginBottom: '8px',
                    fontSize: '14px',
                  }}
                >
                  Project Description * (minimum 20 characters)
                </Typography>
                <TextField
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange('projectDescription')}
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  variant="outlined"
                  error={!!errors.projectDescription}
                  helperText={
                    errors.projectDescription ||
                    `${formData.projectDescription.length}/20 characters`
                  }
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: styles?.mainTheme?.textFieldBorderColor,
                      },
                      '&:hover fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: styles?.mainTheme?.highlightedColor,
                      },
                      '& textarea': {
                        color: styles?.mainTheme?.color,
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: errors.projectDescription
                        ? '#f44336'
                        : styles?.mainTheme?.color,
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        );

      case 5: // File Upload
        return (
          <Box className="step-content">
            <Typography
              variant="h6"
              sx={{
                color: styles?.mainTheme?.color,
                marginBottom: '24px',
                fontSize: '20px',
              }}
            >
              Upload any relevant files (Optional)
            </Typography>

            {/* File upload area */}
            <Paper
              sx={{
                background: '#2d2d2dc8',
                borderRadius: '10px',
                padding: '40px',
                border: `2px dashed ${styles?.mainTheme?.textFieldBorderColor}`,
                backgroundColor: styles?.mainTheme?.profileCardBackground,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: styles?.mainTheme?.highlightedColor,
                  backgroundColor: 'rgba(173, 255, 47, 0.02)',
                },
              }}
              onClick={() => document.getElementById('file-upload').click()}
            >
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
              />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FaCloudUploadAlt
                  size={48}
                  color={styles?.mainTheme?.highlightedColor}
                  style={{ marginBottom: '16px' }}
                />
              </Box>
              <Typography
                sx={{ color: styles?.mainTheme?.color, marginBottom: '8px' }}
              >
                Click to upload or drag and drop
              </Typography>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  fontSize: '14px',
                }}
              >
                PDF, DOC, DOCX, TXT, PNG, JPG (Max 10MB)
              </Typography>
            </Paper>

            {/* Uploaded files list */}
            {formData.uploadedFiles.length > 0 && (
              <Box sx={{ marginTop: '24px' }}>
                <Typography
                  sx={{
                    color: styles?.mainTheme?.color,
                    marginBottom: '12px',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Uploaded Files ({formData.uploadedFiles.length})
                </Typography>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  {formData.uploadedFiles.map((file, index) => (
                    <Paper
                      key={index}
                      sx={{
                        padding: '12px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor:
                          styles?.mainTheme?.profileCardBackground,
                        border: `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: styles?.mainTheme?.color,
                            fontSize: '14px',
                          }}
                        >
                          {file.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: styles?.mainTheme?.textFieldBorderColor,
                            fontSize: '12px',
                          }}
                        >
                          {file.size}
                        </Typography>
                      </Box>
                      <IconButton
                        size="small"
                        onClick={() => removeFile(index)}
                        sx={{ color: '#f44336' }}
                      >
                        <FaTimesCircle />
                      </IconButton>
                    </Paper>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  // Success screen after submission
  if (isSubmitted) {
    return (
      <Box
        className="contact-section"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <FaCheckCircle
            size={80}
            color={styles?.mainTheme?.highlightedColor}
            style={{ marginBottom: '24px' }}
          />
          <Typography
            variant="h3"
            sx={{
              color: styles?.mainTheme?.color,
              marginBottom: '16px',
              fontSize: { xs: '32px', sm: '48px' },
              fontWeight: 600,
            }}
          >
            Thank You!
          </Typography>
          <Typography
            sx={{
              color: styles?.mainTheme?.textFieldBorderColor,
              marginBottom: '32px',
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            Your project inquiry has been successfully submitted. I'll review
            your request and get back to you within 24-48 hours.
          </Typography>

          {/* Summary of submission */}
          <Paper
            sx={{
              display: 'none',
              background: '#2d2d2dc8',
              borderRadius: '10px',
              padding: '24px',
              backgroundColor: styles?.mainTheme?.profileCardBackground,
              border: `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
              marginBottom: '24px',
              textAlign: 'left',
            }}
          >
            <Typography
              sx={{
                color: styles?.mainTheme?.color,
                fontWeight: 600,
                marginBottom: '14px',
                textAlign: 'center',
              }}
            >
              Submission Summary
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  textAlign: 'center',
                }}
              >
                <strong>Request Type:</strong>{' '}
                {
                  requestTypes.find((r) => r.value === formData.requestType)
                    ?.label
                }
              </Typography>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  textAlign: 'center',
                }}
              >
                <strong>Category:</strong>{' '}
                {
                  projectCategories.find(
                    (c) => c.value === formData.projectCategory
                  )?.label
                }
              </Typography>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  textAlign: 'center',
                }}
              >
                <strong>Timeline:</strong>{' '}
                {timelines.find((t) => t.value === formData.timeline)?.label}
              </Typography>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  textAlign: 'center',
                }}
              >
                <strong>Budget:</strong>{' '}
                {budgetRanges.find((b) => b.value === formData.budget)?.label}
              </Typography>
            </Box>
          </Paper>

          {/* <AnimatedButton
            color={styles?.mainTheme?.color}
            label="Back to Contact"
            hoverLabel="Back to Contact"
            hyperLink={'/contact'}
            btnWidth="fit-content"
          /> */}
        </Box>
      </Box>
    );
  }

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/harshuserethe',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/HarshUserethe',
      label: 'GitHub',
    },
    {
      icon: <FaInstagram />,
      url: 'https://instagram.com/harshuserethe',
      label: 'Instagram',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:useretheharsh@gmail.com',
      label: 'Email',
    },
    {
      icon: <FaXTwitter />,
      url: 'https://x.com/HarshUserethe04',
      label: 'Twitter',
    },
  ];

  return (
    <Box
      className="contact-section"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      {/* Header Section */}
      <Box className="contact-first">
      <Warning message={'This feature is currently under development and will be available shortly. Stay tuned!'} />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <LuSparkle color={styles?.mainTheme?.highlightedColor} size={20} />
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
              text="SMART PROJECT INQUIRY"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
              highlightedColor={styles?.mainTheme?.highlightedColor}
            />
          </Typography>
        </Box>

        <Typography
          className="headline"
          variant="h1"
          sx={{
            fontSize: { xs: '40px', sm: '56px', md: '72px' },
            fontWeight: '500',
            color: styles?.mainTheme?.color,
            width: { xs: '95%', sm: '85%', md: '70%' },
            lineHeight: { xs: '48px', sm: '64px', md: '72px' },
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

      {/* Main Form Section */}
      <Box className="contact-bottom-wrapper">
        {/* Multi-step Form */}
        <Box className="form-wrapper" sx={{ flex: 1 }}>
          {/* Stepper */}
          <Box sx={{ marginBottom: '40px' }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: styles?.mainTheme?.highlightedColor,
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: styles?.mainTheme?.highlightedColor,
                },
                '& .MuiStepLabel-label': {
                  color: styles?.mainTheme?.textFieldBorderColor,
                  fontSize: { xs: '12px', sm: '14px' },
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: styles?.mainTheme?.color,
                  fontWeight: 600,
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: styles?.mainTheme?.color,
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Progress bar */}
            <LinearProgress
              variant="determinate"
              value={(activeStep / (steps.length - 1)) * 100}
              sx={{
                marginTop: '20px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: styles?.mainTheme?.textFieldBorderColor,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: styles?.mainTheme?.highlightedColor,
                },
              }}
            />
          </Box>

          {/* Step Content */}
          <form onSubmit={handleSubmit}>
            <Box sx={{ minHeight: '200px', marginBottom: '40px' }}>
              {renderStepContent(activeStep)}
            </Box>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  fontSize: '14px',
                  color: styles?.mainTheme?.color,
                  borderColor: styles?.mainTheme?.textFieldBorderColor,
                  padding: '12px 28px',
                  '&:hover': {
                    borderColor: styles?.mainTheme?.highlightedColor,
                    backgroundColor: 'rgba(173, 255, 47, 0.05)',
                  },
                  '&.Mui-disabled': {
                    color: styles?.mainTheme?.textFieldBorderColor,
                    borderColor: styles?.mainTheme?.textFieldBorderColor,
                    opacity: 0.3,
                  },
                }}
                variant="outlined"
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Box>
                  <AnimatedButton
                    type="submit"
                    color={styles?.mainTheme?.color}
                    label={isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    hoverLabel={
                      isSubmitting ? 'Submitting...' : 'Submit Inquiry'
                    }
                    btnWidth="fit-content"
                    disabled={isSubmitting}
                  />
                  {isSubmitting && (
                    <CircularProgress
                      size={20}
                      sx={{
                        color: styles?.mainTheme?.highlightedColor,
                        marginLeft: '12px',
                      }}
                    />
                  )}
                </Box>
              ) : (
                <Button
                  onClick={handleNext}
                  sx={{
                    fontSize: '14px',
                    backgroundColor: styles?.mainTheme?.highlightedColor,
                    color: '#000',
                    padding: '12px 28px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: styles?.mainTheme?.highlightedColor,
                      opacity: 0.9,
                    },
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </Box>

        {/* Profile Card - Right Side */}
        <Box className="profiler">
          <Box
            className="profile-card"
            sx={{ backgroundColor: styles?.mainTheme?.profileCardBackground }}
          >
            <Box className="availability-badge">
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
              to say Hi. I would love to hear from you. Feel free to fill out
              the form and I'll get back to you within 24-48 hours.
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

export default SmartContact;
