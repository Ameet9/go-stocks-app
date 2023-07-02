'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MobileView from './components/MobileView';
import HomePage from './components/HomePage';

export default function Home() {
  let mob = true;
  if (typeof window !== 'undefined') {
    mob = window.innerWidth <= 768;
  }
  const [screenValidation, setScreen] = useState(mob);

  useEffect(() => {
    const handleResize = () => {
      let isMobile = false;
      if (typeof window !== 'undefined') {
        isMobile = window.innerWidth <= 768;
      }
      setScreen(isMobile);
    };

    handleResize(); // Run the initial check

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }
    };
  }, []);
  return (
    <>
      {screenValidation ? (
        <MobileView></MobileView>
      ) : (
        <HomePage></HomePage>
      )}
    </>
  )
}
