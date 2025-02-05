import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className='relative container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-28 w-full dark:bg-gray-900'>
      {/* Content */}
      <div className='flex flex-1 flex-col items-center lg:items-start'>
        <h2 className='text-template-blue text-3xl md:text-4xl lg:text-5xl dark:text-template-purple text-center lg:text-left mb-6'>
          Welcome to Your Next Adventure
        </h2>
        <p className='text-template-grey text-lg text-center lg:text-left mb-6'>
          Explore the best destinations with our tailored travel plans. Start your journey with us today.
        </p>
        <div className='flex justify-center flex-wrap gap-6'>
          <a
            href='https://github.com/katariaNandini'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button 
              onMouseOver={() => setHover(true)} 
              onMouseLeave={() => setHover(false)} 
              type='button' 
              className='btn btn-purple flex items-center gap-4 hover:border-cyan-400 hover:border-[1px]'
            >
              Explore GitHub
              <Image
                src={hover ? '/img/logo-github-black.svg' : '/img/logo-github.svg'}
                width={30}
                height={30}
                alt='GitHub Logo'
              />
            </button>
          </a>
        </div>
      </div>
      {/* Image */}
      <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
        <img
          src='./img/hero-bg.png'
          alt='Hero Background'
          className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
        />
      </div>
      {/* Rounded Rectangle */}
      <div className='hidden lg:block overflow-hidden bg-template-purple rounded-full absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-0'></div>
    </section>
  );
};

export default Hero;
