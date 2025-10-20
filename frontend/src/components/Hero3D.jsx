import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a1a2e] to-[#16213e]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00d9ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#ff6b6b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#ffd93d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi42ODYgNiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02em0zNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZDlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">Available for Work</span>
            </motion.div>

            {/* Name with unique style */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}
            >
              <span className="relative inline-block">
                <span className="text-white relative z-10 drop-shadow-lg">{data.name}</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#00d9ff]/40 via-[#ff6b6b]/40 to-transparent blur-sm"
                  animate={{
                    width: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.8,
                  }}
                />
              </span>
            </motion.h1>

            {/* Role with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-cyan-400/80 tracking-wider uppercase text-shadow-glow">
                  <span className="inline-block px-2 py-1 rounded bg-cyan-500/5 border border-cyan-500/20">
                    {displayedText}
                    <span className="animate-blink ml-1 text-cyan-300">|</span>
                  </span>
                </h2>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
              </div>
              
              {/* Tagline with modern style */}
              <p className="text-base md:text-lg text-gray-400/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                <span className="text-gray-300">{data.tagline}</span>
              </p>
            </motion.div>

            {/* Stats or highlights */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-6 mb-6 justify-center lg:justify-start flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-400">
                  <span className="text-white font-semibold">5+</span> Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm text-gray-400">
                  <span className="text-white font-semibold">50+</span> Projects
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons with unique style */}
            <motion.div
              className="flex gap-3 justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-white text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group relative px-6 py-3 text-white text-sm font-semibold rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-sm bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md mx-auto perspective-container">
              {/* 3D Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-[#00d9ff]/30"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              />

              {/* Glowing Orb Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d9ff]/20 via-[#ff6b6b]/20 to-[#ffd93d]/20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main 3D Photo Container */}
              <motion.div
                className="relative photo-3d-container group"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Photo Frame with 3D depth */}
                <div className="relative rounded-3xl overflow-hidden transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/50">
                  {/* Multiple layered borders for 3D effect */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-[#00d9ff]/50 transform translate-z-10"></div>
                  <div className="absolute inset-0 rounded-3xl border-4 border-[#ff6b6b]/30 transform translate-z-5"></div>
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 via-transparent to-[#ff6b6b]/20 z-10 mix-blend-overlay"></div>
                  
                  {/* Main Photo */}
                  <motion.img
                    src="https://customer-assets.emergentagent.com/job_950a8542-71cc-4b4a-b45b-2e9a9b73e0a6/artifacts/l18xnuc1_Gemini_Generated_Image_n92plcn92plcn92p.png"
                    alt="Profile"
                    className="w-full h-auto relative z-0 transform-gpu transition-transform duration-700 group-hover:scale-110"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                </div>

                {/* Floating particles around photo */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#00d9ff]/60 blur-sm"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#ff6b6b]/40 blur-md"
                  animate={{
                    y: [0, 10, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-[#ffd93d]/50 blur-sm"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </motion.div>

              {/* 3D Shadow effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/30 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* CSS for blob and typing animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .perspective-container {
          perspective: 1000px;
        }
        .photo-3d-container {
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .translate-z-10 {
          transform: translateZ(10px);
        }
        .translate-z-5 {
          transform: translateZ(5px);
        }
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Hero3D;
