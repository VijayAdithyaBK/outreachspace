import React from 'react';
import { ParallaxBackground } from './ParallaxBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative">
      <ParallaxBackground />
      {children}
    </div>
  );
}