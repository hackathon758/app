import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Award, Trophy, FolderOpen } from 'lucide-react';

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
    <section id="about" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] mx-auto"></div>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {data.bio}
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon];
                return (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-[#00d9ff]/10 to-[#ff6b6b]/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-8 h-8 text-[#00d9ff]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#00d9ff]">📍</span>
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00d9ff]">📧</span>
                <a href={`mailto:${data.email}`} className="hover:text-[#00d9ff] transition-colors">
                  {data.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00d9ff]">📱</span>
                <a href={`tel:${data.phone}`} className="hover:text-[#00d9ff] transition-colors">
                  {data.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
