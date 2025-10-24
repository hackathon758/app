import React from 'react';
import { motion } from 'framer-motion';

const ParticleEffect = ({ isActive, color }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (Math.PI * 2 * i) / 20,
    distance: Math.random() * 100 + 50,
    duration: Math.random() * 0.8 + 0.6,
    delay: Math.random() * 0.1,
    size: Math.random() * 8 + 4,
  }));

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${color}, transparent)`,
            boxShadow: `0 0 ${particle.size * 2}px ${color}`,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 1,
            scale: 0 
          }}
          animate={{
            x: Math.cos(particle.angle) * particle.distance,
            y: Math.sin(particle.angle) * particle.distance,
            opacity: 0,
            scale: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
      
      {/* Center burst glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 100,
          height: 100,
          background: `radial-gradient(circle, ${color}80, transparent)`,
          filter: 'blur(20px)',
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      
      {/* Ring waves */}
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            borderColor: color,
            width: 60,
            height: 60,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ 
            duration: 1,
            delay,
            ease: 'easeOut' 
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
