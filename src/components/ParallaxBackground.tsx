import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [0.5, 0]);

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div 
        style={{ y: y1, opacity }} 
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 overflow-hidden opacity-30"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + 'vh',
              left: Math.random() * 100 + 'vw',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}