'use client';
import React, { useEffect, useState } from 'react';
import Typewriter from './Typewriter';
import Image from 'next/image'
type ImageViewerProps = {
    
};

const ImageViewer: React.FC<ImageViewerProps> = () => {
    const [count, setCount] = useState(1);
    const [css, setCss] = useState("translate-x-96 opacity-0");
    const [frame, setFrame] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
        
    useEffect(() => {
        // Apply transition effect when count changes
        if (count < 11) {
            setTimeout(() => {
                setCss("translate-x-0 opacity-100");
            }, 100);

            // Clear the transition effect after 100ms
            const timerId = setTimeout(() => {
                setCss("translate-x-96 opacity-0");
            }, 4900);

            return () => clearTimeout(timerId);
        } else if (count === 11) {
            // Reset the image count to 1 and set frame to 2 after 10 images
            setCount(1);
            setFrame(2);
        }
    }, [count]);

    useEffect(() => {
        // Play the song when the component mounts
        const audio = new Audio('song.mp3');
        audio.play()
          .then(() => console.log('Audio playback started'))
          .catch(error => console.error('Error playing audio:', error));
    
        // Clean up the audio object on component unmount
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);
    

    return (
        <>
            {frame === 1 ? (
                // <img
                //     className={`transition-transform transform duration-500 ease-in-out ${css}`}
                //     src={`polaroid-${count}.png`}
                //     alt={`Image ${count}`}
                // />
                <Image className={`transition-transform transform duration-500 ease-in-out ${css}`} src={`/polaroid-${count}.png`} alt={`Image ${count}`} width={400} height={500}/>
            ) : (
                <Typewriter text="Thank you for everything babe, I love you sooo much! Happy 2nd Anniversary, I want you, and just you." delay={30}/>
                
            )}
        </>
    );
};

export default ImageViewer;
