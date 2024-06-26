"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    if (currentText == "This is for you.") {
        setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);}, 100);
    };
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="inline-block text-white text-2xl">
      {currentText}
    </span>
  );
};


export default Typewriter;