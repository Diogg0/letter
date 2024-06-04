import React, { useState, useEffect, useRef } from 'react';

interface FlowerProps {
  size?: number; // Initial size of the flower
  color?: string; // Color of the flower
}

const Flower: React.FC<FlowerProps> = ({ size = 20, color = 'pink' }) => {
  const [flowerSize, setFlowerSize] = useState(size);
  const animationRef: React.MutableRefObject<number | null> = useRef(null);

  useEffect(() => {
    const animate = () => {
        let isGrowing = true; // Initially set to true for growth
        animationRef.current = requestAnimationFrame(() => {
          if (isGrowing) {
            setFlowerSize((prevSize) => prevSize + 1);
            if (flowerSize >= size * 2) {
              isGrowing = false;
            }
          } else {
            setFlowerSize((prevSize) => prevSize - 1);
            if (flowerSize <= size) {
              isGrowing = true; // Reset to true for shrinking to initial size
            }
          }
      
          // Stop the animation after one cycle (optional)
          if (flowerSize === size && !isGrowing) { // Check after shrinking to initial size
            cancelAnimationFrame(animationRef.current!);
          } else {
            animate(); // Call animate again for the next frame (if not stopped)
          }
        });
      };
      

    animate();

    // Cleanup function to cancel animation on unmount
    return () => cancelAnimationFrame(animationRef.current!);
  }, []); // Empty dependency array ensures useEffect runs only once

  const flowerStyle = {
    width: `${flowerSize}px`,
    height: `${flowerSize}px`,
    backgroundColor: color,
    borderRadius: '50%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',
  };

  return <div style={flowerStyle as React.CSSProperties} />;
};

export default Flower;
