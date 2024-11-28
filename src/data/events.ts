import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: '1',
    title: 'Space Tech Summit 2024',
    description: 'Join industry leaders in exploring the future of space technology',
    date: new Date('2024-04-15'),
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    location: 'Virtual Event',
    category: 'upcoming'
  },
  {
    id: '2',
    title: 'Asteroid Mining Conference',
    description: 'Discover the latest developments in asteroid mining technology',
    date: new Date('2024-03-28'),
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    location: 'Houston Space Center',
    category: 'live'
  },
  {
    id: '3',
    title: 'Mars Colony Symposium',
    description: 'A retrospective look at the challenges of establishing Mars colonies',
    date: new Date('2024-02-20'),
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    location: 'Space Academy',
    category: 'past'
  }
];