import React from 'react';
import { Box, Typography, Container, Button, Card, Grid } from '@mui/material';
import AnimatedBackground from '../../components/AnimatedBackground';
import SocialLinks from '../../components/SocialLinks';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    name: 'Basic',
    price: '€299',
    period: '/month',
    description: 'Essential features to get started',
    color: '#4F46E5',
    popular: false,
    buttonText: 'Get Started',
    bestValue: false
  },
  {
    name: 'Plus',
    price: '€599',
    period: '/month',
    description: 'Enhanced features for growing businesses',
    color: '#3B82F6',
    popular: false,
    buttonText: 'Get Started',
    bestValue: false
  },
  {
    name: 'Pro',
    price: '€999',
    period: '/month',
    description: 'Professional package for established businesses',
    color: '#10B981',
    popular: false,
    buttonText: 'Get Started',
    bestValue: false
  },
  {
    name: 'VIP',
    price: '€1,999',
    period: '/month',
    description: 'Complete solution with premium support',
    color: '#8B5CF6',
    popular: false,
    buttonText: 'Contact Us',
    bestValue: false
  }
];

const ServicesPackage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 50%, rgba(15, 12, 41, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
      padding: '80px 20px 40px',
    }}>
      <AnimatedBackground />
      <SocialLinks />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 4, px: { xs: 2, sm: 3 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: 'white', 
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2
            }}
          >
            Choose Your <span style={{ color: '#4F46E5' }}>Plan</span>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Select the perfect package for your business needs
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={2} justifyContent="space-between" alignItems="stretch" sx={{ width: '100%', margin: '0 auto' }}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', minWidth: 0, flex: '1 1 0px', maxWidth: '100%' }}>
              <Card sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                minWidth: 0,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 15px 30px -5px ${pkg.color}20`,
                  border: `2px solid ${pkg.color}`,
                },
                position: 'relative',
                zIndex: pkg.bestValue ? 2 : 1,
              }}>
                {pkg.popular && (
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    right: -30,
                    transform: 'rotate(45deg)',
                    background: pkg.color,
                    color: 'white',
                    padding: '4px 40px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    MOST POPULAR
                  </Box>
                )}
                
                <Box sx={{ p: 4, pb: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      mb: 1
                    }}
                  >
                    {pkg.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography 
                      variant="h3" 
                      component="div" 
                      sx={{ 
                        color: pkg.color,
                        fontWeight: 800,
                        fontSize: '3rem',
                        lineHeight: 1
                      }}
                    >
                      {pkg.price}
                    </Typography>
                    <Typography 
                      component="span" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '1rem',
                        ml: 1,
                        fontWeight: 500
                      }}
                    >
                      {pkg.period}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 3,
                      minHeight: '40px'
                    }}
                  >
                    {pkg.description}
                  </Typography>
                  
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}80 100%)`,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 5px 15px ${pkg.color}40`,
                        background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}60 100%)`,
                      },
                      transition: 'all 0.3s ease',
                      mb: 3
                    }}
                    onClick={() => navigate('/contact')}
                  >
                    {pkg.buttonText}
                  </Button>
                </Box>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPackage;