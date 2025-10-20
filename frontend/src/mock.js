// Mock data for Ashrith's Portfolio

export const mockData = {
  personalInfo: {
    name: "Ashrith Velisoju",
    title: "Full Stack Developer",
    tagline: "Crafting AI-Driven Solutions & Secure Applications",
    email: "ashrith.velisoju@gmail.com",
    phone: "+917995739285",
    location: "Hyderabad, Telangana",
    linkedin: "https://www.linkedin.com/in/ashrith-velisoju/",
    github: "https://github.com/ashrithvelisoju",
    bio: "Full Stack Developer with expertise in AI-driven security solutions and data analytics. Proven ability to create vulnerability detection systems, reducing enterprise security risks by 85%. Award-winning problem solver who delivers user-focused solutions and drives measurable business impact through innovative technology implementation.",
    resumeUrl: "/resume.pdf"
  },

  skills: {
    programmingLanguages: [
      { name: "JavaScript", level: 90, icon: "Code2" },
      { name: "Python", level: 85, icon: "FileCode" },
      { name: "Java", level: 80, icon: "Coffee" }
    ],
    frontend: [
      { name: "React.js", level: 90, icon: "Layout" },
      { name: "Next.js", level: 85, icon: "Layers" },
      { name: "HTML5/CSS3", level: 95, icon: "Code" }
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "RESTful APIs", level: 90, icon: "Network" },
      { name: "MongoDB", level: 85, icon: "Database" },
      { name: "MySQL", level: 82, icon: "Database" }
    ],
    aiMl: [
      { name: "Machine Learning", level: 80, icon: "Brain" },
      { name: "Prompt Engineering", level: 85, icon: "MessageSquare" },
      { name: "AI Integration", level: 88, icon: "Zap" }
    ],
    tools: [
      { name: "Git", level: 90, icon: "GitBranch" },
      { name: "Agile Development", level: 85, icon: "Users" },
      { name: "Google Analytics", level: 80, icon: "BarChart" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Cross-Language Code Vulnerability Analyzer",
      shortDesc: "AI-powered security vulnerability detection system",
      description: "Developed a unified vulnerability detection system for 5+ programming languages, identifying 95% of security vulnerabilities. Implemented a machine learning-powered pattern recognition system with taint analysis, creating a visualization dashboard and automated remediation engine that reduced security blind spots by 85%.",
      technologies: ["Python", "Java", "JavaScript", "Machine Learning", "AST Parsers"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2MDg4ODc3MXww&ixlib=rb-4.1.0&q=85",
      link: "#",
      github: "#",
      highlights: [
        "95% vulnerability detection rate",
        "Supports 5+ programming languages",
        "85% reduction in security blind spots",
        "Automated remediation engine"
      ]
    },
    {
      id: 2,
      title: "Interactive Health Data Visualization Dashboard",
      shortDesc: "Real-time analytics dashboard for healthcare events",
      description: "Developed a responsive event analytics dashboard using React.js for real-time data visualization for 50,000+ event participants. Implemented a Java Spring Boot backend for ensemble algorithms. Built a MySQL database integration with optimized SQL queries for efficient data handling and processing.",
      technologies: ["React.js", "Java Spring Boot", "PostgreSQL", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2MDg4ODc3MXww&ixlib=rb-4.1.0&q=85",
      link: "#",
      github: "#",
      highlights: [
        "50,000+ active participants",
        "Real-time data visualization",
        "Optimized SQL queries",
        "Java Spring Boot backend"
      ]
    },
    {
      id: 3,
      title: "E-commerce Product Clustering Interface",
      shortDesc: "AI-powered networking platform with smart matching",
      description: "Created a full-stack webinar networking application. Implemented participant clustering algorithms for connecting attendees based on interests, resulting in 85% improved networking engagement. Designed a relational MySQL database schema with advanced graph algorithms for real-time participant matching, achieving sub-100ms response times for 800+ simultaneous users.",
      technologies: ["React.js", "Java", "MySQL", "Graph Algorithms", "Clustering ML"],
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2MDg4ODc3MXww&ixlib=rb-4.1.0&q=85",
      link: "#",
      github: "#",
      highlights: [
        "85% improved networking engagement",
        "Sub-100ms response times",
        "800+ simultaneous users",
        "AI-powered clustering algorithms"
      ]
    },
    {
      id: 4,
      title: "Agricultural Health Monitoring Platform",
      shortDesc: "Scalable platform for agricultural disease detection",
      description: "Built a scalable agricultural conference platform supporting 15,000+ professionals. Features include event scheduling, speaker management, and real-time disease detection workshops. Implemented a robust PostgreSQL database architecture with RESTful APIs and utilized efficient algorithms for image processing workflows, resolving 95+ platform bugs.",
      technologies: ["React.js", "PostgreSQL", "RESTful APIs", "Image Processing"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc2MDg5MjkxM3ww&ixlib=rb-4.1.0&q=85",
      link: "#",
      github: "#",
      highlights: [
        "15,000+ professionals supported",
        "Real-time disease detection",
        "95+ bugs resolved",
        "Robust PostgreSQL architecture"
      ]
    },
    {
      id: 5,
      title: "DNA Cryptographic Security System",
      shortDesc: "Enterprise-grade encryption using genetic algorithms",
      description: "Developed an enterprise-grade event security platform using React.js interface encryption, protecting sensitive event data for 25,000+ participants. Implemented a comprehensive MongoDB database security framework with algorithmic optimization, ensuring GDPR compliance and maintaining 99.8% uptime.",
      technologies: ["React.js", "MongoDB", "Encryption", "Genetic Algorithms"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc2MDg5MjkxM3ww&ixlib=rb-4.1.0&q=85",
      link: "#",
      github: "#",
      highlights: [
        "25,000+ participants protected",
        "99.8% uptime",
        "GDPR compliant",
        "Genetic algorithm encryption"
      ]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "HackSavvy25 - 3rd Position Winner",
      description: "24-Hour National Level Hackathon",
      details: "Demonstrated strong problem-solving skills and collaborative development. Showcased technical expertise in rapid application development.",
      icon: "Trophy",
      date: "2025"
    },
    {
      id: 2,
      title: "AI Hack Days - Finalist",
      description: "National Level AI Innovation Competition",
      details: "Selected as finalist in AI Hack Days. Showcased innovative technical solutions and effective communication skills in team-based development projects.",
      icon: "Award",
      date: "2024"
    },
    {
      id: 3,
      title: "Smart India Hackathon (SIH) - Finalist",
      description: "India's Largest Hackathon Initiative",
      details: "Selected as finalist in Smart India Hackathon. Demonstrated excellence in solving real-world problems through technology innovation.",
      icon: "Medal",
      date: "2024"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Google AI Essentials",
      issuer: "Google",
      icon: "Brain",
      date: "2024"
    },
    {
      id: 2,
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      icon: "BarChart",
      date: "2024"
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Apna College",
      icon: "Code",
      date: "2024"
    },
    {
      id: 4,
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      icon: "Network",
      date: "2023"
    },
    {
      id: 5,
      name: "Cybersecurity Essentials",
      issuer: "Cisco",
      icon: "Shield",
      date: "2023"
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Mahatma Gandhi Institute of Technology",
      location: "Hyderabad, India",
      duration: "Expected July 2026",
      gpa: "7.64/10.0",
      coursework: ["Data Structures", "Algorithms", "Database Management", "Software Engineering", "Machine Learning", "Computer Networks"]
    },
    {
      id: 2,
      degree: "Intermediate (12th)",
      field: "Science",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      duration: "May 2022",
      gpa: "81%",
      coursework: []
    },
    {
      id: 3,
      degree: "SSC (10th)",
      field: "Secondary Education",
      institution: "Sri Chaitanya Techno School",
      location: "Hyderabad, India",
      duration: "May 2020",
      gpa: "9.8/10.0",
      coursework: []
    }
  ],

  stats: [
    { label: "Projects Completed", value: "15+", icon: "FolderOpen" },
    { label: "Lines of Code", value: "50K+", icon: "Code2" },
    { label: "Certifications", value: "5+", icon: "Award" },
    { label: "Hackathon Wins", value: "3", icon: "Trophy" }
  ]
};
