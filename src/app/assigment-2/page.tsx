"use client";
import React, { useEffect, useState } from 'react';
import Typewriter from '@/components/Typewriter';
import ImageViewer from '@/components/ImageViewer';

type pageProps = {
    
};



const page:React.FC<pageProps> = () => {

    const [frame, setFrame] = useState(1);
    
    useEffect(() => {
        setTimeout(() => {
            setFrame(2);
        }, 5000);
    }, []);
    
    return <div className='bg-black w-screen h-screen flex items-center justify-center text-white text-2xl'>
        {frame == 1 ? <Typewriter text="This is for us." delay={70}/> : <ImageViewer/> }
    </div>
}
export default page;