import React from 'react';
import { Box, keyframes, styled } from '@mui/material';

// Ultra bright neon glow
const neonGlow = (color) => `
  0%, 100% {
    box-shadow: 
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px ${color},
      0 0 50px ${color},
      0 0 70px ${color},
      0 0 90px ${color};
    filter: brightness(2.5) contrast(3) saturate(3);
  }
  50% {
    box-shadow: 
      0 0 15px #fff,
      0 0 30px #fff,
      0 0 45px ${color},
      0 0 70px ${color},
      0 0 100px ${color};
    filter: brightness(3) contrast(3.5) saturate(3.5);
  }
`;

// Create styled components for shapes
const NeonSquare = styled(Box)(({ theme, color, size, top, left, delay, duration }) => ({
  position: 'absolute',
  width: size,
  height: size,
  border: `3px solid ${color}`,
  animation: `${keyframes`${neonGlow(color)}`} 3s ease-in-out infinite`,
  top: top,
  left: left,
  animationDelay: delay,
  animationDuration: duration,
  zIndex: 1,
  backgroundColor: `${color}40`,
  boxShadow: `0 0 40px ${color}`,
  opacity: 0.95,
  borderRadius: '3px',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(0,0,0)',
  willChange: 'box-shadow, transform, filter',
  '&:hover': {
    animation: `${keyframes`${neonGlow(color)}`} 0.8s ease-in-out infinite`,
    backgroundColor: `${color}60`,
    boxShadow: `0 0 80px ${color}`,
    zIndex: 2,
    transform: 'scale(1.08)',
    filter: 'brightness(1.8) contrast(2)',
    opacity: 1,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: `3px solid ${color}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
    opacity: 0.8,
    animation: `${keyframes`
      0% { 
        transform: scale(0.95) rotate(0deg); 
        opacity: 0.9;
      }
      50% { 
        transform: scale(1.05) rotate(1deg); 
        opacity: 1;
      }
      100% { 
        transform: scale(0.95) rotate(0deg); 
        opacity: 0.9;
      }
    `} 4s ease-in-out infinite`,
    animationDelay: delay,
    boxShadow: `
      inset 0 0 15px ${color},
      0 0 30px ${color}`,
    filter: 'blur(0.5px)',
  },
}));

const Triangle = styled(Box)(({ color, size, top, left, delay, rotate }) => ({
  position: 'absolute',
  width: 0,
  height: 0,
  borderLeft: `${size} solid transparent`,
  borderRight: `${size} solid transparent`,
  borderBottom: `${size * 1.732} solid ${color}`,
  transform: `rotate(${rotate}deg)`,
  filter: `drop-shadow(0 0 8px ${color}) brightness(1.8)`,
  animation: `${keyframes`
    0% { 
      transform: rotate(${rotate}deg) translateY(0) scale(1); 
      opacity: 0.95;
      filter: drop-shadow(0 0 8px ${color}) brightness(1.8);
    }
    50% { 
      transform: rotate(${rotate + 5}deg) translateY(-12px) scale(1.15); 
      opacity: 1;
      filter: drop-shadow(0 0 15px ${color}) brightness(2.2);
    }
    100% { 
      transform: rotate(${rotate}deg) translateY(0) scale(1); 
      opacity: 0.95;
      filter: drop-shadow(0 0 8px ${color}) brightness(1.8);
    }
  `} 8s ease-in-out infinite`,
  animationDelay: delay,
  top: top,
  left: left,
  zIndex: 0,
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    top: '-50%',
    left: '-50%',
    background: 'transparent',
    transform: 'scale(0.5)',
    transformOrigin: 'center',
    zIndex: -1,
    filter: 'blur(5px)',
    opacity: 0.7,
    animation: `${keyframes`
      0%, 100% { transform: scale(0.5) rotate(0deg); opacity: 0.7; }
      50% { transform: scale(0.55) rotate(5deg); opacity: 0.9; }
    `} 6s ease-in-out infinite`,
    animationDelay: delay,
  },
}));

const float1 = keyframes`
  0% { 
    transform: translate(-100px, 0) rotate(0deg); 
    opacity: 0.8; 
  }
  50% { 
    opacity: 0.5; 
  }
  100% { 
    transform: translate(calc(100vw + 100px), 0) rotate(360deg); 
    opacity: 0.8; 
  }
`;

const float2 = keyframes`
  0% { 
    transform: translate(-150px, -50%) rotate(45deg); 
    opacity: 0.7; 
  }
  50% { 
    opacity: 0.4; 
  }
  100% { 
    transform: translate(calc(100vw + 150px), -50%) rotate(405deg); 
    opacity: 0.7; 
  }
`;

const float3 = keyframes`
  0% { 
    transform: translate(-200px, -100%) rotate(90deg); 
    opacity: 0.9; 
  }
  50% { 
    opacity: 0.6; 
  }
  100% { 
    transform: translate(calc(100vw + 200px), -100%) rotate(450deg); 
    opacity: 0.9; 
  }
`;

const AnimatedBackground = () => {
  // Generate small triangles with vibrant colors
  const triangles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 6, // 6-14px
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: `hsl(${Math.floor(Math.random() * 60) + (i % 4 === 0 ? 0 : (i % 4 === 1 ? 90 : (i % 4 === 2 ? 180 : 270)))}, 100%, 70%)`,
    delay: `${Math.random() * 3}s`,
    rotate: Math.random() * 360,
  }));

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)',
        zIndex: 1,
      }
    }}>
      {/* Main Animated Squares */}
      <NeonSquare 
        color="#FF00FF" 
        size="250px" 
        top="15%" 
        left="-125px" 
        delay="0s"
        duration="20s"
        sx={{ animation: `${float1} 25s linear infinite` }}
      />

      <NeonSquare 
        color="#00FFFF" 
        size="350px" 
        top="50%" 
        left="-175px" 
        delay="-10s"
        duration="25s"
        sx={{ 
          animation: `${float2} 30s linear infinite`,
          '&::before': { borderRadius: '30%' }
        }}
      />

      <NeonSquare 
        color="#FFFF00" 
        size="300px" 
        top="75%" 
        left="-150px" 
        delay="-20s"
        duration="30s"
        sx={{ 
          animation: `${float3} 35s linear infinite`,
          '&::before': { borderRadius: '15%' }
        }}
      />

      {/* Floating Triangles */}
      {triangles.map((triangle) => (
        <Triangle
          key={triangle.id}
          color={triangle.color}
          size={triangle.size}
          top={triangle.top}
          left={triangle.left}
          delay={triangle.delay}
          rotate={triangle.rotate}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
