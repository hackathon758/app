import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';

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
  
  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });
  
  const photoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (photoRef.current) {
      const rect = photoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
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

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a1a2e] to-[#16213e]">
      {/* Animated background with glass effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-[32rem] h-[32rem] bg-[#00d9ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-[32rem] h-[32rem] bg-[#ff6b6b] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-[32rem] h-[32rem] bg-[#ffd93d] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-[28rem] h-[28rem] bg-[#a78bfa] rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-6000"></div>
      </div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi42ODYgNiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02em0zNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZDlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>

      {/* Content Overlay with Parallax */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content with glass cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-6"
          >
            {/* Glass-morphism greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-morphism-badge border border-cyan-400/30 backdrop-blur-xl shadow-lg shadow-cyan-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
              </span>
              <span className="text-cyan-300 text-sm font-semibold tracking-wider">Available for Work</span>
            </motion.div>

            {/* Name with 3D depth effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>
                <span className="relative inline-block">
                  <span className="text-white relative z-10 drop-shadow-2xl text-shadow-3d">{data.name}</span>
                  <motion.span
                    className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-[#00d9ff] via-[#ff6b6b] to-[#ffd93d] blur-lg opacity-60"
                    animate={{
                      width: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                    }}
                  />
                  {/* 3D depth layers */}
                  <span className="absolute top-1 left-1 text-cyan-500/20 -z-10">{data.name}</span>
                  <span className="absolute top-2 left-2 text-blue-500/10 -z-20">{data.name}</span>
                </span>
              </h1>
            </motion.div>

            {/* Role with enhanced typing effect and glass background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <motion.div 
                  className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-500"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <div className="glass-morphism-inline px-6 py-3 rounded-xl border border-cyan-400/20 backdrop-blur-xl shadow-xl">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 tracking-wide">
                    {displayedText}
                    <motion.span 
                      className="ml-1 text-cyan-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </h2>
                </div>
                <motion.div 
                  className="h-px w-12 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-500"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              
              {/* Tagline with glass effect */}
              <motion.p 
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light glass-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {data.tagline}
              </motion.p>
            </motion.div>

            {/* Enhanced stats with glass cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap"
            >
              <motion.div 
                className="glass-stat-card px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-stat-card px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.5s' }}></div>
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons with glass effects */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start flex-wrap pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-white font-bold rounded-xl overflow-hidden shadow-xl shadow-cyan-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0, 217, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 text-white font-bold rounded-xl border-2 border-cyan-400/40 glass-button backdrop-blur-xl shadow-lg hover:shadow-cyan-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Advanced 3D Interactive Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={photoRef} className="relative w-full max-w-lg mx-auto perspective-deep">
              
              {/* Multiple 3D rotating rings with glass effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400/40 glass-ring"
                style={{ 
                  rotateY,
                  rotateX,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-purple-400/30 glass-ring"
                style={{ 
                  rotateY: useTransform(rotateY, (value) => -value),
                  rotateX: useTransform(rotateX, (value) => -value),
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Multi-layered glowing orb effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d9ff]/30 via-[#a78bfa]/30 to-[#ffd93d]/30 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-[#ff6b6b]/20 via-[#00d9ff]/20 to-transparent blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main 3D Photo Container with Advanced Interactions */}
              <motion.div
                className="relative photo-3d-advanced group cursor-pointer"
                style={{
                  rotateY,
                  rotateX,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glass morphism photo frame with multi-layer depth */}
                <div className="relative rounded-3xl overflow-hidden transform-gpu shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-all duration-500">
                  
                  {/* Multiple layered glass borders for 3D depth */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-cyan-400/60 transform translate-z-20 glass-border"></div>
                  <div className="absolute inset-1 rounded-3xl border-4 border-purple-400/40 transform translate-z-15 glass-border"></div>
                  <div className="absolute inset-2 rounded-3xl border-4 border-blue-400/30 transform translate-z-10 glass-border"></div>
                  
                  {/* Gradient overlay for enhanced depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/30 via-transparent to-[#a78bfa]/30 z-10 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Animated gradient border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl z-0"
                    style={{
                      background: 'linear-gradient(45deg, #00d9ff, #ff6b6b, #ffd93d, #a78bfa, #00d9ff)',
                      backgroundSize: '400% 400%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Main Profile Photo */}
                  <motion.div className="relative z-20 p-1">
                    <motion.img
                      src="/profile-photo.png"
                      alt="Professional Profile"
                      className="w-full h-auto relative rounded-3xl transform-gpu transition-transform duration-700 group-hover:scale-105"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>

                  {/* Advanced shimmer and shine effects */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                        'linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                </div>

                {/* Floating particles with enhanced 3D depth */}
                <motion.div
                  className="absolute -top-8 -right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#0099cc] blur-md shadow-xl shadow-cyan-500/50"
                  style={{
                    rotateY: useTransform(rotateY, (value) => value * 2),
                    rotateX: useTransform(rotateX, (value) => value * 2),
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ff4757] blur-lg shadow-2xl shadow-red-500/50"
                  style={{
                    rotateY: useTransform(rotateY, (value) => -value * 1.5),
                    rotateX: useTransform(rotateX, (value) => -value * 1.5),
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.div
                  className="absolute top-1/3 -right-12 w-10 h-10 rounded-full bg-gradient-to-r from-[#ffd93d] to-[#f39c12] blur-md shadow-xl shadow-yellow-500/50"
                  style={{
                    rotateY: useTransform(rotateY, (value) => value * 3),
                    rotateX: useTransform(rotateX, (value) => value * 3),
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1/4 -left-8 w-8 h-8 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] blur-md shadow-xl shadow-purple-500/50"
                  style={{
                    rotateY: useTransform(rotateY, (value) => -value * 2.5),
                    rotateX: useTransform(rotateX, (value) => -value * 2.5),
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    y: [0, 18, 0],
                    x: [0, -12, 0],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </motion.div>

              {/* Enhanced 3D shadow with multiple layers */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-12 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with glass effect */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm glass-morphism-light shadow-lg">
          <motion.div 
            className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 shadow-lg shadow-cyan-500/50"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Advanced CSS for glass-morphism and 3D effects */}
      <style jsx>{`
        .glass-morphism-badge {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        .glass-morphism-inline {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
        }
        
        .glass-stat-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        .glass-button {
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }
        
        .glass-button:hover {
          background: rgba(0, 217, 255, 0.1);
        }
        
        .glass-ring {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .glass-border {
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }
        
        .glass-morphism-light {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .text-shadow-3d {
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.5),
            4px 4px 8px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(0, 217, 255, 0.3);
        }
        
        .glass-text {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(40px, -60px) scale(1.15) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.95) rotate(240deg);
          }
        }
        
        .animate-blob {
          animation: blob 12s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        .perspective-deep {
          perspective: 2000px;
          perspective-origin: center;
        }
        
        .photo-3d-advanced {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        
        .translate-z-20 {
          transform: translateZ(20px);
        }
        
        .translate-z-15 {
          transform: translateZ(15px);
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
      `}</style>
    </div>
  );
};

export default Hero3D;
