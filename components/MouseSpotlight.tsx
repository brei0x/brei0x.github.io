'use client';

import {useEffect, useState} from 'react';

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({x: ev.clientX, y: ev.clientY});
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45,212,191,0.10), transparent 40%)`,
      }}
    />
  );
}
