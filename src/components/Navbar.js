import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services' },
    { text: 'Gallery', to: '/gallery' },
    { text: 'About Us', to: '/about' },
    { text: 'Contact', to: '/contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        background: 'rgba(15, 12, 41, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '20px 0',
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0 16px' }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button="true"
            key={item.text} 
            component={Link} 
            to={item.to}
            sx={{
              color: 'white',
              '&:hover': {
                color: '#00f0ff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              padding: '12px 24px',
              margin: '4px 0',
            }}
          >
            <ListItemText 
              primary={item.text}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
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
          display: { xs: 'none', md: 'flex' }, 
          gap: '1.5rem',
          '& .MuiButton-root': {
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 500,
            textTransform: 'none',
            fontSize: '1rem',
            position: 'relative',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            '&:hover': {
              color: '#00f0ff',
              backgroundColor: 'transparent',
              textShadow: '0 0 8px rgba(0, 240, 255, 0.8)',
              '&::after': {
                width: '100%',
                left: 0,
                backgroundColor: '#00f0ff',
                boxShadow: '0 0 10px #00f0ff'
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
{navItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.to}
              sx={{
                '&:hover': {
                  color: '#00f0ff',
                  textShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
                }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        
        {/* Mobile menu button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge={isMobile ? 'start' : false}
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              '&:hover': {
                color: '#00f0ff',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      
      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 250,
              border: 'none',
              backgroundColor: 'transparent',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default Navbar;
