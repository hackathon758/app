import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills3D = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-[#00d9ff] to-[#0099cc]' },
    { key: 'backend', label: 'Backend', color: 'from-[#ff6b6b] to-[#cc5555]' },
    { key: 'programmingLanguages', label: 'Languages', color: 'from-[#ffd93d] to-[#ccad31]' },
    { key: 'aiMl', label: 'AI/ML', color: 'from-[#6bcf7f] to-[#55a665]' },
    { key: 'tools', label: 'Tools', color: 'from-[#ff8c42] to-[#cc7035]' },
  ];

  return (
    <section id=\"skills\" className=\"py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a]\">
      <div className=\"max-w-7xl mx-auto px-6\">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className=\"text-center mb-12\">
            <h2 className=\"text-5xl md:text-6xl font-black text-white mb-4\">
              Skills & Expertise
            </h2>
            <div className=\"w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] mx-auto mb-8\"></div>
            <p className=\"text-xl text-gray-400 max-w-2xl mx-auto\">
              Comprehensive technical skillset across the full development stack
            </p>
          </div>

          {/* Category Selector */}
          <div className=\"flex flex-wrap justify-center gap-4 mb-12\">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >\n                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            className=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data[selectedCategory]?.map((skill, index) => (
              <motion.div
                key={index}
                className=\"bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 hover:border-[#00d9ff]/50 transition-all duration-300\"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className=\"text-white font-semibold mb-3 text-center\">{skill.name}</div>
                <div className=\"w-full bg-white/10 rounded-full h-3 mb-2\">
                  <motion.div
                    className=\"bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] h-3 rounded-full\"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className=\"text-sm text-gray-400 text-center font-semibold\">{skill.level}%</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3D;
