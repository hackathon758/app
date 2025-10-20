import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// Animated sphere component
function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.cos(t / 4) / 8;
      meshRef.current.rotation.y = Math.sin(t / 4) / 8;
      meshRef.current.rotation.z = Math.sin(t / 1.5) / 20;
      meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00d9ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

// Floating particles
function Particles({ count = 1000 }) {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.001 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        t = particle.t += speed / 2;
        const a = Math.cos(t) + Math.sin(t * 1) / 10;
        const b = Math.sin(t) + Math.cos(t * 2) / 10;
        const s = Math.cos(t);
        
        const dummy = meshRef.current.children[i];
        if (dummy) {
          dummy.position.set(
            (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
            (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
            (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
          );
          dummy.scale.set(Math.abs(s) * 0.5, Math.abs(s) * 0.5, Math.abs(s) * 0.5);
        }
      });
    }
  });

  return (
    <group ref={meshRef}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <dodecahedronGeometry args={[0.1, 0]} />
          <meshPhongMaterial color="#00d9ff" />
        </mesh>
      ))}
    </group>
  );
}

const Hero3D = ({ data }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a1a2e] to-[#16213e]">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#ff6b6b" intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00d9ff" intensity={0.5} />
          <Particles count={800} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              {data.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d9ff] via-[#ff6b6b] to-[#ffd93d] bg-clip-text text-transparent mb-6">
                {data.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {data.tagline}
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero3D;
