import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, BarChart, Code, Network, Shield } from 'lucide-react';

const Certifications = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Brain: Brain,
    BarChart: BarChart,
    Code: Code,
    Network: Network,
    Shield: Shield,
  };

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a1a2e]">
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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6bcf7f] to-[#00d9ff] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((cert, index) => {
              const IconComponent = iconMap[cert.icon];
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-gradient-to-br from-[#6bcf7f]/10 to-[#00d9ff]/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#6bcf7f]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#6bcf7f] to-[#00d9ff] p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-[#6bcf7f] text-sm font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-xs">{cert.date}</p>
                    </div>
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

export default Certifications;
