import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal } from 'lucide-react';

const Achievements = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Medal: Medal,
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffd93d] to-[#ff8c42] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognition for innovation and excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {data.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon];
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 50, rotateY: -20 }}
                  animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-gradient-to-br from-[#ffd93d]/10 to-[#ff8c42]/10 backdrop-blur-sm border border-[#ffd93d]/20 rounded-2xl p-8 h-full hover:border-[#ffd93d]/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="bg-gradient-to-br from-[#ffd93d] to-[#ff8c42] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-[#0f172a]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-[#ffd93d] font-semibold mb-4">
                        {achievement.description}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {achievement.details}
                      </p>
                      <div className="inline-block px-4 py-1 bg-[#ffd93d]/20 rounded-full">
                        <span className="text-[#ffd93d] text-sm font-semibold">{achievement.date}</span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ffd93d]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
