import { motion } from 'framer-motion';

interface TypographyProps {
  children: string;
  className?: string;
  delay?: number;
}

export function Typography({ children, className = '', delay = 0 }: TypographyProps) {
  const letters = children.split('');
  
  return (
    <div className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.215, 0.610, 0.355, 1.000]
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
}