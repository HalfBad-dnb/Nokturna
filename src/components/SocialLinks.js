import React from 'react';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: '30px',
  top: '80px', /* Positioned below the navbar */
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  zIndex: 1100, /* Just below the navbar's zIndex */
  padding: '15px 10px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '25px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('md')]: {
    display: 'none',      
  }
}));

const SocialIcon = styled('a')(({ theme }) => ({
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#00ffff',
    transform: 'translateY(-3px)',
    '& svg': {
      filter: 'drop-shadow(0 0 10px #00ffff)',
    },
  },
  '& svg': {
    width: '22px',
    height: '22px',
    transition: 'all 0.3s ease',
  },
}));

const SocialLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return null;
  }
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername' },
  ];

  return (
    <SocialContainer>
      {socialLinks.map((social, index) => (
        <SocialIcon 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={social.url.split('/').pop()}
        >
          {social.icon}
        </SocialIcon>
      ))}
    </SocialContainer>
  );
};

export default SocialLinks;
