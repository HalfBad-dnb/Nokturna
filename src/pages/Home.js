import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoCarousel from '../components/LogoCarousel';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
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
        backgroundColor: 'transparent',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 5% 5%',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
          padding: '70px 5% 5%',
        }
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            lineHeight: 1.2,
            mb: 4
          }}>
            Elevate Your Business
          </Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
            <Typography variant="h6" sx={{ 
              fontSize: '1.25rem',
              color: '#b0b0b0',
              mb: 1
            }}>
              Strategic Design and Communication solutions
            </Typography>
            <Typography variant="h6" sx={{ 
              fontSize: '1.25rem',
              color: '#b0b0b0'
            }}>
              Become a pilot of your business future.
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 6
          }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={Link}
              to="/services"
              sx={{
                padding: '0.8rem 2.5rem',
                borderRadius: '30px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Select Service
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              component={Link}
              to="/contact"
              sx={{
                padding: '0.8rem 2.5rem',
                borderRadius: '30px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
          <LogoCarousel />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
