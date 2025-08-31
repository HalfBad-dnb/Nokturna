import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    company: '',
    message: ''
  });
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setOpen(true);
    // Reset form
    setFormData({ email: '', subject: '', company: '', message: '' });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(15, 12, 41, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
        zIndex: 1,
      }
    }}>
      <AnimatedBackground />
      <SocialLinks />
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 5% 20px',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
          padding: '80px 5% 20px',
        }
      }}>
        <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 3, maxWidth: '100%' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                color: 'white', 
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 'bold',
                lineHeight: 1.2,
                mb: 2
              }}
            >
              Let's <span style={{ color: '#6366F1' }}>Talk!</span>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                maxWidth: '800px',
                lineHeight: 1.5,
                mb: 2
              }}
            >
              Have questions or want to discuss a project? Send us a message and we'll get back to you as soon as possible.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 'medium' }}>Email</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>contact@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 'medium' }}>Phone</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>+1 (555) 123-4567</Typography>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="form" 
                onSubmit={handleSubmit}
                sx={{
                  '& .MuiTextField-root': { mb: 3 },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)',
                      transition: 'all 0.3s ease-in-out',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.7)',
                      boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6366F1',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 1,
                      px: 3,
                      py: 1,
                      borderRadius: '8px',
                      background: 'linear-gradient(45deg, #6366F1 30%, #8B5CF6 90%)',
                      color: 'white',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                        background: 'linear-gradient(45deg, #6366F1 0%, #8B5CF6 100%)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={submitStatus} sx={{ width: '100%' }}>
          {submitStatus === 'success' ? 'Message sent successfully! We\'ll get back to you soon.' : 'Failed to send message. Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
