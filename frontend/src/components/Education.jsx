import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a]">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ff8c42] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Academic foundation and achievements
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b6b] to-[#ff8c42]"></div>

            {data.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-auto md:right-[-1.5rem] md:top-8 w-4 h-4 bg-gradient-to-br from-[#ff6b6b] to-[#ff8c42] rounded-full border-4 border-[#0f172a]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b] to-[#ff8c42] rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 bg-gradient-to-br from-[#ff6b6b]/10 to-[#ff8c42]/10 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-xl p-6 hover:border-[#ff6b6b]/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-[#ff6b6b] to-[#ff8c42] p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#ff6b6b] font-semibold mb-2">{edu.field}</p>
                    </div>
                  </div>
                  
                  <p className="text-white font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 bg-[#ff6b6b]/20 rounded-full text-[#ff6b6b]">
                      {edu.duration}
                    </span>
                    <span className="px-3 py-1 bg-[#ff8c42]/20 rounded-full text-[#ff8c42]">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-gray-400 text-sm font-semibold mb-2">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
