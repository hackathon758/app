import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 3D Skill Card
function SkillCard({ position, skill, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + index) * 0.1;
    meshRef.current.rotation.y = Math.sin(t * 0.3 + index) * 0.1;
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox
        args={[1.5, 1.8, 0.2]}
        radius={0.1}
        smoothness={4}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color={hovered ? '#00d9ff' : '#1a1a2e'}
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>
      <Text
        position={[0, 0.3, 0.15]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.2}
      >
        {skill.name}
      </Text>
      <Text
        position={[0, -0.1, 0.15]}
        fontSize={0.15}
        color="#00d9ff"
        anchorX="center"
        anchorY="middle"
      >
        {skill.level}%
      </Text>
    </group>
  );
}

// 3D Skills Scene
function SkillsScene({ skills }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <SkillCard
            key={index}
            position={[x, 0, z]}
            skill={skill}
            index={index}
          />
        );
      })}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

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
    <section id="skills" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Interactive 3D visualization of my technical skills
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* 3D Skills Visualization */}
          <div className="h-[600px] bg-gradient-to-br from-[#0f172a]/50 to-[#1a1a2e]/50 rounded-2xl border border-white/10 overflow-hidden">
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <SkillsScene skills={data[selectedCategory] || []} />
            </Canvas>
          </div>

          {/* Skills List */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data[selectedCategory]?.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-white font-semibold mb-2">{skill.name}</div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-[#00d9ff] to-[#ff6b6b] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{skill.level}%</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3D;
