export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  location: string;
  category: 'upcoming' | 'live' | 'past';
}