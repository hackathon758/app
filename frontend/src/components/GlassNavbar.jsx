import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const GlassNavbar = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-morphism shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {data?.name || 'Portfolio'}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white glass-morphism rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-64 z-40 glass-morphism shadow-2xl"
          >
            <div className="flex flex-col p-8 pt-24 gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-semibold rounded-full shadow-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .glass-morphism {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default GlassNavbar;
