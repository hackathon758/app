import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  const roles = [
    'Full Stack Web Developer',
    'Software Developer',
    'Software Engineer',
    'Data Analyst',
    'Data Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <footer className="bg-gradient-to-b from-[#1a1a2e] to-[#0f172a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] bg-clip-text text-transparent">
                {data.name}
              </span>
            </h3>
            <p className="text-gray-400 min-h-[1.5rem] flex items-center">
              <span>{displayedText}</span>
              <span className="animate-blink-footer ml-1">|</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">{data.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-[#00d9ff] transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-[#00d9ff] transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-[#00d9ff] transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-[#00d9ff] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-[#0077b5] hover:to-[#005885] hover:border-transparent transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-[#333] hover:to-[#000] hover:border-transparent transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-[#00d9ff] hover:to-[#0099cc] hover:border-transparent transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="mt-4 space-y-1">
              <a
                href={`mailto:${data.email}`}
                className="block text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
              >
                {data.email}
              </a>
              <a
                href={`tel:${data.phone}`}
                className="block text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
              >
                {data.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed & Developed with passion
          </p>
        </div>
      </div>

      {/* CSS for typing animation */}
      <style jsx>{`
        @keyframes blink-footer {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-blink-footer {
          animation: blink-footer 1s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
