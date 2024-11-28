import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-[16/10] relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
        className="mt-6"
      >
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Calendar size={16} />
          <time>{event.date.toLocaleDateString()}</time>
          <span className="mx-2">•</span>
          <span>{event.location}</span>
        </div>
        
        <h3 className="text-4xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-400">
          {event.description}
        </p>
      </motion.div>
    </motion.article>
  );
}