"use client";
import React from 'react';
import Typewriter from '@/components/Typewriter';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type pageProps = {
  
};
 var text = "I love you soooo much Hriddhisha, so soo sooo much, I've fallen so deep for you, I never thought I could. You're not the girl out of my dreams, you're a girl out of this world, I couldn't even imagine having someone like, being loved by someone like you. Your eyes are hypnotic, your smile is mesmerizing, your laugh melts my heart, your 'nais' are so cutee pigal jaata hoon. I care so much about you, you being happy means the world to me, when I see you cry, my heart just shatters. I want to be there for you everyday, every minute, every second. I don't want to let you go ever, I just want you, all of you. I want to be with you during your downs, I want to be with you during your ups. You are the best thing that has happened to me, you are the reason I want to wake up early in the morning just so I could meet you, you are the reason I want to work so hard so I can live with you in the future and keep you happy, you are the reason I'm the happiest I've ever been. You are so mature, you talk everything out with me, I never feel unheard, you listen to me, you always care for me, I still remember that day when I didn't come for the first 2 lectures you were worried sick, that was so foreign for me because nobody ever did this for me when I didn't come to college, I was about to cry when I saw your texts and calls. During the concert you were the only one who called and texted me (I know you asked Atharva and Anshuman to text me), I want to do so much for you, you mean the entire world to me, you are my world. Sapno ki raani bhi nahi hai tu, sapno ki devi hai mere liye, I can't live without you, I can't imagine a life without, every second without you is painful, I smell your perfume in your absence, I hear your laugh in your absence, I see your beautiful eyes jaha mein jau, literally prettier than the shiniest of diamonds. Your hugs are the greatest, when I hug you I feel at home and I feel so comfortable, when you slept on my lap I just wanted to stay there hamesha, when you hugged me tightly from the back on the scooty I was smiling so widely you couldn't see me, holding your hand makes me so happy, I feel so honoured to be able to hold 'your' hand. I don't flex that I have a 'girlfriend', I always flex about having 'Hriddhisha', having you means so much to me. The flowers are so so soo pretty, I am still so thankful for those flowers, I just didn't believe my eyes when I saw them, ki you pulled it out of the bouquet for me, in front of everyone. You made me feel so secured after I asked you if you're okay with everyone knowing, to the point that class ke saamne shaadi ke baare mein boldiya. I love our time together, the first date still feels unreal, a movie with you, pizza with you, you and the ocean, although sirf tujhe dekh paa raha tha since you're so captivating. I wanted to hold your hand during the movie but I was too nervous to do it, but when you did it by yourself I was literally smiling so widely (isiliye meine woh bache ka scene nahi dekha), when I hugged you at the end of the day, I didn't want to let you go, I just wanted to hold you and stay there hameshaaa. And that song, that song made me want you more, I never thought a song would bring this much happiness to me kabhi, I always listen to that song. You are my everything, my sunshine, my moonlight in the darkest night, the whitest fluffiest cloud in a blue sky, the colourful blooming flower standing out in a field of flowers, the prettiest mountain covered in snow out of all the mountains in the range, the calming river with clear water in the middle of a forest, the brightest star out of gazillion stars in the sky, the perfect snowflake during snowfall. I love you sooo sooo much Hriddhisha, literally so much. I love you babe."





const Page:React.FC<pageProps> = () => {

  
  const [heart, setHeart] = React.useState("rounded-full bg-black text-white flex items-center justify-center focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-red-400");
  const [frame, setFrame] = React.useState(1);

  const router = useRouter();

  const onClick1 = () => {
    setHeart("rounded-full bg-black text-white flex items-center justify-center focus:outline-none transition-all duration-700 ease-in-out translate-x-96 opacity-0");
    setTimeout(() => {
    setFrame(2);
    }, 800);

    setTimeout(() => {
      setFrame(3);
      }, 3500);
  };

  const onClick2 = () => {
    setHeart("rounded-full bg-black text-white flex items-center justify-center focus:outline-none transition-all duration-700 ease-in-out translate-x-96 opacity-0");
    setTimeout(() => {
    router.push('/assigment-2')
    }, 800);
  };

  const onClick3 = () => {
    setHeart("rounded-full bg-black text-white flex items-center justify-center focus:outline-none transition-all duration-700 ease-in-out translate-x-96 opacity-0");
    setTimeout(() => {
    router.push('/assignment-3')
    }, 800);
  }

  return<>
  <div className="bg-black h-screen text-white flex w-screen items-center text-left text-2xl font-medium justify-center overflow-auto">
  {frame==1 ? 
  <div className='flex space-x-20 sm:space-x-40 h-full w-full items-center justify-center'> 
    <button onClick={onClick1} 
    className={`flex flex-col ${heart}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="sm:w-40 sm:h-40 w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.519a5.479 5.479 0 00-7.76 7.76L12 20.279l7.76-7.76a5.479 5.479 0 10-7.76-7.76z"
        />
      </svg>
      <span className='text-white text-2xl'>Assignment-1</span>
    </button> 

    <button onClick={onClick2} 
    className={`flex flex-col ${heart}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="sm:w-40 sm:h-40 w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.519a5.479 5.479 0 00-7.76 7.76L12 20.279l7.76-7.76a5.479 5.479 0 10-7.76-7.76z"
        />
      </svg>
      <span className='text-white text-2xl'>Assignment-2</span>
    </button> 

    <button onClick={onClick3} 
    className={`flex flex-col ${heart}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="sm:w-40 sm:h-40 w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.519a5.479 5.479 0 00-7.76 7.76L12 20.279l7.76-7.76a5.479 5.479 0 10-7.76-7.76z"
        />
      </svg>
      <span className='text-white text-2xl'>Assignment-3</span>
    </button> 
  </div>
  : frame==2 ? <Typewriter text="This is for you." delay={50} /> : frame==3 ? <Typewriter text={text} delay={50} /> : <>hi</> }
  <></> </div>
</>
}
export default Page;