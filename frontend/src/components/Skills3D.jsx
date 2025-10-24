import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticleEffect from './ParticleEffect';
import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiGo,
  SiR,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiTensorflow,
  SiOpenai,
  SiPytorch,
  SiPandas,
  SiApachespark,
  SiApacheairflow,
  SiGit,
  SiGithub,
  SiVsco,
  SiDocker,
  SiAmazonwebservices,
  SiTableau,
} from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { Code, Cpu, Zap } from 'lucide-react';

const Skills3D = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-cyan-400 via-blue-500 to-purple-600', icon: '🎨', accentColor: '#00d9ff' },
    { key: 'backend', label: 'Backend', color: 'from-red-400 via-pink-500 to-purple-600', icon: '⚙️', accentColor: '#ff6b6b' },
    { key: 'programmingLanguages', label: 'Languages', color: 'from-yellow-400 via-orange-500 to-red-500', icon: '💻', accentColor: '#ffd93d' },
    { key: 'aiMl', label: 'AI/ML', color: 'from-green-400 via-emerald-500 to-teal-500', icon: '🤖', accentColor: '#6bcf7f' },
    { key: 'tools', label: 'Tools', color: 'from-orange-400 via-red-500 to-pink-500', icon: '🛠️', accentColor: '#ff8c42' },
  ];

  // Icon mapping
  const iconMap = {
    SiJavascript,
    SiPython,
    SiOpenjdk,
    SiGo,
    SiR,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiPostman,
    SiMongodb,
    SiMysql,
    SiFastapi,
    SiTensorflow,
    SiOpenai,
    SiPytorch,
    SiPandas,
    SiApachespark,
    SiApacheairflow,
    SiGit,
    SiGithub,
    SiVsco,
    SiDocker,
    SiAmazonwebservices,
    SiTableau,
    FaChartLine,
  };

  // Continuous rotation animation
  useEffect(() => {
    if (!inView) return;
    
    let animationFrame;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newRotation = (elapsed / 50) % 360; // Slow continuous rotation
      setRotation(newRotation);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView]);

  const currentCategory = categories.find(cat => cat.key === selectedCategory);
  const skills = data[selectedCategory] || [];

  // Calculate positions for 3D carousel
  const radius = 400; // Radius of the carousel cylinder
  const itemAngle = (2 * Math.PI) / skills.length;

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0f172a] relative overflow-hidden">
      {/* Futuristic animated background */}
      <div className="absolute inset-0">
        {/* Animated grid with glow */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Scan lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            y: [-1000, 1000],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 217, 255, 0.1) 2px, rgba(0, 217, 255, 0.1) 4px)',
          }}
        />
        
        {/* Radial glow spots */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title with holographic effect */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 0, 255, 0.1))',
                backdropFilter: 'blur(20px)',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 0, 255, 0.1)), linear-gradient(90deg, #00d9ff, #ff00ff, #00d9ff)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 217, 255, 0.3)',
                  '0 0 40px rgba(255, 0, 255, 0.3)',
                  '0 0 20px rgba(0, 217, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-bold tracking-wider">ADVANCED TECHNICAL ARSENAL</span>
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="relative inline-block">
                Skills
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              {' & '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Mastery
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Explore my technical expertise in a revolutionary 3D experience
            </motion.p>
          </div>

          {/* Category Selector with rainbow glass effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className="relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 overflow-hidden group"
                style={{
                  background: selectedCategory === category.key 
                    ? `linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))`
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  border: selectedCategory === category.key 
                    ? '2px solid transparent'
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  backgroundImage: selectedCategory === category.key
                    ? `linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05)), linear-gradient(90deg, ${category.accentColor}, ${category.accentColor}80, ${category.accentColor})`
                    : 'none',
                  backgroundOrigin: 'border-box',
                  backgroundClip: selectedCategory === category.key ? 'padding-box, border-box' : 'padding-box',
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedCategory === category.key && (
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      background: [
                        `radial-gradient(circle at 0% 0%, ${category.accentColor}40, transparent)`,
                        `radial-gradient(circle at 100% 100%, ${category.accentColor}40, transparent)`,
                        `radial-gradient(circle at 0% 0%, ${category.accentColor}40, transparent)`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                )}
                
                <span 
                  className="relative z-10 flex items-center gap-2"
                  style={{
                    color: selectedCategory === category.key ? '#ffffff' : '#9ca3af',
                  }}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.label}
                </span>
                
                {selectedCategory === category.key && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: `0 0 30px ${category.accentColor}60, inset 0 0 20px ${category.accentColor}20`,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* 3D Carousel Container */}
          <div className="relative w-full" style={{ perspective: '2000px', minHeight: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                ref={carouselRef}
                className="relative w-full h-[600px]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  const angle = rotation + (index * itemAngle * (180 / Math.PI));
                  const x = Math.sin((angle * Math.PI) / 180) * radius;
                  const z = Math.cos((angle * Math.PI) / 180) * radius;
                  
                  // Wave effect - oscillate Y position based on rotation
                  const waveOffset = Math.sin(((rotation + index * 30) * Math.PI) / 180) * 50;
                  const y = waveOffset;
                  
                  // Scale based on z-position (depth)
                  const scale = 0.6 + (z + radius) / (2 * radius) * 0.7;
                  const opacity = 0.3 + (z + radius) / (2 * radius) * 0.7;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute left-1/2 top-1/2 cursor-pointer"
                      style={{
                        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                        opacity,
                        zIndex: Math.round(z),
                      }}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Icon container without card */}
                      <motion.div
                        className="relative group flex flex-col items-center gap-3"
                        whileHover={{
                          scale: 1.3,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {/* Glow effect behind icon */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-3xl"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}80, transparent)`,
                            opacity: hoveredSkill === index ? 1 : 0.4,
                            width: '200%',
                            height: '200%',
                            left: '-50%',
                            top: '-50%',
                          }}
                          animate={{
                            scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                            opacity: hoveredSkill === index ? [0.6, 1, 0.6] : 0.4,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredSkill === index ? Infinity : 0,
                          }}
                        />
                        
                        {/* Icon */}
                        <motion.div
                          className="relative z-10"
                          animate={{
                            y: hoveredSkill === index ? [0, -15, 0] : 0,
                            rotate: hoveredSkill === index ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: hoveredSkill === index ? Infinity : 0,
                          }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              className="w-20 h-20 md:w-24 md:h-24" 
                              style={{ 
                                color: skill.color,
                                filter: `drop-shadow(0 0 ${hoveredSkill === index ? '30px' : '15px'} ${skill.color})`,
                              }}
                            />
                          )}
                          
                          {/* Rotating ring around icon */}
                          {hoveredSkill === index && (
                            <>
                              <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                                style={{
                                  borderColor: skill.color,
                                  width: '150%',
                                  height: '150%',
                                }}
                                animate={{
                                  rotate: 360,
                                  scale: [1, 1.4, 1],
                                  opacity: [0.8, 0.3, 0.8],
                                }}
                                transition={{
                                  rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                                  scale: { duration: 1.5, repeat: Infinity },
                                  opacity: { duration: 1.5, repeat: Infinity },
                                }}
                              />
                              <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                                style={{
                                  borderColor: skill.color,
                                  width: '180%',
                                  height: '180%',
                                }}
                                animate={{
                                  rotate: -360,
                                  scale: [1.2, 1.6, 1.2],
                                  opacity: [0.6, 0.2, 0.6],
                                }}
                                transition={{
                                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                                  scale: { duration: 2, repeat: Infinity },
                                  opacity: { duration: 2, repeat: Infinity },
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                        
                        {/* Skill name with glass background */}
                        <motion.div 
                          className="text-white font-bold text-center text-base leading-tight px-4 py-2 rounded-xl relative z-10"
                          style={{
                            textShadow: `0 0 20px ${skill.color}80`,
                            background: hoveredSkill === index 
                              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'
                              : 'transparent',
                            backdropFilter: hoveredSkill === index ? 'blur(20px)' : 'none',
                            border: hoveredSkill === index ? `1px solid ${skill.color}40` : 'none',
                          }}
                          animate={{
                            opacity: hoveredSkill === index ? 1 : 0.8,
                          }}
                        >
                          {skill.name}
                        </motion.div>
                        
                        {/* Particle explosion effect */}
                        <AnimatePresence>
                          {hoveredSkill === index && (
                            <ParticleEffect isActive={true} color={skill.color} />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel controls hint */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <p className="text-gray-500 text-sm mb-2">Hover over icons to interact</p>
              <motion.div
                className="flex items-center gap-2 justify-center"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-2 h-2 rounded-full bg-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3D;
