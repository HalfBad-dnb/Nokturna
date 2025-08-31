import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoItem = ({ logo, alt }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    padding: '20px',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      filter: 'grayscale(100%)',
      opacity: 0.8,
      transition: 'all 0.3s ease',
      '&:hover': {
        filter: 'grayscale(0%)',
        opacity: 1,
        transform: 'scale(1.05)'
      }
    }
  }}>
    <img src={logo} alt={alt} style={{ width: 'auto', height: 'auto' }} />
  </Box>
);

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const companies = [
    {
      id: 1,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      alt: 'Microsoft'
    },
    {
      id: 2,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      alt: 'Google'
    },
    {
      id: 3,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      alt: 'Apple'
    },
    {
      id: 4,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      alt: 'Amazon'
    },
    {
      id: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      alt: 'Facebook'
    },
    {
      id: 6,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
      alt: 'Tesla'
    },
    {
      id: 7,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      alt: 'Netflix'
    }
  ];

  return (
    <Box sx={{ width: '100%', mt: 8, px: { xs: 2, sm: 4 } }}>
      <Typography variant="h6" align="center" sx={{ 
        color: '#b0b0b0',
        mb: 4,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.875rem'
      }}>
        Trusted By
      </Typography>
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        '& .slick-dots li button:before': {
          color: '#b0b0b0',
          opacity: 0.5
        },
        '& .slick-dots li.slick-active button:before': {
          color: '#fff',
          opacity: 1
        },
        '& .slick-prev:before, & .slick-next:before': {
          color: '#b0b0b0',
          fontSize: '24px',
          opacity: 0.8
        },
        '& .slick-prev:before': {
          content: '"\f053"',
          fontFamily: 'FontAwesome',
          left: '-30px'
        },
        '& .slick-next:before': {
          content: '"\f054"',
          fontFamily: 'FontAwesome',
          right: '-30px'
        }
      }}>
        <Slider {...settings}>
          {companies.map((company) => (
            <div key={company.id}>
              <LogoItem logo={company.logo} alt={company.alt} />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default LogoCarousel;
