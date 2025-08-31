import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 1200,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(15, 12, 41, 0.2)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
      }
    }}>
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        padding: '0.5rem 5%',
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            '&:hover': {
              color: '#fff',
              textShadow: '0 0 10px rgba(255,255,255,0.8)',
              transition: 'all 0.3s ease'
            }
          }}
        >
          Your Logo
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: '1.5rem',
          '& .MuiButton-root': {
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: '1rem',
            position: 'relative',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            '&:hover': {
              color: '#fff',
              backgroundColor: 'transparent',
              textShadow: '0 0 8px rgba(255,255,255,0.8)',
              '&::after': {
                width: '100%',
                left: 0,
                backgroundColor: '#fff',
                boxShadow: '0 0 10px #fff'
              }
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0',
              height: '2px',
              bottom: '4px',
              left: '50%',
              backgroundColor: 'transparent',
              transition: 'all 0.3s ease',
              borderRadius: '2px'
            },
            '&.active': {
              '&::after': {
                width: '100%',
                left: 0,
                backgroundColor: '#8B5CF6'
              }
            }
          }
        }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/services"
            sx={{
              '&:hover': {
                color: '#00f0ff',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
              }
            }}
          >
            Services
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/gallery"
            sx={{
              '&:hover': {
                color: '#00f0ff',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
              }
            }}
          >
            Gallery
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            sx={{
              '&:hover': {
                color: '#00f0ff',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
              }
            }}
          >
            About Us
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact"
            sx={{
              '&:hover': {
                color: '#00f0ff',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
              }
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
