import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Award, Trophy, FolderOpen, Sparkles, Zap, Target } from 'lucide-react';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconMap = {
    FolderOpen: FolderOpen,
    Code2: Code2,
    Award: Award,
    Trophy: Trophy,
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title with unique badge */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">GET TO KNOW ME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Zap className="w-4 h-4 text-cyan-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </motion.div>

          {/* Bio Section with glassmorphism */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <Target className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {data.bio}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid with enhanced cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {data.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon];
                const gradients = [
                  'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-500/60',
                  'from-blue-500/20 to-purple-500/20 border-blue-500/30 hover:border-blue-500/60',
                  'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60',
                  'from-pink-500/20 to-red-500/20 border-pink-500/30 hover:border-pink-500/60',
                ];
                const iconColors = ['text-cyan-400', 'text-blue-400', 'text-purple-400', 'text-pink-400'];
                
                return (
                  <motion.div
                    key={index}
                    className={`relative group bg-gradient-to-br ${gradients[index % 4]} backdrop-blur-sm border rounded-xl p-5 md:p-6 text-center transition-all duration-300`}
                    whileHover={{ y: -8, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${['rgba(0, 217, 255, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(236, 72, 153, 0.1)'][index % 4]} 0%, transparent 70%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`p-3 bg-white/5 rounded-lg ${iconColors[index % 4]}`}>
                          <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                      </motion.div>
                      <div className="text-2xl md:text-4xl font-black text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info with modern design */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-gray-300">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <span className="font-semibold text-white">{data.location}</span>
                  </div>
                </div>
                <div className="h-px md:h-8 w-full md:w-px bg-white/10"></div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <a href={`mailto:${data.email}`} className="hover:text-cyan-400 transition-colors font-semibold text-white">
                      {data.email}
                    </a>
                  </div>
                </div>
                <div className="h-px md:h-8 w-full md:w-px bg-white/10"></div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <a href={`tel:${data.phone}`} className="hover:text-cyan-400 transition-colors font-semibold text-white">
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
