import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from './Typography';

export function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 grid grid-cols-6 gap-1 opacity-5 pointer-events-none"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-screen border-r border-white/10" />
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <Typography className="text-[12vw] md:text-[8vw] font-bold text-white leading-none tracking-tighter mb-8">
            OUTREACH
          </Typography>
          <Typography delay={0.5} className="text-[12vw] md:text-[8vw] font-bold text-white leading-none tracking-tighter">
            SPACE
          </Typography>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-12 max-w-xl"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Where innovation meets exploration. Join us in shaping the future of space technology through immersive events and groundbreaking conferences.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}