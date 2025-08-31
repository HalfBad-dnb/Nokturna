import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialLinks from '../components/SocialLinks';

// Using direct image URLs from Unsplash with specific image IDs for reliability
const galleryImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'Mountain Landscape' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'Ocean View' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'City Night Lights' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'Green Forest' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'Desert Dunes' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&w=800&h=600',
    alt: 'Waterfall' 
  }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        zIndex: 0,
      }
    }}>
      <AnimatedBackground />
      <SocialLinks zIndex={2} />
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
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
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: 'white', 
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
          >
            Gallery
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              textAlign: 'center',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {galleryImages[activeIndex]?.alt}
          </Typography>
          <Box sx={{ width: '100%', px: { xs: 0, md: 4 } }}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={20}
              loop={true}
              loopedslides={3}
              speed={800}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              modules={[Navigation, Autoplay, EffectCoverflow]}
              navigation={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % galleryImages.length)}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              style={{
                width: '100%',
                padding: '40px 0',
                '--swiper-navigation-color': 'rgba(255, 255, 255, 0.8)',
                '--swiper-pagination-color': 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={image.id} style={{ width: '300px' }}>
                  <Box 
                    component="div"
                    sx={{
                      width: '100%',
                      height: '400px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.4s ease',
                      transform: activeIndex === index ? 'scale(1.1)' : 'scale(0.9)',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.alt}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '16px',
                      }}
                      onError={(e) => {
                        console.error('Error loading image:', image.src);
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{ mt: 'auto', textAlign: 'center', py: 4, position: 'relative', zIndex: 2 }}>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
              {activeIndex + 1} / {galleryImages.length}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery;
