import React from 'react';
import { Box, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialLinks from '../components/SocialLinks';

const services = [
  {
    title: 'Digital Marketing',
    description: 'We offer a range of digital marketing services to help you reach your target audience and increase your online presence.',
    icon: '🌐',
    color: '#6366F1'
  },
  {
    title: 'Branding & Visual ID',
    description: 'We create unique and memorable visual identities for your brand, ensuring consistency across all touchpoints.',
    icon: '🎨',
    color: '#10B981'
  },
  {
    title: 'Graphic Design',
    description: 'We create unique and memorable visual identities for your brand, ensuring consistency across all touchpoints.',
    icon: '📱',
    color: '#3B82F6'
  },
  {
    title: 'Media Production',
    description: 'We create unique and memorable visual identities for your brand, ensuring consistency across all touchpoints.',
    icon: '☁️',
    color: '#8B5CF6'
  }
];

const Services = () => {
  const navigate = useNavigate();

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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 5% 5%',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
          padding: '70px 5% 5%',
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 2 }}>
          <Box sx={{ maxWidth: '100%', mb: 6, px: { xs: 2, sm: 0 } }}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  color: 'white', 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  mb: 2
                }}
              >
                Select <span style={{ color: '#6366F1' }}>Service:</span>
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  lineHeight: 1.6
                }}
              >
                Services that elevate your brand
              </Typography>
            </Box>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)' 
          },
          gap: 4,
          width: '100%',
          maxWidth: '100%',
          mx: 'auto',
          py: 2,
          px: { xs: 0, sm: 2 }
        }}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              sx={{
                width: '100%',
                maxWidth: '100%',
                borderRadius: '50px',
                background: 'rgba(17, 24, 39, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${service.color}30`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 30px ${service.color}40`,
                  borderColor: `${service.color}60`,
                  '&::before': {
                    opacity: 0.1,
                    transform: 'scale(1.05)'
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${service.color}10, transparent 100%)`,
                  opacity: 0.1,
                  transition: 'all 0.5s ease',
                  zIndex: 0
                },
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                minHeight: '120px',
                padding: '1.5rem 2rem',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <CardContent sx={{ 
                p: '1.5rem 2rem',
                width: '100%',
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    color: 'white',
                    mb: 1.5,
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '40px',
                      height: '3px',
                      background: service.color,
                      mt: 1,
                      borderRadius: '3px'
                    }
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    mb: 2,
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </Typography>
                <Button 
                  variant="contained"
                  onClick={() => navigate('/services/packages', { state: { selectedService: service.title } })}
                  sx={{
                    alignSelf: 'center',
                    background: `linear-gradient(45deg, ${service.color} 0%, ${service.color}80 100%)`,
                    color: 'white',
                    border: 'none',
                    '&:hover': {
                      background: `linear-gradient(45deg, ${service.color} 0%, ${service.color}80 100%)`,
                      boxShadow: `0 4px 15px ${service.color}40`,
                      transform: 'translateY(-2px)'
                    },
                    px: 3,
                    py: 1.2,
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontWeight: 500,
                    mt: 'auto',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'block',
                    mx: 'auto'
                  }}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
          </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
