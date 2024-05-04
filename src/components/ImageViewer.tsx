'use client';
import React, { useEffect, useState } from 'react';

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
        if (count < 11) {
            return () => clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        // Apply transition effect when count changes
        if(count < 11) {
        setTimeout(() => {
            setCss("translate-x-0 opacity-100");
        }, 100);

        // Clear the transition effect after 100ms
        const timerId = setTimeout(() => {
            setCss("translate-x-96 opacity-0");
        }, 4900);

        return () => clearTimeout(timerId);
    }
    }, [count]);


    useEffect(() => {
        // Reset the image count to 1 after 10 images
        if (count === 11) {
            setFrame(2);
        }
    }, []);
    return <>
    {frame == 1 ? <img
            className={`transition-transform transform duration-500 ease-in-out ${css}`}
            src={`polaroid-${count}.png`}
            alt={`Image ${count}`}
        /> : <p className = "text-white text-2xl">Thank you for everything babe, I love you sooo much! Happy 2nd Anniversary</p> }
    
    </>
};

export default ImageViewer;
