'use client';
import Typewriter from '@/components/Typewriter';
// pages/index.tsx
import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answer, setAnswer] = useState(0); // Set the answer to 0 initially

  const [count, setCount] = useState(1);
  const [increment, setIncrement] = useState(1); // Initial increment value
  const [speed, setSpeed] = useState(1000); // Initial speed in milliseconds
  const [shouldStart, setShouldStart] = useState(false); // Flag for starting the effect

  useEffect(() => {
    if (shouldStart){
        const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + increment);

        // Update increment based on count thresholds
        setIncrement(
            count >= 1000000 ? 10124010 :
            count >= 50000 ? 5012500 :
            count >= 20000 ? 10250 :
            count >= 10000 ? 5125 :
            count >= 2000 ? 1234 :
              count >= 500 ? 256 :
                count >= 200 ? 69 :
                  count >= 100 ? 14 :
                    count >= 50 ? 7 :
                      count >= 5 ? 2 : increment // Default increment
          );

        // Adjust speed based on current increment
        setSpeed((prevSpeed) => Math.max(100, prevSpeed * 0.8)); // Minimum speed of 100ms
        }, speed);


        return () => clearInterval(intervalId);
    } 
  }, [speed, shouldStart, count]); // Dependency array

  const handleAnswerClick = () => {
    
    setAnswer(1); // Set the answer to true on button click
    setTimeout(() => {
    setShouldStart(true); // Start the counter effect
    setAnswer(2);
    }, 3000);
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true); // Set submitted state to true on form submit
  };

  return (
    <>
    
        <div className="h-screen w-screen bg-black text-white text-2xl flex flex-col items-center justify-center">
    {answer === 0 &&    
    <>
        <label className="font-bold">How much does Ratna love you? Enter a number: </label>
        <form className="flex flex-col justify-center items-center py-10" onSubmit={handleFormSubmit}>
            <input className="text-black" type="number" />
            <button className="my-5 py-2 w-1/2 text-white font-semibold rounded-3xl bg-pink-500" type="submit">
            Submit
            </button>
        </form>
        {isSubmitted && <p className="text-red-500 mt-5">Incorrect</p>}

        <button onClick={handleAnswerClick}>Click here for answer.</button>
    </>
    }
    {answer === 1 && <p><Typewriter text="This is how much he loves you." delay={50}></Typewriter></p>}
    {answer === 2 && <span>{count}</span>}
        </div>
    

    
    </>
  );
};

export default HomePage;

