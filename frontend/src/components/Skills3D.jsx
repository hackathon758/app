import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  SiVisualstudiocode,
  SiDocker,
  SiAmazonwebservices,
  SiTableau,
} from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { Code, Cpu, Sparkles } from 'lucide-react';

const Skills3D = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-[#00d9ff] to-[#0099cc]', icon: '🎨' },
    { key: 'backend', label: 'Backend', color: 'from-[#ff6b6b] to-[#cc5555]', icon: '⚙️' },
    { key: 'programmingLanguages', label: 'Languages', color: 'from-[#ffd93d] to-[#ccad31]', icon: '💻' },
    { key: 'aiMl', label: 'AI/ML', color: 'from-[#6bcf7f] to-[#55a665]', icon: '🤖' },
    { key: 'tools', label: 'Tools', color: 'from-[#ff8c42] to-[#cc7035]', icon: '🛠️' },
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
    SiVscodium,
    SiDocker,
    SiAmazonwebservices,
    SiTableau,
    FaChartLine,
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-10 text-cyan-400/20 text-4xl font-mono"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        {'{}'}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-pink-400/20 text-4xl font-mono"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        {'<>'}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
              <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-medium">TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              Skills & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Code className="w-4 h-4 text-cyan-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive technical skillset across the full development stack
            </p>
          </div>

          {/* Category Selector with unique design */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden group ${
                  selectedCategory === category.key
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedCategory === category.key && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                    layoutId="activeCategory"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid with enhanced cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data[selectedCategory]?.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}40 0%, transparent 70%)`,
                      filter: 'blur(10px)'
                    }}
                  />
                  
                  <motion.div
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-4 overflow-hidden transition-all duration-300 group-hover:border-white/30"
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}10 0%, transparent 100%)`
                      }}
                    />
                    
                    {/* Icon with rotation effect */}
                    <motion.div
                      className="relative z-10"
                      animate={hoveredSkill === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {IconComponent && (
                        <div className="relative p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                          <IconComponent 
                            className="w-10 h-10 md:w-12 md:h-12" 
                            style={{ color: skill.color }}
                          />
                          {/* Sparkle effect */}
                          {hoveredSkill === index && (
                            <motion.div
                              className="absolute -top-1 -right-1"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.5, 0] }}
                              transition={{ duration: 0.6 }}
                            >
                              <Sparkles className="w-4 h-4 text-yellow-400" />
                            </motion.div>
                          )}
                        </div>
                      )}
                    </motion.div>
                    
                    <div className="relative z-10 text-white font-semibold text-center text-sm md:text-base">
                      {skill.name}
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="relative z-10 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3D;
