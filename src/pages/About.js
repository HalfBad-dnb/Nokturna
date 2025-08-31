import React from 'react';
import { Box, Container, Typography, Button, Fade } from '@mui/material';
import { Brush, Favorite, ThumbUp } from '@mui/icons-material';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  const [activeTab, setActiveTab] = React.useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
        padding: '80px 5% 5%',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
          padding: '70px 5% 5%',
        }
      }}>
        <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 6, width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 6 }}>
              <Button 
                onClick={() => handleTabChange('about')}
                variant={activeTab === 'about' ? 'contained' : 'outlined'}
                size="large"
                sx={{
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  color: activeTab === 'about' ? 'primary.main' : 'white',
                  backgroundColor: activeTab === 'about' ? 'white' : 'transparent',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: activeTab === 'about' ? '#f0f0f0' : 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                  boxShadow: activeTab === 'about' ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  borderWidth: '1px'
                }}
              >
                About Us
              </Button>
              <Button 
                onClick={() => handleTabChange('values')}
                variant={activeTab === 'values' ? 'contained' : 'outlined'}
                size="large"
                sx={{
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  color: activeTab === 'values' ? 'primary.main' : 'white',
                  backgroundColor: activeTab === 'values' ? 'white' : 'transparent',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: activeTab === 'values' ? '#f0f0f0' : 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                  boxShadow: activeTab === 'values' ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  borderWidth: '1px'
                }}
              >
                Our Values
              </Button>
            </Box>
            <Fade in={activeTab === 'about'} timeout={300}>
              <Box sx={{ display: activeTab === 'about' ? 'block' : 'none' }}>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    color: 'white', 
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    mb: 2,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Meet minds behind the design.
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: '#6366F1',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Co-founders
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 4, mb: 8, maxWidth: '1200px', mx: 'auto' }}>
                  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'right' }, pr: { md: 4 } }}>
                    <Typography 
                      variant="h4"
                      sx={{ 
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.5rem'
                      }}
                    >
                      Augustė Čiplytė
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      sx={{ 
                        color: '#6366F1',
                        mb: 2,
                        fontSize: '1.1rem'
                      }}
                    >
                      Project Lead & Senior Graphic Designer
                    </Typography>
                  </Box>
                  
                  <Box 
                    sx={{
                      width: { xs: '250px', md: '350px' },
                      height: { xs: '250px', md: '350px' },
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '4px solid #6366F1',
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                      flexShrink: 0
                    }}
                  >
                    <Box 
                      component="img"
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                      alt="Co-founders"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, pl: { md: 4 } }}>
                    <Typography 
                      variant="h4"
                      sx={{ 
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.5rem'
                      }}
                    >
                      Lukas Misiūnas
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      sx={{ 
                        color: '#6366F1',
                        mb: 2,
                        fontSize: '1.1rem'
                      }}
                    >
                      Strategic designer & CEO
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>

            <Fade in={activeTab === 'values'} timeout={300}>
              <Box sx={{ display: activeTab === 'values' ? 'block' : 'none' }}>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    color: 'white', 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    mb: 4,
                    textAlign: 'center'
                  }}
                >
                  Our <span style={{ color: '#6366F1' }}>Values</span>
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: '1000px',
                  mx: 'auto',
                  py: 4
                }}>
                  {[
                    {
                      icon: <Brush sx={{ fontSize: 48, color: '#6366F1', mb: 2 }} />,
                      title: 'create',
                      subtitle: 'brands',
                      description: 'We craft unique brand identities that tell your story and connect with your audience.'
                    },
                    {
                      icon: <Favorite sx={{ fontSize: 48, color: '#6366F1', mb: 2 }} />,
                      title: 'care',
                      subtitle: 'deeply',
                      description: 'We put our heart into every project, ensuring every detail reflects your vision and values.'
                    },
                    {
                      icon: <ThumbUp sx={{ fontSize: 48, color: '#6366F1', mb: 2 }} />,
                      title: 'build',
                      subtitle: 'loyalty',
                      description: 'We create lasting relationships through exceptional service and outstanding results.'
                    }
                  ].map((value, index) => (
                    <Box 
                      key={index}
                      sx={{
                        flex: 1,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        '&:not(:last-child)::after': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: '50%',
                          transform: 'translate(50%, -50%)',
                          width: '1px',
                          height: '100px',
                          background: 'rgba(255,255,255,0.1)',
                          display: { xs: 'none', md: 'block' }
                        },
                        '@media (max-width: 900px)': {
                          '&:not(:last-child)': {
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            pb: 4,
                            '&::after': {
                              display: 'none !important'
                            }
                          }
                        }
                      }}
                    >
                      {value.icon}
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          color: '#6366F1', 
                          fontSize: '2.5rem',
                          fontWeight: 'bold',
                          mb: 1,
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          color: 'white', 
                          fontSize: '1.8rem',
                          fontWeight: 'bold',
                          mb: 3,
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        {value.subtitle}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)', 
                          lineHeight: 1.6,
                          fontSize: '1rem',
                          maxWidth: '280px',
                          mx: 'auto'
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
