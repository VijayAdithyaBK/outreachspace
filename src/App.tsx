import React from 'react';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Hero />
      <EventsSection />
    </Layout>
  );
}