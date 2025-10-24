import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import MatrixRain from './MatrixRain';

const Hero3D = ({ data }) => {
  const roles = [
    'Full Stack Web Developer',
    'Software Developer',
    'Software Engineer',
    'Data Analyst',
    'Data Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [glitchActive, setGlitchActive] = useState(false);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    }
  };

  // Typing effect with glitch
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
          
          // Random glitch effect
          if (Math.random() > 0.9) {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 100);
          }
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  // Random glitch intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
      
      {/* Animated grid overlay */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Scan lines */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          style={{
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY,
          }}
        >
          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center space-y-12">
            
            {/* Holographic Profile Image */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Hologram container */}
              <div className="relative w-full h-full">
                {/* Rotating hologram rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                />
                
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-green-400/30"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2.5, repeat: Infinity },
                  }}
                />

                {/* Profile image with holographic effect */}
                <motion.div 
                  className="absolute inset-8 rounded-full overflow-hidden"
                  style={{
                    boxShadow: '0 0 60px rgba(0, 255, 65, 0.6), inset 0 0 40px rgba(0, 255, 65, 0.2)',
                  }}
                >
                  <motion.img
                    src="/profile-photo.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1)',
                    }}
                    animate={{
                      opacity: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Holographic scan lines */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)',
                    }}
                    animate={{
                      y: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Cyan overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay"
                    style={{
                      background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.2), rgba(0, 255, 65, 0.2))',
                    }}
                  />
                </motion.div>

                {/* Corner brackets */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-400"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-400"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-400"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-400"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />

                {/* Floating data points */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI / 4) * 150],
                      y: [0, Math.sin(i * Math.PI / 4) * 150],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Name with Holographic Glitch Effect */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative inline-block">
                <motion.h1 
                  className={`text-6xl md:text-8xl font-black mb-4 ${glitchActive ? 'glitch' : ''}`}
                  style={{
                    fontFamily: 'monospace',
                    color: '#00ff41',
                    textShadow: glitchActive 
                      ? '2px 2px #ff00ff, -2px -2px #00ffff'
                      : '0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.4)',
                  }}
                  animate={{
                    textShadow: glitchActive 
                      ? [
                          '2px 2px #ff00ff, -2px -2px #00ffff',
                          '-2px -2px #ff00ff, 2px 2px #00ffff',
                          '2px 2px #ff00ff, -2px -2px #00ffff',
                        ]
                      : '0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.4)',
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  {glitchActive ? data.name.split('').map((char, i) => (
                    <span 
                      key={i}
                      style={{
                        display: 'inline-block',
                        transform: Math.random() > 0.5 ? `translateX(${Math.random() * 4 - 2}px)` : 'none',
                      }}
                    >
                      {char}
                    </span>
                  )) : data.name}
                </motion.h1>

                {/* Glitch layers */}
                {glitchActive && (
                  <>
                    <motion.h1 
                      className="absolute top-0 left-0 text-6xl md:text-8xl font-black opacity-70"
                      style={{
                        fontFamily: 'monospace',
                        color: '#ff00ff',
                        transform: 'translate(-2px, -2px)',
                      }}
                    >
                      {data.name}
                    </motion.h1>
                    <motion.h1 
                      className="absolute top-0 left-0 text-6xl md:text-8xl font-black opacity-70"
                      style={{
                        fontFamily: 'monospace',
                        color: '#00ffff',
                        transform: 'translate(2px, 2px)',
                      }}
                    >
                      {data.name}
                    </motion.h1>
                  </>
                )}
              </div>

              {/* Role with typing effect */}
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400" />
                <div className="relative">
                  <h2 
                    className="text-2xl md:text-4xl font-bold text-cyan-400"
                    style={{
                      fontFamily: 'monospace',
                      textShadow: '0 0 10px rgba(0, 217, 255, 0.8)',
                    }}
                  >
                    {'> '}
                    {displayedText}
                    <motion.span 
                      className="ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                  </h2>
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400" />
              </motion.div>

              {/* Tagline */}
              <motion.p 
                className="text-lg md:text-xl text-green-400/80 max-w-3xl mx-auto mb-8"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {data.tagline}
              </motion.p>

              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-lg"
                style={{
                  background: 'rgba(0, 255, 65, 0.05)',
                  border: '2px solid rgba(0, 255, 65, 0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(0, 255, 65, 0.7)',
                      '0 0 0 10px rgba(0, 255, 65, 0)',
                      '0 0 0 0 rgba(0, 255, 65, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-green-400 font-semibold" style={{ fontFamily: 'monospace' }}>
                  ONLINE • AVAILABLE FOR WORK
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-6 justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <motion.a
                  href="#projects"
                  className="relative px-8 py-4 font-bold rounded-lg overflow-hidden group"
                  style={{
                    fontFamily: 'monospace',
                    background: 'rgba(0, 255, 65, 0.1)',
                    border: '2px solid #00ff41',
                    color: '#00ff41',
                    textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 255, 65, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-green-400/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">[ VIEW PROJECTS ]</span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="relative px-8 py-4 font-bold rounded-lg overflow-hidden group"
                  style={{
                    fontFamily: 'monospace',
                    background: 'rgba(0, 217, 255, 0.1)',
                    border: '2px solid #00d9ff',
                    color: '#00d9ff',
                    textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">[ CONTACT ME ]</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div 
          className="w-8 h-14 rounded-full flex flex-col items-center justify-start pt-3"
          style={{
            border: '2px solid rgba(0, 255, 65, 0.5)',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-400"
            style={{
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
            }}
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Glitch CSS */}
      <style jsx>{`
        .glitch {
          animation: glitch-animation 0.3s infinite;
        }

        @keyframes glitch-animation {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero3D;
