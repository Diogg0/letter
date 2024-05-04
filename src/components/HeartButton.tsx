import React from 'react';

type HeartButtonProps = {
    onClick: () => void;
    text: string;
};



const HeartButton:React.FC<HeartButtonProps> = ({onClick, text}) => {
    const [heart, setHeart] = React.useState("rounded-full bg-black text-white flex items-center justify-center focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-red-400");
    return <button onClick={onClick} 
    className={heart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-40 h-40"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.519a5.479 5.479 0 00-7.76 7.76L12 20.279l7.76-7.76a5.479 5.479 0 10-7.76-7.76z"
        />
      </svg>
      <span className='text-white text-2xl'>{text}</span>
    </button> 
}
export default HeartButton;