import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SkillCard3D = ({ skill, icon: IconComponent, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-card"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-2xl blur-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}60 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative glass-card-3d rounded-2xl p-6 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
          }}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%'],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        {/* Glass border effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          }}
          animate={isHovered ? {
            x: ['-100%', '200%'],
          } : {}}
          transition={{ duration: 1.5 }}
        />
        
        {/* Content with 3D depth */}
        <div className="relative z-10 flex flex-col items-center gap-4" style={{ transform: 'translateZ(30px)' }}>
          {/* Icon container with enhanced effects */}
          <motion.div
            className="relative w-20 h-20 flex items-center justify-center rounded-xl glass-icon-bg"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            } : {}}
            transition={{ duration: 0.5 }}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(40px)',
            }}
          >
            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 rounded-xl blur-lg"
              style={{
                background: skill.color,
                opacity: isHovered ? 0.6 : 0.3,
              }}
              animate={isHovered ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            
            {/* Icon */}
            {IconComponent && (
              <IconComponent 
                className="relative z-10 w-10 h-10 transition-all duration-300"
                style={{ 
                  color: skill.color,
                  filter: 'drop-shadow(0 0 10px currentColor)',
                }}
              />
            )}
          </motion.div>
          
          {/* Skill name */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-1" style={{ transform: 'translateZ(25px)' }}>
              {skill.name}
            </h3>
            
            {/* Proficiency bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                  boxShadow: `0 0 10px ${skill.color}80`,
                }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.proficiency || 85}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
            
            {/* Proficiency percentage */}
            <motion.span 
              className="text-xs text-gray-400 mt-1 block"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 1 }}
            >
              {skill.proficiency || 85}%
            </motion.span>
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
          <div 
            className="absolute top-0 right-0 w-full h-full"
            style={{
              background: `radial-gradient(circle at top right, ${skill.color}, transparent)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard3D;
