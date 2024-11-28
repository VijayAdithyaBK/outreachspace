import { motion, useScroll, useTransform } from 'framer-motion';
import { events } from '../data/events';
import { EventCard } from './EventCard';
import { Typography } from './Typography';

export function EventsSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const upcomingEvents = events.filter(event => event.category === 'upcoming');
  const liveEvents = events.filter(event => event.category === 'live');
  const pastEvents = events.filter(event => event.category === 'past');

  return (
    <motion.div 
      style={{ y }}
      className="bg-[#0A0A0A] py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {liveEvents.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography className="text-7xl md:text-8xl font-bold text-white mb-16 tracking-tighter">
                LIVE NOW
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {liveEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </motion.section>
          )}

          {upcomingEvents.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography className="text-7xl md:text-8xl font-bold text-white mb-16 tracking-tighter">
                UPCOMING
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </motion.section>
          )}

          {pastEvents.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography className="text-7xl md:text-8xl font-bold text-white mb-16 tracking-tighter">
                PAST EVENTS
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {pastEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </motion.div>
  );
}