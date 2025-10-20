import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Sparkles } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a1a2e] relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">LET'S CONNECT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Let's collaborate on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    Let's talk about your project
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">24h</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-xs text-gray-400">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details with enhanced design */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${data.email}`}
                  className="group relative flex items-center gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                    <p className="text-white font-semibold">{data.email}</p>
                  </div>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.a>

                <motion.a
                  href={`tel:${data.phone}`}
                  className="group relative flex items-center gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                    <p className="text-white font-semibold">{data.phone}</p>
                  </div>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Location</p>
                    <p className="text-white font-semibold">{data.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links with enhanced design */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0077b5] to-[#005885] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <Linkedin className="w-6 h-6 text-white relative z-10 mx-auto" />
                </motion.a>
                <motion.a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#333] to-[#000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <Github className="w-6 h-6 text-white relative z-10 mx-auto" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form with enhanced design */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <form onSubmit={handleSubmit} className="relative space-y-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold mb-2">
                      <span className="text-cyan-400">•</span>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold mb-2">
                      <span className="text-cyan-400">•</span>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold mb-2">
                      <span className="text-cyan-400">•</span>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="relative w-full group overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
